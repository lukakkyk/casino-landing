let toastsCounter = 1;
class Observer {
  subscribers = [];
  toasts = [];
  dismissedToasts = /* @__PURE__ */new Set();
  /**
   * Subscribe to toast state changes.
   * Returns an unsubscribe function.
   */
  subscribe = subscriber => (this.subscribers.push(subscriber), () => {
    const index = this.subscribers.indexOf(subscriber);
    index > -1 && this.subscribers.splice(index, 1);
  });
  /**
   * Publish a toast to all subscribers
   */
  publish = data => {
    this.subscribers.forEach(subscriber => subscriber(data));
  };
  /**
   * Add a new toast to the internal array and publish to subscribers
   */
  addToast = data => {
    this.publish(data), this.toasts = [...this.toasts, data];
  };
  /**
   * Create or update a toast
   */
  create = data => {
    const {
        title,
        ...rest
      } = data,
      id = typeof data?.id == "number" || typeof data?.id == "string" && data.id.length > 0 ? data.id : toastsCounter++,
      alreadyExists = this.toasts.find(toast2 => toast2.id === id),
      dismissible = data.dismissible ?? !0;
    return this.dismissedToasts.has(id) && this.dismissedToasts.delete(id), alreadyExists ? this.toasts = this.toasts.map(toast2 => toast2.id === id ? (this.publish({
      ...toast2,
      ...data,
      id,
      title,
      dismissible
    }), {
      ...toast2,
      ...data,
      id,
      title,
      dismissible
    }) : toast2) : this.addToast({
      title,
      ...rest,
      dismissible,
      id
    }), id;
  };
  /**
   * Dismiss a toast by id, or all toasts if no id provided
   */
  dismiss = id => (id !== void 0 ? (this.dismissedToasts.add(id), requestAnimationFrame(() => {
    this.subscribers.forEach(subscriber => subscriber({
      id,
      dismiss: !0
    }));
  })) : this.toasts.forEach(toast2 => {
    this.subscribers.forEach(subscriber => subscriber({
      id: toast2.id,
      dismiss: !0
    }));
  }), id);
  /**
   * Show a basic toast message
   */
  message = (title, data) => this.create({
    ...data,
    title,
    type: "default"
  });
  /**
   * Show a success toast
   */
  success = (title, data) => this.create({
    ...data,
    title,
    type: "success"
  });
  /**
   * Show an error toast
   */
  error = (title, data) => this.create({
    ...data,
    title,
    type: "error"
  });
  /**
   * Show a warning toast
   */
  warning = (title, data) => this.create({
    ...data,
    title,
    type: "warning"
  });
  /**
   * Show an info toast
   */
  info = (title, data) => this.create({
    ...data,
    title,
    type: "info"
  });
  /**
   * Show a loading toast
   */
  loading = (title, data) => this.create({
    ...data,
    title,
    type: "loading"
  });
  /**
   * Show a toast for a promise, automatically transitioning through
   * loading -> success/error states
   */
  promise = (promise, data) => {
    if (!data) return;
    let id;
    data.loading !== void 0 && (id = this.create({
      promise,
      type: "loading",
      title: data.loading,
      description: typeof data.description != "function" ? data.description : void 0,
      // loading toasts shouldn't auto-dismiss
      duration: Number.POSITIVE_INFINITY
    }));
    const p = Promise.resolve(promise instanceof Function ? promise() : promise);
    let shouldDismiss = id !== void 0,
      result;
    const originalPromise = p.then(async response => {
        if (result = ["resolve", response], isHttpResponse(response) && !response.ok) {
          shouldDismiss = !1;
          const errorMsg = typeof data.error == "function" ? await data.error(`HTTP error! status: ${response.status}`) : data.error,
            description = typeof data.description == "function" ? await data.description(`HTTP error! status: ${response.status}`) : data.description;
          this.create({
            id,
            type: "error",
            title: errorMsg,
            description
          });
        } else if (data.success !== void 0) {
          shouldDismiss = !1;
          const successMsg = typeof data.success == "function" ? await data.success(response) : data.success,
            description = typeof data.description == "function" ? await data.description(response) : data.description;
          this.create({
            id,
            type: "success",
            title: successMsg,
            description
          });
        }
      }).catch(async error => {
        if (result = ["reject", error], data.error !== void 0) {
          shouldDismiss = !1;
          const errorMsg = typeof data.error == "function" ? await data.error(error) : data.error,
            description = typeof data.description == "function" ? await data.description(error) : data.description;
          this.create({
            id,
            type: "error",
            title: errorMsg,
            description
          });
        }
      }).finally(() => {
        shouldDismiss && (this.dismiss(id), id = void 0), data.finally?.();
      }),
      unwrap = () => new Promise((resolve, reject) => originalPromise.then(() => result[0] === "reject" ? reject(result[1]) : resolve(result[1])).catch(reject));
    return typeof id != "string" && typeof id != "number" ? {
      unwrap
    } : Object.assign(id, {
      unwrap
    });
  };
  /**
   * Show a custom JSX toast
   */
  custom = (jsx, data) => {
    const id = data?.id ?? toastsCounter++;
    return this.create({
      jsx: jsx(id),
      ...data,
      id
    }), id;
  };
  /**
   * Get all active (non-dismissed) toasts
   */
  getActiveToasts = () => this.toasts.filter(toast2 => !this.dismissedToasts.has(toast2.id));
  /**
   * Get full toast history
   */
  getHistory = () => this.toasts;
}
function isHttpResponse(data) {
  return data && typeof data == "object" && "ok" in data && typeof data.ok == "boolean" && "status" in data && typeof data.status == "number";
}
const ToastState = new Observer(),
  toastFunction = (title, data) => ToastState.create({
    ...data,
    title
  }),
  getHistory = () => ToastState.getHistory(),
  getToasts = () => ToastState.getActiveToasts(),
  toast = Object.assign(toastFunction, {
    success: ToastState.success,
    error: ToastState.error,
    warning: ToastState.warning,
    info: ToastState.info,
    loading: ToastState.loading,
    promise: ToastState.promise,
    custom: ToastState.custom,
    dismiss: ToastState.dismiss,
    message: ToastState.message,
    getHistory,
    getToasts
  });
export { ToastState, toast };
//# sourceMappingURL=ToastState.mjs.map
