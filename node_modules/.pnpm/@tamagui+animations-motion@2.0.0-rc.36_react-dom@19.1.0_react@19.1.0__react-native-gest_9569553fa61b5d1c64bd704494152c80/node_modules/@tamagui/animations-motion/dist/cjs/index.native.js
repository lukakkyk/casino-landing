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
var index_native_exports = {};
__export(index_native_exports, {
  createAnimations: () => createAnimations
});
module.exports = __toCommonJS(index_native_exports);
var hasWarnedOnce = !1;
function createAnimations(_animations) {
  return process.env.NODE_ENV === "development" && (hasWarnedOnce || (hasWarnedOnce = !0, console.warn("[@tamagui/animations-motion] This animation driver only works on web. On native, use @tamagui/animations-react-native or @tamagui/animations-reanimated instead."))), {
    isReactNative: !1,
    animations: _animations,
    View: void 0,
    Text: void 0
  };
}
//# sourceMappingURL=index.native.js.map
