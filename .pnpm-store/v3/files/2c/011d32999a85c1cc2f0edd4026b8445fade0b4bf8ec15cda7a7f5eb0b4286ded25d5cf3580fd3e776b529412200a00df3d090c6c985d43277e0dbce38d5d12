"use strict";
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LiteList = void 0;
var LiteList = (function () {
    function LiteList(children) {
        this.nodes = [];
        this.nodes = __spreadArray([], __read(children));
    }
    LiteList.prototype.append = function (node) {
        this.nodes.push(node);
    };
    LiteList.prototype[Symbol.iterator] = function () {
        var i = 0;
        return {
            next: function () {
                return (i === this.nodes.length ?
                    { value: null, done: true } :
                    { value: this.nodes[i++], done: false });
            }
        };
    };
    return LiteList;
}());
exports.LiteList = LiteList;
//# sourceMappingURL=List.js.map