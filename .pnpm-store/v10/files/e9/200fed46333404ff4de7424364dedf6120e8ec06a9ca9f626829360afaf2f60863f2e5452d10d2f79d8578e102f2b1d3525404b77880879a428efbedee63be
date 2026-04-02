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
var Portal_native_exports = {};
__export(Portal_native_exports, {
  Portal: () => Portal
});
module.exports = __toCommonJS(Portal_native_exports);
var import_jsx_runtime = require("react/jsx-runtime"),
  import_core = require("@tamagui/core"),
  import_native = require("@tamagui/native"),
  import_z_index_stack = require("@tamagui/z-index-stack"),
  import_GorhomPortalItem = require("./GorhomPortalItem.native.js"),
  import_helpers = require("./helpers.native.js"),
  Portal = function (propsIn) {
    var zIndex = (0, import_z_index_stack.useStackedZIndex)((0, import_helpers.getStackedZIndexProps)(propsIn)),
      {
        children,
        passThrough
      } = propsIn,
      contents = /* @__PURE__ */(0, import_jsx_runtime.jsx)(import_core.View, {
        pointerEvents: "box-none",
        position: "absolute",
        inset: 0,
        maxWidth: "100%",
        zIndex,
        passThrough,
        children
      }),
      portalState = (0, import_native.getPortal)().state;
    return portalState.type === "teleport" ? /* @__PURE__ */(0, import_jsx_runtime.jsx)(import_native.NativePortal, {
      hostName: "root",
      children: contents
    }) : /* @__PURE__ */(0, import_jsx_runtime.jsx)(import_GorhomPortalItem.GorhomPortalItem, {
      passThrough,
      hostName: "root",
      children: contents
    });
  };
//# sourceMappingURL=Portal.native.js.map
