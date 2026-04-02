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
var themed_exports = {};
__export(themed_exports, {
  SizableContext: () => import_sizable_context.SizableContext,
  themed: () => themed
});
module.exports = __toCommonJS(themed_exports);
var import_jsx_runtime = require("react/jsx-runtime"),
  import_core = require("@tamagui/core"),
  import_sizable_context = require("@tamagui/sizable-context");
function needsFullStyleResolution(props) {
  for (var key in props) if (key[0] === "$") return !0;
  return !1;
}
function themed(Component) {
  var optsIn = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    opts = {
      defaultThemeColor: process.env.DEFAULT_ICON_THEME_COLOR || "$color",
      defaultStrokeWidth: 2,
      fallbackColor: "#000",
      resolveValues: process.env.TAMAGUI_ICON_COLOR_RESOLVE || "auto",
      ...optsIn
    },
    IconWrapper = function (propsIn) {
      var styledContext = import_sizable_context.SizableContext.useStyledContext(),
        needsMedia = needsFullStyleResolution(propsIn),
        [props, style, theme] = (0, import_core.usePropsAndStyle)(propsIn, {
          ...opts,
          forComponent: import_core.Text,
          resolveValues: opts.resolveValues,
          noMedia: !needsMedia
        }),
        defaultColor = opts.defaultThemeColor,
        colorIn = style.color || (defaultColor ? theme[defaultColor] : void 0) || (props.disableTheme ? null : theme.color) || opts.fallbackColor,
        color = (0, import_core.getVariable)(colorIn),
        size = typeof props.size == "string" ? (0, import_core.getTokenValue)(props.size, "size") : props.size || (styledContext.size === "$true" ? void 0 : styledContext.size),
        _props_strokeWidth,
        strokeWidth = typeof props.strokeWidth == "string" ? (0, import_core.getTokenValue)(props.strokeWidth, "size") : (_props_strokeWidth = props.strokeWidth) !== null && _props_strokeWidth !== void 0 ? _props_strokeWidth : `${opts.defaultStrokeWidth}`,
        finalProps = {
          ...props,
          color,
          size,
          strokeWidth,
          style
        };
      return /* @__PURE__ */(0, import_jsx_runtime.jsx)(Component, {
        ...finalProps
      });
    },
    wrapped = function (propsIn) {
      return /* @__PURE__ */(0, import_jsx_runtime.jsx)(IconWrapper, {
        ...propsIn
      });
    };
  return wrapped.staticConfig = {
    isHOC: !0,
    acceptsClassName: !0
  }, wrapped;
}
//# sourceMappingURL=themed.native.js.map
