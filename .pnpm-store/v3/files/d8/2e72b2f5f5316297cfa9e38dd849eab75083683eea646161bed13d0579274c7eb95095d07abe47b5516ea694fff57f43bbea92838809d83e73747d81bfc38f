"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Symbol = void 0;
const enum_1 = require("./enum");
class TypePointer {
    constructor(ptr, buf) {
        this.ptr = ptr;
        this.ptr32 = ptr >> 2;
        this.buf = buf;
        this.HEAP8 = new Int8Array(buf);
        this.HEAPU32 = new Uint32Array(buf);
        this.HEAP32 = new Int32Array(buf);
    }
}
class SymbolPtr extends TypePointer {
    get type() {
        return this.HEAPU32[this.ptr32];
    }
    get data() {
        const len = this.HEAPU32[this.ptr32 + 4];
        const ptr = this.HEAPU32[this.ptr32 + 5];
        return Int8Array.from(this.HEAP8.subarray(ptr, ptr + len));
    }
    get points() {
        const len = this.HEAPU32[this.ptr32 + 7];
        const ptr = this.HEAPU32[this.ptr32 + 8];
        const ptr32 = ptr >> 2;
        const res = [];
        for (let i = 0; i < len; ++i) {
            const x = this.HEAP32[ptr32 + i * 2];
            const y = this.HEAP32[ptr32 + i * 2 + 1];
            res.push({ x, y });
        }
        return res;
    }
    get next() {
        const ptr = this.HEAPU32[this.ptr32 + 11];
        if (!ptr)
            return null;
        return new SymbolPtr(ptr, this.buf);
    }
    get time() {
        return this.HEAPU32[this.ptr32 + 13];
    }
    get cacheCount() {
        return this.HEAP32[this.ptr32 + 14];
    }
    get quality() {
        return this.HEAP32[this.ptr32 + 15];
    }
}
class SymbolSetPtr extends TypePointer {
    get head() {
        const ptr = this.HEAPU32[this.ptr32 + 2];
        if (!ptr)
            return null;
        return new SymbolPtr(ptr, this.buf);
    }
}
class Symbol {
    constructor(ptr) {
        this.type = ptr.type;
        this.typeName = enum_1.ZBarSymbolType[this.type];
        this.data = ptr.data;
        this.points = ptr.points;
        this.time = ptr.time;
        this.cacheCount = ptr.cacheCount;
        this.quality = ptr.quality;
    }
    static createSymbolsFromPtr(ptr, buf) {
        if (ptr == 0)
            return [];
        const set = new SymbolSetPtr(ptr, buf);
        let symbol = set.head;
        const res = [];
        while (symbol !== null) {
            res.push(new Symbol(symbol));
            symbol = symbol.next;
        }
        return res;
    }
    decode(encoding) {
        const decoder = new TextDecoder(encoding);
        return decoder.decode(this.data);
    }
}
exports.Symbol = Symbol;
//# sourceMappingURL=Symbol.js.map