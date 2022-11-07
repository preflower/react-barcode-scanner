import { RefObject, useCallback, useEffect, useMemo, useState } from 'react'

export interface ScanOptions {
  delay?: number
  formats?: string[]
}

const DEFAULT_OPTIONS = {
  delay: 1000,
  formats: ['qr_code']
}

export function useScanning (ref: RefObject<HTMLVideoElement>, provideOptions?: ScanOptions): [DetectedBarcode | undefined, () => void, () => void] {
  const [detectedBarcode, setDetectBarcode] = useState<DetectedBarcode>()
  const [start, setStart] = useState(false)
  const options = useMemo(() => {
    return Object.assign({}, DEFAULT_OPTIONS, provideOptions)
  }, [provideOptions])

  const scan = useCallback(async () => {
    const target = ref.current
    const detector = new BarcodeDetector({
      formats: options.formats
    })
    const [detected] = await detector.detect(target!)
    if (detected !== undefined) {
      setDetectBarcode(detected)
    }
  }, [ref, options.formats])

  useEffect(() => {
    const target = ref.current
    if (target == null || !start) return

    /**
     * proivde `cancelled` tag to prevent `frame` has been
     * triggered but `scan` not fulfilled when call cancelAnimationFrame
     */
    let cancelled = false
    let timer: number
    const frame = async (): Promise<void> => {
      await scan()
      if (!cancelled) {
        timer = setTimeout(frame, options.delay)
      }
    }
    timer = setTimeout(frame, options.delay)
    return () => {
      clearTimeout(timer)
      cancelled = true
    }

    // let raf: number
    // let lastTimestamp = 0
    // /**
    //  * proivde `cancelled` tag to prevent `frame` has been
    //  * triggered but `scan` not fulfilled when call cancelAnimationFrame
    //  */
    // let cancelled = false
    // const frame = async (timestamp: number): Promise<void> => {
    //   if (timestamp - lastTimestamp > options.delay) {
    //     await scan()
    //     lastTimestamp = timestamp
    //   }
    //   if (cancelled) return
    //   raf = requestAnimationFrame(frame)
    // }
    // raf = requestAnimationFrame(frame)
    // return () => {
    //   cancelAnimationFrame(raf)
    //   cancelled = true
    // }
  }, [start, ref, options.delay, scan])

  const open = useCallback(() => {
    setStart(true)
  }, [])

  const close = useCallback(() => {
    setStart(false)
  }, [])

  return [detectedBarcode, open, close]
}
