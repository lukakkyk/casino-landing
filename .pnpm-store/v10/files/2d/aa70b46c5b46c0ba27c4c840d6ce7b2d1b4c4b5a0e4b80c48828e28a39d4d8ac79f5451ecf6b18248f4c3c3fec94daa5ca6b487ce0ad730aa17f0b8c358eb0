import { unitlessNumbers as isUnitlessNumber } from "../unitlessNumbers/index.mjs";
import { normalizeValueWithProperty } from "../../StyleSheet/compiler/normalizeValueWithProperty.mjs";
function dangerousStyleValue(name, value, isCustomProperty) {
  var isEmpty = value == null || typeof value == "boolean" || value === "";
  return isEmpty ? "" : (typeof value == "object" && typeof value.__getValue == "function" && (value = value.__getValue()), name === "transform" && Array.isArray(value) ? value.map(t => {
    const key = Object.keys(t)[0];
    let val = t[key];
    return typeof val == "object" && typeof val.__getValue == "function" && (val = val.__getValue()), key === "matrix" || key === "matrix3d" ? `${key}(${val.join(",")})` : `${key}(${normalizeValueWithProperty(val, key)})`;
  }).join(" ") : !isCustomProperty && typeof value == "number" && value !== 0 && !(isUnitlessNumber.hasOwnProperty(name) && isUnitlessNumber[name]) ? value + "px" : ("" + value).trim());
}
export { dangerousStyleValue };
//# sourceMappingURL=dangerousStyleValue.mjs.map
