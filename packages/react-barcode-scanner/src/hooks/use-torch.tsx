import { useState, useMemo, useEffect, useCallback } from 'react'
import { useStreamState } from './use-stream-state'
import { createAtom, useAtom } from './use-atom'

const torchAtom = createAtom()

/**
 * Control torch of camera
 * @param {boolean} open Torch is open by default
 * @returns {Array} [isSupportTorch, isOpen, switchTorch, setOpen]
 *   - isSupportTorch: Whether device supports torch
 *   - isOpen: Whether torch is open
 *   - switchTorch: Switch torch
 *   - setOpen: Set open state of torch
 *
 * @example
 * import React from 'react'
 * import { useTorch } from 'react-barcode-scanner'
 *
 * export default () => {
 *   const [isSupportTorch, isOpen,, setOpen] = useTorch()
 *   return (
 *     <div style={{ width: '100%', height: '360px' }}>
 *       <button onClick={() => setOpen(!isOpen)}>Switch Torch</button>
 *     </div>
 *   )
 * }
 */
export function useTorch (open = false): [boolean, boolean, () => Promise<void>, (newState: boolean) => void] {
  const [isOpen, setOpen] = useAtom(torchAtom, open)
  const [isSupportTorch, setSupport] = useState(false)
  const [stream] = useStreamState()
  const track = useMemo(() => {
    return stream?.getVideoTracks()[0]
  }, [stream])

  useEffect(() => {
    if (track == null) return
    const capabilities = track.getCapabilities()
    if (capabilities.torch !== undefined) {
      setSupport(true)
    }
  }, [track])

  const setTorch = useCallback(async (torch: boolean) => {
    try {
      if (!isSupportTorch) return
      await track?.applyConstraints({
        advanced: [{
          torch
        }]
      })
    } catch (e) {
      console.warn(e)
    }
  }, [track, isSupportTorch])

  useEffect(() => {
    setTorch(isOpen)
  }, [isOpen, setTorch])

  /**
   * @deprecated use `setOpen` to instead of `switchTorch`
   */
  const switchTorch = async (): Promise<void> => {
    if (!isSupportTorch) {
      throw new Error('[react-barcode-scanner]: device does not support torch capability')
    }
    if (track == null) {
      throw new Error('[react-barcode-scanner]: unable to capture the video stream')
    }
    await setTorch(!isOpen)
  }

  return [isSupportTorch, isOpen, switchTorch, setOpen]
}
