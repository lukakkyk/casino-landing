import { jsx as _jsx } from "react/jsx-runtime";
import React, { useId, useRef } from "react";
import { useEvent } from "@tamagui/core";
import { SheetControllerContext } from "./useSheetController.native.js";
var SheetController = function (param) {
  var {
      children,
      onOpenChange: onOpenChangeProp,
      open,
      hidden,
      disableDrag
    } = param,
    onOpenChange = useEvent(onOpenChangeProp),
    id = useId(),
    wasHiddenRef = useRef(hidden),
    skipNextAnimation = !1;
  wasHiddenRef.current && !hidden && open && (skipNextAnimation = !0), wasHiddenRef.current = hidden;
  var memoValue = React.useMemo(function () {
    return {
      id,
      open,
      hidden,
      disableDrag,
      onOpenChange,
      skipNextAnimation
    };
  }, [id, onOpenChange, open, hidden, disableDrag, skipNextAnimation]);
  return /* @__PURE__ */_jsx(SheetControllerContext.Provider, {
    value: memoValue,
    children
  });
};
export { SheetController };
//# sourceMappingURL=SheetController.native.js.map
