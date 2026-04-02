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
var constants_native_exports = {};
__export(constants_native_exports, {
  currentPlatform: () => currentPlatform,
  isAndroid: () => isAndroid,
  isBrowser: () => isBrowser,
  isChrome: () => isChrome,
  isClient: () => isClient,
  isIos: () => isIos,
  isServer: () => isServer,
  isTouchable: () => isTouchable,
  isWeb: () => isWeb,
  isWebTouchable: () => isWebTouchable,
  isWindowDefined: () => isWindowDefined,
  useIsomorphicLayoutEffect: () => useIsomorphicLayoutEffect
});
module.exports = __toCommonJS(constants_native_exports);
var import_react = require("react"),
  import_react_native = require("react-native"),
  isWeb = !1,
  isBrowser = !1,
  isServer = !1,
  isClient = !0,
  isWindowDefined = !1,
  useIsomorphicLayoutEffect = import_react.useLayoutEffect,
  isChrome = !1,
  isWebTouchable = !1,
  isTouchable = !0,
  isAndroid = (import_react_native.Platform === null || import_react_native.Platform === void 0 ? void 0 : import_react_native.Platform.OS) === "android" || process.env.TEST_NATIVE_PLATFORM === "android",
  isIos = (import_react_native.Platform === null || import_react_native.Platform === void 0 ? void 0 : import_react_native.Platform.OS) === "ios" || process.env.TEST_NATIVE_PLATFORM === "ios",
  platforms = {
    ios: "ios",
    android: "android"
  },
  currentPlatform = (!(import_react_native.Platform === null || import_react_native.Platform === void 0) && import_react_native.Platform.OS ? platforms[import_react_native.Platform.OS] : void 0) || "native";
//# sourceMappingURL=constants.native.js.map
