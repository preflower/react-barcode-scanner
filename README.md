<div align="center">
  <img src="./public/logo.png" alt="logo" width="100" height="100">
  <h3><code>React Barcode Scanner</code></h3>

  <a href="https://www.npmjs.com/package/react-barcode-scanner">
    <img src="https://badge.fury.io/js/react-barcode-scanner.svg" alt="npm version">
  </a>
  <a href="https://www.npmjs.com/package/react-barcode-scanner">
    <img src="https://img.shields.io/npm/dt/react-barcode-scanner.svg" alt="npm version">
  </a>
  <a href="http://opensource.org/licenses/MIT">
    <img src="https://badgen.net/npm/license/react-barcode-scanner" alt="licence: MIT">
  </a>
</div>

## Introduction
A lightweight barcode scanner base on `Barcode Detection API`, and polyfill use `zbar.wasm`

## Usage
```tsx
import { BarcodeScanner } from 'react-barcode-scanner'

export default () => {
  return <BarcodeScanner />
}
```

### Polyfill
To support SSR, `v2.0.0` not auto import polyfill anymore, user need import it manually.

```tsx
import "react-barcode-scanner/polyfill"
```

## Detail
[Documentation](https://preflower.github.io/react-barcode-scanner)

## License
MIT
