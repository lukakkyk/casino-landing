import {
  getTokenValue,
  getVariable,
  Text,
  usePropsAndStyle
} from "@tamagui/core";
import { SizableContext } from "@tamagui/sizable-context";
import { jsx } from "react/jsx-runtime";
function needsFullStyleResolution(props) {
  for (const key in props)
    if (key[0] === "$") return !0;
  return !1;
}
function themed(Component, optsIn = {}) {
  const opts = {
    defaultThemeColor: process.env.DEFAULT_ICON_THEME_COLOR || "$color",
    defaultStrokeWidth: 2,
    fallbackColor: "#000",
    resolveValues: process.env.TAMAGUI_ICON_COLOR_RESOLVE || "auto",
    ...optsIn
  }, IconWrapper = (propsIn) => {
    const styledContext = SizableContext.useStyledContext(), needsMedia = needsFullStyleResolution(propsIn), [props, style, theme] = usePropsAndStyle(propsIn, {
      ...opts,
      forComponent: Text,
      resolveValues: opts.resolveValues,
      noMedia: !needsMedia
    }), defaultColor = opts.defaultThemeColor, colorIn = style.color || (defaultColor ? theme[defaultColor] : void 0) || (props.disableTheme ? null : theme.color) || opts.fallbackColor, color = getVariable(colorIn), size = typeof props.size == "string" ? getTokenValue(props.size, "size") : props.size || (styledContext.size === "$true" ? void 0 : styledContext.size), strokeWidth = typeof props.strokeWidth == "string" ? getTokenValue(props.strokeWidth, "size") : props.strokeWidth ?? `${opts.defaultStrokeWidth}`, finalProps = {
      ...props,
      color,
      size,
      strokeWidth,
      style
    };
    return /* @__PURE__ */ jsx(Component, { ...finalProps });
  }, wrapped = (propsIn) => /* @__PURE__ */ jsx(IconWrapper, { ...propsIn });
  return wrapped.staticConfig = {
    isHOC: !0,
    acceptsClassName: !0
  }, wrapped;
}
export {
  SizableContext,
  themed
};
//# sourceMappingURL=themed.js.map
