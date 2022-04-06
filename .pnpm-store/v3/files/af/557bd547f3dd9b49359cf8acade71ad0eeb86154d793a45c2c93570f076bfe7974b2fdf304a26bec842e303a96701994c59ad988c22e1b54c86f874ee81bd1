"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Usage = void 0;
var Usage = (function () {
    function Usage() {
        this.used = new Set();
        this.needsUpdate = [];
    }
    Usage.prototype.add = function (item) {
        if (!this.used.has(item)) {
            this.needsUpdate.push(item);
        }
        this.used.add(item);
    };
    Usage.prototype.has = function (item) {
        return this.used.has(item);
    };
    Usage.prototype.clear = function () {
        this.used.clear();
        this.needsUpdate = [];
    };
    Usage.prototype.update = function () {
        var update = this.needsUpdate;
        this.needsUpdate = [];
        return update;
    };
    return Usage;
}());
exports.Usage = Usage;
//# sourceMappingURL=Usage.js.map