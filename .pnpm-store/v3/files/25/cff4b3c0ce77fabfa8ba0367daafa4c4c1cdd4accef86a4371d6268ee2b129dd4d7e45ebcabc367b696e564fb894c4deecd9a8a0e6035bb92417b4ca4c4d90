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

function _copyTextToClipboard() {
  const data = _interopRequireDefault(require("copy-text-to-clipboard"));

  _copyTextToClipboard = function _copyTextToClipboard() {
    return data;
  };

  return data;
}

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 * use to copy text into clipboard
 */
var _default = () => {
  const _useState = (0, _react().useState)(),
        _useState2 = _slicedToArray(_useState, 2),
        timer = _useState2[0],
        setTimer = _useState2[1];

  const _useState3 = (0, _react().useState)('ready'),
        _useState4 = _slicedToArray(_useState3, 2),
        status = _useState4[0],
        setStatus = _useState4[1];

  const handler = (0, _react().useCallback)(text => {
    (0, _copyTextToClipboard().default)(text);
    setStatus('copied'); // reset status after 2000ms

    clearTimeout(timer);
    setTimer(setTimeout(() => {
      setStatus('ready');
    }, 2000));
  }, []);
  return [handler, status];
};

exports.default = _default;