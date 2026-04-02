class PopupTriggerMap {
  map = /* @__PURE__ */new Map();
  elements = /* @__PURE__ */new Set();
  add(id, element) {
    const prev = this.map.get(id);
    prev && this.elements.delete(prev), this.map.set(id, element), this.elements.add(element);
  }
  delete(id) {
    const el = this.map.get(id);
    el && (this.elements.delete(el), this.map.delete(id));
  }
  hasElement(element) {
    return this.elements.has(element);
  }
}
export { PopupTriggerMap };
//# sourceMappingURL=PopupTriggerMap.mjs.map
