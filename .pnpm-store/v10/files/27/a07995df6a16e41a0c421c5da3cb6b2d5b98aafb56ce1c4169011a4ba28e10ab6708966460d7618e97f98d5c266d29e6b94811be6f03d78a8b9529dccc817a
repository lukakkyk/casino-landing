import { useEffect, useMemo, useRef } from "react";
import { activeElement, clearTimeoutIfSet, contains, getDocument, getTarget, isElement, isHTMLElement, isMac, isSafari, isTypeableElement, matchesFocusVisible } from "./utils.mjs";
function isMacSafari() {
  return isMac() && isSafari();
}
function useFocus(context, props = {}) {
  const {
      open,
      onOpenChange,
      events,
      dataRef,
      elements
    } = context,
    {
      enabled = !0,
      visibleOnly = !0
    } = props,
    blockFocusRef = useRef(!1),
    timeoutRef = useRef(-1),
    keyboardModalityRef = useRef(!0);
  useEffect(() => {
    if (!enabled) return;
    const win = getDocument(elements.domReference).defaultView || window;
    function onBlur() {
      !open && isHTMLElement(elements.domReference) && elements.domReference === activeElement(getDocument(elements.domReference)) && (blockFocusRef.current = !0);
    }
    function onKeyDown() {
      keyboardModalityRef.current = !0;
    }
    function onPointerDown() {
      keyboardModalityRef.current = !1;
    }
    return win.addEventListener("blur", onBlur), isMacSafari() && (win.addEventListener("keydown", onKeyDown, !0), win.addEventListener("pointerdown", onPointerDown, !0)), () => {
      win.removeEventListener("blur", onBlur), isMacSafari() && (win.removeEventListener("keydown", onKeyDown, !0), win.removeEventListener("pointerdown", onPointerDown, !0));
    };
  }, [elements.domReference, open, enabled]), useEffect(() => {
    if (!enabled || !events) return;
    function handleOpenChange({
      reason
    }) {
      (reason === "reference-press" || reason === "escape-key") && (blockFocusRef.current = !0);
    }
    return events.on("openchange", handleOpenChange), () => {
      events.off("openchange", handleOpenChange);
    };
  }, [events, enabled]), useEffect(() => () => {
    clearTimeoutIfSet(timeoutRef);
  }, []);
  const reference = useMemo(() => ({
    onMouseLeave() {
      blockFocusRef.current = !1;
    },
    onFocus(event) {
      if (blockFocusRef.current) return;
      const target = getTarget(event.nativeEvent);
      if (visibleOnly && isElement(target)) {
        if (isMacSafari() && !event.relatedTarget) {
          if (!keyboardModalityRef.current && !isTypeableElement(target)) return;
        } else if (!matchesFocusVisible(target)) return;
      }
      onOpenChange(!0, event.nativeEvent, "focus");
    },
    onBlur(event) {
      blockFocusRef.current = !1;
      const relatedTarget = event.relatedTarget,
        nativeEvent = event.nativeEvent;
      timeoutRef.current = window.setTimeout(() => {
        const activeEl = activeElement(elements.domReference ? elements.domReference.ownerDocument : document);
        !relatedTarget && activeEl === elements.domReference || contains(context.refs.floating.current, activeEl) || contains(elements.domReference, activeEl) || onOpenChange(!1, nativeEvent, "focus");
      });
    }
  }), [context.refs.floating, elements.domReference, onOpenChange, visibleOnly]);
  return useMemo(() => enabled ? {
    reference
  } : {}, [enabled, reference]);
}
export { useFocus };
//# sourceMappingURL=useFocus.mjs.map
