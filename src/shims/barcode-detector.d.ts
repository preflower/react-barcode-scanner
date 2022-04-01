interface Point {
  x: number
  y: number
}

// reference: https://developer.mozilla.org/en-US/docs/Web/API/BarcodeDetector
interface DetectedBarcode {
  boundingBox: DOMRectReadOnly
  cornerPoints: Point[]
  format: string
  rawValue: string
}

declare class BarcodeDetector {
  constructor (options?: {
    formats: string[]
  })
  static getSupportedFormats (): Promise<string[]>
  detect (target: ImageBitmapSource): Promise<DetectedBarcode[]>
}
