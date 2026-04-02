"use strict";

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
var useDragGesture_native_exports = {};
__export(useDragGesture_native_exports, {
  useDragGesture: () => useDragGesture
});
module.exports = __toCommonJS(useDragGesture_native_exports);
var React = __toESM(require("react"), 1),
  import_react_native = require("react-native"),
  GESTURE_GRANT_THRESHOLD = 10,
  VELOCITY_THRESHOLD = 0.11;
function getDampening(delta) {
  var factor = Math.abs(delta) / 20;
  return 1 / (1.5 + factor);
}
function shouldGrantGestureMove(dir, dx, dy) {
  return (dir === "horizontal" || dir === "left") && dx < -GESTURE_GRANT_THRESHOLD || (dir === "horizontal" || dir === "right") && dx > GESTURE_GRANT_THRESHOLD || (dir === "vertical" || dir === "up") && dy < -GESTURE_GRANT_THRESHOLD || (dir === "vertical" || dir === "down") && dy > GESTURE_GRANT_THRESHOLD;
}
function useDragGesture(options) {
  var {
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
    dragStartTimeRef = React.useRef(0),
    isHorizontal = direction === "left" || direction === "right" || direction === "horizontal",
    isVertical = direction === "up" || direction === "down" || direction === "vertical",
    panResponder = React.useMemo(function () {
      return disabled ? null : import_react_native.PanResponder.create({
        onMoveShouldSetPanResponder: function (_e, gesture) {
          return shouldGrantGestureMove(direction, gesture.dx, gesture.dy);
        },
        onPanResponderGrant: function () {
          dragStartTimeRef.current = Date.now(), setDragState(function (prev) {
            return {
              ...prev,
              isDragging: !0
            };
          }), onDragStart?.();
        },
        onPanResponderMove: function (_e, gesture) {
          var {
              dx,
              dy
            } = gesture,
            offsetX = 0,
            offsetY = 0;
          isHorizontal && (direction === "right" && dx > 0 || direction === "left" && dx < 0 || direction === "horizontal" ? offsetX = dx : offsetX = dx * getDampening(dx)), isVertical && (direction === "down" && dy > 0 || direction === "up" && dy < 0 || direction === "vertical" ? offsetY = dy : offsetY = dy * getDampening(dy)), setDragState(function (prev) {
            return {
              ...prev,
              offsetX,
              offsetY
            };
          });
        },
        onPanResponderRelease: function (_e, gesture) {
          var {
              dx,
              dy,
              vx,
              vy
            } = gesture,
            relevantDelta = isHorizontal ? dx : dy,
            relevantVelocity = Math.abs(isHorizontal ? vx : vy),
            passedThreshold = Math.abs(relevantDelta) >= threshold,
            hasVelocity = relevantVelocity > VELOCITY_THRESHOLD,
            isCorrectDirection = !1;
          (direction === "right" && dx > 0 || direction === "left" && dx < 0 || direction === "horizontal" && Math.abs(dx) > Math.abs(dy) || direction === "down" && dy > 0 || direction === "up" && dy < 0 || direction === "vertical" && Math.abs(dy) > Math.abs(dx)) && (isCorrectDirection = !0);
          var shouldDismiss = isCorrectDirection && (passedThreshold || hasVelocity);
          shouldDismiss ? onDragEnd?.(!0) : (setDragState({
            isDragging: !1,
            offsetX: 0,
            offsetY: 0,
            velocityX: 0,
            velocityY: 0
          }), onDragCancel?.());
        },
        onPanResponderTerminate: function () {
          setDragState({
            isDragging: !1,
            offsetX: 0,
            offsetY: 0,
            velocityX: 0,
            velocityY: 0
          }), onDragCancel?.();
        }
      });
    }, [disabled, direction, threshold, isHorizontal, isVertical, onDragStart, onDragEnd, onDragCancel]),
    resetDrag = React.useCallback(function () {
      setDragState({
        isDragging: !1,
        offsetX: 0,
        offsetY: 0,
        velocityX: 0,
        velocityY: 0
      });
    }, []),
    _panResponder_panHandlers;
  return {
    dragState,
    gestureHandlers: (_panResponder_panHandlers = panResponder?.panHandlers) !== null && _panResponder_panHandlers !== void 0 ? _panResponder_panHandlers : {},
    resetDrag
  };
}
//# sourceMappingURL=useDragGesture.native.js.map
