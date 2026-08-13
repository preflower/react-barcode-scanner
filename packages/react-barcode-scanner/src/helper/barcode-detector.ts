import { type DetectedBarcode } from '../types.js'

const POLYFILL_READY_KEY = '__reactBarcodeScannerPolyfillReady__'

export interface BarcodeDetectorConstructor {
  new (options?: { formats?: string[] }): {
    detect: (target: ImageBitmapSource) => Promise<DetectedBarcode[]>
  }
  getSupportedFormats: () => Promise<string[]>
}

type BarcodeDetectorGlobal = typeof globalThis & {
  BarcodeDetector?: BarcodeDetectorConstructor
  [POLYFILL_READY_KEY]?: Promise<void>
}

const getGlobal = (): BarcodeDetectorGlobal => globalThis as BarcodeDetectorGlobal

export const getBarcodeDetector = (): BarcodeDetectorConstructor | undefined => {
  return getGlobal().BarcodeDetector
}

export const hasBarcodeDetector = (): boolean => {
  const current = getBarcodeDetector()
  return typeof current === 'function' && typeof current.getSupportedFormats === 'function'
}

export const installBarcodeDetector = (polyfill: BarcodeDetectorConstructor): void => {
  if (typeof window === 'undefined') return

  if (!hasBarcodeDetector()) {
    getGlobal().BarcodeDetector = polyfill
  }
}

export const getBarcodeDetectorPolyfillReady = (): Promise<void> | undefined => {
  return getGlobal()[POLYFILL_READY_KEY]
}

export const setBarcodeDetectorPolyfillReady = (ready: Promise<void>): void => {
  getGlobal()[POLYFILL_READY_KEY] = ready
}
