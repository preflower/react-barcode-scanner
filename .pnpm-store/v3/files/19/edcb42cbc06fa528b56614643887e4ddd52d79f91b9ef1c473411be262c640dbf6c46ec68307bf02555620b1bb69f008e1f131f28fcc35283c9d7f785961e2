"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useAccessibility;

var React = _interopRequireWildcard(require("react"));

var _KeyCode = _interopRequireDefault(require("rc-util/lib/KeyCode"));

var ESC = _KeyCode.default.ESC,
    TAB = _KeyCode.default.TAB;

function useAccessibility(_ref) {
  var visible = _ref.visible,
      setTriggerVisible = _ref.setTriggerVisible,
      triggerRef = _ref.triggerRef,
      menuRef = _ref.menuRef,
      onVisibleChange = _ref.onVisibleChange;

  var handleCloseMenuAndReturnFocus = function handleCloseMenuAndReturnFocus() {
    if (visible && triggerRef.current) {
      if (triggerRef.current.triggerRef.current) {
        triggerRef.current.triggerRef.current.focus();
      }

      setTriggerVisible(false);

      if (typeof onVisibleChange === 'function') {
        onVisibleChange(false);
      }
    }
  };

  var handleKeyDown = function handleKeyDown(event) {
    switch (event.keyCode) {
      case ESC:
        handleCloseMenuAndReturnFocus();
        break;

      case TAB:
        handleCloseMenuAndReturnFocus();
        break;
    }
  };

  var focusOpenedMenu = function focusOpenedMenu() {
    var _menuRef$current, _menuRef$current$focu;

    (_menuRef$current = menuRef.current) === null || _menuRef$current === void 0 ? void 0 : (_menuRef$current$focu = _menuRef$current.focus) === null || _menuRef$current$focu === void 0 ? void 0 : _menuRef$current$focu.call(_menuRef$current);
  };

  React.useEffect(function () {
    if (visible) {
      setTimeout(function () {
        focusOpenedMenu();
        window.addEventListener('keydown', handleKeyDown);
      }, 100);
      return function () {
        window.removeEventListener('keydown', handleKeyDown);
      };
    }

    return function () {
      return null;
    };
  }, [visible]); // eslint-disable-line react-hooks/exhaustive-deps

  var returnFocus = function returnFocus() {
    if (visible && triggerRef.current) {
      if (triggerRef.current.triggerRef.current) {
        setTimeout(function () {
          var _triggerRef$current, _triggerRef$current$t, _triggerRef$current$t2;

          (_triggerRef$current = triggerRef.current) === null || _triggerRef$current === void 0 ? void 0 : (_triggerRef$current$t = _triggerRef$current.triggerRef) === null || _triggerRef$current$t === void 0 ? void 0 : (_triggerRef$current$t2 = _triggerRef$current$t.current) === null || _triggerRef$current$t2 === void 0 ? void 0 : _triggerRef$current$t2.focus();
        }, 100);
      }
    }
  };

  return {
    returnFocus: returnFocus
  };
}