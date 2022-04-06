"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _context = _interopRequireWildcard(require("../../context"));

var _integrate = require("../../routes/decorator/integrate");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = api => {
  api.describe({
    key: 'navs',
    config: {
      schema(joi) {
        return joi.alternatives([joi.array(), joi.object()]);
      },

      onChange: api.ConfigChangeType.regenerateTmpFiles
    }
  }); // share config with other source module via context

  api.modifyConfig(memo => {
    let navs;

    function navPrefix(items) {
      return items.map(item => // compatible with null item
      item ? _objectSpread(_objectSpread({}, item), {}, {
        path: /^(\w+:)?\/\/|^(mailto|tel):/.test(item.path) ? item.path : (0, _integrate.prefix)(item.path),
        children: item.children ? navPrefix(item.children) : item.children
      }) : item);
    }

    if (_context.default.opts.isIntegrate && memo.navs) {
      // add integrate route prefix
      if (Array.isArray(memo.navs)) {
        // process single locale navs
        navs = navPrefix(memo.navs);
      } else {
        // process multiple locales navs
        navs = {};
        Object.keys(memo.navs).forEach(locale => {
          navs[locale] = navPrefix(memo.navs[locale]);
        });
      }
    } else {
      // use user config
      navs = memo.navs;
    }

    (0, _context.setOptions)('navs', navs);
    return memo;
  });
};

exports.default = _default;