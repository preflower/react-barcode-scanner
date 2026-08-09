import {
  hasBarcodeDetector,
  installBarcodeDetector,
  setBarcodeDetectorPolyfillReady
} from './helper/barcode-detector.js'

export const barcodeDetectorPolyfillReady = typeof window === 'undefined' || hasBarcodeDetector()
  ? Promise.resolve()
  : import('@preflower/barcode-detector-polyfill').then(({ BarcodeDetectorPolyfill }) => {
    installBarcodeDetector(BarcodeDetectorPolyfill)
  })

setBarcodeDetectorPolyfillReady(barcodeDetectorPolyfillReady)
