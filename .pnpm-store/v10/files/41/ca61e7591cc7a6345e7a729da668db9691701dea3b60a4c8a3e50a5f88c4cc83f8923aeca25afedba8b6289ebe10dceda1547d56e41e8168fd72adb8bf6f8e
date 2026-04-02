import { isWeb } from "@tamagui/constants";
import { stylePropsAll, stylePropsUnitless } from "@tamagui/helpers";
const stylePropsAllPlusTransforms = {
  ...stylePropsAll,
  translateX: !0,
  translateY: !0
};
function normalizeValueWithProperty(value, property = "") {
  if (!isWeb || stylePropsUnitless[property] || property && !stylePropsAllPlusTransforms[property] || typeof value == "boolean") return value;
  if (value && typeof value == "object") if (typeof value.__getValue == "function") value = value.__getValue();else return value;
  let res = value;
  return typeof value == "number" ? res = `${value}px` : property && (res = `${res}`), res;
}
export { normalizeValueWithProperty };
//# sourceMappingURL=normalizeValueWithProperty.mjs.map
