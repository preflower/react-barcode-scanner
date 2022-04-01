import { useRef, useState, useContext, useMemo, useEffect } from 'react'
import { StreamContext } from '../context'

export function useTorch (open = false): [boolean, () => Promise<void>] {
  const isOpen = useRef(open)
  const [isSupportTorch, setSupport] = useState(false)
  const [stream] = useContext(StreamContext)!
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
          torch: isOpen.current
        }]
      })
      isOpen.current = !isOpen.current
    } catch (e) {
      console.warn(e)
    }
  }

  return [isSupportTorch, switchTorch]
}
