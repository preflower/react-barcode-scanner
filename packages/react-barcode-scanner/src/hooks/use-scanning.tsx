import { type RefObject, useCallback, useEffect, useRef, useState } from 'react'

import { getBarcodeDetector, getBarcodeDetectorPolyfillReady } from '../helper/barcode-detector.js'
import { BarcodeFormat, type DetectedBarcode } from '../types.js'

export interface ScanOptions {
  delay?: number
  formats?: Array<BarcodeFormat | string>
}

const DEFAULT_OPTIONS: Required<ScanOptions> = {
  delay: 1000,
  formats: ['qr_code']
}

const toError = (error: unknown): Error => {
  return error instanceof Error ? error : new Error(String(error))
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
  error: Error | undefined,
  startScan: () => void,
  stopScan: () => void
  } {
  const [detectedBarcodes, setDetectedBarcodes] = useState<DetectedBarcode[]>()
  const [error, setError] = useState<Error>()
  const [start, setStart] = useState(false)
  const detectorRef = useRef<{
    detector: InstanceType<NonNullable<ReturnType<typeof getBarcodeDetector>>>
    formatsKey: string
  } | undefined>(undefined)

  const formats = provideOptions?.formats ?? DEFAULT_OPTIONS.formats
  const formatsKey = JSON.stringify(formats)
  const formatsRef = useRef(formats)
  formatsRef.current = formats
  const providedDelay = provideOptions?.delay
  const delay = providedDelay !== undefined && Number.isFinite(providedDelay) && providedDelay >= 0
    ? providedDelay
    : DEFAULT_OPTIONS.delay

  const scan = useCallback(async () => {
    const target = ref.current
    if (target == null) return []

    await getBarcodeDetectorPolyfillReady()

    const Detector = getBarcodeDetector()
    if (Detector == null) {
      throw new Error('[react-barcode-scanner]: BarcodeDetector is not available; import react-barcode-scanner/polyfill')
    }

    if (detectorRef.current?.formatsKey !== formatsKey) {
      detectorRef.current = {
        detector: new Detector({ formats: [...formatsRef.current] }),
        formatsKey
      }
    }

    return await detectorRef.current.detector.detect(target)
  }, [formatsKey, ref])

  useEffect(() => {
    const target = ref.current
    if (target == null || !start || formats.length === 0) return

    /**
     * provide `cancelled` tag to prevent `frame` has been
     * triggered but `scan` not fulfilled when call cancelAnimationFrame
     */
    let cancelled = false
    let timer: number | undefined
    const frame = async (): Promise<void> => {
      try {
        const detected = await scan()
        if (!cancelled) {
          setError(undefined)
          if (detected.length > 0) {
            setDetectedBarcodes(detected)
          }
        }
      } catch (err) {
        if (!cancelled) {
          const nextError = toError(err)
          setError(currentError => currentError?.message === nextError.message ? currentError : nextError)
        }
      } finally {
        if (!cancelled) {
          timer = window.setTimeout(frame, delay)
        }
      }
    }
    void frame()
    return () => {
      cancelled = true
      if (timer !== undefined) {
        clearTimeout(timer)
      }
    }
  }, [delay, formats.length, ref, scan, start])

  useEffect(() => {
    if (formats.length === 0) {
      setStart(false)
    }
  }, [formats.length])

  const startScan = useCallback(() => {
    setError(undefined)
    setStart(true)
  }, [])

  const stopScan = useCallback(() => {
    setStart(false)
  }, [])

  return {
    detectedBarcodes,
    error,
    startScan,
    stopScan
  }
}
