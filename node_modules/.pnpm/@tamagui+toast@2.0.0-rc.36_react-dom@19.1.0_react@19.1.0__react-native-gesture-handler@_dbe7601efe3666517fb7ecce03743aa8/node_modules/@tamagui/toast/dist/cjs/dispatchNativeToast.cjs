var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
    for (var name in all) __defProp(target, name, {
      get: all[name],
      enumerable: !0
    });
  },
  __copyProps = (to, from, except, desc) => {
    if (from && typeof from == "object" || typeof from == "function") for (let key of __getOwnPropNames(from)) !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, {
      get: () => from[key],
      enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
    });
    return to;
  };
var __toCommonJS = mod => __copyProps(__defProp({}, "__esModule", {
  value: !0
}), mod);
var dispatchNativeToast_exports = {};
__export(dispatchNativeToast_exports, {
  dispatchNativeToast: () => dispatchNativeToast
});
module.exports = __toCommonJS(dispatchNativeToast_exports);
var import_createNativeToast = require("./createNativeToast.cjs");
function dispatchNativeToast(toast, opts) {
  const titleText = typeof toast.title == "function" ? toast.title() : toast.title;
  if (typeof titleText != "string") return !1;
  const descText = typeof toast.description == "function" ? toast.description() : toast.description,
    toastType = toast.type ?? "default",
    preset = toastType === "error" ? "error" : toastType === "success" ? "done" : "none",
    haptic = toastType === "error" ? "error" : toastType === "success" ? "success" : toastType === "warning" ? "warning" : "none";
  return (0, import_createNativeToast.createNativeToast)(titleText, {
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