---
title: API
order: 2
toc: menu
---

## BarcodeScanner
| Name      	| Type                              	| Default Value                         	| Description                                               	|
|-----------	|-----------------------------------	|---------------------------------------	|-----------------------------------------------------------	|
| options   	| [ScanOptions](#scanoptions)         | [DEFAULT_OPTIONS](#default_options) 	  | / 	                                                        |
| onCapture 	| (barcode: DetectedBarcode) => any 	| /                                     	| Triggered when the specified QR code is scanned           	|

## useCamera
| Name               	| Type                        	| Default Value       	                        | Description                                                                                                             |
|--------------------	|-----------------------------	|---------------------------------------------	|------------------------------------------------------------------------------------------------------------------------	|
| ref               	| `RefObject<HTMLVideoElement>` | Required*            	                        | HTMLVideoElement instance                                                                                             	|
| trackConstraints   	| MediaTrackConstraints       	| [DEFAULT_CONSTRAINTS](#default_constraints) 	| Based on the [MediaTrackConstraints](https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackConstraints) standard 	|

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

| Name               	| Type                        	| Default Value   	                    | Description                                         	|
|--------------------	|-----------------------------	|-------------------------------------	|-----------------------------------------------------	|
| ref               	| `RefObject<HTMLVideoElement>` | Required*        	                    | HTMLVideoElement instance                           	|
| options            	| [ScanOptions](#scanoptions)   | [DEFAULT_OPTIONS](#default_options) 	| delay: scan interval  <br/> formats: barcode format, [support formats](https://developer.mozilla.org/en-US/docs/Web/API/Barcode_Detection_API#supported_barcode_formats) 	|

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
| open 	| Boolean 	| false         	| Enabled by default 	|

## Types

### ScanOptions
```ts | pure
interface ScanOptions {
  delay?: number
  formats?: string[]
}
```
