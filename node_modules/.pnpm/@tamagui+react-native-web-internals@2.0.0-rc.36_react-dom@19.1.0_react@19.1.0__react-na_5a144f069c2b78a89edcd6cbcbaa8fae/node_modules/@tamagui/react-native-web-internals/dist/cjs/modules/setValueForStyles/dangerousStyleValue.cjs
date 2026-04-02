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
var dangerousStyleValue_exports = {};
__export(dangerousStyleValue_exports, {
  dangerousStyleValue: () => dangerousStyleValue
});
module.exports = __toCommonJS(dangerousStyleValue_exports);
var import_unitlessNumbers = require("../unitlessNumbers/index.cjs"),
  import_normalizeValueWithProperty = require("../../StyleSheet/compiler/normalizeValueWithProperty.cjs");
function dangerousStyleValue(name, value, isCustomProperty) {
  var isEmpty = value == null || typeof value == "boolean" || value === "";
  return isEmpty ? "" : (typeof value == "object" && typeof value.__getValue == "function" && (value = value.__getValue()), name === "transform" && Array.isArray(value) ? value.map(t => {
    const key = Object.keys(t)[0];
    let val = t[key];
    return typeof val == "object" && typeof val.__getValue == "function" && (val = val.__getValue()), key === "matrix" || key === "matrix3d" ? `${key}(${val.join(",")})` : `${key}(${(0, import_normalizeValueWithProperty.normalizeValueWithProperty)(val, key)})`;
  }).join(" ") : !isCustomProperty && typeof value == "number" && value !== 0 && !(import_unitlessNumbers.unitlessNumbers.hasOwnProperty(name) && import_unitlessNumbers.unitlessNumbers[name]) ? value + "px" : ("" + value).trim());
}