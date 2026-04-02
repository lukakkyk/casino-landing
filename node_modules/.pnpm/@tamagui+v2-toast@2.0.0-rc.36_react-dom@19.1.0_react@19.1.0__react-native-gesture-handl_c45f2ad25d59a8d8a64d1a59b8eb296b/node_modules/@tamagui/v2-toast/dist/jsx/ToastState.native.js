"use strict";

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
var ToastState_exports = {};
__export(ToastState_exports, {
  ToastState: () => ToastState,
  toast: () => toast
});
module.exports = __toCommonJS(ToastState_exports);
function _class_call_check(instance, Constructor) {
  if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _define_property(obj, key, value) {
  return key in obj ? Object.defineProperty(obj, key, {
    value,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : obj[key] = value, obj;
}
function _instanceof(left, right) {
  return right != null && typeof Symbol < "u" && right[Symbol.hasInstance] ? !!right[Symbol.hasInstance](left) : left instanceof right;
}
function _type_of(obj) {
  "@swc/helpers - typeof";

  return obj && typeof Symbol < "u" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
var toastsCounter = 1,
  Observer = function Observer2() {
    "use strict";

    var _this = this;
    _class_call_check(this, Observer2), _define_property(this, "subscribers", []), _define_property(this, "toasts", []), _define_property(this, "dismissedToasts", /* @__PURE__ */new Set()), _define_property(this, "subscribe", function (subscriber) {
      return _this.subscribers.push(subscriber), function () {
        var index = _this.subscribers.indexOf(subscriber);
        index > -1 && _this.subscribers.splice(index, 1);
      };
    }), _define_property(this, "publish", function (data) {
      _this.subscribers.forEach(function (subscriber) {
        return subscriber(data);
      });
    }), _define_property(this, "addToast", function (data) {
      _this.publish(data), _this.toasts = [..._this.toasts, data];
    }), _define_property(this, "create", function (data) {
      var {
          title,
          ...rest
        } = data,
        id = typeof data?.id == "number" || typeof data?.id == "string" && data.id.length > 0 ? data.id : toastsCounter++,
        alreadyExists = _this.toasts.find(function (toast2) {
          return toast2.id === id;
        }),
        _data_dismissible,
        dismissible = (_data_dismissible = data.dismissible) !== null && _data_dismissible !== void 0 ? _data_dismissible : !0;
      return _this.dismissedToasts.has(id) && _this.dismissedToasts.delete(id), alreadyExists ? _this.toasts = _this.toasts.map(function (toast2) {
        return toast2.id === id ? (_this.publish({
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
        }) : toast2;
      }) : _this.addToast({
        title,
        ...rest,
        dismissible,
        id
      }), id;
    }), _define_property(this, "dismiss", function (id) {
      return id !== void 0 ? (_this.dismissedToasts.add(id), requestAnimationFrame(function () {
        _this.subscribers.forEach(function (subscriber) {
          return subscriber({
            id,
            dismiss: !0
          });
        });
      })) : _this.toasts.forEach(function (toast2) {
        _this.subscribers.forEach(function (subscriber) {
          return subscriber({
            id: toast2.id,
            dismiss: !0
          });
        });
      }), id;
    }), _define_property(this, "message", function (title, data) {
      return _this.create({
        ...data,
        title,
        type: "default"
      });
    }), _define_property(this, "success", function (title, data) {
      return _this.create({
        ...data,
        title,
        type: "success"
      });
    }), _define_property(this, "error", function (title, data) {
      return _this.create({
        ...data,
        title,
        type: "error"
      });
    }), _define_property(this, "warning", function (title, data) {
      return _this.create({
        ...data,
        title,
        type: "warning"
      });
    }), _define_property(this, "info", function (title, data) {
      return _this.create({
        ...data,
        title,
        type: "info"
      });
    }), _define_property(this, "loading", function (title, data) {
      return _this.create({
        ...data,
        title,
        type: "loading"
      });
    }), _define_property(this, "promise", function (promise, data) {
      if (data) {
        var id = void 0;
        data.loading !== void 0 && (id = _this.create({
          promise,
          type: "loading",
          title: data.loading,
          description: typeof data.description != "function" ? data.description : void 0,
          // loading toasts shouldn't auto-dismiss
          duration: Number.POSITIVE_INFINITY
        }));
        var p = Promise.resolve(_instanceof(promise, Function) ? promise() : promise),
          shouldDismiss = id !== void 0,
          result,
          originalPromise = p.then(async function (response) {
            if (result = ["resolve", response], isHttpResponse(response) && !response.ok) {
              shouldDismiss = !1;
              var errorMsg = typeof data.error == "function" ? await data.error(`HTTP error! status: ${response.status}`) : data.error,
                description = typeof data.description == "function" ? await data.description(`HTTP error! status: ${response.status}`) : data.description;
              _this.create({
                id,
                type: "error",
                title: errorMsg,
                description
              });
            } else if (data.success !== void 0) {
              shouldDismiss = !1;
              var successMsg = typeof data.success == "function" ? await data.success(response) : data.success,
                description1 = typeof data.description == "function" ? await data.description(response) : data.description;
              _this.create({
                id,
                type: "success",
                title: successMsg,
                description: description1
              });
            }
          }).catch(async function (error) {
            if (result = ["reject", error], data.error !== void 0) {
              shouldDismiss = !1;
              var errorMsg = typeof data.error == "function" ? await data.error(error) : data.error,
                description = typeof data.description == "function" ? await data.description(error) : data.description;
              _this.create({
                id,
                type: "error",
                title: errorMsg,
                description
              });
            }
          }).finally(function () {
            var _data_finally;
            shouldDismiss && (_this.dismiss(id), id = void 0), (_data_finally = data.finally) === null || _data_finally === void 0 || _data_finally.call(data);
          }),
          unwrap = function () {
            return new Promise(function (resolve, reject) {
              return originalPromise.then(function () {
                return result[0] === "reject" ? reject(result[1]) : resolve(result[1]);
              }).catch(reject);
            });
          };
        return typeof id != "string" && typeof id != "number" ? {
          unwrap
        } : Object.assign(id, {
          unwrap
        });
      }
    }), _define_property(this, "custom", function (jsx, data) {
      var _data_id,
        id = (_data_id = data?.id) !== null && _data_id !== void 0 ? _data_id : toastsCounter++;
      return _this.create({
        jsx: jsx(id),
        ...data,
        id
      }), id;
    }), _define_property(this, "getActiveToasts", function () {
      return _this.toasts.filter(function (toast2) {
        return !_this.dismissedToasts.has(toast2.id);
      });
    }), _define_property(this, "getHistory", function () {
      return _this.toasts;
    });
  };
function isHttpResponse(data) {
  return data && (typeof data > "u" ? "undefined" : _type_of(data)) === "object" && "ok" in data && typeof data.ok == "boolean" && "status" in data && typeof data.status == "number";
}
var ToastState = new Observer(),
  toastFunction = function (title, data) {
    return ToastState.create({
      ...data,
      title
    });
  },
  getHistory = function () {
    return ToastState.getHistory();
  },
  getToasts = function () {
    return ToastState.getActiveToasts();
  },
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
//# sourceMappingURL=ToastState.native.js.map
