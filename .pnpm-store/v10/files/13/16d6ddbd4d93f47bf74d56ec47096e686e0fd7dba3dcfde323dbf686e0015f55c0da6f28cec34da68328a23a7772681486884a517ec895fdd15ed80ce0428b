import { useComposedRefs } from "@tamagui/compose-refs";
import * as React from "react";
function useNativeRef(forwardedRef) {
  const ref = React.useRef(null),
    composedRef = useComposedRefs(ref, forwardedRef);
  return {
    ref,
    composedRef
  };
}
function useNativeInputRef(forwardedRef) {
  const ref = React.useRef(null),
    composedRef = useComposedRefs(ref, forwardedRef);
  return {
    ref,
    composedRef
  };
}
export { useNativeInputRef, useNativeRef };
//# sourceMappingURL=useNativeRef.mjs.map
