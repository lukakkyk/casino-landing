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
var constants_exports = {};
__export(constants_exports, {
  allPortalHosts: () => allPortalHosts,
  isTeleportEnabled: () => isTeleportEnabled,
  needsPortalRepropagation: () => needsPortalRepropagation,
  portalListeners: () => portalListeners
});
module.exports = __toCommonJS(constants_exports);
var import_constants = require("@tamagui/constants"),
  import_native = require("@tamagui/native"),
  isTeleportEnabled = function () {
    var state = (0, import_native.getPortal)().state;
    return state.enabled && state.type === "teleport";
  },
  needsPortalRepropagation = function () {
    return import_constants.isWeb || isTeleportEnabled() ? !1 : import_constants.isAndroid || import_constants.isIos;
  },
  allPortalHosts = /* @__PURE__ */new Map(),
  portalListeners = {};
//# sourceMappingURL=constants.native.js.map
