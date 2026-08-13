import { describe, expect, it, vi } from 'vite-plus/test'

import { createScannerStore } from '../src/state/scanner-store.js'

interface FakeTrackOptions {
  applyConstraints?: (constraints: MediaTrackConstraints) => Promise<void>
  torchSupported?: boolean
}

const createTrack = ({
  applyConstraints = () => Promise.resolve(),
  torchSupported = true
}: FakeTrackOptions = {}): MediaStreamTrack => {
  return {
    applyConstraints,
    getCapabilities: () => ({ torch: torchSupported })
  } as unknown as MediaStreamTrack
}

const createStream = (track: MediaStreamTrack, id: string): MediaStream => {
  return {
    id,
    getVideoTracks: () => [track]
  } as unknown as MediaStream
}

describe('scanner store', () => {
  it('isolates stream and torch state between stores', async () => {
    const applyA = vi.fn(() => Promise.resolve())
    const applyB = vi.fn(() => Promise.resolve())
    const streamA = createStream(createTrack({ applyConstraints: applyA }), 'a')
    const streamB = createStream(createTrack({ applyConstraints: applyB }), 'b')
    const storeA = createScannerStore(false)
    const storeB = createScannerStore(true)

    storeA.setStream(streamA)
    storeB.setStream(streamB)
    await Promise.all([storeA.waitForTorchIdle(), storeB.waitForTorchIdle()])

    expect(storeA.stream.get()).toBe(streamA)
    expect(storeB.stream.get()).toBe(streamB)
    expect(storeA.torchOn.get()).toBe(false)
    expect(storeB.torchOn.get()).toBe(true)
    expect(applyA).toHaveBeenCalledWith({ advanced: [{ torch: false }] })
    expect(applyB).toHaveBeenCalledWith({ advanced: [{ torch: true }] })
  })

  it('does not let an old stream cleanup clear a newer stream', () => {
    const store = createScannerStore()
    const oldStream = createStream(createTrack(), 'old')
    const newStream = createStream(createTrack(), 'new')

    store.setStream(oldStream)
    store.setStream(newStream)
    store.clearStream(oldStream)

    expect(store.stream.get()).toBe(newStream)
  })

  it('reads the initial torch value only once', () => {
    const store = createScannerStore(true)

    store.initializeTorch(false)

    expect(store.torchOn.get()).toBe(true)
  })

  it('does not repeat a hardware operation for the same state', async () => {
    const applyConstraints = vi.fn(() => Promise.resolve())
    const store = createScannerStore(false)
    store.setStream(createStream(createTrack({ applyConstraints }), 'stream'))
    await store.waitForTorchIdle()
    applyConstraints.mockClear()

    store.setTorchOn(true)
    store.setTorchOn(true)
    await store.waitForTorchIdle()

    expect(applyConstraints).toHaveBeenCalledTimes(1)
    expect(applyConstraints).toHaveBeenCalledWith({ advanced: [{ torch: true }] })
  })

  it('serializes and coalesces rapid torch changes to the latest state', async () => {
    let releaseFirstChange: (() => void) | undefined
    let shouldBlock = false
    const applied: boolean[] = []
    const applyConstraints = vi.fn(async (constraints: MediaTrackConstraints) => {
      const torch = constraints.advanced?.[0]?.torch ?? false
      applied.push(torch)
      if (shouldBlock) {
        shouldBlock = false
        await new Promise<void>(resolve => { releaseFirstChange = resolve })
      }
    })
    const store = createScannerStore(false)
    store.setStream(createStream(createTrack({ applyConstraints }), 'stream'))
    await store.waitForTorchIdle()
    applied.length = 0

    shouldBlock = true
    store.setTorchOn(true)
    await Promise.resolve()
    store.setTorchOn(false)
    store.setTorchOn(true)
    releaseFirstChange?.()
    await store.waitForTorchIdle()

    expect(applied).toEqual([true, true])
    expect(store.torchOn.get()).toBe(true)
  })

  it('ignores a delayed error from an old track', async () => {
    let rejectOldOperation: ((reason: Error) => void) | undefined
    const oldTrack = createTrack({
      applyConstraints: async () => await new Promise<void>((resolve, reject) => {
        rejectOldOperation = reject
      })
    })
    const newApplyConstraints = vi.fn(() => Promise.resolve())
    const newTrack = createTrack({ applyConstraints: newApplyConstraints })
    const oldStream = createStream(oldTrack, 'old')
    const newStream = createStream(newTrack, 'new')
    const store = createScannerStore(false)

    store.setStream(oldStream)
    await Promise.resolve()
    store.setStream(newStream)
    await store.waitForTorchIdle()

    expect(store.stream.get()).toBe(newStream)
    expect(newApplyConstraints).toHaveBeenCalledWith({ advanced: [{ torch: false }] })

    rejectOldOperation?.(new Error('old track failed'))
    await Promise.resolve()
    expect(store.torchError.get()).toBeUndefined()
  })
})
