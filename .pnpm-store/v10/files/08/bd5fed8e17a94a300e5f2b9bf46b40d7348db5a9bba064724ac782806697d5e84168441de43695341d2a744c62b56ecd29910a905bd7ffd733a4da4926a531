function _class_call_check(instance, Constructor) {
  if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _create_class(Constructor, protoProps, staticProps) {
  return protoProps && _defineProperties(Constructor.prototype, protoProps), staticProps && _defineProperties(Constructor, staticProps), Constructor;
}
function _define_property(obj, key, value) {
  return key in obj ? Object.defineProperty(obj, key, {
    value,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : obj[key] = value, obj;
}
var PopupTriggerMap = /* @__PURE__ */function () {
  "use strict";

  function PopupTriggerMap2() {
    _class_call_check(this, PopupTriggerMap2), _define_property(this, "map", /* @__PURE__ */new Map()), _define_property(this, "elements", /* @__PURE__ */new Set());
  }
  return _create_class(PopupTriggerMap2, [{
    key: "add",
    value: function (id, element) {
      var prev = this.map.get(id);
      prev && this.elements.delete(prev), this.map.set(id, element), this.elements.add(element);
    }
  }, {
    key: "delete",
    value: function (id) {
      var el = this.map.get(id);
      el && (this.elements.delete(el), this.map.delete(id));
    }
  }, {
    key: "hasElement",
    value: function (element) {
      return this.elements.has(element);
    }
  }]), PopupTriggerMap2;
}();
export { PopupTriggerMap };
//# sourceMappingURL=PopupTriggerMap.native.js.map
