import { jsx as _jsx } from "react/jsx-runtime";
import * as React from "react";
import { Toast } from "./ToastComposable.native.js";
var Toaster = /* @__PURE__ */React.forwardRef(function (props, ref) {
  var {
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
    } = props,
    _toastOptions_duration;
  return /* @__PURE__ */_jsx(Toast, {
    position,
    expand,
    visibleToasts,
    gap,
    duration: (_toastOptions_duration = toastOptions?.duration) !== null && _toastOptions_duration !== void 0 ? _toastOptions_duration : duration,
    swipeDirection,
    swipeThreshold,
    closeButton,
    theme,
    icons,
    native,
    burntOptions,
    notificationOptions,
    reducedMotion,
    children: /* @__PURE__ */_jsx(Toast.Viewport, {
      ref,
      offset,
      hotkey,
      label: containerAriaLabel,
      children: /* @__PURE__ */_jsx(Toast.List, {})
    })
  });
});
Toaster.displayName = "Toaster";
export { Toaster };
//# sourceMappingURL=Toaster.native.js.map
