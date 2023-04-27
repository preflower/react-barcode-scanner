---
title: React Barcode Scanner
order: 10
hero:
  title: React Barcode Scanner
  description: 📖 基于现代API的轻量级React扫码库
  actions:
    - text: 快速上手
      link: /guide
features:
  - icon: /react-barcode-scanner/modern.png
    title: Modern
    description: 基于 Barcode Detector API
  - icon: /react-barcode-scanner/lightweight.png
    title: LightWeight
    description: Polyfill使用zbar的wasm包，体积只有~230kb
  - icon: /react-barcode-scanner/customize.png
    title: Customize
    description: 可高度自定义
---

## Demo

```tsx
import React from "react";
import { BarcodeScanner, useTorch } from "react-barcode-scanner";

export default () => {
  const [isSupportTorch, onTorchSwitch] = useTorch();

  return (
    <div style={{ position: "relative", width: "100%", height: "440px" }}>
      <BarcodeScanner />
      {isSupportTorch ? (
        <button onClick={onTorchSwitch}>切换闪关灯</button>
      ) : null}
    </div>
  );
};
```
