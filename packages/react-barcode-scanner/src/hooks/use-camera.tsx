import { type RefObject, useEffect, useMemo, useRef, useState } from 'react'

import { useScannerStore } from '../context/barcode-scanner-context.js'
import { eventListener, timeout } from '../helper/utils.js'

const DEFAULT_CONSTRAINTS: MediaTrackConstraints = {
  width: { min: 640, ideal: 1280 },
  height: { min: 480, ideal: 720 },
  facingMode: {
    ideal: 'environment'
  },
  advanced: [
    { width: 1920, height: 1280 },
    { aspectRatio: 1.333 }
  ]
}

/**
 * Manage camera stream state.
 * @param ref a RefObject of HTMLVideoElement
 * @param trackConstraints a MediaTrackConstraints object, provide advanced options
 * @returns {object} { isCameraReady, error }
 *   - isCameraReady: Whether the camera is ready
 *   - error: Error object
 * @example
 * import { type RefObject } from 'react'
 * import { useCamera } from 'react-barcode-scanner'
 *
 * function App () {
 *   const ref = useRef<HTMLVideoElement>(null)
 *   const { isCameraReady, error } = useCamera(ref)
 *
 *   useEffect(() => {
 *     if (isCameraReady) {
 *       console.log('Camera is ready')
 *     }
 *   }, [isCameraReady])
 *
 *   return (
 *     <div>
 *       <video ref={ref} />
 *       {error && <p>{error.message}</p>}
 *     </div>
 *   )
 * }
 */
export function useCamera (ref: RefObject<HTMLVideoElement | null>, trackConstraints?: MediaTrackConstraints): { isCameraReady: boolean, error: Error | undefined } {
  const [isCameraReady, setIsCameraReady] = useState(false)
  const [error, setError] = useState<Error>()

  const store = useScannerStore()

  const trackConstraintsKey = JSON.stringify(trackConstraints)
  const trackConstraintsRef = useRef({ key: trackConstraintsKey, value: trackConstraints })
  if (trackConstraintsRef.current.key !== trackConstraintsKey) {
    trackConstraintsRef.current = { key: trackConstraintsKey, value: trackConstraints }
  }
  const stableTrackConstraints = trackConstraintsRef.current.value

  const constraints = useMemo<MediaStreamConstraints>(() => {
    const videoConstraints = Object.assign({}, DEFAULT_CONSTRAINTS, stableTrackConstraints)
    return {
      audio: false,
      video: videoConstraints
    }
  }, [stableTrackConstraints])

  useEffect(() => {
    let cancelled = false
    let stream: MediaStream | undefined
    const abortController = new AbortController()
    const target = ref.current

    setIsCameraReady(false)
    setError(undefined)

    if (target == null) return

    const open = async (): Promise<void> => {
      if (!window.isSecureContext) {
        throw new Error('[react-barcode-scanner]: getUserMedia requires a secure origin such as HTTPS')
      }

      if (navigator.mediaDevices?.getUserMedia == null) {
        throw new Error('[react-barcode-scanner]: navigator.mediaDevices.getUserMedia is not supported')
      }

      const nextStream = await navigator.mediaDevices.getUserMedia(constraints)
      if (cancelled) {
        nextStream.getTracks().forEach(track => { track.stop() })
        return
      }
      stream = nextStream

      target.srcObject = nextStream

      // According to: https://oberhofer.co/mediastreamtrack-and-its-capabilities/#queryingcapabilities
      // On some devices, getCapabilities only returns a non-empty object after
      // some delay. There is no appropriate event so we have to add a constant timeout
      if (target.readyState < HTMLMediaElement.HAVE_CURRENT_DATA) {
        await eventListener(target, 'loadeddata', 'error', abortController.signal)
      }
      await timeout(500, abortController.signal)

      if (cancelled) return

      setIsCameraReady(true)
      store.setStream(nextStream)
    }

    const close = (): void => {
      stream?.getTracks().forEach(track => { track.stop() })
      if (stream != null) {
        store.clearStream(stream)
      }

      if (target.srcObject === stream) {
        target.srcObject = null
      }
    }

    void open().catch((err: unknown) => {
      if (!cancelled) {
        setIsCameraReady(false)
        setError(err instanceof Error ? err : new Error(String(err)))
      }
    })

    return () => {
      cancelled = true
      abortController.abort()
      close()
    }
  }, [ref, constraints, store])

  return { isCameraReady, error }
}
