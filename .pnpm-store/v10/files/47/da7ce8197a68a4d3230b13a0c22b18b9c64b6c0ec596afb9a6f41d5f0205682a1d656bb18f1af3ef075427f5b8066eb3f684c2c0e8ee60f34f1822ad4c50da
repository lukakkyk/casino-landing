import * as React from "react";
const VELOCITY_THRESHOLD = 0.11;
function resisted(delta, maxResist = 25) {
  if (delta >= 0) return delta;
  const pastBoundary = Math.abs(delta),
    resistedDistance = Math.sqrt(pastBoundary) * 2;
  return -Math.min(resistedDistance, maxResist);
}
function useDragGesture(options) {
  const {
      direction,
      threshold,
      onDragStart,
      onDragEnd,
      onDragCancel,
      disabled
    } = options,
    [dragState, setDragState] = React.useState({
      isDragging: !1,
      offsetX: 0,
      offsetY: 0,
      velocityX: 0,
      velocityY: 0
    }),
    dragStartRef = React.useRef(null),
    lockedDirectionRef = React.useRef(null),
    isHorizontal = direction === "left" || direction === "right" || direction === "horizontal",
    isVertical = direction === "up" || direction === "down" || direction === "vertical",
    handlePointerDown = React.useCallback(event => {
      disabled || event.button === 0 && (event.target.setPointerCapture(event.pointerId), dragStartRef.current = {
        startX: event.clientX,
        startY: event.clientY,
        startTime: Date.now()
      }, setDragState(prev => ({
        ...prev,
        isDragging: !0
      })), onDragStart?.());
    }, [disabled, onDragStart]),
    handlePointerMove = React.useCallback(event => {
      if (!dragStartRef.current || disabled) return;
      const deltaX = event.clientX - dragStartRef.current.startX,
        deltaY = event.clientY - dragStartRef.current.startY;
      !lockedDirectionRef.current && (Math.abs(deltaX) > 1 || Math.abs(deltaY) > 1) && (lockedDirectionRef.current = Math.abs(deltaX) > Math.abs(deltaY) ? "x" : "y");
      let offsetX = 0,
        offsetY = 0;
      lockedDirectionRef.current === "x" && isHorizontal ? direction === "right" ? offsetX = deltaX > 0 ? deltaX : resisted(deltaX) : direction === "left" ? offsetX = deltaX < 0 ? deltaX : -resisted(-deltaX) : offsetX = deltaX : lockedDirectionRef.current === "y" && isVertical && (direction === "down" ? offsetY = deltaY > 0 ? deltaY : resisted(deltaY) : direction === "up" ? offsetY = deltaY < 0 ? deltaY : -resisted(-deltaY) : offsetY = deltaY), setDragState(prev => ({
        ...prev,
        offsetX,
        offsetY
      }));
    }, [disabled, direction, isHorizontal, isVertical]),
    handlePointerUp = React.useCallback(event => {
      if (!dragStartRef.current || disabled) return;
      const deltaX = event.clientX - dragStartRef.current.startX,
        deltaY = event.clientY - dragStartRef.current.startY,
        timeTaken = Date.now() - dragStartRef.current.startTime,
        velocityX = Math.abs(deltaX) / timeTaken,
        velocityY = Math.abs(deltaY) / timeTaken,
        relevantDelta = isHorizontal ? deltaX : deltaY,
        relevantVelocity = isHorizontal ? velocityX : velocityY,
        passedThreshold = Math.abs(relevantDelta) >= threshold,
        hasVelocity = relevantVelocity > VELOCITY_THRESHOLD;
      let isCorrectDirection = !1;
      (direction === "right" && deltaX > 0 || direction === "left" && deltaX < 0 || direction === "horizontal" && Math.abs(deltaX) > Math.abs(deltaY) || direction === "down" && deltaY > 0 || direction === "up" && deltaY < 0 || direction === "vertical" && Math.abs(deltaY) > Math.abs(deltaX)) && (isCorrectDirection = !0);
      const shouldDismiss = isCorrectDirection && (passedThreshold || hasVelocity);
      dragStartRef.current = null, lockedDirectionRef.current = null, shouldDismiss ? onDragEnd?.(!0) : (setDragState({
        isDragging: !1,
        offsetX: 0,
        offsetY: 0,
        velocityX: 0,
        velocityY: 0
      }), onDragCancel?.());
    }, [disabled, direction, threshold, isHorizontal, onDragEnd, onDragCancel]),
    handlePointerCancel = React.useCallback(() => {
      dragStartRef.current = null, lockedDirectionRef.current = null, setDragState({
        isDragging: !1,
        offsetX: 0,
        offsetY: 0,
        velocityX: 0,
        velocityY: 0
      }), onDragCancel?.();
    }, [onDragCancel]);
  return {
    dragState,
    gestureHandlers: {
      onPointerDown: handlePointerDown,
      onPointerMove: handlePointerMove,
      onPointerUp: handlePointerUp,
      onPointerCancel: handlePointerCancel
    },
    resetDrag: handlePointerCancel
  };
}
export { useDragGesture };
//# sourceMappingURL=useDragGesture.mjs.map
