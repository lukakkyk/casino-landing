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
var PopupTriggerMap_exports = {};
__export(PopupTriggerMap_exports, {
  PopupTriggerMap: () => PopupTriggerMap
});
module.exports = __toCommonJS(PopupTriggerMap_exports);
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