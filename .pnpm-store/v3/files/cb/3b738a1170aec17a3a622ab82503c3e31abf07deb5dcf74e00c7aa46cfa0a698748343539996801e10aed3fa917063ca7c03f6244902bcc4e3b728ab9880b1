# Barcode Detector Api Polyfill using zbar.wasm

[![NPM](https://nodei.co/npm/barcode-detector-zbar.png?mini=true)](https://nodei.co/npm/barcode-detector-zbar/)
[![Downloads](https://img.shields.io/npm/dt/barcode-detector-zbar.svg)](https://www.npmjs.com/package/barcode-detector-zbar)

## How to use

This is a very simple polyfill using zbar.wasm under the hood written in plain ES6.

You can install the polyfill with `BarcodeDetectorPolyfill.setupPolyfill()`.

```html
<script type="module">
  import BarcodeDetectorPolyfill from "./BarcodeDetectorPolyfill.min.js";

  console.log("Native api support", BarcodeDetectorPolyfill.checkBarcodeDetectorSupport());
  BarcodeDetectorPolyfill.setupPolyfill();
</script>
```

Simply use like the regular api (check https://developer.mozilla.org/en-US/docs/Web/API/Barcode_Detection_API).

## zbar.wasm

This polyfill uses zbar.wasm and therefore needs to load a ~200kb bin file in order to work. The polyfill itself is 9.5kb.

## Checking secure context

Webcam is only available in a secure context. Here is some sample code to help you (using Swal to show an error message).

```js
if (!BarcodeDetectorPolyfill.checkWebcamSupport()) {
  if (!BarcodeDetectorPolyfill.checkSecureContext()) {
    Swal.fire("You need a secure context!");
  } else {
    Swal.fire("No webcam connected!");
  }
}
```

## You can try the demo

Running `npm run start` and see demo.html or https://codepen.io/lekoalabe/pen/abyrqaL (currently not working due to CORS issue loading the wasm file)

## Also check out

Other
- https://zbar-wasm.github.io/demo/

Api ref
- https://developer.mozilla.org/en-US/docs/Web/API/Barcode_Detection_API
- https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia

Scanner app
- https://github.com/mebjas/html5-qrcode
- https://github.com/maslick/koder

Zbar
- https://github.com/samsam2310/zbar.wasm
- https://github.com/mchehab/zbar

Zxing
- https://github.com/zxing-js/browser

Other libs
- https://www.npmjs.com/package/qr-scanner (worker support)
- https://serratus.github.io/quaggaJS/ (nice rotation algo)
- https://github.com/ericblade/quagga2

Other polyfills
- https://github.com/giladaya/barcode-detector-polyfill
- https://github.com/gruhn/barcode-detector
