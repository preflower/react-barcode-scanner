"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _react() {
  const data = require("react");

  _react = function _react() {
    return data;
  };

  return data;
}

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 * transform props by current locale
 * @note  such as title.zh-CN => title
 */
var _default = (locale, props) => {
  const processor = (...args) => {
    const result = {};
    Object.keys(args[1]).forEach(key => {
      const _slice = (key.match(/^(.+)\.([^_]+)$/) || []).slice(1),
            _slice2 = _slicedToArray(_slice, 2),
            name = _slice2[0],
            keyLocale = _slice2[1];

      if (!keyLocale || keyLocale === args[0]) {
        result[name || key] = args[1][key];
      }
    });
    return result;
  };

  const _useState = (0, _react().useState)(processor(locale, props)),
        _useState2 = _slicedToArray(_useState, 2),
        localeProps = _useState2[0],
        setLocaleProps = _useState2[1];

  (0, _react().useEffect)(() => {
    setLocaleProps(processor(locale, props));
  }, [locale, props]);
  return localeProps;
};

exports.default = _default;