var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf,
  __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
    for (var name in all) __defProp(target, name, {
      get: all[name],
      enumerable: !0
    });
  },
  __copyProps = (to, from, except, desc) => {
    if (from && typeof from == "object" || typeof from == "function") for (let key of __getOwnPropNames(from)) !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, {
      get: () => from[key],
      enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
    });
    return to;
  };
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
    value: mod,
    enumerable: !0
  }) : target, mod)),
  __toCommonJS = mod => __copyProps(__defProp({}, "__esModule", {
    value: !0
  }), mod);
var useHover_exports = {};
__export(useHover_exports, {
  getDelay: () => getDelay,
  useHover: () => useHover
});
module.exports = __toCommonJS(useHover_exports);
var React = __toESM(require("react"), 1),
  import_use_event = require("@tamagui/use-event"),
  import_utils = require("./utils.cjs");
const safePolygonIdentifier = "data-floating-ui-safe-polygon";
function getDelay(value, prop, pointerType) {
  return pointerType && !(0, import_utils.isMouseLikePointerType)(pointerType) ? 0 : typeof value == "number" ? value : value?.[prop];
}
function useHover(context, props = {}) {
  const {
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
  const delayRef = React.useRef(delay);
  delayRef.current = delay;
  const openRef = React.useRef(open);
  openRef.current = open;
  const restMsRef = React.useRef(restMs);
  restMsRef.current = restMs;
  const stableOnOpenChange = (0, import_use_event.useEvent)(onOpenChange),
    pointerTypeRef = React.useRef(void 0),
    timeoutRef = React.useRef(-1),
    handlerRef = React.useRef(void 0),
    restTimeoutRef = React.useRef(-1),
    blockMouseMoveRef = React.useRef(!0),
    performedPointerEventsMutationRef = React.useRef(!1),
    unbindMouseMoveRef = React.useRef(() => {}),
    restTimeoutPendingRef = React.useRef(!1),
    isHoverOpen = (0, import_use_event.useEvent)(() => {
      const type = dataRef.current.openEvent?.type;
      return type?.includes("mouse") && type !== "mousedown";
    });
  React.useEffect(() => {
    if (!enabled || !events) return;
    function onOpenChange2({
      open: open2
    }) {
      open2 || ((0, import_utils.clearTimeoutIfSet)(timeoutRef), (0, import_utils.clearTimeoutIfSet)(restTimeoutRef), blockMouseMoveRef.current = !0, restTimeoutPendingRef.current = !1);
    }
    return events.on("openchange", onOpenChange2), () => {
      events.off("openchange", onOpenChange2);
    };
  }, [enabled, events]);
  const closeWithDelay = (0, import_use_event.useEvent)((event, runElseBranch = !0, reason = "hover") => {
      const closeDelay = getDelay(delayRef.current, "close", pointerTypeRef.current);
      closeDelay && !handlerRef.current ? ((0, import_utils.clearTimeoutIfSet)(timeoutRef), timeoutRef.current = window.setTimeout(() => stableOnOpenChange(!1, event, reason), closeDelay)) : runElseBranch && ((0, import_utils.clearTimeoutIfSet)(timeoutRef), stableOnOpenChange(!1, event, reason));
    }),
    cleanupMouseMoveHandler = (0, import_use_event.useEvent)(() => {
      unbindMouseMoveRef.current(), handlerRef.current = void 0, context.handleCloseActiveRef && (context.handleCloseActiveRef.current = !1);
    }),
    clearPointerEvents = (0, import_use_event.useEvent)(() => {
      if (performedPointerEventsMutationRef.current) {
        const body = (0, import_utils.getDocument)(elements.floating).body;
        body.style.pointerEvents = "", body.removeAttribute(safePolygonIdentifier), performedPointerEventsMutationRef.current = !1;
      }
    }),
    isClickLikeOpenEvent = (0, import_use_event.useEvent)(() => dataRef.current.openEvent ? ["click", "mousedown"].includes(dataRef.current.openEvent.type) : !1);
  React.useEffect(() => {
    if (!enabled) return;
    function onReferenceMouseEnter(event) {
      if ((0, import_utils.clearTimeoutIfSet)(timeoutRef), blockMouseMoveRef.current = !1, mouseOnly && !(0, import_utils.isMouseLikePointerType)(pointerTypeRef.current) || restMsRef.current > 0 && !getDelay(delayRef.current, "open")) return;
      const openDelay = getDelay(delayRef.current, "open", pointerTypeRef.current);
      openDelay ? timeoutRef.current = window.setTimeout(() => {
        openRef.current || stableOnOpenChange(!0, event, "hover");
      }, openDelay) : open || stableOnOpenChange(!0, event, "hover");
    }
    function onReferenceMouseLeave(event) {
      if (isClickLikeOpenEvent()) {
        clearPointerEvents();
        return;
      }
      if (context.triggerElements?.hasElement(event.relatedTarget)) return;
      unbindMouseMoveRef.current();
      const doc = (0, import_utils.getDocument)(elements.floating);
      if ((0, import_utils.clearTimeoutIfSet)(restTimeoutRef), restTimeoutPendingRef.current = !1, handleCloseRef.current) {
        open || (0, import_utils.clearTimeoutIfSet)(timeoutRef);
        const placement = dataRef.current.placement || "bottom",
          reference2 = elements.domReference,
          floating = elements.floating;
        if (!reference2 || !floating) return;
        handlerRef.current = handleCloseRef.current({
          x: event.clientX,
          y: event.clientY,
          placement,
          elements: {
            reference: reference2,
            floating,
            domReference: reference2
          },
          onClose() {
            context.handleCloseActiveRef && (context.handleCloseActiveRef.current = !1), clearPointerEvents(), cleanupMouseMoveHandler(), isClickLikeOpenEvent() || closeWithDelay(event, !0, "safe-polygon");
          }
        }), context.handleCloseActiveRef && (context.handleCloseActiveRef.current = !0);
        const handler = handlerRef.current;
        doc.addEventListener("mousemove", handler), unbindMouseMoveRef.current = () => {
          doc.removeEventListener("mousemove", handler);
        };
        return;
      }
      (pointerTypeRef.current !== "touch" || !(0, import_utils.contains)(elements.floating, event.relatedTarget)) && closeWithDelay(event);
    }
    function onScrollMouseLeave(event) {
      if (isClickLikeOpenEvent() || context.triggerElements?.hasElement(event.relatedTarget)) return;
      const placement = dataRef.current.placement || "bottom",
        reference2 = elements.domReference,
        floating = elements.floating;
      !reference2 || !floating || handleCloseRef.current?.({
        x: event.clientX,
        y: event.clientY,
        placement,
        elements: {
          reference: reference2,
          floating,
          domReference: reference2
        },
        onClose() {
          clearPointerEvents(), cleanupMouseMoveHandler(), isClickLikeOpenEvent() || closeWithDelay(event);
        }
      })(event);
    }
    function onFloatingMouseEnter() {
      (0, import_utils.clearTimeoutIfSet)(timeoutRef);
    }
    function onFloatingMouseLeave(event) {
      isClickLikeOpenEvent() || context.triggerElements?.hasElement(event.relatedTarget) || closeWithDelay(event, !1);
    }
    if ((0, import_utils.isElement)(elements.domReference)) {
      const reference2 = elements.domReference,
        floating = elements.floating;
      return open && reference2.addEventListener("mouseleave", onScrollMouseLeave), move && reference2.addEventListener("mousemove", onReferenceMouseEnter, {
        once: !0
      }), reference2.addEventListener("mouseenter", onReferenceMouseEnter), reference2.addEventListener("mouseleave", onReferenceMouseLeave), floating && (floating.addEventListener("mouseleave", onScrollMouseLeave), floating.addEventListener("mouseenter", onFloatingMouseEnter), floating.addEventListener("mouseleave", onFloatingMouseLeave)), () => {
        open && reference2.removeEventListener("mouseleave", onScrollMouseLeave), move && reference2.removeEventListener("mousemove", onReferenceMouseEnter), reference2.removeEventListener("mouseenter", onReferenceMouseEnter), reference2.removeEventListener("mouseleave", onReferenceMouseLeave), floating && (floating.removeEventListener("mouseleave", onScrollMouseLeave), floating.removeEventListener("mouseenter", onFloatingMouseEnter), floating.removeEventListener("mouseleave", onFloatingMouseLeave)), cleanupMouseMoveHandler();
      };
    }
  }, [elements, enabled, context, mouseOnly, move, open, dataRef]), React.useLayoutEffect(() => {
    if (enabled && open && handleCloseRef.current?.__options?.blockPointerEvents && isHoverOpen()) {
      performedPointerEventsMutationRef.current = !0;
      const floatingEl = elements.floating;
      if ((0, import_utils.isElement)(elements.domReference) && floatingEl) {
        const body = (0, import_utils.getDocument)(elements.floating).body;
        body.setAttribute(safePolygonIdentifier, "");
        const ref = elements.domReference;
        return body.style.pointerEvents = "none", ref.style.pointerEvents = "auto", floatingEl.style.pointerEvents = "auto", () => {
          body.style.pointerEvents = "", ref.style.pointerEvents = "", floatingEl.style.pointerEvents = "";
        };
      }
    }
  }, [enabled, open, elements, isHoverOpen]), React.useLayoutEffect(() => {
    open || (pointerTypeRef.current = void 0, restTimeoutPendingRef.current = !1, cleanupMouseMoveHandler(), clearPointerEvents());
  }, [open]), React.useEffect(() => () => {
    cleanupMouseMoveHandler(), (0, import_utils.clearTimeoutIfSet)(timeoutRef), (0, import_utils.clearTimeoutIfSet)(restTimeoutRef), clearPointerEvents();
  }, [enabled, elements.domReference]);
  const reference = React.useMemo(() => {
    function setPointerRef(event) {
      pointerTypeRef.current = event.pointerType;
    }
    return {
      onPointerDown: setPointerRef,
      onPointerEnter: setPointerRef,
      onMouseMove(event) {
        const {
          nativeEvent
        } = event;
        function handleMouseMove() {
          !blockMouseMoveRef.current && !openRef.current && stableOnOpenChange(!0, nativeEvent, "hover");
        }
        mouseOnly && !(0, import_utils.isMouseLikePointerType)(pointerTypeRef.current) || open || restMsRef.current === 0 || restTimeoutPendingRef.current && event.movementX ** 2 + event.movementY ** 2 < 2 || ((0, import_utils.clearTimeoutIfSet)(restTimeoutRef), pointerTypeRef.current === "touch" ? handleMouseMove() : (restTimeoutPendingRef.current = !0, restTimeoutRef.current = window.setTimeout(handleMouseMove, restMsRef.current)));
      }
    };
  }, [mouseOnly, open]);
  return React.useMemo(() => enabled ? {
    reference
  } : {}, [enabled, reference]);
}