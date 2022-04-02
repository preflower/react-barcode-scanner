---
title: API
order: 2
toc: menu
---

## BarcodeScanner
| Name      	| Type                              	| Default Value                         	| Description                	 |
|-----------	|-----------------------------------	|---------------------------------------	|----------------------------- |
| options   	| [ScanOptions](#scanoptions)         | [DEFAULT_OPTIONS](#default_options) 	  | / 	                         |
| onCapture 	| (barcode: DetectedBarcode) => any 	| /                                     	| 当检测到指定类型的码时触发       |

## useCamera
| Name               	| Type                        	| Default Value       	                        | Description                                                                                             |
|--------------------	|-----------------------------	|---------------------------------------------	|--------------------------------------------------------------------------------------------------------	|
| ref               	| `RefObject<HTMLVideoElement>` | Required*           	                        | HTMLVideoElement实例                                                                                   	 |
| trackConstraints   	| MediaTrackConstraints       	| [DEFAULT_CONSTRAINTS](#default_constraints) 	| 基于[MediaTrackConstraints](https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackConstraints)标准   |

### DEFAULT_CONSTRAINTS
```js | pure
{
  width: { min: 640, ideal: 1280 },
  height: { min: 480, ideal: 720 },
  facingMode: {
    ideal: 'environment'
  },
  advanced: [
    { width: 1920, height: 1280 },
    { aspectRatio: 1.333 }
  ]
}
```

## useScanning

| Name         	     | Type                        	| Default Value   	                    | Description                                         	|
|--------------------	|-----------------------------	|-------------------------------------	|----------------------------------------------------  |
| ref               	| `RefObject<HTMLVideoElement>` | Required*       	                    | HTMLVideoElement实例                                 	|
| options            	| [ScanOptions](#scanoptions)   | [DEFAULT_OPTIONS](#default_options) 	| delay: 扫描间隔  <br/> formats: 扫描的条码格式, [支持格式](https://developer.mozilla.org/en-US/docs/Web/API/Barcode_Detection_API#supported_barcode_formats) 	|

### DEFAULT_OPTIONS
```js | pure
{
  delay: 1000,
  formats: ['qr_code']
}
```

## useTorch

| Name 	| Type    	| Default Value 	| Description        	|
|------	|---------	|---------------	|--------------------	|
| open 	| Boolean 	| false         	| 是否默认启用闪光灯   	|

## Types

### ScanOptions
```ts | pure
interface ScanOptions {
  delay?: number
  formats?: string[]
}
```
