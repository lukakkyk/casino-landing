import * as React from "react";
import { useEvent } from "@tamagui/use-event";
import { clearTimeoutIfSet, contains, getDocument, isElement, isMouseLikePointerType } from "./utils.native.js";
var safePolygonIdentifier = "data-floating-ui-safe-polygon";
function getDelay(value, prop, pointerType) {
  return pointerType && !isMouseLikePointerType(pointerType) ? 0 : typeof value == "number" ? value : value?.[prop];
}
function useHover(context) {
  var props = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    {
      open,
      onOpenChange,
      dataRef,
      events,
      elements
    } = context,
    {
      enabled = !0,
      delay = 0,
      handleClose = null,
      mouseOnly = !1,
      restMs = 0,
      move = !0
    } = props,
    handleCloseRef = React.useRef(handleClose);
  handleCloseRef.current = handleClose;
  var delayRef = React.useRef(delay);
  delayRef.current = delay;
  var openRef = React.useRef(open);
  openRef.current = open;
  var restMsRef = React.useRef(restMs);
  restMsRef.current = restMs;
  var stableOnOpenChange = useEvent(onOpenChange),
    pointerTypeRef = React.useRef(void 0),
    timeoutRef = React.useRef(-1),
    handlerRef = React.useRef(void 0),
    restTimeoutRef = React.useRef(-1),
    blockMouseMoveRef = React.useRef(!0),
    performedPointerEventsMutationRef = React.useRef(!1),
    unbindMouseMoveRef = React.useRef(function () {}),
    restTimeoutPendingRef = React.useRef(!1),
    isHoverOpen = useEvent(function () {
      var _dataRef_current_openEvent,
        type = (_dataRef_current_openEvent = dataRef.current.openEvent) === null || _dataRef_current_openEvent === void 0 ? void 0 : _dataRef_current_openEvent.type;
      return type?.includes("mouse") && type !== "mousedown";
    });
  React.useEffect(function () {
    if (!enabled || !events) return;
    function onOpenChange2(param) {
      var {
        open: open2
      } = param;
      open2 || (clearTimeoutIfSet(timeoutRef), clearTimeoutIfSet(restTimeoutRef), blockMouseMoveRef.current = !0, restTimeoutPendingRef.current = !1);
    }
    return events.on("openchange", onOpenChange2), function () {
      events.off("openchange", onOpenChange2);
    };
  }, [enabled, events]);
  var closeWithDelay = useEvent(function (event) {
      var runElseBranch = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0,
        reason = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "hover",
        closeDelay = getDelay(delayRef.current, "close", pointerTypeRef.current);
      closeDelay && !handlerRef.current ? (clearTimeoutIfSet(timeoutRef), timeoutRef.current = window.setTimeout(function () {
        return stableOnOpenChange(!1, event, reason);
      }, closeDelay)) : runElseBranch && (clearTimeoutIfSet(timeoutRef), stableOnOpenChange(!1, event, reason));
    }),
    cleanupMouseMoveHandler = useEvent(function () {
      unbindMouseMoveRef.current(), handlerRef.current = void 0, context.handleCloseActiveRef && (context.handleCloseActiveRef.current = !1);
    }),
    clearPointerEvents = useEvent(function () {
      if (performedPointerEventsMutationRef.current) {
        var body = getDocument(elements.floating).body;
        body.style.pointerEvents = "", body.removeAttribute(safePolygonIdentifier), performedPointerEventsMutationRef.current = !1;
      }
    }),
    isClickLikeOpenEvent = useEvent(function () {
      return dataRef.current.openEvent ? ["click", "mousedown"].includes(dataRef.current.openEvent.type) : !1;
    });
  React.useEffect(function () {
    if (!enabled) return;
    function onReferenceMouseEnter(event) {
      if (clearTimeoutIfSet(timeoutRef), blockMouseMoveRef.current = !1, !(mouseOnly && !isMouseLikePointerType(pointerTypeRef.current) || restMsRef.current > 0 && !getDelay(delayRef.current, "open"))) {
        var openDelay = getDelay(delayRef.current, "open", pointerTypeRef.current);
        openDelay ? timeoutRef.current = window.setTimeout(function () {
          openRef.current || stableOnOpenChange(!0, event, "hover");
        }, openDelay) : open || stableOnOpenChange(!0, event, "hover");
      }
    }
    function onReferenceMouseLeave(event) {
      var _context_triggerElements;
      if (isClickLikeOpenEvent()) {
        clearPointerEvents();
        return;
      }
      if (!(!((_context_triggerElements = context.triggerElements) === null || _context_triggerElements === void 0) && _context_triggerElements.hasElement(event.relatedTarget))) {
        unbindMouseMoveRef.current();
        var doc = getDocument(elements.floating);
        if (clearTimeoutIfSet(restTimeoutRef), restTimeoutPendingRef.current = !1, handleCloseRef.current) {
          open || clearTimeoutIfSet(timeoutRef);
          var placement = dataRef.current.placement || "bottom",
            reference3 = elements.domReference,
            floating2 = elements.floating;
          if (!reference3 || !floating2) return;
          handlerRef.current = handleCloseRef.current({
            x: event.clientX,
            y: event.clientY,
            placement,
            elements: {
              reference: reference3,
              floating: floating2,
              domReference: reference3
            },
            onClose() {
              context.handleCloseActiveRef && (context.handleCloseActiveRef.current = !1), clearPointerEvents(), cleanupMouseMoveHandler(), isClickLikeOpenEvent() || closeWithDelay(event, !0, "safe-polygon");
            }
          }), context.handleCloseActiveRef && (context.handleCloseActiveRef.current = !0);
          var handler = handlerRef.current;
          doc.addEventListener("mousemove", handler), unbindMouseMoveRef.current = function () {
            doc.removeEventListener("mousemove", handler);
          };
          return;
        }
        var shouldClose = pointerTypeRef.current === "touch" ? !contains(elements.floating, event.relatedTarget) : !0;
        shouldClose && closeWithDelay(event);
      }
    }
    function onScrollMouseLeave(event) {
      var _context_triggerElements, _handleCloseRef_current;
      if (!isClickLikeOpenEvent() && !(!((_context_triggerElements = context.triggerElements) === null || _context_triggerElements === void 0) && _context_triggerElements.hasElement(event.relatedTarget))) {
        var placement = dataRef.current.placement || "bottom",
          reference3 = elements.domReference,
          floating2 = elements.floating;
        !reference3 || !floating2 || (_handleCloseRef_current = handleCloseRef.current) === null || _handleCloseRef_current === void 0 || _handleCloseRef_current.call(handleCloseRef, {
          x: event.clientX,
          y: event.clientY,
          placement,
          elements: {
            reference: reference3,
            floating: floating2,
            domReference: reference3
          },
          onClose() {
            clearPointerEvents(), cleanupMouseMoveHandler(), isClickLikeOpenEvent() || closeWithDelay(event);
          }
        })(event);
      }
    }
    function onFloatingMouseEnter() {
      clearTimeoutIfSet(timeoutRef);
    }
    function onFloatingMouseLeave(event) {
      var _context_triggerElements;
      isClickLikeOpenEvent() || !((_context_triggerElements = context.triggerElements) === null || _context_triggerElements === void 0) && _context_triggerElements.hasElement(event.relatedTarget) || closeWithDelay(event, !1);
    }
    if (isElement(elements.domReference)) {
      var reference2 = elements.domReference,
        floating = elements.floating;
      return open && reference2.addEventListener("mouseleave", onScrollMouseLeave), move && reference2.addEventListener("mousemove", onReferenceMouseEnter, {
        once: !0
      }), reference2.addEventListener("mouseenter", onReferenceMouseEnter), reference2.addEventListener("mouseleave", onReferenceMouseLeave), floating && (floating.addEventListener("mouseleave", onScrollMouseLeave), floating.addEventListener("mouseenter", onFloatingMouseEnter), floating.addEventListener("mouseleave", onFloatingMouseLeave)), function () {
        open && reference2.removeEventListener("mouseleave", onScrollMouseLeave), move && reference2.removeEventListener("mousemove", onReferenceMouseEnter), reference2.removeEventListener("mouseenter", onReferenceMouseEnter), reference2.removeEventListener("mouseleave", onReferenceMouseLeave), floating && (floating.removeEventListener("mouseleave", onScrollMouseLeave), floating.removeEventListener("mouseenter", onFloatingMouseEnter), floating.removeEventListener("mouseleave", onFloatingMouseLeave)), cleanupMouseMoveHandler();
      };
    }
  }, [elements, enabled, context, mouseOnly, move, open, dataRef]), React.useLayoutEffect(function () {
    var _handleCloseRef_current___options, _handleCloseRef_current;
    if (enabled && open && !((_handleCloseRef_current = handleCloseRef.current) === null || _handleCloseRef_current === void 0 || (_handleCloseRef_current___options = _handleCloseRef_current.__options) === null || _handleCloseRef_current___options === void 0) && _handleCloseRef_current___options.blockPointerEvents && isHoverOpen()) {
      performedPointerEventsMutationRef.current = !0;
      var floatingEl = elements.floating;
      if (isElement(elements.domReference) && floatingEl) {
        var body = getDocument(elements.floating).body;
        body.setAttribute(safePolygonIdentifier, "");
        var ref = elements.domReference;
        return body.style.pointerEvents = "none", ref.style.pointerEvents = "auto", floatingEl.style.pointerEvents = "auto", function () {
          body.style.pointerEvents = "", ref.style.pointerEvents = "", floatingEl.style.pointerEvents = "";
        };
      }
    }
  }, [enabled, open, elements, isHoverOpen]), React.useLayoutEffect(function () {
    open || (pointerTypeRef.current = void 0, restTimeoutPendingRef.current = !1, cleanupMouseMoveHandler(), clearPointerEvents());
  }, [open]), React.useEffect(function () {
    return function () {
      cleanupMouseMoveHandler(), clearTimeoutIfSet(timeoutRef), clearTimeoutIfSet(restTimeoutRef), clearPointerEvents();
    };
  }, [enabled, elements.domReference]);
  var reference = React.useMemo(function () {
    function setPointerRef(event) {
      pointerTypeRef.current = event.pointerType;
    }
    return {
      onPointerDown: setPointerRef,
      onPointerEnter: setPointerRef,
      onMouseMove(event) {
        var {
          nativeEvent
        } = event;
        function handleMouseMove() {
          !blockMouseMoveRef.current && !openRef.current && stableOnOpenChange(!0, nativeEvent, "hover");
        }
        mouseOnly && !isMouseLikePointerType(pointerTypeRef.current) || open || restMsRef.current === 0 || restTimeoutPendingRef.current && Math.pow(event.movementX, 2) + Math.pow(event.movementY, 2) < 2 || (clearTimeoutIfSet(restTimeoutRef), pointerTypeRef.current === "touch" ? handleMouseMove() : (restTimeoutPendingRef.current = !0, restTimeoutRef.current = window.setTimeout(handleMouseMove, restMsRef.current)));
      }
    };
  }, [mouseOnly, open]);
  return React.useMemo(function () {
    return enabled ? {
      reference
    } : {};
  }, [enabled, reference]);
}
export { getDelay, useHover };
//# sourceMappingURL=useHover.native.js.map
