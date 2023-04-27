import { BarcodeDetectorPolyfill } from '@preflower/barcode-detector-polyfill'

try {
  // @ts-expect-error
  window.BarcodeDetector.getSupportedFormats()
} catch {
  // @ts-expect-error
  window.BarcodeDetector = BarcodeDetectorPolyfill
}

export * from './hooks'
export * from './components'
