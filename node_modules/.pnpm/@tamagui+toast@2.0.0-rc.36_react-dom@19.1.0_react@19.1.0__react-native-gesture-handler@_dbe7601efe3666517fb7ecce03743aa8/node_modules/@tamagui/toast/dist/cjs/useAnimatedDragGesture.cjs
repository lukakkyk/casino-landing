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
var useAnimatedDragGesture_exports = {};
__export(useAnimatedDragGesture_exports, {
  useAnimatedDragGesture: () => useAnimatedDragGesture
});
module.exports = __toCommonJS(useAnimatedDragGesture_exports);
var React = __toESM(require("react"), 1);
const VELOCITY_THRESHOLD = 0.11;
function resisted(delta, maxResist = 25) {
  if (delta >= 0) return delta;
  const pastBoundary = Math.abs(delta),
    resistedDistance = Math.sqrt(pastBoundary) * 2;
  return -Math.min(resistedDistance, maxResist);
}
const EXIT_DRAG_CAP = 80;
function cappedExit(delta) {
  if (Math.abs(delta) <= EXIT_DRAG_CAP) return delta;
  const sign = delta > 0 ? 1 : -1,
    overshoot = Math.abs(delta) - EXIT_DRAG_CAP;
  return sign * (EXIT_DRAG_CAP + Math.sqrt(overshoot) * 2);
}
function useAnimatedDragGesture(options) {
  const {
      direction,
      threshold,
      disabled,
      expanded,
      onDragMove,
      onDragStart,
      onDismiss,
      onCancel
    } = options,
    [isDragging, setIsDragging] = React.useState(!1),
    dragStartRef = React.useRef(null),
    lockedDirectionRef = React.useRef(null),
    captureElementRef = React.useRef(null),
    isHorizontal = direction === "left" || direction === "right" || direction === "horizontal",
    isVertical = direction === "up" || direction === "down" || direction === "vertical",
    preventSelectRef = React.useRef(null);
  function startPreventingSelection() {
    if (typeof document > "u") return;
    window.getSelection()?.removeAllRanges();
    const handler = e => e.preventDefault();
    preventSelectRef.current = handler, document.addEventListener("selectstart", handler, !0);
  }
  function stopPreventingSelection() {
    preventSelectRef.current && (document.removeEventListener("selectstart", preventSelectRef.current, !0), preventSelectRef.current = null);
  }
  const cleanup = React.useCallback(() => {
    dragStartRef.current = null, lockedDirectionRef.current = null, setIsDragging(!1), stopPreventingSelection();
  }, []);
  React.useEffect(() => () => {
    if (dragStartRef.current) {
      if (captureElementRef.current && dragStartRef.current.pointerId) try {
        captureElementRef.current.releasePointerCapture(dragStartRef.current.pointerId);
      } catch {}
      cleanup();
    }
  }, [cleanup]);
  const handlePointerDown = React.useCallback(event => {
      if (disabled || event.button !== 0 || event.target.closest('button, a, input, textarea, select, [role="button"]') || (window.getSelection()?.toString().length ?? 0) > 0) return;
      const captureElement = event.currentTarget;
      captureElementRef.current = captureElement, captureElement.setPointerCapture(event.pointerId), dragStartRef.current = {
        startX: event.clientX,
        startY: event.clientY,
        startTime: Date.now(),
        pointerId: event.pointerId
      }, startPreventingSelection(), setIsDragging(!0), onDragStart?.();
    }, [disabled, onDragStart]),
    handlePointerMove = React.useCallback(event => {
      if (!dragStartRef.current || disabled) return;
      const deltaX = event.clientX - dragStartRef.current.startX,
        deltaY = event.clientY - dragStartRef.current.startY;
      !lockedDirectionRef.current && (Math.abs(deltaX) > 1 || Math.abs(deltaY) > 1) && (lockedDirectionRef.current = Math.abs(deltaX) > Math.abs(deltaY) ? "x" : "y");
      let offsetX = 0,
        offsetY = 0;
      direction === "right" ? offsetX = deltaX > 0 ? cappedExit(deltaX) : resisted(deltaX) : direction === "left" ? offsetX = deltaX < 0 ? cappedExit(deltaX) : -resisted(-deltaX) : direction === "down" ? offsetY = deltaY > 0 ? cappedExit(deltaY) : resisted(deltaY) : direction === "up" ? offsetY = deltaY < 0 ? cappedExit(deltaY) : -resisted(-deltaY) : direction === "horizontal" ? offsetX = cappedExit(deltaX) : direction === "vertical" && (offsetY = cappedExit(deltaY)), onDragMove(offsetX, offsetY);
    }, [disabled, direction, expanded, isHorizontal, isVertical, onDragMove]),
    handlePointerUp = React.useCallback(event => {
      if (!dragStartRef.current || disabled) return;
      const deltaX = event.clientX - dragStartRef.current.startX,
        deltaY = event.clientY - dragStartRef.current.startY,
        timeTaken = Date.now() - dragStartRef.current.startTime,
        velocityX = Math.abs(deltaX) / timeTaken,
        velocityY = Math.abs(deltaY) / timeTaken,
        lockedDirection = lockedDirectionRef.current,
        isLockedToWrongAxis = lockedDirection === "y" && isHorizontal || lockedDirection === "x" && isVertical,
        relevantDelta = isHorizontal ? deltaX : deltaY,
        relevantVelocity = isHorizontal ? velocityX : velocityY,
        passedThreshold = Math.abs(relevantDelta) >= threshold,
        hasVelocity = relevantVelocity > VELOCITY_THRESHOLD;
      let exitDirection = null;
      isLockedToWrongAxis || (direction === "right" && deltaX > 0 ? exitDirection = "right" : direction === "left" && deltaX < 0 ? exitDirection = "left" : direction === "horizontal" ? Math.abs(deltaX) > Math.abs(deltaY) && (exitDirection = deltaX > 0 ? "right" : "left") : direction === "down" && deltaY > 0 ? exitDirection = "down" : direction === "up" && deltaY < 0 ? exitDirection = "up" : direction === "vertical" && Math.abs(deltaY) > Math.abs(deltaX) && (exitDirection = deltaY > 0 ? "down" : "up"));
      const shouldDismiss = exitDirection && (passedThreshold || hasVelocity);
      if (captureElementRef.current) try {
        captureElementRef.current.releasePointerCapture(event.pointerId);
      } catch {}
      cleanup(), shouldDismiss && exitDirection ? onDismiss(exitDirection, relevantVelocity) : onCancel();
    }, [disabled, direction, threshold, isHorizontal, isVertical, onDismiss, onCancel, cleanup]),
    handlePointerCancel = React.useCallback(event => {
      if (captureElementRef.current) try {
        captureElementRef.current.releasePointerCapture(event.pointerId);
      } catch {}
      cleanup(), onCancel();
    }, [onCancel, cleanup]),
    handleLostPointerCapture = React.useCallback(() => {
      dragStartRef.current && (cleanup(), onCancel());
    }, [onCancel, cleanup]);
  return {
    isDragging,
    gestureHandlers: {
      onPointerDown: handlePointerDown,
      onPointerMove: handlePointerMove,
      onPointerUp: handlePointerUp,
      onPointerCancel: handlePointerCancel,
      onLostPointerCapture: handleLostPointerCapture
    },
    gesture: null
  };
}