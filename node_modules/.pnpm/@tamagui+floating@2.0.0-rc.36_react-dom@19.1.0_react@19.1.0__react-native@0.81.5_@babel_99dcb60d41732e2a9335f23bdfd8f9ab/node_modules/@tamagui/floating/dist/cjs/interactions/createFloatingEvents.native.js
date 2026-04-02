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
var createFloatingEvents_exports = {};
__export(createFloatingEvents_exports, {
  createFloatingEvents: () => createFloatingEvents
});
module.exports = __toCommonJS(createFloatingEvents_exports);
function createFloatingEvents() {
  var listeners = /* @__PURE__ */new Map();
  return {
    emit(event, data) {
      var _listeners_get;
      (_listeners_get = listeners.get(event)) === null || _listeners_get === void 0 || _listeners_get.forEach(function (fn) {
        return fn(data);
      });
    },
    on(event, handler) {
      var set = listeners.get(event);
      set || (set = /* @__PURE__ */new Set(), listeners.set(event, set)), set.add(handler);
    },
    off(event, handler) {
      var set = listeners.get(event);
      set && (set.delete(handler), set.size === 0 && listeners.delete(event));
    }
  };
}
//# sourceMappingURL=createFloatingEvents.native.js.map
