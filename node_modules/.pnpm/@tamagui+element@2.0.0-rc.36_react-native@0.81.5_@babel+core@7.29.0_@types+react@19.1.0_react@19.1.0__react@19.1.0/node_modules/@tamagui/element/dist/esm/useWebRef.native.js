import { useComposedRefs } from "@tamagui/compose-refs";
import * as React from "react";
function useWebRef(forwardedRef) {
  var ref = React.useRef(null),
    composedRef = useComposedRefs(ref, forwardedRef);
  return {
    ref,
    composedRef
  };
}
export { useWebRef };
//# sourceMappingURL=useWebRef.native.js.map
