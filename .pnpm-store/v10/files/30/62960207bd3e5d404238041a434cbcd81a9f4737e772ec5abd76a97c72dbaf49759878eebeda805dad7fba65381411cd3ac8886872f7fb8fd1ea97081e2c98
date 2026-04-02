import { useMemo, useRef } from "react";
import { isHTMLElement, isMouseLikePointerType, isTypeableElement } from "./utils.mjs";
function isButtonTarget(event) {
  return isHTMLElement(event.target) && event.target.tagName === "BUTTON";
}
function isAnchorTarget(event) {
  return isHTMLElement(event.target) && event.target.tagName === "A";
}
function isSpaceIgnored(element) {
  return isTypeableElement(element);
}
function useClick(context, props = {}) {
  const {
      open,
      onOpenChange,
      dataRef,
      elements: {
        domReference
      }
    } = context,
    {
      enabled = !0,
      event: eventOption = "click",
      toggle = !0,
      ignoreMouse = !1,
      keyboardHandlers = !0,
      stickIfOpen = !0
    } = props,
    pointerTypeRef = useRef(void 0),
    didKeyDownRef = useRef(!1),
    reference = useMemo(() => ({
      onPointerDown(event) {
        pointerTypeRef.current = event.pointerType;
      },
      onMouseDown(event) {
        const pointerType = pointerTypeRef.current;
        event.button === 0 && eventOption !== "click" && (isMouseLikePointerType(pointerType, !0) && ignoreMouse || (open && toggle && (!(dataRef.current.openEvent && stickIfOpen) || dataRef.current.openEvent.type === "mousedown") ? onOpenChange(!1, event.nativeEvent || event, "click") : (event.preventDefault(), onOpenChange(!0, event.nativeEvent || event, "click"))));
      },
      onClick(event) {
        const pointerType = pointerTypeRef.current;
        if (eventOption === "mousedown" && pointerTypeRef.current) {
          pointerTypeRef.current = void 0;
          return;
        }
        isMouseLikePointerType(pointerType, !0) && ignoreMouse || (open && toggle && (!(dataRef.current.openEvent && stickIfOpen) || dataRef.current.openEvent.type === "click") ? onOpenChange(!1, event.nativeEvent || event, "click") : onOpenChange(!0, event.nativeEvent || event, "click"));
      },
      onKeyDown(event) {
        pointerTypeRef.current = void 0, !(event.defaultPrevented || !keyboardHandlers || isButtonTarget(event)) && (event.key === " " && !isSpaceIgnored(domReference) && (event.preventDefault(), didKeyDownRef.current = !0), !isAnchorTarget(event) && event.key === "Enter" && onOpenChange(!(open && toggle), event.nativeEvent || event, "click"));
      },
      onKeyUp(event) {
        event.defaultPrevented || !keyboardHandlers || isButtonTarget(event) || isSpaceIgnored(domReference) || event.key === " " && didKeyDownRef.current && (didKeyDownRef.current = !1, onOpenChange(!(open && toggle), event.nativeEvent || event, "click"));
      }
    }), [dataRef, domReference, eventOption, ignoreMouse, keyboardHandlers, onOpenChange, open, stickIfOpen, toggle]);
  return useMemo(() => enabled ? {
    reference
  } : {}, [enabled, reference]);
}
export { useClick };
//# sourceMappingURL=useClick.mjs.map
