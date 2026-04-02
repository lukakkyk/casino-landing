var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf,
  __hasOwnProp = Object.prototype.hasOwnProperty;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
    value: mod,
    enumerable: !0
  }) : target, mod)),
  __toCommonJS = mod => __copyProps(__defProp({}, "__esModule", {
    value: !0
  }), mod);
var useReducedMotion_exports = {};
__export(useReducedMotion_exports, {
  useReducedMotion: () => useReducedMotion
});
module.exports = __toCommonJS(useReducedMotion_exports);
var import_constants = require("@tamagui/constants"),
  React = __toESM(require("react"), 1);
let cachedResult = null;
function getReducedMotion() {
  return cachedResult !== null ? cachedResult : import_constants.isWeb ? typeof window > "u" ? !1 : (cachedResult = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? !1, cachedResult) : (cachedResult = !1, !1);
}
function useReducedMotion(forceReducedMotion) {
  const [reducedMotion, setReducedMotion] = React.useState(() => forceReducedMotion ?? getReducedMotion());
  return React.useEffect(() => {
    if (forceReducedMotion !== void 0) {
      setReducedMotion(forceReducedMotion);
      return;
    }
    if (!import_constants.isWeb || typeof window > "u") return;
    const mediaQuery = window.matchMedia?.("(prefers-reduced-motion: reduce)");
    if (!mediaQuery) return;
    const handleChange = e => {
      cachedResult = e.matches, setReducedMotion(e.matches);
    };
    return mediaQuery.addEventListener?.("change", handleChange), () => {
      mediaQuery.removeEventListener?.("change", handleChange);
    };
  }, [forceReducedMotion]), reducedMotion;
}