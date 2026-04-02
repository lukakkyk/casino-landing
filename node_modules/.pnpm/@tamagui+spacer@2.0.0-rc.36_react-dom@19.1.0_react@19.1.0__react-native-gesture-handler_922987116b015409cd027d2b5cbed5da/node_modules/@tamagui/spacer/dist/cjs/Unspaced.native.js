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
var Unspaced_exports = {};
__export(Unspaced_exports, {
  Unspaced: () => Unspaced,
  isUnspaced: () => isUnspaced
});
module.exports = __toCommonJS(Unspaced_exports);
function Unspaced(props) {
  return props.children;
}
Unspaced.isUnspaced = !0;
function isUnspaced(child) {
  var t = child?.type;
  return t?.isVisuallyHidden || t?.isUnspaced;
}
//# sourceMappingURL=Unspaced.native.js.map
