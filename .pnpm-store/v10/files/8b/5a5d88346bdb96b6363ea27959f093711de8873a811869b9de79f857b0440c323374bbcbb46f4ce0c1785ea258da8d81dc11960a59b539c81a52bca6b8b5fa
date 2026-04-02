import { isWeb } from "@tamagui/constants";
import * as React from "react";
var cachedResult = null;
function getReducedMotion() {
  var _window_matchMedia, _window_matchMedia1, _window;
  if (cachedResult !== null) return cachedResult;
  if (!isWeb) return cachedResult = !1, !1;
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
    if (!(!isWeb || typeof window > "u")) {
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
export { useReducedMotion };
//# sourceMappingURL=useReducedMotion.native.js.map
