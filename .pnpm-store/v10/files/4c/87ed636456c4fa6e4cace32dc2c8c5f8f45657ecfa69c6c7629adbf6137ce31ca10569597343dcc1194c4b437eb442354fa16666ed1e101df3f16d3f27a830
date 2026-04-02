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
var skipProps_exports = {};
__export(skipProps_exports, {
  skipProps: () => skipProps
});
module.exports = __toCommonJS(skipProps_exports);
var import_nativeOnlyProps = require("./nativeOnlyProps.native.js"),
  import_webPropsToSkip = require("./webPropsToSkip.native.js"),
  skipProps = {
    untilMeasured: 1,
    transition: 1,
    space: 1,
    animateOnly: 1,
    animatedBy: 1,
    disableClassName: 1,
    debug: 1,
    componentName: 1,
    disableOptimization: 1,
    render: 1,
    style: 1,
    // handled after loop so pseudos set usedKeys and override it if necessary
    group: 1,
    animatePresence: 1
  };
process.env.NODE_ENV === "test" && (skipProps["data-test-renders"] = 1);
Object.assign(skipProps, import_webPropsToSkip.webPropsToSkip);
//# sourceMappingURL=skipProps.native.js.map
