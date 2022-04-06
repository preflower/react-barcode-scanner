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

const COLOR_ATTR_NAME = 'data-prefers-color';
const COLOR_LS_NAME = 'dumi:prefers-color';
let colorChanger;

class ColorChanger {
  /**
   * current color
   * @note  initial value from head script in src/plugins/theme.ts
   */

  /**
   * color change callbacks
   */
  constructor() {
    this.color = void 0;
    this.callbacks = [];
    this.color = localStorage.getItem(COLOR_LS_NAME) || document.documentElement.getAttribute(COLOR_ATTR_NAME); // listen prefers color change

    ['light', 'dark'].forEach(color => {
      const mediaQueryList = this.getColorMedia(color);

      const handler = ev => {
        // only apply media prefers color in auto mode
        if (ev.matches && this.color === 'auto') {
          document.documentElement.setAttribute(COLOR_ATTR_NAME, color);
          this.applyCallbacks();
        }
      }; // compatible with Safari 13-

      /* istanbul ignore else */


      if (mediaQueryList.addEventListener) {
        mediaQueryList.addEventListener('change', handler);
      } else if (mediaQueryList.addListener) {
        mediaQueryList.addListener(handler);
      }
    });
  }
  /**
   * get media instance for prefers color
   * @param color   prefers color
   */


  getColorMedia(color) {
    return window.matchMedia(`(prefers-color-scheme: ${color})`);
  }
  /**
   * detect color whether matches current color mode
   * @param color   expected color
   */


  isColorMode(color) {
    return this.getColorMedia(color).matches;
  }
  /**
   * apply all event change callbacks
   */


  applyCallbacks() {
    this.callbacks.forEach(cb => cb(this.color));
  }
  /**
   * listen color change
   * @param cb  callback
   */


  listen(cb) {
    this.callbacks.push(cb);
  }
  /**
   * unlisten color change
   * @param cb  callback
   */


  unlisten(cb) {
    this.callbacks.splice(this.callbacks.indexOf(cb), 1);
  }
  /**
   * set prefers color
   */


  set(color) {
    this.color = color;
    localStorage.setItem(COLOR_LS_NAME, color);
    this.applyCallbacks();

    if (color === 'auto') {
      document.documentElement.setAttribute(COLOR_ATTR_NAME, this.isColorMode('dark') ? 'dark' : 'light');
    } else {
      document.documentElement.setAttribute(COLOR_ATTR_NAME, color);
    }

    return color;
  }

}
/**
 * hook for get/set prefers-color-schema, use to control color mode for theme package
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme
 */


var _default = () => {
  const _useState = (0, _react().useState)(),
        _useState2 = _slicedToArray(_useState, 2),
        color = _useState2[0],
        setColor = _useState2[1];

  const changeColor = (0, _react().useCallback)(val => {
    colorChanger.set(val);
  }, []);
  (0, _react().useEffect)(() => {
    // lazy initialize, for SSR
    colorChanger = colorChanger || new ColorChanger();
    colorChanger.listen(setColor);
    setColor(colorChanger.color);
    return () => colorChanger.unlisten(setColor);
  }, []);
  return [color, changeColor];
};

exports.default = _default;