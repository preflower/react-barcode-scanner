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
Object.defineProperty(exports, "__esModule", { value: true });
exports.jsdomAdaptor = exports.JsdomAdaptor = void 0;
var HTMLAdaptor_js_1 = require("./HTMLAdaptor.js");
var Options_js_1 = require("../util/Options.js");
var JsdomAdaptor = (function (_super) {
    __extends(JsdomAdaptor, _super);
    function JsdomAdaptor(window, options) {
        if (options === void 0) { options = null; }
        var _this = _super.call(this, window) || this;
        var CLASS = _this.constructor;
        _this.options = Options_js_1.userOptions(Options_js_1.defaultOptions({}, CLASS.OPTIONS), options);
        return _this;
    }
    JsdomAdaptor.prototype.fontSize = function (_node) {
        return this.options.fontSize;
    };
    JsdomAdaptor.prototype.fontFamily = function (_node) {
        return this.options.fontFamily;
    };
    JsdomAdaptor.prototype.nodeSize = function (node, _em, _local) {
        if (_em === void 0) { _em = 1; }
        if (_local === void 0) { _local = null; }
        var text = this.textContent(node);
        var non = Array.from(text.replace(JsdomAdaptor.cjkPattern, '')).length;
        var CJK = Array.from(text).length - non;
        return [
            CJK * this.options.cjkCharWidth + non * this.options.unknownCharWidth,
            this.options.unknownCharHeight
        ];
    };
    JsdomAdaptor.prototype.nodeBBox = function (_node) {
        return { left: 0, right: 0, top: 0, bottom: 0 };
    };
    JsdomAdaptor.OPTIONS = {
        fontSize: 16,
        fontFamily: 'Times',
        cjkCharWidth: 1,
        unknownCharWidth: .6,
        unknownCharHeight: .8,
    };
    JsdomAdaptor.cjkPattern = new RegExp([
        '[',
        '\u1100-\u115F',
        '\u2329\u232A',
        '\u2E80-\u303E',
        '\u3040-\u3247',
        '\u3250-\u4DBF',
        '\u4E00-\uA4C6',
        '\uA960-\uA97C',
        '\uAC00-\uD7A3',
        '\uF900-\uFAFF',
        '\uFE10-\uFE19',
        '\uFE30-\uFE6B',
        '\uFF01-\uFF60\uFFE0-\uFFE6',
        "\uD82C\uDC00-\uD82C\uDC01",
        "\uD83C\uDE00-\uD83C\uDE51",
        "\uD840\uDC00-\uD8BF\uDFFD",
        ']'
    ].join(''), 'gu');
    return JsdomAdaptor;
}(HTMLAdaptor_js_1.HTMLAdaptor));
exports.JsdomAdaptor = JsdomAdaptor;
function jsdomAdaptor(JSDOM, options) {
    if (options === void 0) { options = null; }
    return new JsdomAdaptor(new JSDOM().window, options);
}
exports.jsdomAdaptor = jsdomAdaptor;
//# sourceMappingURL=jsdomAdaptor.js.map