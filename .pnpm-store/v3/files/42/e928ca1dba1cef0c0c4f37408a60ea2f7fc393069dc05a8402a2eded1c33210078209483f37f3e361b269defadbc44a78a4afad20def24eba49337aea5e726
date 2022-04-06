import { scanImageData } from "zbar.wasm";

const SUPPORTED_FORMATS_MAP = {
  ZBAR_EAN2: "ean_2",
  ZBAR_EAN5: "ean_5",
  ZBAR_EAN8: "ean_8",
  ZBAR_UPCE: "upc_e",
  ZBAR_ISBN10: "isbn_10",
  ZBAR_UPCA: "upc_a",
  ZBAR_EAN13: "ean_13",
  ZBAR_ISBN13: "isbn_13",
  ZBAR_COMPOSITE: "composite",
  ZBAR_I25: "itf",
  ZBAR_DATABAR: "databar",
  ZBAR_DATABAR_EXP: "databar_exp",
  ZBAR_CODABAR: "codabar",
  ZBAR_CODE39: "code_39",
  ZBAR_CODE93: "code_93",
  ZBAR_CODE128: "code_128",
  ZBAR_PDF417: "pdf417",
  ZBAR_QRCODE: "qr_code",
  ZBAR_SQCODE: "sq_code",
};
const CANVAS_SIZE = 480;

/**
 * Other demos
 * https://zbar-wasm.github.io/demo/
 *
 * Api ref
 * https://developer.mozilla.org/en-US/docs/Web/API/Barcode_Detection_API
 * https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia
 *
 * Scanner app
 * https://github.com/mebjas/html5-qrcode
 * https://github.com/maslick/koder
 *
 * Zbar
 * https://github.com/samsam2310/zbar.wasm
 * https://github.com/mchehab/zbar
 *
 * Zxing
 * https://github.com/zxing-js/browser
 *
 * Other libs
 * https://www.npmjs.com/package/qr-scanner (worker support)
 * https://serratus.github.io/quaggaJS/ (nice rotation algo)
 * https://github.com/ericblade/quagga2
 *
 * Other polyfills
 * https://github.com/giladaya/barcode-detector-polyfill
 * https://github.com/gruhn/barcode-detector
 */
class BarcodeDetectorPolyfill {
  constructor(options = {}) {
    this.canvas = document.createElement("canvas");
    this.canvas.width = CANVAS_SIZE;
    this.canvas.height = CANVAS_SIZE;
    this.ctx = this.canvas.getContext("2d");
    this.formats = options.formats || Object.values(SUPPORTED_FORMATS_MAP);
  }

  /**
   * Returns a Promise which fulfills with an Array of supported barcode format types.
   * @returns {Promise}
   */
  static getSupportedFormats() {
    return new Promise((resolve, reject) => {
      resolve(Object.values(SUPPORTED_FORMATS_MAP));
    });
  }

  /**
   * Returns a Promise which fulfills with an array of detectedBarcode objects with the following properties:
   * - boundingBox: A DOMRectReadOnly, which returns the dimensions of a rectangle representing the extent
   *   of a detected barcode, aligned with the image.
   * - cornerPoints: The x and y co-ordinates of the four corner points of the detected barcode relative
   *   to the image, starting with the top left and working clockwise. This may not be square due
   *   to perspective distortions within the image.
   * - format: The detected barcode format. (For a full list of formats see the [landing page])
   * - rawValue: A String decoded from the barcode data.
   * @param {ImageBitmapSource} image This can be an element, a Blob of type image or an ImageData object.
   * @returns {Promise}
   */
  detect(image) {
    return new Promise(async (resolve, reject) => {
      if (!image.width || !image.height) {
        reject("No width or height");
        return;
      }

      // Use full area to scan
      if (this.canvas.width != image.width || this.canvas.height != image.height) {
        this.canvas.width = image.width;
        this.canvas.height = image.height;
        this.ctx = this.canvas.getContext("2d");
      }

      this.ctx.drawImage(image, 0, 0, this.canvas.width, this.canvas.height);
      let imageData = this.ctx.getImageData(0, 0, image.width, image.height);

      // Convert to grayscale
      let pixels = imageData.data;
      for (let i = 0; i < pixels.length; i += 4) {
        let lightness = parseInt((pixels[i] + pixels[i + 1] + pixels[i + 2]) / 3);

        pixels[i] = lightness;
        pixels[i + 1] = lightness;
        pixels[i + 2] = lightness;
      }
      this.ctx.putImageData(imageData, 0, 0);
      imageData = this.ctx.getImageData(0, 0, image.width, image.height);

      const zbarResults = await scanImageData(imageData);

      // Convert zbar data to match expected results
      const results = zbarResults
        .filter((res) => {
          // Make sure we have a bounding box
          if (res.points.length < 2) {
            return false;
          }
          // Make sure it's a supported format
          if (!this.formats.includes(SUPPORTED_FORMATS_MAP[res.typeName])) {
            return false;
          }
          return true;
        })
        .map((res) => {
          const nativeFormat = SUPPORTED_FORMATS_MAP[res.typeName];

          /* Sample barcode result. Points are a variable array of elements and can contain many items.
        d {type: 25, typeName: 'ZBAR_I25', data: Int8Array(12), points: Array(1), time: 1278481950, …}
cacheCount: 0
data: Int8Array(12) [49, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, buffer: ArrayBuffer(12), byteLength: 12, byteOffset: 0, length: 12]
points: [0:
x: 384
y: 328]
quality: 1
time: 1278481950
type: 25
typeName: "ZBAR_I25"
*/

          const bounds = { minX: Infinity, maxX: -Infinity, minY: Infinity, maxY: -Infinity };

          res.points.forEach((point) => {
              bounds.minX = Math.min(bounds.minX, point.x);
              bounds.maxX = Math.max(bounds.maxX, point.x);
              bounds.minY = Math.min(bounds.minY, point.y);
              bounds.maxY = Math.max(bounds.maxY, point.y);
            }
          );

          return {
            boundingBox: DOMRectReadOnly.fromRect({
              x: bounds.minX,
              y: bounds.minY,
              width: bounds.maxX - bounds.minX,
              height: bounds.maxY - bounds.minY,
            }),
            cornerPoints: [
              { x: bounds.minX, y: bounds.minY },
              { x: bounds.maxX, y: bounds.minY },
              { x: bounds.maxX, y: bounds.maxY },
              { x: bounds.minX, y: bounds.maxY },
            ],
            format: nativeFormat,
            rawValue: res.decode(),
            quality: res.quality,
          };
        });
      resolve(results);
    });
  }

  // Additional helpers below, not part of the actual interface

  /**
   * Basically, it's only supported on mobile android (2021)
   * @returns {bool}
   */
  static checkBarcodeDetectorSupport() {
    if (!("BarcodeDetector" in window)) {
      return false;
    }
    return true;
  }

  /**
   * If the current document isn't loaded securely, navigator.mediaDevices will be undefined
   * @returns {bool}
   */
  static checkWebcamSupport() {
    if (navigator.mediaDevices && !!navigator.mediaDevices.enumerateDevices) {
      return true;
    }
    return false;
  }

  /**
   * Use this the check secure context if needed
   * @returns {bool}
   */
  static checkSecureContext() {
    return !!window.isSecureContext;
  }

  static setupPolyfill() {
    if (BarcodeDetectorPolyfill.checkBarcodeDetectorSupport()) {
      return;
    }
    window["BarcodeDetector"] = BarcodeDetectorPolyfill;
  }
}

export default BarcodeDetectorPolyfill;
