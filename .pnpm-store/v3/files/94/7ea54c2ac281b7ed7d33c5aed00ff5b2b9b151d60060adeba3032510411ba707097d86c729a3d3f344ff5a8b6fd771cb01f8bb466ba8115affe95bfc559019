"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LazyHandler = exports.LazyMathDocumentMixin = exports.LazyMathItemMixin = exports.LAZYID = exports.LazyList = void 0;
var MathItem_js_1 = require("../../core/MathItem.js");
var Retries_js_1 = require("../../util/Retries.js");
var LazyList = (function () {
    function LazyList() {
        this.id = 0;
        this.items = new Map();
    }
    LazyList.prototype.add = function (math) {
        var id = String(this.id++);
        this.items.set(id, math);
        return id;
    };
    LazyList.prototype.get = function (id) {
        return this.items.get(id);
    };
    LazyList.prototype.delete = function (id) {
        return this.items.delete(id);
    };
    return LazyList;
}());
exports.LazyList = LazyList;
exports.LAZYID = 'data-mjx-lazy';
function LazyMathItemMixin(BaseMathItem) {
    return (function (_super) {
        __extends(class_1, _super);
        function class_1() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var _this = _super.apply(this, __spreadArray([], __read(args))) || this;
            _this.lazyCompile = true;
            _this.lazyTypeset = true;
            _this.lazyTex = false;
            if (!_this.end.node) {
                _this.lazyCompile = _this.lazyTypeset = false;
            }
            return _this;
        }
        class_1.prototype.compile = function (document) {
            if (!this.lazyCompile) {
                _super.prototype.compile.call(this, document);
                return;
            }
            if (this.state() < MathItem_js_1.STATE.COMPILED) {
                this.lazyTex = (this.inputJax.name === 'TeX');
                this.root = document.mmlFactory.create('math');
                this.state(MathItem_js_1.STATE.COMPILED);
            }
        };
        class_1.prototype.typeset = function (document) {
            var _a;
            if (!this.lazyTypeset) {
                _super.prototype.typeset.call(this, document);
                return;
            }
            if (this.state() < MathItem_js_1.STATE.TYPESET) {
                var adaptor = document.adaptor;
                if (!this.lazyMarker) {
                    var id = document.lazyList.add(this);
                    this.lazyMarker = adaptor.node('mjx-lazy', (_a = {}, _a[exports.LAZYID] = id, _a));
                    this.typesetRoot = adaptor.node('mjx-container', {}, [this.lazyMarker]);
                }
                this.state(MathItem_js_1.STATE.TYPESET);
            }
        };
        class_1.prototype.updateDocument = function (document) {
            _super.prototype.updateDocument.call(this, document);
            if (this.lazyTypeset) {
                document.lazyObserver.observe(this.lazyMarker);
            }
        };
        class_1.prototype.state = function (state, restore) {
            if (state === void 0) { state = undefined; }
            if (restore === void 0) { restore = false; }
            return (restore === null ? this._state : _super.prototype.state.call(this, state, restore));
        };
        return class_1;
    }(BaseMathItem));
}
exports.LazyMathItemMixin = LazyMathItemMixin;
function LazyMathDocumentMixin(BaseDocument) {
    return (function (_super) {
        __extends(BaseClass, _super);
        function BaseClass() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var _this = _super.apply(this, __spreadArray([], __read(args))) || this;
            _this.lazyPromise = Promise.resolve();
            _this.lazyIdle = false;
            _this.lazySet = new Set();
            _this.options.MathItem =
                LazyMathItemMixin(_this.options.MathItem);
            _this.lazyObserver = new IntersectionObserver(_this.lazyObserve.bind(_this));
            _this.lazyList = new LazyList();
            var callback = _this.lazyHandleSet.bind(_this);
            _this.lazyProcessSet = (typeof window !== 'undefined' && window.requestIdleCallback ?
                function () { return window.requestIdleCallback(callback); } :
                function () { return setTimeout(callback, 10); });
            return _this;
        }
        BaseClass.prototype.lazyObserve = function (entries) {
            var e_1, _a;
            try {
                for (var entries_1 = __values(entries), entries_1_1 = entries_1.next(); !entries_1_1.done; entries_1_1 = entries_1.next()) {
                    var entry = entries_1_1.value;
                    var id = this.adaptor.getAttribute(entry.target, exports.LAZYID);
                    var math = this.lazyList.get(id);
                    if (!math)
                        continue;
                    if (!entry.isIntersecting) {
                        this.lazySet.delete(id);
                        continue;
                    }
                    this.lazySet.add(id);
                    if (!this.lazyIdle) {
                        this.lazyIdle = true;
                        this.lazyProcessSet();
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (entries_1_1 && !entries_1_1.done && (_a = entries_1.return)) _a.call(entries_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
        };
        BaseClass.prototype.lazyHandleSet = function () {
            var _this = this;
            var set = this.lazySet;
            this.lazySet = new Set();
            this.lazyPromise = this.lazyPromise.then(function () {
                var state = _this.compileEarlierItems(set) ? MathItem_js_1.STATE.COMPILED : MathItem_js_1.STATE.TYPESET;
                state = _this.resetStates(set, state);
                _this.state(state - 1, null);
                return Retries_js_1.handleRetriesFor(function () {
                    _this.render();
                    _this.lazyIdle = false;
                });
            });
        };
        BaseClass.prototype.resetStates = function (set, state) {
            var e_2, _a;
            try {
                for (var _b = __values(set.values()), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var id = _c.value;
                    var math = this.lazyList.get(id);
                    if (math.lazyCompile) {
                        math.state(MathItem_js_1.STATE.COMPILED - 1);
                        state = MathItem_js_1.STATE.COMPILED;
                    }
                    else {
                        math.state(MathItem_js_1.STATE.TYPESET - 1);
                    }
                    math.lazyCompile = math.lazyTypeset = false;
                    math.lazyMarker && this.lazyObserver.unobserve(math.lazyMarker);
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_2) throw e_2.error; }
            }
            return state;
        };
        BaseClass.prototype.compileEarlierItems = function (set) {
            var e_3, _a;
            var math = this.earliestTex(set);
            if (!math)
                return false;
            var compile = false;
            try {
                for (var _b = __values(this.math), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var item = _c.value;
                    var earlier = item;
                    if (earlier === math || !(earlier === null || earlier === void 0 ? void 0 : earlier.lazyCompile)) {
                        break;
                    }
                    earlier.lazyCompile = false;
                    earlier.lazyMarker && this.lazyObserver.unobserve(earlier.lazyMarker);
                    earlier.state(MathItem_js_1.STATE.COMPILED - 1);
                    compile = true;
                }
            }
            catch (e_3_1) { e_3 = { error: e_3_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_3) throw e_3.error; }
            }
            return compile;
        };
        BaseClass.prototype.earliestTex = function (set) {
            var e_4, _a;
            var min = null;
            var minMath = null;
            try {
                for (var _b = __values(set.values()), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var id = _c.value;
                    var math = this.lazyList.get(id);
                    if (!math.lazyTex)
                        continue;
                    if (min === null || parseInt(id) < min) {
                        min = parseInt(id);
                        minMath = math;
                    }
                }
            }
            catch (e_4_1) { e_4 = { error: e_4_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_4) throw e_4.error; }
            }
            return minMath;
        };
        BaseClass.prototype.clearMathItemsWithin = function (containers) {
            var e_5, _a;
            var items = _super.prototype.clearMathItemsWithin.call(this, containers);
            try {
                for (var items_1 = __values(items), items_1_1 = items_1.next(); !items_1_1.done; items_1_1 = items_1.next()) {
                    var math = items_1_1.value;
                    var marker = math.lazyMarker;
                    if (marker) {
                        this.lazyObserver.unobserve(marker);
                        this.lazyList.delete(this.adaptor.getAttribute(marker, exports.LAZYID));
                    }
                }
            }
            catch (e_5_1) { e_5 = { error: e_5_1 }; }
            finally {
                try {
                    if (items_1_1 && !items_1_1.done && (_a = items_1.return)) _a.call(items_1);
                }
                finally { if (e_5) throw e_5.error; }
            }
            return items;
        };
        return BaseClass;
    }(BaseDocument));
}
exports.LazyMathDocumentMixin = LazyMathDocumentMixin;
function LazyHandler(handler) {
    if (typeof IntersectionObserver !== 'undefined') {
        handler.documentClass =
            LazyMathDocumentMixin(handler.documentClass);
    }
    return handler;
}
exports.LazyHandler = LazyHandler;
//# sourceMappingURL=LazyHandler.js.map