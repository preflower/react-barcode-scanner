---
title: React Barcode Scanner
order: 10
hero:
  title: React Barcode Scanner
  desc: 📖 基于现代API的轻量级React扫码库
  actions:
    - text: 快速上手
      link: /zh-CN/components/foo
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
        <button onClick={onTorchSwitch}>切换闪关灯</button>
      ) : null}
    </div>
  );
};
```

## 反馈与共建

请访问 [GitHub](https://github.com/preflower/react-barcode-scanner/issues) 创建 issue 或 PR
