<div align="center">
  <img src="assets/logo.png" alt="logo" width="100" height="100">
  <h3><code>React Barcode Scanner</code></h3>

  <a href="https://www.npmjs.com/package/react-barcode-detector">
    <img src="https://badge.fury.io/js/react-barcode-detector.svg" alt="npm version">
  </a>
  <a href="https://www.npmjs.com/package/react-barcode-detector">
    <img src="https://img.shields.io/npm/dt/react-barcode-detector.svg" alt="npm version">
  </a>
  <a href="http://opensource.org/licenses/MIT">
    <img src="https://badgen.net/npm/license/react-barcode-scanner" alt="licence: MIT">
  </a>
</div>

## Introduce
A lightweight Qrcode scanner base on `Qrcode Detection API`, and polyfill use `zbar.wasm`

## Usage
```js
import { StreamProvider, BarcodeScanner } from 'react-barcode-scanner'

// output provider for torch
<StreamProvider>
  <BarcodeScanner />
</StreamProvider>
```

## Detail
[Documentation](https://preflower.github.io/react-barcode-scanner)

## License
MIT
