const createNativeToast = (title, {
    message,
    notificationOptions
  }) => {
    if (!("Notification" in window)) return console.error("This browser does not support notifications"), !1;
    if (Notification.permission === "denied") return !1;
    const showNotification = () => new Notification(title, {
      body: message,
      ...notificationOptions
    });
    return Notification.permission === "granted" ? {
      nativeToastRef: showNotification()
    } : (Notification.requestPermission().then(permission => {
      if (permission === "granted") return {
        nativeToastRef: showNotification()
      };
    }), !0);
  },
  hideNativeToast = ref => {
    if (!("Notification" in window)) {
      console.error("This browser does not support notifications");
      return;
    }
    ref && ref.close();
  };
export { createNativeToast, hideNativeToast };
//# sourceMappingURL=createNativeToast.mjs.map
