---
title: Demo
order: 2
toc: menu
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
