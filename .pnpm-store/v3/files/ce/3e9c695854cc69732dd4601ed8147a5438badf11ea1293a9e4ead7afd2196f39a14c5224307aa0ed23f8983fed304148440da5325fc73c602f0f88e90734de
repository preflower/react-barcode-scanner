"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageScanner = void 0;
const CppObject_1 = require("./CppObject");
const instance_1 = require("./instance");
const Symbol_1 = require("./Symbol");
class ImageScanner extends CppObject_1.CppObject {
    static async create() {
        const inst = await (0, instance_1.getInstance)();
        const ptr = inst._ImageScanner_create();
        return new this(ptr, inst);
    }
    destroy() {
        this.checkAlive();
        this.inst._ImageScanner_destory(this.ptr);
        this.ptr = 0;
    }
    setConfig(sym, conf, value) {
        this.checkAlive();
        return this.inst._ImageScanner_set_config(this.ptr, sym, conf, value);
    }
    enableCache(enable = true) {
        this.checkAlive();
        this.inst._ImageScanner_enable_cache(this.ptr, enable);
    }
    recycleImage(image) {
        this.checkAlive();
        this.inst._ImageScanner_recycle_image(this.ptr, image.getPointer());
    }
    getResults() {
        this.checkAlive();
        const res = this.inst._ImageScanner_get_results(this.ptr);
        return Symbol_1.Symbol.createSymbolsFromPtr(res, this.inst.HEAPU8.buffer);
    }
    scan(image) {
        this.checkAlive();
        return this.inst._ImageScanner_scan(this.ptr, image.getPointer());
    }
}
exports.ImageScanner = ImageScanner;
//# sourceMappingURL=ImageScanner.js.map