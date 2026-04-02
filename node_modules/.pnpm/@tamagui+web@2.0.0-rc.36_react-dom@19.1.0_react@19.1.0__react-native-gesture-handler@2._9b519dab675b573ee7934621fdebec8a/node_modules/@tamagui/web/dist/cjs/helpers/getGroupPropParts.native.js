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
var getGroupPropParts_exports = {};
__export(getGroupPropParts_exports, {
  getGroupPropParts: () => getGroupPropParts
});
module.exports = __toCommonJS(getGroupPropParts_exports);
var import_mediaState = require("./mediaState.native.js"),
  import_pseudoDescriptors = require("./pseudoDescriptors.native.js");
function kebabToCamel(str) {
  return str.replace(/-([a-z])/g, function (_, c) {
    return c.toUpperCase();
  });
}
function isValidPseudo(str) {
  return str ? kebabToCamel(str) in import_pseudoDescriptors.pseudoPriorities : !1;
}
function getGroupPropParts(groupProp) {
  var m = (0, import_mediaState.getMedia)(),
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
//# sourceMappingURL=getGroupPropParts.native.js.map
