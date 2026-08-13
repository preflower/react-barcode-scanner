<div align="center">
  <img src="https://reactbarcodescanner.vercel.app/logo.png" alt="logo" width="100" height="100">
  <h3><code>React Barcode Scanner</code></h3>

  <a href="https://www.npmjs.com/package/react-barcode-scanner">
    <img src="https://badge.fury.io/js/react-barcode-scanner.svg" alt="npm version">
  </a>
  <a href="https://www.npmjs.com/package/react-barcode-scanner">
    <img src="https://img.shields.io/npm/dm/react-barcode-scanner.svg" alt="npm version">
  </a>
  <a href="http://opensource.org/licenses/MIT">
    <img src="https://badgen.net/npm/license/react-barcode-scanner" alt="licence: MIT">
  </a>
</div>

## Introduction
A lightweight barcode scanner based on the `Barcode Detection API`, with a `zbar.wasm` polyfill.

## Usage
```tsx
import { BarcodeScanner } from 'react-barcode-scanner'
import 'react-barcode-scanner/polyfill'

export default () => {
  return <BarcodeScanner />
}
```

## State scope and multiple scanners

Without a Provider, the scanner and state hooks use a shared compatibility scope, so existing single-scanner usage continues to work.

Use a separate `BarcodeScannerProvider` for each active scanner when controls or status live in other components:

```tsx
import {
  BarcodeScanner,
  BarcodeScannerProvider,
  useStreamState,
  useTorch
} from 'react-barcode-scanner'

function ScannerControls () {
  const [stream] = useStreamState()
  const { isTorchSupported, isTorchOn, setIsTorchOn } = useTorch()

  return (
    <button
      disabled={!stream || !isTorchSupported}
      onClick={() => setIsTorchOn(!isTorchOn)}
    >
      Torch: {isTorchOn ? 'on' : 'off'}
    </button>
  )
}

export default function ScannerPanel () {
  return (
    <BarcodeScannerProvider>
      <BarcodeScanner />
      <ScannerControls />
    </BarcodeScannerProvider>
  )
}
```

See [State Scope and Multiple Scanners](https://reactbarcodescanner.vercel.app/docs/state-scope) for default values, lifecycle, torch operations and SSR guidance.

## Detail
[Documentation](https://reactbarcodescanner.vercel.app/)

## License
MIT
