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
var withStableStyle_exports = {};
__export(withStableStyle_exports, {
  _withStableStyle: () => _withStableStyle
});
module.exports = __toCommonJS(withStableStyle_exports);
var import_jsx_runtime = require("react/jsx-runtime"),
  import_react = __toESM(require("react"), 1),
  import_config = require("./config.native.js"),
  import_useMedia = require("./hooks/useMedia.native.js"),
  import_useTheme = require("./hooks/useTheme.native.js"),
  import_useThemeState = require("./hooks/useThemeState.native.js"),
  EMPTY_EXPRESSIONS = [],
  EMPTY_THEME = {},
  _withStableStyle = function (Component, createStyle, hasThemeKeys, hasMediaKeys) {
    return /* @__PURE__ */import_react.default.memo(/* @__PURE__ */import_react.default.forwardRef(function (props, ref) {
      var {
          _expressions = EMPTY_EXPRESSIONS,
          ...rest
        } = props,
        parentId = (0, import_react.useContext)(import_useThemeState.ThemeStateContext),
        theme = hasThemeKeys && parentId ? (0, import_useTheme.useTheme)() : null,
        media = hasMediaKeys ? (0, import_useMedia.useMedia)() : null,
        resolvedExpressions = media ? _expressions.map(function (expr) {
          return typeof expr == "string" ? media[expr] : expr;
        }) : _expressions,
        resolvedTheme = theme || EMPTY_THEME;
      if (hasThemeKeys && !parentId) {
        var config = (0, import_config.getConfigMaybe)(),
          themes = config?.themes;
        if (themes) for (var k in themes) {
          resolvedTheme = themes.light || themes.dark || themes[k];
          break;
        }
        process.env.NODE_ENV === "development" && console.warn("[@tamagui] _withStableStyle: no ThemeStateContext found. This usually means duplicate tamagui instances in a monorepo. Falling back to default theme from config.");
      }
      return /* @__PURE__ */(0, import_jsx_runtime.jsx)(Component, {
        ref,
        style: createStyle(resolvedTheme, resolvedExpressions),
        ...rest
      });
    }));
  };
//# sourceMappingURL=_withStableStyle.native.js.map
