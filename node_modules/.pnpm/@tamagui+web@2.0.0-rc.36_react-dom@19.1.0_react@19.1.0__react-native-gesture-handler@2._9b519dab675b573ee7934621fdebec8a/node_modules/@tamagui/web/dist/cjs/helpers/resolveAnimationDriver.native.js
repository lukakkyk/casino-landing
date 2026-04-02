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
var resolveAnimationDriver_exports = {};
__export(resolveAnimationDriver_exports, {
  resolveAnimationDriver: () => resolveAnimationDriver
});
module.exports = __toCommonJS(resolveAnimationDriver_exports);
function resolveAnimationDriver(driver) {
  var _driver_default;
  return driver ? typeof driver.useAnimations == "function" ? driver : "default" in driver && typeof ((_driver_default = driver.default) === null || _driver_default === void 0 ? void 0 : _driver_default.useAnimations) == "function" ? driver.default : null : null;
}
//# sourceMappingURL=resolveAnimationDriver.native.js.map
