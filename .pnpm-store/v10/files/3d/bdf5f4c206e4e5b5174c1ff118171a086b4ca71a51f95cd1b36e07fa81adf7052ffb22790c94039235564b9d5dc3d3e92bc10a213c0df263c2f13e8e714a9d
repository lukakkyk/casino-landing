import { jsx as _jsx } from "react/jsx-runtime";
import { useTheme, variableToString } from "@tamagui/core";
import { YStack } from "@tamagui/stacks";
import { ActivityIndicator } from "react-native";
var Spinner = YStack.styleable(function (props, ref) {
  var {
      size,
      color: colorProp,
      ...stackProps
    } = props,
    theme = useTheme(),
    color = colorProp;
  return color && color[0] === "$" && (color = variableToString(theme[color])), /* @__PURE__ */_jsx(YStack, {
    ref,
    ...stackProps,
    children: /* @__PURE__ */_jsx(ActivityIndicator, {
      size,
      color
    })
  });
});
export { Spinner };
//# sourceMappingURL=Spinner.native.js.map
