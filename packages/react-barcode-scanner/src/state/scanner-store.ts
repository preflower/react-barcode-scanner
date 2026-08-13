import { createAtom, type Atom } from '../hooks/use-atom.js'

export interface ScannerStore {
  readonly stream: Atom<MediaStream | undefined>
  readonly torchOn: Atom<boolean | undefined>
  readonly torchSupported: Atom<boolean>
  readonly torchError: Atom<Error | undefined>
  clearStream: (stream: MediaStream) => void
  initializeTorch: (torch: boolean) => void
  setStream: (stream: MediaStream | undefined) => void
  setTorchOn: (torch: boolean) => void
  waitForTorchIdle: () => Promise<void>
}

const toError = (error: unknown): Error => {
  return error instanceof Error ? error : new Error(String(error))
}

export function createScannerStore (initialTorchOn?: boolean): ScannerStore {
  const stream = createAtom<MediaStream | undefined>()
  const torchOn = createAtom<boolean | undefined>(initialTorchOn)
  const torchSupported = createAtom(false)
  const torchError = createAtom<Error | undefined>()

  let streamVersion = 0
  let operationVersion = 0
  let torchOperations = Promise.resolve()

  const getTrack = (): MediaStreamTrack | undefined => {
    return stream.get()?.getVideoTracks()[0]
  }

  const scheduleTorchOperation = (): void => {
    const track = getTrack()
    const requestedTorch = torchOn.get()
    const requestedStreamVersion = streamVersion
    const requestedOperationVersion = ++operationVersion

    if (requestedTorch === undefined || track == null || torchSupported.get() !== true) return

    torchOperations = torchOperations.then(async () => {
      const isCurrentOperation = (): boolean => {
        return requestedOperationVersion === operationVersion &&
          requestedStreamVersion === streamVersion &&
          getTrack() === track
      }

      if (!isCurrentOperation()) return

      try {
        await track.applyConstraints({
          advanced: [{ torch: requestedTorch }]
        })
      } catch (error) {
        if (isCurrentOperation()) {
          torchError.set(toError(error))
        }
      }
    })
  }

  const setStream = (nextStream: MediaStream | undefined): void => {
    if (stream.get() === nextStream) return

    streamVersion += 1
    operationVersion += 1
    // A new track is independent from an operation still settling on the old
    // track. Start a fresh queue and guard the old result with the versions.
    torchOperations = Promise.resolve()
    stream.set(nextStream)
    torchSupported.set(false)
    torchError.set(undefined)

    const track = nextStream?.getVideoTracks()[0]
    if (track == null || typeof track.getCapabilities !== 'function') return

    try {
      const capabilities = track.getCapabilities()
      const supported = capabilities.torch !== undefined
      torchSupported.set(supported)
      if (supported) scheduleTorchOperation()
    } catch (error) {
      torchError.set(toError(error))
    }
  }

  const clearStream = (currentStream: MediaStream): void => {
    if (stream.get() === currentStream) {
      setStream(undefined)
    }
  }

  const setTorchOn = (torch: boolean): void => {
    if (torchOn.get() === torch) return

    torchOn.set(torch)
    torchError.set(undefined)
    scheduleTorchOperation()
  }

  const initializeTorch = (torch: boolean): void => {
    if (torchOn.get() === undefined) {
      setTorchOn(torch)
    }
  }

  return {
    stream,
    torchOn,
    torchSupported,
    torchError,
    clearStream,
    initializeTorch,
    setStream,
    setTorchOn,
    waitForTorchIdle: async () => await torchOperations
  }
}
