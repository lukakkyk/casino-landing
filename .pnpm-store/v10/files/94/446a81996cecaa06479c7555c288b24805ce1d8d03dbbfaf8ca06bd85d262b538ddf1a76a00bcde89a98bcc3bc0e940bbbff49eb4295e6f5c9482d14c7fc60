import * as React from "react";
const UNINITIALIZED = typeof Symbol == "function" && typeof /* @__PURE__ */Symbol() == "symbol" ? /* @__PURE__ */Symbol() : Object.freeze({});
function useStable(getInitialValue) {
  const ref = React.useRef(UNINITIALIZED);
  return ref.current === UNINITIALIZED && (ref.current = getInitialValue()), ref.current;
}
export { useStable };
//# sourceMappingURL=index.mjs.map
