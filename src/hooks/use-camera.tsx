import { RefObject, useEffect, useMemo, useState } from 'react'
import { eventListener, timeout } from '../helper/utils'
import { useStreamState } from './use-stream-state'

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

export function useCamera (ref: RefObject<HTMLVideoElement>, trackConstraints?: MediaTrackConstraints): [boolean] {
  const [isCameraSupported, setCameraSupported] = useState(false)
  if (!window.isSecureContext) {
    throw new Error(`[react-barcode-scanner]: 
      Browser ask for secure origin (such as https) when use getUserMedia,
      reference: https://sites.google.com/a/chromium.org/dev/Home/chromium-security/deprecating-powerful-features-on-insecure-origins
    `)
  }
  const [, setStream] = useStreamState()

  const constraints = useMemo(() => {
    const videoConstraints = Object.assign({}, DEFAULT_CONSTRAINTS, trackConstraints)
    return {
      audio: false,
      video: videoConstraints
    }
  }, [trackConstraints])

  useEffect(() => {
    let stream: MediaStream
    const _ = async (): Promise<void> => {
      const target = ref.current
      if (target == null) return

      stream = await navigator.mediaDevices.getUserMedia(constraints)

      // Firefox need use `moz` prefix before v58
      // reference: https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/srcObject#browser_compatibility
      if (target.mozSrcObject !== undefined) {
        target.mozSrcObject = stream
      } else {
        target.srcObject = stream
      }

      // According to: https://oberhofer.co/mediastreamtrack-and-its-capabilities/#queryingcapabilities
      // On some devices, getCapabilities only returns a non-empty object after
      // some delay. There is no appropriate event so we have to add a constant timeout
      await eventListener(target, 'loadeddata')
      await timeout(500)

      setCameraSupported(true)

      setStream(stream)
    }
    void _()
    return () => {
      stream?.getTracks().forEach(track => track.stop())
    }
  }, [ref, constraints, setStream])

  return [isCameraSupported]
}
