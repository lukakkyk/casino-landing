import React, { useId, useRef } from "react";
import { useEvent } from "@tamagui/core";
import { SheetControllerContext } from "./useSheetController.mjs";
import { jsx } from "react/jsx-runtime";
const SheetController = ({
  children,
  onOpenChange: onOpenChangeProp,
  open,
  hidden,
  disableDrag
}) => {
  const onOpenChange = useEvent(onOpenChangeProp),
    id = useId(),
    wasHiddenRef = useRef(hidden);
  let skipNextAnimation = !1;
  wasHiddenRef.current && !hidden && open && (skipNextAnimation = !0), wasHiddenRef.current = hidden;
  const memoValue = React.useMemo(() => ({
    id,
    open,
    hidden,
    disableDrag,
    onOpenChange,
    skipNextAnimation
  }), [id, onOpenChange, open, hidden, disableDrag, skipNextAnimation]);
  return /* @__PURE__ */jsx(SheetControllerContext.Provider, {
    value: memoValue,
    children
  });
};
export { SheetController };
//# sourceMappingURL=SheetController.mjs.map
