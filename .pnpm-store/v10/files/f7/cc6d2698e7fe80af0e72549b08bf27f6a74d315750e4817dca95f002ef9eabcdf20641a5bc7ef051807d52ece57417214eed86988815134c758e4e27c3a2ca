import { getGestureHandler } from "@tamagui/native";
import * as React from "react";
import { PanResponder } from "react-native";
var VELOCITY_THRESHOLD = 0.11,
  GESTURE_GRANT_THRESHOLD = 10;
function resisted(delta) {
  var maxResist = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 25;
  if (delta >= 0) return delta;
  var pastBoundary = Math.abs(delta),
    resistedDistance = Math.sqrt(pastBoundary) * 2;
  return -Math.min(resistedDistance, maxResist);
}
var EXIT_DRAG_CAP = 80;
function cappedExit(delta) {
  if (Math.abs(delta) <= EXIT_DRAG_CAP) return delta;
  var sign = delta > 0 ? 1 : -1,
    overshoot = Math.abs(delta) - EXIT_DRAG_CAP;
  return sign * (EXIT_DRAG_CAP + Math.sqrt(overshoot) * 2);
}
function computeOffset(direction, dx, dy) {
  var offsetX = 0,
    offsetY = 0;
  return direction === "right" ? offsetX = dx > 0 ? cappedExit(dx) : resisted(dx) : direction === "left" ? offsetX = dx < 0 ? cappedExit(dx) : -resisted(-dx) : direction === "down" ? offsetY = dy > 0 ? cappedExit(dy) : resisted(dy) : direction === "up" ? offsetY = dy < 0 ? cappedExit(dy) : -resisted(-dy) : direction === "horizontal" ? offsetX = cappedExit(dx) : direction === "vertical" && (offsetY = cappedExit(dy)), {
    offsetX,
    offsetY
  };
}
function computeExitDirection(direction, dx, dy) {
  return direction === "right" && dx > 0 ? "right" : direction === "left" && dx < 0 ? "left" : direction === "horizontal" && Math.abs(dx) > Math.abs(dy) ? dx > 0 ? "right" : "left" : direction === "down" && dy > 0 ? "down" : direction === "up" && dy < 0 ? "up" : direction === "vertical" && Math.abs(dy) > Math.abs(dx) ? dy > 0 ? "down" : "up" : null;
}
function shouldGrantGestureMove(dir, dx, dy) {
  var absDx = Math.abs(dx),
    absDy = Math.abs(dy);
  return (dir === "horizontal" || dir === "left" || dir === "right") && absDx > GESTURE_GRANT_THRESHOLD && absDx > absDy || (dir === "vertical" || dir === "up" || dir === "down") && absDy > GESTURE_GRANT_THRESHOLD && absDy > absDx;
}
function useAnimatedDragGesture(options) {
  var {
      direction,
      threshold,
      disabled
    } = options,
    [isDragging, setIsDragging] = React.useState(!1),
    isHorizontal = direction === "left" || direction === "right" || direction === "horizontal",
    gestureRef = React.useRef(null),
    onDragMoveRef = React.useRef(options.onDragMove),
    onDragStartRef = React.useRef(options.onDragStart),
    onDismissRef = React.useRef(options.onDismiss),
    onCancelRef = React.useRef(options.onCancel);
  onDragMoveRef.current = options.onDragMove, onDragStartRef.current = options.onDragStart, onDismissRef.current = options.onDismiss, onCancelRef.current = options.onCancel;
  var rnghEnabled = getGestureHandler().isEnabled,
    gesture = React.useMemo(function () {
      if (!rnghEnabled || disabled) return null;
      var {
        Gesture
      } = getGestureHandler().state;
      if (!Gesture) return null;
      var pan = Gesture.Pan().withRef(gestureRef).shouldCancelWhenOutside(!1).runOnJS(!0);
      return isHorizontal ? (pan.activeOffsetX([-10, 10]), pan.failOffsetY([-20, 20])) : (pan.activeOffsetY([-10, 10]), pan.failOffsetX([-20, 20])), pan.onStart(function () {
        var _onDragStartRef_current;
        setIsDragging(!0), (_onDragStartRef_current = onDragStartRef.current) === null || _onDragStartRef_current === void 0 || _onDragStartRef_current.call(onDragStartRef);
      }).onChange(function (event) {
        var {
          offsetX,
          offsetY
        } = computeOffset(direction, event.translationX, event.translationY);
        onDragMoveRef.current(offsetX, offsetY);
      }).onEnd(function (event) {
        var dx = event.translationX,
          dy = event.translationY,
          relevantDelta = isHorizontal ? dx : dy,
          relevantVelocity = Math.abs(isHorizontal ? event.velocityX / 1e3 : event.velocityY / 1e3),
          passedThreshold = Math.abs(relevantDelta) >= threshold,
          hasVelocity = relevantVelocity > VELOCITY_THRESHOLD,
          exitDirection = computeExitDirection(direction, dx, dy),
          shouldDismiss = exitDirection && (passedThreshold || hasVelocity);
        setIsDragging(!1), shouldDismiss && exitDirection ? onDismissRef.current(exitDirection, relevantVelocity) : onCancelRef.current();
      }).onFinalize(function () {
        setIsDragging(!1);
      }), pan;
    }, [disabled, direction, threshold, isHorizontal, rnghEnabled]),
    panResponder = React.useMemo(function () {
      return rnghEnabled || disabled ? null : PanResponder.create({
        onMoveShouldSetPanResponder: function (_e, g) {
          return shouldGrantGestureMove(direction, g.dx, g.dy);
        },
        onMoveShouldSetPanResponderCapture: function (_e, g) {
          return shouldGrantGestureMove(direction, g.dx, g.dy);
        },
        onPanResponderTerminationRequest: function () {
          return !1;
        },
        onPanResponderGrant: function () {
          var _onDragStartRef_current;
          setIsDragging(!0), (_onDragStartRef_current = onDragStartRef.current) === null || _onDragStartRef_current === void 0 || _onDragStartRef_current.call(onDragStartRef);
        },
        onPanResponderMove: function (_e, g) {
          var {
            offsetX,
            offsetY
          } = computeOffset(direction, g.dx, g.dy);
          onDragMoveRef.current(offsetX, offsetY);
        },
        onPanResponderRelease: function (_e, g) {
          var {
              dx,
              dy,
              vx,
              vy
            } = g,
            relevantDelta = isHorizontal ? dx : dy,
            relevantVelocity = Math.abs(isHorizontal ? vx : vy),
            passedThreshold = Math.abs(relevantDelta) >= threshold,
            hasVelocity = relevantVelocity > VELOCITY_THRESHOLD,
            exitDirection = computeExitDirection(direction, dx, dy),
            shouldDismiss = exitDirection && (passedThreshold || hasVelocity);
          setIsDragging(!1), shouldDismiss && exitDirection ? onDismissRef.current(exitDirection, relevantVelocity) : onCancelRef.current();
        },
        onPanResponderTerminate: function () {
          setIsDragging(!1), onCancelRef.current();
        }
      });
    }, [disabled, direction, threshold, isHorizontal, rnghEnabled]),
    _panResponder_panHandlers;
  return {
    isDragging,
    gestureHandlers: (_panResponder_panHandlers = panResponder?.panHandlers) !== null && _panResponder_panHandlers !== void 0 ? _panResponder_panHandlers : {},
    gesture
  };
}
export { useAnimatedDragGesture };
//# sourceMappingURL=useAnimatedDragGesture.native.js.map
