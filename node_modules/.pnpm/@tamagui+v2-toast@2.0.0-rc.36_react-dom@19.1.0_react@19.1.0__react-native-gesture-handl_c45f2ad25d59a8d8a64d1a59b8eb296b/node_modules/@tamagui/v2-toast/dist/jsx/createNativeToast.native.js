"use strict";

var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
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
var __toCommonJS = mod => __copyProps(__defProp({}, "__esModule", {
  value: !0
}), mod);
var createNativeToast_native_exports = {};
__export(createNativeToast_native_exports, {
  createNativeToast: () => createNativeToast,
  hideNativeToast: () => hideNativeToast
});
module.exports = __toCommonJS(createNativeToast_native_exports);
var import_native = require("@tamagui/native"),
  createNativeToast = function (title, param) {
    var {
        message,
        duration,
        burntOptions
      } = param,
      burnt = (0, import_native.getBurnt)();
    return burnt.isEnabled ? (burnt.state.toast({
      title,
      message,
      duration: duration ? duration / 1e3 : void 0,
      ...burntOptions
    }), !0) : (console.warn("Warning: Must call import '@tamagui/native/setup-burnt' at your app entry point to use native toasts"), !1);
  },
  hideNativeToast = function () {
    var burnt = (0, import_native.getBurnt)();
    burnt.isEnabled && burnt.state.dismissAllAlerts();
  };
//# sourceMappingURL=createNativeToast.native.js.map
