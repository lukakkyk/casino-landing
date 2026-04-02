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
var createNativeToast_exports = {};
__export(createNativeToast_exports, {
  createNativeToast: () => createNativeToast,
  hideNativeToast: () => hideNativeToast,
  requestNotificationPermission: () => requestNotificationPermission
});
module.exports = __toCommonJS(createNativeToast_exports);
const createNativeToast = (title, {
    message,
    notificationOptions
  }) => !("Notification" in window) || Notification.permission !== "granted" ? !1 : {
    nativeToastRef: new Notification(title, {
      body: message,
      ...notificationOptions
    })
  },
  hideNativeToast = ref => {
    "Notification" in window && ref && ref.close();
  };
async function requestNotificationPermission() {
  return "Notification" in window ? Notification.permission === "granted" ? "granted" : Notification.permission === "denied" ? "denied" : Notification.requestPermission() : null;
}