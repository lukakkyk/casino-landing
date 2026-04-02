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
var PopupTriggerMap_exports = {};
__export(PopupTriggerMap_exports, {
  PopupTriggerMap: () => PopupTriggerMap
});
module.exports = __toCommonJS(PopupTriggerMap_exports);
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
//# sourceMappingURL=PopupTriggerMap.native.js.map
