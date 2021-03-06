---
title: React Barcode Scanner
order: 10
hero:
  title: React Barcode Scanner
  desc: π A lightweight React scan library, based on modern API
  actions:
    - text: εΏ«ιδΈζ
      link: /doc/guide
features:
  - icon: /react-barcode-scanner/modern.png
    title: Modern
    desc: Base on Barcode Detector API
  - icon: /react-barcode-scanner/lightweight.png
    title: Lightweight
    desc: Polyfill use zbar wasm library, size only ~230kb
  - icon: /react-barcode-scanner/customize.png
    title: Customize
    desc: High customization
---

## Demo

```tsx
import React, { useState } from "react";
import { BarcodeScanner, useTorch } from "react-barcode-scanner";

export default () => {
  const [isSupportTorch, , onTorchSwitch] = useTorch();
  const [result, setResult] = useState()

  const onCapture = (detected) => {
    if (detected) {
      setResult(detected.rawValue)
    }
  }

  return (
    <div style={{ position: "relative", width: "100%", height: "440px" }}>
      <div>Result: {result}</div>
      <BarcodeScanner onCapture={onCapture} />
      {isSupportTorch ? (
        <button onClick={onTorchSwitch}>Swtich Torch</button>
      ) : null}
    </div>
  );
};
```

## Feedback

Please visit [GitHub](https://github.com/preflower/react-barcode-scanner) to commit issue or PR
