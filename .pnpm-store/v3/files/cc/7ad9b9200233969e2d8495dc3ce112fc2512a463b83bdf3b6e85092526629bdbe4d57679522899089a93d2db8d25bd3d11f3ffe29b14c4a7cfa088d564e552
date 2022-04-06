"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getInstance = void 0;
const load_1 = require("./load");
let inst = null;
let instPromise = (async () => {
    inst = await (0, load_1.loadWasmInstance)({});
    if (!inst) {
        throw Error('WASM was not loaded');
    }
    return inst;
})();
const getInstance = async () => {
    return await instPromise;
};
exports.getInstance = getInstance;
//# sourceMappingURL=instance.js.map