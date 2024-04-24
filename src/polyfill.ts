import { BarcodeDetectorPolyfill } from '@preflower/barcode-detector-polyfill'

try {
  // @ts-expect-error fix BarcodeDetector is not supported error
  window.BarcodeDetector.getSupportedFormats()
} catch {
  // @ts-expect-error fix BarcodeDetector is not contain in window error
  window.BarcodeDetector = BarcodeDetectorPolyfill
}
