import { jsx as _jsx } from "react/jsx-runtime";
import { isWeb } from "@tamagui/web";
function withNativeMenu(param) {
  var {
    Component,
    NativeComponent
  } = param;
  if (isWeb || !NativeComponent) return Component;
  var Menu = function (props) {
    return /* @__PURE__ */_jsx(NativeComponent, {
      ...props
    });
  };
  return Menu.displayName = NativeComponent.displayName || Component?.displayName, Menu;
}
export { withNativeMenu };
//# sourceMappingURL=withNativeMenu.native.js.map
