import * as React from "react";
const isServer = typeof window > "u",
  useIsomorphicInsertionEffect = isServer ? React.useEffect : React.useInsertionEffect || React.useLayoutEffect;
function useGet(currentValue, initialValue, forwardToFunction) {
  const curRef = React.useRef(initialValue ?? currentValue);
  return useIsomorphicInsertionEffect(() => {
    curRef.current = currentValue;
  }), React.useCallback(forwardToFunction ? (...args) => curRef.current?.apply(null, args) : () => curRef.current, []);
}
export { useGet };
//# sourceMappingURL=useGet.mjs.map
