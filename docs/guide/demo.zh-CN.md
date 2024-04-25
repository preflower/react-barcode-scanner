---
title: Demo
order: 2
toc: menu
---

## Demo

```tsx
import React, { useState } from "react"
import { BarcodeScanner, useTorch } from "react-barcode-scanner"
import "react-barcode-scanner/polyfill"

export default () => {
  const [isSupportTorch, , onTorchSwitch] = useTorch()

  const onCapture = (detected) => {
    if (detected) {
      window.alert(detected.rawValue)
    }
  }

  return (
    <div style={{ position: "relative", width: "100%", height: "440px" }}>
      <BarcodeScanner onCapture={onCapture} />
      {isSupportTorch ? (
        <button onClick={onTorchSwitch}>Swtich Torch</button>
      ) : null}
    </div>
  )
}
```
