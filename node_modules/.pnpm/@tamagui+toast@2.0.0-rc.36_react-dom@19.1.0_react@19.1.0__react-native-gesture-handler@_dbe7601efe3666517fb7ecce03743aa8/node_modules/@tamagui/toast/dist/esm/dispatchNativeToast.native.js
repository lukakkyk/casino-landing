import { createNativeToast } from "./createNativeToast.native.js";
function dispatchNativeToast(toast, opts) {
  var titleText = typeof toast.title == "function" ? toast.title() : toast.title;
  if (typeof titleText != "string") return !1;
  var descText = typeof toast.description == "function" ? toast.description() : toast.description,
    _toast_type,
    toastType = (_toast_type = toast.type) !== null && _toast_type !== void 0 ? _toast_type : "default",
    preset = toastType === "error" ? "error" : toastType === "success" ? "done" : "none",
    haptic = toastType === "error" ? "error" : toastType === "success" ? "success" : toastType === "warning" ? "warning" : "none",
    _toast_duration,
    result = createNativeToast(titleText, {
      message: typeof descText == "string" ? descText : void 0,
      duration: (_toast_duration = toast.duration) !== null && _toast_duration !== void 0 ? _toast_duration : opts.duration,
      burntOptions: {
        preset,
        haptic,
        ...opts.burntOptions
      },
      notificationOptions: opts.notificationOptions
    });
  return result !== !1;
}
export { dispatchNativeToast };
//# sourceMappingURL=dispatchNativeToast.native.js.map
