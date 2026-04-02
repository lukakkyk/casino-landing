import { jsx as _jsx } from "react/jsx-runtime";
import { getTokenValue, getVariable, Text, usePropsAndStyle } from "@tamagui/core";
import { SizableContext } from "@tamagui/sizable-context";
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
      var styledContext = SizableContext.useStyledContext(),
        needsMedia = needsFullStyleResolution(propsIn),
        [props, style, theme] = usePropsAndStyle(propsIn, {
          ...opts,
          forComponent: Text,
          resolveValues: opts.resolveValues,
          noMedia: !needsMedia
        }),
        defaultColor = opts.defaultThemeColor,
        colorIn = style.color || (defaultColor ? theme[defaultColor] : void 0) || (props.disableTheme ? null : theme.color) || opts.fallbackColor,
        color = getVariable(colorIn),
        size = typeof props.size == "string" ? getTokenValue(props.size, "size") : props.size || (styledContext.size === "$true" ? void 0 : styledContext.size),
        _props_strokeWidth,
        strokeWidth = typeof props.strokeWidth == "string" ? getTokenValue(props.strokeWidth, "size") : (_props_strokeWidth = props.strokeWidth) !== null && _props_strokeWidth !== void 0 ? _props_strokeWidth : `${opts.defaultStrokeWidth}`,
        finalProps = {
          ...props,
          color,
          size,
          strokeWidth,
          style
        };
      return /* @__PURE__ */_jsx(Component, {
        ...finalProps
      });
    },
    wrapped = function (propsIn) {
      return /* @__PURE__ */_jsx(IconWrapper, {
        ...propsIn
      });
    };
  return wrapped.staticConfig = {
    isHOC: !0,
    acceptsClassName: !0
  }, wrapped;
}
export { SizableContext, themed };
//# sourceMappingURL=themed.native.js.map
