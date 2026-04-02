function createFloatingEvents() {
  const listeners = /* @__PURE__ */new Map();
  return {
    emit(event, data) {
      listeners.get(event)?.forEach(fn => fn(data));
    },
    on(event, handler) {
      let set = listeners.get(event);
      set || (set = /* @__PURE__ */new Set(), listeners.set(event, set)), set.add(handler);
    },
    off(event, handler) {
      const set = listeners.get(event);
      set && (set.delete(handler), set.size === 0 && listeners.delete(event));
    }
  };
}
export { createFloatingEvents };
//# sourceMappingURL=createFloatingEvents.mjs.map
