import { getMedia } from "./mediaState.mjs";
import { pseudoPriorities } from "./pseudoDescriptors.mjs";
function kebabToCamel(str) {
  return str.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
}
function isValidPseudo(str) {
  return str ? kebabToCamel(str) in pseudoPriorities : !1;
}
function getGroupPropParts(groupProp) {
  const m = getMedia(),
    [_, name, a, b, c] = groupProp.split("-"),
    m2 = a && b ? `${a}-${b}` : "",
    media = m2 && m2 in m && m2 || a && a in m && a || void 0;
  let pseudoCandidate = media ? media === m2 ? c : b ? `${b}${c ? `-${c}` : ""}` : void 0 : a ? `${a}${b ? `-${b}` : ""}${c ? `-${c}` : ""}` : void 0;
  return pseudoCandidate && !isValidPseudo(pseudoCandidate) && (process.env.NODE_ENV === "development" && console.warn(`Unknown group prop part "${pseudoCandidate}" in "${groupProp}". If this is a media query, ensure it's defined in your tamagui config.`), pseudoCandidate = void 0), {
    name,
    pseudo: pseudoCandidate,
    media
  };
}
export { getGroupPropParts };
//# sourceMappingURL=getGroupPropParts.mjs.map
