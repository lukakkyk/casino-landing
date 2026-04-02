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
export { createFloatingEvents };
//# sourceMappingURL=createFloatingEvents.native.js.map
