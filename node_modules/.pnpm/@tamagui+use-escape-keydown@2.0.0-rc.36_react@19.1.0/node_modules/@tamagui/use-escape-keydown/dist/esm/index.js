import { useCallbackRef } from "@tamagui/use-callback-ref";
import React from "react";
function useEscapeKeydown(onEscapeKeyDownProp, ownerDocument = globalThis?.document) {
  const onEscapeKeyDown = useCallbackRef(onEscapeKeyDownProp);
  React.useEffect(() => {
    const handleKeyDown = event => {
      event.key === "Escape" && onEscapeKeyDown(event);
    };
    return ownerDocument.addEventListener("keydown",
    // @ts-expect-error
    handleKeyDown), () => {
      ownerDocument.removeEventListener("keydown",
      // @ts-expect-error
      handleKeyDown);
    };
  }, [onEscapeKeyDown, ownerDocument]);
}
export { useEscapeKeydown };
//# sourceMappingURL=index.js.map
