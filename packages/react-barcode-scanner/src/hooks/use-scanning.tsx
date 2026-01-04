import { type RefObject, useCallback, useEffect, useMemo, useState } from 'react'

import { BarcodeFormat, type DetectedBarcode } from '../types'

export interface ScanOptions {
  delay?: number
  formats?: Array<BarcodeFormat | string>
}

const DEFAULT_OPTIONS = {
  delay: 1000,
  formats: ['qr_code']
}

/**
 * Use barcode scanning based on Barcode Detection API.
 * @param ref a RefObject of HTMLVideoElement
 * @param provideOptions a ScanOptions object, provide delay and formats
 * @returns a tuple of detected barcodes, startScan function and stopScan function
 * @example
 * import { type RefObject } from 'react'
 * import { useScanning } from 'react-barcode-scanner'
 *
 * function App () {
 *   const ref = useRef<HTMLVideoElement>(null)
 *   const { detectedBarcodes, startScan, stopScan } = useScanning(ref)
 *
 *   useEffect(() => {
 *     if (detectedBarcodes) {
 *       console.log(detectedBarcodes)
 *     }
 *   }, [detectedBarcodes])
 *
 *   return (
 *     <div>
 *       <button onClick={startScan}>Open</button>
 *       <button onClick={stopScan}>Close</button>
 *       <video ref={ref} />
 *     </div>
 *   )
 * }
 */
export function useScanning (ref: RefObject<HTMLVideoElement | null>, provideOptions?: ScanOptions): {
  detectedBarcodes: DetectedBarcode[] | undefined,
  startScan: () => void,
  stopScan: () => void
  } {
  const [detectedBarcodes, setDetectedBarcodes] = useState<DetectedBarcode[]>()
  const [start, setStart] = useState(false)
  const options = useMemo(() => {
    return Object.assign({}, DEFAULT_OPTIONS, provideOptions)
  }, [provideOptions])

  const scan = useCallback(async () => {
    const target = ref.current
    const detector = new BarcodeDetector({
      formats: options.formats
    })
    const detected = await detector.detect(target!)
    if (detected !== undefined && detected.length > 0) {
      setDetectedBarcodes(detected)
    }
  }, [ref, options.formats])

  useEffect(() => {
    const target = ref.current
    if (target == null || !start) return

    /**
     * provide `cancelled` tag to prevent `frame` has been
     * triggered but `scan` not fulfilled when call cancelAnimationFrame
     */
    let cancelled = false
    let timer: number
    const frame = async (): Promise<void> => {
      await scan()
      if (!cancelled) {
        timer = window.setTimeout(frame, options.delay)
      }
    }
    frame()
    return () => {
      clearTimeout(timer)
      cancelled = true
    }
  }, [start, ref, options.delay, scan])

  useEffect(() => {
    if (options.formats.length === 0) {
      setStart(false)
    }
  }, [options.formats])

  const startScan = useCallback(() => {
    setStart(true)
  }, [])

  const stopScan = useCallback(() => {
    setStart(false)
  }, [])

  return {
    detectedBarcodes,
    startScan,
    stopScan
  }
}
