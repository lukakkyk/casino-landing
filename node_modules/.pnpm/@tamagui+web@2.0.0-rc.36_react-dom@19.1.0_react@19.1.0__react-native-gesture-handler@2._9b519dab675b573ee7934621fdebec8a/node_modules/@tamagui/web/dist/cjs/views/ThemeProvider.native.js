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
var ThemeProvider_exports = {};
__export(ThemeProvider_exports, {
  ThemeProvider: () => ThemeProvider
});
module.exports = __toCommonJS(ThemeProvider_exports);
var import_jsx_runtime = require("react/jsx-runtime"),
  import_constants = require("@tamagui/constants"),
  import_react = require("react"),
  import_config = require("../config.native.js"),
  import_constants2 = require("../constants/constants.native.js"),
  import_Theme = require("./Theme.native.js"),
  ThemeProvider = function (props) {
    "use no memo";

    var addThemeClassName = (0, import_config.getSetting)("addThemeClassName"),
      forceClassName = addThemeClassName === void 0;
    return /* @__PURE__ */(0, import_jsx_runtime.jsx)(import_Theme.Theme, {
      className: props.className,
      name: props.defaultTheme,
      forceClassName,
      // @ts-expect-error
      _isRoot: import_react.useId,
      children: props.children
    });
  };
//# sourceMappingURL=ThemeProvider.native.js.map
