---
nav:
  title: 快速入门
  order: 1
title: 快速入门
toc: menu
---

## 安装

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

## 快速开始

```jsx | pure
import React from 'react'
import { BarcodeScanner } from 'react-barcode-scanner'
import 'react-barcode-scanner/polyfill'

export default () => {
  return (
    <BarcodeScanner />
  )
}
```

### 闪光灯
请使用移动设备体验Demo

```jsx | pure
import React from 'react'
import { BarcodeScanner, useTorch } from 'react-barcode-scanner'

export default () => {
  const [isSupportTorch, isOpen, onTorchSwitch] = useTorch()

  return (
    <div style={{ width: '100%', height: '360px' }}>
      <BarcodeScanner />
      {isSupportTorch
        ? <button onClick={onTorchSwitch}>切换闪关灯</button>
        : null}
    </div>
  )
}
```

## Nextjs
`react-barcode-scanner`只应用于浏览器环境, `Nextjs`若想使用此库请使用`next/dynamic`方式导入

```js
import dynamic from 'next/dynamic'

const BarcodeScanner = dynamic(() => {
  import('react-barcode-scanner/polyfill')
  return import('react-barcode-scanner').then(mod => mod.BarcodeScanner)
}, { ssr: false })
```


## 反馈与共建

请访问 [GitHub](https://github.com/preflower/react-barcode-scanner/issues) 创建 issue 或 PR
