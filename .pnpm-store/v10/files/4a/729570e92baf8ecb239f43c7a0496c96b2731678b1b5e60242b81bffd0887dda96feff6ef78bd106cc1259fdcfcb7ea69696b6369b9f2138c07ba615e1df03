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
  React = __toESM(require("react"), 1),
  import_ToastComposable = require("./ToastComposable.native.js"),
  Toaster = /* @__PURE__ */React.forwardRef(function (props, ref) {
    var {
        position = "bottom-right",
        expand = !1,
        visibleToasts,
        gap,
        duration,
        offset,
        hotkey,
        swipeDirection,
        swipeThreshold,
        closeButton,
        theme,
        icons,
        toastOptions,
        containerAriaLabel = "Notifications",
        native,
        burntOptions,
        notificationOptions,
        reducedMotion
      } = props,
      _toastOptions_duration;
    return /* @__PURE__ */(0, import_jsx_runtime.jsx)(import_ToastComposable.Toast, {
      position,
      expand,
      visibleToasts,
      gap,
      duration: (_toastOptions_duration = toastOptions?.duration) !== null && _toastOptions_duration !== void 0 ? _toastOptions_duration : duration,
      swipeDirection,
      swipeThreshold,
      closeButton,
      theme,
      icons,
      native,
      burntOptions,
      notificationOptions,
      reducedMotion,
      children: /* @__PURE__ */(0, import_jsx_runtime.jsx)(import_ToastComposable.Toast.Viewport, {
        ref,
        offset,
        hotkey,
        label: containerAriaLabel,
        children: /* @__PURE__ */(0, import_jsx_runtime.jsx)(import_ToastComposable.Toast.List, {})
      })
    });
  });
Toaster.displayName = "Toaster";
//# sourceMappingURL=Toaster.native.js.map
