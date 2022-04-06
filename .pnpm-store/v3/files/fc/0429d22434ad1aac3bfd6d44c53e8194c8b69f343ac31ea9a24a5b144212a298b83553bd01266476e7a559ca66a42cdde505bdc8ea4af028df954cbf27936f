"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _path() {
  const data = _interopRequireDefault(require("path"));

  _path = function _path() {
    return data;
  };

  return data;
}

function _deepmerge() {
  const data = _interopRequireDefault(require("deepmerge"));

  _deepmerge = function _deepmerge() {
    return data;
  };

  return data;
}

var _getFrontMatter = _interopRequireDefault(require("../getFrontMatter"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * read frontmatters from route component content
 */
var frontmatter = function frontmatter(routes) {
  return routes.map(route => {
    const frontMatter = typeof route.component === 'string' ? (0, _getFrontMatter.default)(_path().default.join(this.umi.paths.cwd, route.component)) : {};
    return _objectSpread(_objectSpread({}, route), {}, {
      meta: (0, _deepmerge().default)(frontMatter, route.meta || {})
    });
  });
};

exports.default = frontmatter;