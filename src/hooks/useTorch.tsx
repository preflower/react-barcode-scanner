import { useState, useMemo, useEffect } from 'react'
import { useStreamState } from './useStreamState'

export function useTorch (open = false): [boolean, boolean, () => Promise<void>] {
  const [isOpen, setOpen] = useState(open)
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

  const switchTorch = async (): Promise<void> => {
    try {
      if (!isSupportTorch) {
        throw new Error(`[react-barcode-scanner]: 
          device does not support torch capability
        `)
      }
      await track!.applyConstraints({
        advanced: [{
          torch: !isOpen
        }]
      })
      setOpen(!isOpen)
    } catch (e) {
      console.warn(e)
    }
  }

  return [isSupportTorch, isOpen, switchTorch]
}
