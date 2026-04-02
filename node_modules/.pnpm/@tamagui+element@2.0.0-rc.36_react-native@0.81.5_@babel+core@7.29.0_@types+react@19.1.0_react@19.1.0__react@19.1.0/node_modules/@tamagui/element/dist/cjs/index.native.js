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
  },
  __reExport = (target, mod, secondTarget) => (__copyProps(target, mod, "default"), secondTarget && __copyProps(secondTarget, mod, "default"));
var __toCommonJS = mod => __copyProps(__defProp({}, "__esModule", {
  value: !0
}), mod);
var index_native_exports = {};
__export(index_native_exports, {
  getWebElement: () => getWebElement,
  useWebRef: () => import_useNativeRef.useNativeRef
});
module.exports = __toCommonJS(index_native_exports);
__reExport(index_native_exports, require("./useNativeRef.native.js"), module.exports);
__reExport(index_native_exports, require("./types.native.js"), module.exports);
var import_useNativeRef = require("./useNativeRef.native.js");
function getWebElement() {
  throw new Error("getWebElement is only available on web");
}
//# sourceMappingURL=index.native.js.map
