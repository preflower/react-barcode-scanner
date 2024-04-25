---
title: Getting Start
order: 1
toc: menu
nav:
  title: Document
  order: 1
---

## Install

### pnpm
```shell
pnpm install react-barcode-scanner
```

### yarn
```shell
yarn install react-barcode-scanner
```

### npm
```shell
npm install react-barcode-scanner
```

## Quick Start

```jsx | pure
import React from 'react'
import { BarcodeScanner } from 'react-barcode-scanner'
import "react-barcode-scanner/polyfill"

export default () => {
  return (
    <BarcodeScanner />
  )
}
```

### Torch
Please use mobile devices to experience Demo

```jsx | pure
import React from 'react'
import { BarcodeScanner, useTorch } from 'react-barcode-scanner'

export default () => {
  const [isSupportTorch, isOpen, onTorchSwitch] = useTorch()

  return (
    <div style={{ width: '100%', height: '360px' }}>
      <BarcodeScanner />
      {isSupportTorch
        ? <button onClick={onTorchSwitch}>Swtich Torch</button>
        : null}
    </div>
  )
}
```

## Next.js
`react-barcode-scanner` is only work in browser environment, pls use `next/dynamic` to import in `Nextjs` project

```js
import dynamic from 'next/dynamic'

const BarcodeScanner = dynamic(() => {
  import('react-barcode-scanner/polyfill')
  return import('react-barcode-scanner').then(mod => mod.BarcodeScanner)
}, { ssr: false })
```

## Feedback

Please visit [GitHub](https://github.com/preflower/react-barcode-scanner) to commit issue or PR
