"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.scanImageData = exports.scanRGBABuffer = exports.scanGrayBuffer = exports.getDefaultScanner = void 0;
const Image_1 = require("./Image");
const ImageScanner_1 = require("./ImageScanner");
const defaultScannerPromise = ImageScanner_1.ImageScanner.create();
const getDefaultScanner = async () => {
    return await defaultScannerPromise;
};
exports.getDefaultScanner = getDefaultScanner;
const scanImage = async (image, scanner) => {
    if (scanner === undefined) {
        scanner = await defaultScannerPromise;
    }
    const res = scanner.scan(image);
    if (res < 0) {
        throw Error('Scan Failed');
    }
    if (res === 0)
        return [];
    return image.getSymbols();
};
const scanGrayBuffer = async (buffer, width, height, scanner) => {
    const image = await Image_1.Image.createFromGrayBuffer(width, height, buffer);
    const res = await scanImage(image, scanner);
    image.destroy();
    return res;
};
exports.scanGrayBuffer = scanGrayBuffer;
const scanRGBABuffer = async (buffer, width, height, scanner) => {
    const image = await Image_1.Image.createFromRGBABuffer(width, height, buffer);
    const res = await scanImage(image, scanner);
    image.destroy();
    return res;
};
exports.scanRGBABuffer = scanRGBABuffer;
const scanImageData = async (image, scanner) => {
    return await (0, exports.scanRGBABuffer)(image.data.buffer, image.width, image.height, scanner);
};
exports.scanImageData = scanImageData;
//# sourceMappingURL=module.js.map