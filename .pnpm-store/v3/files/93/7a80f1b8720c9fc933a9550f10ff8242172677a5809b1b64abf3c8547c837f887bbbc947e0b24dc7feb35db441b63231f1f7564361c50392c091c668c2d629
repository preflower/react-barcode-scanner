"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadWasmInstance = void 0;
/**
 * Webpack trys to parse .wasm file even if file-loader is used. Using extension
 * *.wasm.bin as a workaround.
 * See https://github.com/webpack/webpack/issues/6725.
 * To facilitate streaming compilation by the browser, *.wasm.bin files
 * should be served as MIME type 'application/wasm'.
 */
// import wasmBinaryFile from './zbar.wasm';
const zbar_wasm_bin_1 = __importDefault(require("./zbar.wasm.bin"));
const zbar_1 = __importDefault(require("./zbar"));
// locateFile is used to override the file path to the path provided by
// file-loader.
const locateFile = (file, _scriptDir) => {
    if (file != 'zbar.wasm') {
        console.error('Unexpected file:', file);
    }
    return zbar_wasm_bin_1.default;
};
const loadWasmInstance = async (importObj) => {
    importObj['locateFile'] = locateFile;
    return await (0, zbar_1.default)(importObj);
};
exports.loadWasmInstance = loadWasmInstance;
//# sourceMappingURL=load-browser.js.map