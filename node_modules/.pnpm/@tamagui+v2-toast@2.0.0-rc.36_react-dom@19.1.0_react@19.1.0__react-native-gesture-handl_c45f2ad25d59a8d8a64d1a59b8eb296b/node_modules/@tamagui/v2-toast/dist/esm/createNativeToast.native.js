import { getBurnt } from "@tamagui/native";
var createNativeToast = function (title, param) {
    var {
        message,
        duration,
        burntOptions
      } = param,
      burnt = getBurnt();
    return burnt.isEnabled ? (burnt.state.toast({
      title,
      message,
      duration: duration ? duration / 1e3 : void 0,
      ...burntOptions
    }), !0) : (console.warn("Warning: Must call import '@tamagui/native/setup-burnt' at your app entry point to use native toasts"), !1);
  },
  hideNativeToast = function () {
    var burnt = getBurnt();
    burnt.isEnabled && burnt.state.dismissAllAlerts();
  };
export { createNativeToast, hideNativeToast };
//# sourceMappingURL=createNativeToast.native.js.map
