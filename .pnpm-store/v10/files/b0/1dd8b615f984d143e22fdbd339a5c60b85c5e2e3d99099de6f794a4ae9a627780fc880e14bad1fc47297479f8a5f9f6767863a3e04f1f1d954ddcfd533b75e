import { getMedia } from "./mediaState.native.js";
import { pseudoPriorities } from "./pseudoDescriptors.native.js";
function kebabToCamel(str) {
  return str.replace(/-([a-z])/g, function (_, c) {
    return c.toUpperCase();
  });
}
function isValidPseudo(str) {
  return str ? kebabToCamel(str) in pseudoPriorities : !1;
}
function getGroupPropParts(groupProp) {
  var m = getMedia(),
    [_, name, a, b, c] = groupProp.split("-"),
    m2 = a && b ? `${a}-${b}` : "",
    media = m2 && m2 in m && m2 || a && a in m && a || void 0,
    pseudoCandidate = media ? media === m2 ? c : b ? `${b}${c ? `-${c}` : ""}` : void 0 : a ? `${a}${b ? `-${b}` : ""}${c ? `-${c}` : ""}` : void 0;
  return pseudoCandidate && !isValidPseudo(pseudoCandidate) && (process.env.NODE_ENV === "development" && console.warn(`Unknown group prop part "${pseudoCandidate}" in "${groupProp}". If this is a media query, ensure it's defined in your tamagui config.`), pseudoCandidate = void 0), {
    name,
    pseudo: pseudoCandidate,
    media
  };
}
export { getGroupPropParts };
//# sourceMappingURL=getGroupPropParts.native.js.map
