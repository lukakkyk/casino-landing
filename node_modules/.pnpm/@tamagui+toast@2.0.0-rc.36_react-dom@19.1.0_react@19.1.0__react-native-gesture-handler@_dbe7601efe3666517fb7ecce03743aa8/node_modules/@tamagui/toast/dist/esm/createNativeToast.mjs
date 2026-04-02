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
export { createNativeToast, hideNativeToast, requestNotificationPermission };
//# sourceMappingURL=createNativeToast.mjs.map
