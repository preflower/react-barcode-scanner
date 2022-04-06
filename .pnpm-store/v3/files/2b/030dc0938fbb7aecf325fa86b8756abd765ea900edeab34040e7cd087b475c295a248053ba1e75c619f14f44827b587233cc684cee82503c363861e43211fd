"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = sourceCode;

function _unistUtilVisit() {
  const data = _interopRequireDefault(require("unist-util-visit"));

  _unistUtilVisit = function _unistUtilVisit() {
    return data;
  };

  return data;
}

function _hastUtilToString() {
  const data = _interopRequireDefault(require("hast-util-to-string"));

  _hastUtilToString = function _hastUtilToString() {
    return data;
  };

  return data;
}

function _hastUtilRaw() {
  const data = _interopRequireDefault(require("hast-util-raw"));

  _hastUtilRaw = function _hastUtilRaw() {
    return data;
  };

  return data;
}

function _utils() {
  const data = require("@umijs/utils");

  _utils = function _utils() {
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

function createSourceCode(lang, code, position) {
  return {
    type: 'element',
    tagName: 'SourceCode',
    position,
    properties: {
      // use wrapper element to workaround for skip props escape
      // https://github.com/mapbox/jsxtreme-markdown/blob/main/packages/hast-util-to-jsx/index.js#L159
      // eslint-disable-next-line no-new-wrappers
      code: new String(JSON.stringify(code)),
      lang: lang || 'unknown'
    }
  };
}
/**
 * rehype plugin for convert code block to SourceCode compomnent
 */


function sourceCode() {
  return ast => {
    // handle md code block syntax
    (0, _unistUtilVisit().default)(ast, 'element', (node, i, parent) => {
      var _node$children, _node$children$;

      if (node.tagName === 'pre' && ((_node$children = node.children) === null || _node$children === void 0 ? void 0 : (_node$children$ = _node$children[0]) === null || _node$children$ === void 0 ? void 0 : _node$children$.tagName) === 'code') {
        var _cls$join$match;

        const cls = node.children[0].properties.className || [];
        const lang = ((_cls$join$match = cls.join('').match(/language-(\w+)(?:$| )/)) === null || _cls$join$match === void 0 ? void 0 : _cls$join$match[1]) || 'unknown';
        parent.children.splice(i, 1, createSourceCode(lang, (0, _utils().winEOL)((0, _hastUtilToString().default)(node.children[0]).trim()), node.position));
      }
    }); // handle pre tag syntax

    (0, _unistUtilVisit().default)(ast, 'raw', (node, i, parent) => {
      if (/^<pre/.test(node.value)) {
        const parsed = (0, _hastUtilRaw().default)(node);

        if (parsed.tagName === 'pre') {
          const _ref = (0, _utils().winEOL)(node.value).match(/^<pre[^>]*>\n?([^]*?)<\/pre>$/) || [],
                _ref2 = _slicedToArray(_ref, 2),
                content = _ref2[1];

          if (content) {
            parent.children.splice(i, 1, createSourceCode(parsed.properties.lang, content.trim(), node.position));
          }
        }
      }
    });
  };
}