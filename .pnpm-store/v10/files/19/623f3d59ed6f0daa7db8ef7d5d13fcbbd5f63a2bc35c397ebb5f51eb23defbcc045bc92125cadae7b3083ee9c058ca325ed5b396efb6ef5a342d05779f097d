import { isWeb } from "@tamagui/web";
import { jsx } from "react/jsx-runtime";
function withNativeMenu({
  Component,
  NativeComponent
}) {
  if (isWeb || !NativeComponent) return Component;
  const Menu = props => /* @__PURE__ */jsx(NativeComponent, {
    ...props
  });
  return Menu.displayName = NativeComponent.displayName || Component?.displayName, Menu;
}
export { withNativeMenu };
//# sourceMappingURL=withNativeMenu.mjs.map
