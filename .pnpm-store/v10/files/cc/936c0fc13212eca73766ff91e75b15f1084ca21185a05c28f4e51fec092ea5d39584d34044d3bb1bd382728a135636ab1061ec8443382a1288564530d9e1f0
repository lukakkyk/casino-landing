import { createNativeToast } from "./createNativeToast.mjs";
function dispatchNativeToast(toast, opts) {
  const titleText = typeof toast.title == "function" ? toast.title() : toast.title;
  if (typeof titleText != "string") return !1;
  const descText = typeof toast.description == "function" ? toast.description() : toast.description,
    toastType = toast.type ?? "default",
    preset = toastType === "error" ? "error" : toastType === "success" ? "done" : "none",
    haptic = toastType === "error" ? "error" : toastType === "success" ? "success" : toastType === "warning" ? "warning" : "none";
  return createNativeToast(titleText, {
    message: typeof descText == "string" ? descText : void 0,
    duration: toast.duration ?? opts.duration,
    burntOptions: {
      preset,
      haptic,
      ...opts.burntOptions
    },
    notificationOptions: opts.notificationOptions
  }) !== !1;
}
export { dispatchNativeToast };
//# sourceMappingURL=dispatchNativeToast.mjs.map
