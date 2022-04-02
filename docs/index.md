---
title: React Barcode Scanner
order: 10
hero:
  title: React Barcode Scanner
  desc: 📖 A lightweight React scan library, based on modern API
  actions:
    - text: 快速上手
      link: /doc/guide
features:
  - icon: /modern.png
    title: Modern
    desc: 基于 Barcode Detector API
  - icon: /lightweight.png
    title: LightWeight
    desc:
  - icon: /customize.png
    title: Customize
    desc: 可高度自定义
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
        <button onClick={onTorchSwitch}>Swtich Torch</button>
      ) : null}
    </div>
  );
};
```

## Feedback

Please visit [GitHub](https://github.com/preflower/react-barcode-scanner) to commit issue or PR
