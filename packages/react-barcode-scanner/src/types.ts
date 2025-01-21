export enum BarcodeFormat {
  CODE_128 = 'code_128',
  CODE_39 = 'code_39',
  CODE_93 = 'code_93',
  CODABAR = 'codabar',
  EAN_13 = 'ean_13',
  EAN_8 = 'ean_8',
  ITF = 'itf',
  QR_CODE = 'qr_code',
  UPC_A = 'upc_a',
  UPC_E = 'upc_e',
}

export interface Point {
  x: number
  y: number
}

// reference: https://developer.mozilla.org/en-US/docs/Web/API/BarcodeDetector
export interface DetectedBarcode {
  boundingBox: DOMRectReadOnly
  cornerPoints: Point[]
  format: string
  rawValue: string
}

declare global {
  class BarcodeDetector {
    constructor (options?: {
      formats: string[]
    })

    static getSupportedFormats (): Promise<string[]>
    detect (target: ImageBitmapSource): Promise<DetectedBarcode[]>
  }
}
