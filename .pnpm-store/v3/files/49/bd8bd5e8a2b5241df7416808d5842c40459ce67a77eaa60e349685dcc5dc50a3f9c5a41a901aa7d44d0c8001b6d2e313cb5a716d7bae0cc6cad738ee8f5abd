"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CppObject = void 0;
class CppObject {
    constructor(ptr, inst) {
        this.ptr = ptr;
        this.inst = inst;
    }
    checkAlive() {
        if (this.ptr)
            return;
        throw Error('Call after destroyed');
    }
    getPointer() {
        this.checkAlive();
        return this.ptr;
    }
}
exports.CppObject = CppObject;
//# sourceMappingURL=CppObject.js.map