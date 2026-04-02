import { isWeb } from "@tamagui/constants";
import * as React from "react";
let cachedResult = null;
function getReducedMotion() {
  return cachedResult !== null ? cachedResult : isWeb ? typeof window > "u" ? !1 : (cachedResult = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? !1, cachedResult) : (cachedResult = !1, !1);
}
function useReducedMotion(forceReducedMotion) {
  const [reducedMotion, setReducedMotion] = React.useState(() => forceReducedMotion ?? getReducedMotion());
  return React.useEffect(() => {
    if (forceReducedMotion !== void 0) {
      setReducedMotion(forceReducedMotion);
      return;
    }
    if (!isWeb || typeof window > "u") return;
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
export { useReducedMotion };
//# sourceMappingURL=useReducedMotion.mjs.map
