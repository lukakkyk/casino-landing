import { jsx as _jsx } from "react/jsx-runtime";
import { isWeb } from "@tamagui/constants";
import { Portal } from "@tamagui/portal";
import { ReprogapateToastProvider } from "./ToastProvider.native.js";
function ToastPortal(props) {
  var {
      context,
      children,
      zIndex
    } = props,
    content = children;
  return isWeb || (content = /* @__PURE__ */_jsx(ReprogapateToastProvider, {
    context,
    children
  })), /* @__PURE__ */_jsx(Portal, {
    zIndex: zIndex || Number.MAX_SAFE_INTEGER,
    children: content
  });
}
export { ToastPortal };
//# sourceMappingURL=ToastPortal.native.js.map
