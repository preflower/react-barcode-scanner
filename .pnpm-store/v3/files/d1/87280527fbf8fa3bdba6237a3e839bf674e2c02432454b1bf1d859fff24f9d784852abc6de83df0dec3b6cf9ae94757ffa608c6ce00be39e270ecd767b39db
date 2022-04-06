"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Image = void 0;
const CppObject_1 = require("./CppObject");
const Symbol_1 = require("./Symbol");
const instance_1 = require("./instance");
class Image extends CppObject_1.CppObject {
    static async createFromGrayBuffer(width, height, dataBuf, sequence_num = 0) {
        const inst = await (0, instance_1.getInstance)();
        const heap = inst.HEAPU8;
        const data = new Uint8Array(dataBuf);
        const len = width * height;
        if (len !== data.byteLength) {
            throw Error('dataBuf does not match width and height');
        }
        const buf = inst._malloc(len);
        heap.set(data, buf);
        const ptr = inst._Image_create(width, height, 0x30303859 /* Y800 */, buf, len, sequence_num);
        return new this(ptr, inst);
    }
    static async createFromRGBABuffer(width, height, dataBuf, sequence_num = 0) {
        const inst = await (0, instance_1.getInstance)();
        const heap = inst.HEAPU8;
        const data = new Uint8Array(dataBuf);
        const len = width * height;
        if (len * 4 !== data.byteLength) {
            throw Error('dataBuf does not match width and height');
        }
        const buf = inst._malloc(len);
        for (let i = 0; i < len; ++i) {
            const r = data[i * 4];
            const g = data[i * 4 + 1];
            const b = data[i * 4 + 2];
            heap[buf + i] = (r * 19595 + g * 38469 + b * 7472) >> 16;
        }
        const ptr = inst._Image_create(width, height, 0x30303859 /* Y800 */, buf, len, sequence_num);
        return new this(ptr, inst);
    }
    destroy() {
        this.checkAlive();
        this.inst._Image_destory(this.ptr);
        this.ptr = 0;
    }
    getSymbols() {
        this.checkAlive();
        const res = this.inst._Image_get_symbols(this.ptr);
        return Symbol_1.Symbol.createSymbolsFromPtr(res, this.inst.HEAPU8.buffer);
    }
}
exports.Image = Image;
//# sourceMappingURL=Image.js.map