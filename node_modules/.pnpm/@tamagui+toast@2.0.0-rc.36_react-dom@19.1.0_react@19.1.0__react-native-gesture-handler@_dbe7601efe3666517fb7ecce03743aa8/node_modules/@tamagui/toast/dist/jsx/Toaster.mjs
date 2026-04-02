import * as React from "react";
import { Toast } from "./ToastComposable.mjs";
import { jsx } from "react/jsx-runtime";
const Toaster = React.forwardRef(function (props, ref) {
  const {
    position = "bottom-right",
    expand = !1,
    visibleToasts,
    gap,
    duration,
    offset,
    hotkey,
    swipeDirection,
    swipeThreshold,
    closeButton,
    theme,
    icons,
    toastOptions,
    containerAriaLabel = "Notifications",
    native,
    burntOptions,
    notificationOptions,
    reducedMotion
  } = props;
  return /* @__PURE__ */jsx(Toast, {
    position,
    expand,
    visibleToasts,
    gap,
    duration: toastOptions?.duration ?? duration,
    swipeDirection,
    swipeThreshold,
    closeButton,
    theme,
    icons,
    native,
    burntOptions,
    notificationOptions,
    reducedMotion,
    children: /* @__PURE__ */jsx(Toast.Viewport, {
      ref,
      offset,
      hotkey,
      label: containerAriaLabel,
      children: /* @__PURE__ */jsx(Toast.List, {})
    })
  });
});
Toaster.displayName = "Toaster";
export { Toaster };
//# sourceMappingURL=Toaster.mjs.map
