import { useState, useMemo, useEffect, useCallback } from 'react'
import { useStreamState } from './use-stream-state'
import { createAtom, useAtom } from './use-atom'

const torchAtom = createAtom()

/**
 * Control torch of camera
 * @param {boolean} defaultTorchOn Whether torch is on by default
 * @returns {object} { isTorchSupported, isTorchOn, setIsTorchOn }
 *   - isTorchSupported: Whether device supports torch
 *   - error: Error object
 *   - isTorchOn: Whether torch is on
 *   - setIsTorchOn: Set boolean state of torch
 *
 * @example
 * import React from 'react'
 * import { useTorch } from 'react-barcode-scanner'
 *
 * export default () => {
 *   const { isTorchSupported, error, isTorchOn, setIsTorchOn } = useTorch()
 *
 *   if (error) {
 *     return <p>{error.message}</p>
 *   }
 *
 *   return (
 *     <div style={{ width: '100%', height: '360px' }}>
 *       <button onClick={() => setIsTorchOn(!isTorchOn)}>Switch Torch</button>
 *     </div>
 *   )
 * }
 */
export function useTorch (defaultTorchOn = false): {
  isTorchSupported: boolean,
  error: Error | undefined,
  isTorchOn: boolean,
  setIsTorchOn: (torch: boolean) => void
  } {
  const [isTorchOn, setIsTorchOn] = useAtom(torchAtom, defaultTorchOn)
  const [isTorchSupported, setIsTorchSupported] = useState(false)
  const [error, setError] = useState<Error>()
  const [stream] = useStreamState()
  const track = useMemo(() => {
    return stream?.getVideoTracks()[0]
  }, [stream])

  useEffect(() => {
    if (track == null) return
    const capabilities = track.getCapabilities()
    if (capabilities.torch !== undefined) {
      setIsTorchSupported(true)
    }
  }, [track])

  const setTorch = useCallback(async (torch: boolean) => {
    setError(undefined)

    try {
      if (!isTorchSupported) return
      await track?.applyConstraints({
        advanced: [{
          torch
        }]
      })
    } catch (err) {
      console.warn(err)
      setError(err as Error)
    }
  }, [track, isTorchSupported])

  useEffect(() => {
    setTorch(isTorchOn)
  }, [isTorchOn, setTorch])

  return { isTorchSupported, error, isTorchOn, setIsTorchOn }
}
