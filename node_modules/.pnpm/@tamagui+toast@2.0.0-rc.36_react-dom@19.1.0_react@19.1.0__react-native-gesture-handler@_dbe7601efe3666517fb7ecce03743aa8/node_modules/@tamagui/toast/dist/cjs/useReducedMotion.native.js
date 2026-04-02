"use strict";

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
  React = __toESM(require("react"), 1),
  cachedResult = null;
function getReducedMotion() {
  var _window_matchMedia, _window_matchMedia1, _window;
  if (cachedResult !== null) return cachedResult;
  if (!import_constants.isWeb) return cachedResult = !1, !1;
  if (typeof window > "u") return !1;
  var _window_matchMedia_matches;
  return cachedResult = (_window_matchMedia_matches = (_window_matchMedia1 = (_window = window).matchMedia) === null || _window_matchMedia1 === void 0 || (_window_matchMedia = _window_matchMedia1.call(_window, "(prefers-reduced-motion: reduce)")) === null || _window_matchMedia === void 0 ? void 0 : _window_matchMedia.matches) !== null && _window_matchMedia_matches !== void 0 ? _window_matchMedia_matches : !1, cachedResult;
}
function useReducedMotion(forceReducedMotion) {
  var [reducedMotion, setReducedMotion] = React.useState(function () {
    return forceReducedMotion ?? getReducedMotion();
  });
  return React.useEffect(function () {
    var _window_matchMedia, _window, _mediaQuery_addEventListener;
    if (forceReducedMotion !== void 0) {
      setReducedMotion(forceReducedMotion);
      return;
    }
    if (!(!import_constants.isWeb || typeof window > "u")) {
      var mediaQuery = (_window_matchMedia = (_window = window).matchMedia) === null || _window_matchMedia === void 0 ? void 0 : _window_matchMedia.call(_window, "(prefers-reduced-motion: reduce)");
      if (mediaQuery) {
        var handleChange = function (e) {
          cachedResult = e.matches, setReducedMotion(e.matches);
        };
        return (_mediaQuery_addEventListener = mediaQuery.addEventListener) === null || _mediaQuery_addEventListener === void 0 || _mediaQuery_addEventListener.call(mediaQuery, "change", handleChange), function () {
          var _mediaQuery_removeEventListener;
          (_mediaQuery_removeEventListener = mediaQuery.removeEventListener) === null || _mediaQuery_removeEventListener === void 0 || _mediaQuery_removeEventListener.call(mediaQuery, "change", handleChange);
        };
      }
    }
  }, [forceReducedMotion]), reducedMotion;
}
//# sourceMappingURL=useReducedMotion.native.js.map
