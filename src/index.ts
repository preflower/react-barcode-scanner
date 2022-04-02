// @ts-expect-error
import BarcodeDetectorPolyfill from 'barcode-detector-zbar/BarcodeDetectorPolyfill.min.js'

BarcodeDetectorPolyfill.setupPolyfill()

export * from './hooks'
export * from './components'
