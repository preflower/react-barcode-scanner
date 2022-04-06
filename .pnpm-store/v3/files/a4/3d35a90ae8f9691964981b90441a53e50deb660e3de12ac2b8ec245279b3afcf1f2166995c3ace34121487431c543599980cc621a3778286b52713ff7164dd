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
var NodeUtil_js_1 = require("./NodeUtil.js");
var TexConstants_js_1 = require("./TexConstants.js");
var ParseUtil_js_1 = require("./ParseUtil.js");
var ParseMethods;
(function (ParseMethods) {
    function variable(parser, c) {
        var def = ParseUtil_js_1.default.getFontDef(parser);
        if (parser.stack.env.multiLetterIdentifiers && parser.stack.env.font !== '') {
            c = parser.string.substr(parser.i - 1).match(/^[a-z]+/i)[0];
            parser.i += c.length - 1;
            if (def.mathvariant === TexConstants_js_1.TexConstant.Variant.NORMAL) {
                def.autoOP = false;
            }
        }
        var node = parser.create('token', 'mi', def, c);
        parser.Push(node);
    }
    ParseMethods.variable = variable;
    function digit(parser, c) {
        var mml;
        var pattern = parser.configuration.options['digits'];
        var n = parser.string.slice(parser.i - 1).match(pattern);
        var def = ParseUtil_js_1.default.getFontDef(parser);
        if (n) {
            mml = parser.create('token', 'mn', def, n[0].replace(/[{}]/g, ''));
            parser.i += n[0].length - 1;
        }
        else {
            mml = parser.create('token', 'mo', def, c);
        }
        parser.Push(mml);
    }
    ParseMethods.digit = digit;
    function controlSequence(parser, _c) {
        var name = parser.GetCS();
        parser.parse('macro', [parser, name]);
    }
    ParseMethods.controlSequence = controlSequence;
    function mathchar0mi(parser, mchar) {
        var def = mchar.attributes || { mathvariant: TexConstants_js_1.TexConstant.Variant.ITALIC };
        var node = parser.create('token', 'mi', def, mchar.char);
        parser.Push(node);
    }
    ParseMethods.mathchar0mi = mathchar0mi;
    function mathchar0mo(parser, mchar) {
        var def = mchar.attributes || {};
        def['stretchy'] = false;
        var node = parser.create('token', 'mo', def, mchar.char);
        NodeUtil_js_1.default.setProperty(node, 'fixStretchy', true);
        parser.configuration.addNode('fixStretchy', node);
        parser.Push(node);
    }
    ParseMethods.mathchar0mo = mathchar0mo;
    function mathchar7(parser, mchar) {
        var def = mchar.attributes || { mathvariant: TexConstants_js_1.TexConstant.Variant.NORMAL };
        if (parser.stack.env['font']) {
            def['mathvariant'] = parser.stack.env['font'];
        }
        var node = parser.create('token', 'mi', def, mchar.char);
        parser.Push(node);
    }
    ParseMethods.mathchar7 = mathchar7;
    function delimiter(parser, delim) {
        var def = delim.attributes || {};
        def = Object.assign({ fence: false, stretchy: false }, def);
        var node = parser.create('token', 'mo', def, delim.char);
        parser.Push(node);
    }
    ParseMethods.delimiter = delimiter;
    function environment(parser, env, func, args) {
        var end = args[0];
        var mml = parser.itemFactory.create('begin').setProperties({ name: env, end: end });
        mml = func.apply(void 0, __spreadArray([parser, mml], __read(args.slice(1))));
        parser.Push(mml);
    }
    ParseMethods.environment = environment;
})(ParseMethods || (ParseMethods = {}));
exports.default = ParseMethods;
//# sourceMappingURL=ParseMethods.js.map