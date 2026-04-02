"use strict";

var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf,
  __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
    for (var name in all) __defProp(target, name, {
      get: all[name],
      enumerable: !0
    });
  },
  __copyProps = (to, from, except, desc) => {
    if (from && typeof from == "object" || typeof from == "function") for (let key of __getOwnPropNames(from)) !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, {
      get: () => from[key],
      enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
    });
    return to;
  };
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
    value: mod,
    enumerable: !0
  }) : target, mod)),
  __toCommonJS = mod => __copyProps(__defProp({}, "__esModule", {
    value: !0
  }), mod);
var Toaster_exports = {};
__export(Toaster_exports, {
  Toaster: () => Toaster
});
module.exports = __toCommonJS(Toaster_exports);
var import_jsx_runtime = require("react/jsx-runtime"),
  import_animate_presence = require("@tamagui/animate-presence"),
  import_constants = require("@tamagui/constants"),
  import_core = require("@tamagui/core"),
  import_portal = require("@tamagui/portal"),
  React = __toESM(require("react"), 1),
  import_ToastItem = require("./ToastItem.native.js"),
  import_ToastState = require("./ToastState.native.js");
function _type_of(obj) {
  "@swc/helpers - typeof";

  return obj && typeof Symbol < "u" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
var VISIBLE_TOASTS_AMOUNT = 4,
  VIEWPORT_OFFSET = 16,
  TOAST_GAP = 14,
  TOAST_LIFETIME = 4e3,
  TOAST_WIDTH = 356,
  ToasterFrame = (0, import_core.styled)(import_core.View, {
    name: "Toaster",
    variants: {
      unstyled: {
        false: {
          position: "fixed",
          zIndex: 1e5,
          pointerEvents: "box-none",
          maxWidth: "100%",
          // need min-height to contain absolutely positioned toasts
          // toasts will overflow upward/downward from their anchor position
          minHeight: 1
        }
      }
    },
    defaultVariants: {
      unstyled: process.env.TAMAGUI_HEADLESS === "1"
    }
  }),
  Toaster = /* @__PURE__ */React.forwardRef(function (props, _ref) {
    var {
        position = "bottom-right",
        width = TOAST_WIDTH,
        expand = !1,
        visibleToasts = VISIBLE_TOASTS_AMOUNT,
        gap = TOAST_GAP,
        duration = TOAST_LIFETIME,
        offset = VIEWPORT_OFFSET,
        hotkey = ["altKey", "KeyT"],
        swipeDirection = "right",
        swipeThreshold = 50,
        closeButton = !1,
        theme: themeProp,
        icons,
        toastOptions,
        containerAriaLabel = "Notifications",
        disableNative = !1,
        burntOptions,
        notificationOptions,
        className,
        style
      } = props,
      [toasts, setToasts] = React.useState([]),
      [heights, setHeights] = React.useState([]),
      [expanded, setExpanded] = React.useState(!1),
      [interacting, setInteracting] = React.useState(!1),
      listRef = React.useRef(null),
      lastFocusedElementRef = React.useRef(null),
      isFocusWithinRef = React.useRef(!1);
    React.useEffect(function () {
      return import_ToastState.ToastState.subscribe(function (toast) {
        if (toast.dismiss) {
          setToasts(function (toasts2) {
            return toasts2.map(function (t) {
              return t.id === toast.id ? {
                ...t,
                delete: !0
              } : t;
            });
          });
          return;
        }
        setToasts(function (toasts2) {
          var indexOfExistingToast = toasts2.findIndex(function (t) {
            return t.id === toast.id;
          });
          return indexOfExistingToast !== -1 ? [...toasts2.slice(0, indexOfExistingToast), {
            ...toasts2[indexOfExistingToast],
            ...toast
          }, ...toasts2.slice(indexOfExistingToast + 1)] : [toast, ...toasts2];
        });
      });
    }, []), React.useEffect(function () {
      toasts.length <= 1 && setExpanded(!1);
    }, [toasts.length]), React.useEffect(function () {
      if (import_constants.isWeb) {
        var handleKeyDown = function (event) {
          var _listRef_current,
            isHotkeyPressed = hotkey.length > 0 && hotkey.every(function (key) {
              return event[key] || event.code === key;
            });
          if (isHotkeyPressed) {
            var _listRef_current1;
            setExpanded(!0), (_listRef_current1 = listRef.current) === null || _listRef_current1 === void 0 || _listRef_current1.focus();
          }
          event.code === "Escape" && (document.activeElement === listRef.current || !((_listRef_current = listRef.current) === null || _listRef_current === void 0) && _listRef_current.contains(document.activeElement)) && setExpanded(!1);
        };
        return document.addEventListener("keydown", handleKeyDown), function () {
          return document.removeEventListener("keydown", handleKeyDown);
        };
      }
    }, [hotkey]), React.useEffect(function () {
      if (!(!import_constants.isWeb || !listRef.current)) return function () {
        lastFocusedElementRef.current && (lastFocusedElementRef.current.focus({
          preventScroll: !0
        }), lastFocusedElementRef.current = null, isFocusWithinRef.current = !1);
      };
    }, []);
    var removeToast = React.useCallback(function (toastToRemove) {
        setToasts(function (toasts2) {
          var _toasts_find;
          return !((_toasts_find = toasts2.find(function (toast) {
            return toast.id === toastToRemove.id;
          })) === null || _toasts_find === void 0) && _toasts_find.delete || import_ToastState.ToastState.dismiss(toastToRemove.id), toasts2.filter(function (param) {
            var {
              id
            } = param;
            return id !== toastToRemove.id;
          });
        });
      }, []),
      [yPosition, xPosition] = position.split("-"),
      offsetStyles = React.useMemo(function () {
        var styles = {},
          defaultOffset = typeof offset == "number" ? offset : VIEWPORT_OFFSET,
          offsetObj = (typeof offset > "u" ? "undefined" : _type_of(offset)) === "object" ? offset : {
            top: defaultOffset,
            right: defaultOffset,
            bottom: defaultOffset,
            left: defaultOffset
          };
        if (yPosition === "top") {
          var _offsetObj_top;
          styles.top = (_offsetObj_top = offsetObj.top) !== null && _offsetObj_top !== void 0 ? _offsetObj_top : defaultOffset;
        } else {
          var _offsetObj_bottom;
          styles.bottom = (_offsetObj_bottom = offsetObj.bottom) !== null && _offsetObj_bottom !== void 0 ? _offsetObj_bottom : defaultOffset;
        }
        if (xPosition === "left") {
          var _offsetObj_left;
          styles.left = (_offsetObj_left = offsetObj.left) !== null && _offsetObj_left !== void 0 ? _offsetObj_left : defaultOffset;
        } else if (xPosition === "right") {
          var _offsetObj_right;
          styles.right = (_offsetObj_right = offsetObj.right) !== null && _offsetObj_right !== void 0 ? _offsetObj_right : defaultOffset;
        } else styles.left = "50%", styles.transform = "translateX(-50%)";
        return styles;
      }, [offset, yPosition, xPosition]),
      currentTheme = (0, import_core.useThemeName)(),
      resolvedTheme = themeProp === "system" || !themeProp ? currentTheme?.includes("dark") ? "dark" : "light" : themeProp,
      hotkeyLabel = hotkey.join("+").replace(/Key/g, "").replace(/Digit/g, "");
    if (toasts.length === 0) return null;
    var content = /* @__PURE__ */(0, import_jsx_runtime.jsx)(ToasterFrame, {
      ref: listRef,
      width,
      "aria-label": `${containerAriaLabel} ${hotkeyLabel}`,
      tabIndex: -1,
      "aria-live": "polite",
      "aria-relevant": "additions text",
      "aria-atomic": !1,
      style: {
        ...offsetStyles,
        ...style
      },
      className,
      "data-y-position": yPosition,
      "data-x-position": xPosition,
      onMouseEnter: function () {
        return setExpanded(!0);
      },
      onMouseMove: function () {
        return setExpanded(!0);
      },
      onMouseLeave: function () {
        interacting || setExpanded(!1);
      },
      onPointerDown: function () {
        return setInteracting(!0);
      },
      onPointerUp: function () {
        return setInteracting(!1);
      },
      ...(import_constants.isWeb && {
        onBlur: function (event) {
          isFocusWithinRef.current && !event.currentTarget.contains(event.relatedTarget) && (isFocusWithinRef.current = !1, lastFocusedElementRef.current && (lastFocusedElementRef.current.focus({
            preventScroll: !0
          }), lastFocusedElementRef.current = null));
        },
        onFocus: function (event) {
          isFocusWithinRef.current || (isFocusWithinRef.current = !0, lastFocusedElementRef.current = event.relatedTarget);
        }
      }),
      children: /* @__PURE__ */(0, import_jsx_runtime.jsx)(import_animate_presence.AnimatePresence, {
        children: toasts.map(function (toast, index) {
          var isVisible = index < visibleToasts,
            isFront = index === 0,
            _toast_duration,
            _ref2,
            _toast_closeButton;
          return /* @__PURE__ */(0, import_jsx_runtime.jsx)(import_ToastItem.ToastItem, {
            toast,
            index,
            expanded: expanded || expand,
            interacting,
            position,
            visibleToasts,
            removeToast,
            heights,
            setHeights,
            duration: (_ref2 = (_toast_duration = toast.duration) !== null && _toast_duration !== void 0 ? _toast_duration : toastOptions?.duration) !== null && _ref2 !== void 0 ? _ref2 : duration,
            gap,
            swipeDirection,
            swipeThreshold,
            closeButton: (_toast_closeButton = toast.closeButton) !== null && _toast_closeButton !== void 0 ? _toast_closeButton : closeButton,
            icons,
            disableNative,
            burntOptions,
            notificationOptions
          }, toast.id);
        })
      })
    });
    return import_constants.isWeb ? /* @__PURE__ */(0, import_jsx_runtime.jsx)(import_portal.Portal, {
      children: /* @__PURE__ */(0, import_jsx_runtime.jsx)(import_core.Theme, {
        name: resolvedTheme,
        children: content
      })
    }) : /* @__PURE__ */(0, import_jsx_runtime.jsx)(import_core.Theme, {
      name: resolvedTheme,
      children: content
    });
  });
Toaster.displayName = "Toaster";
//# sourceMappingURL=Toaster.native.js.map
