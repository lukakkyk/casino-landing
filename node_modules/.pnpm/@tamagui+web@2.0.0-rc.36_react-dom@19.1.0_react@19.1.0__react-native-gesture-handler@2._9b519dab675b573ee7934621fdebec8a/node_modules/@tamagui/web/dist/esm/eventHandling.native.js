import { composeEventHandlers } from "@tamagui/helpers";
import { getGestureHandler } from "@tamagui/native";
import React, { useRef } from "react";
import { useMainThreadPressEvents } from "./helpers/mainThreadPressEvents.native.js";
function getWebEvents() {
  return {};
}
function useEvents(events, viewProps, stateRef, staticConfig, isHOC, isInsideNativeMenu) {
  events && (events.onFocus && (viewProps.onFocus = events.onFocus), events.onBlur && (viewProps.onBlur = events.onBlur));
  var hasPressEvents = events?.onPress,
    gh = getGestureHandler();
  hasPressEvents && (stateRef.current.hasHadEvents = !0);
  var everEnabled = !!(hasPressEvents || stateRef.current.hasHadEvents),
    isUsingRNGH = gh.isEnabled;
  if (staticConfig.isInput) {
    if (events) {
      var {
          onPressIn,
          onPressOut,
          onPress
        } = events,
        inputEvents = {
          onPressIn,
          onPressOut: onPressOut || onPress
        };
      onPressOut && onPress && (inputEvents.onPressOut = composeEventHandlers(onPress, onPressOut)), Object.assign(viewProps, inputEvents);
    }
    return null;
  }
  var isCompositeComponent = !isHOC && staticConfig.Component && typeof staticConfig.Component != "string";
  if (isHOC || isCompositeComponent) {
    if (events) {
      var {
        onPressIn: onPressIn1,
        onPressOut: onPressOut1,
        onPress: onPress1,
        onLongPress,
        delayLongPress
      } = events;
      Object.assign(viewProps, {
        onPressIn: onPressIn1,
        onPressOut: onPressOut1,
        onPress: onPress1,
        onLongPress,
        delayLongPress
      });
    }
    return null;
  }
  if (isUsingRNGH) {
    var callbacksRef = useRef(isUsingRNGH ? {} : null),
      gestureRef = useRef(null);
    if (everEnabled) {
      if (callbacksRef.current = hasPressEvents ? {
        onPressIn: events.onPressIn,
        onPressOut: events.onPressOut,
        onPress: events.onPress,
        onLongPress: events.onLongPress
      } : {}, !gestureRef.current) if (isInsideNativeMenu) {
        var {
            Gesture
          } = gh.state,
          manual = Gesture.Manual().runOnJS(!0).manualActivation(!0).onTouchesDown(function () {
            var _callbacksRef_current_onPressIn, _callbacksRef_current;
            (_callbacksRef_current_onPressIn = (_callbacksRef_current = callbacksRef.current).onPressIn) === null || _callbacksRef_current_onPressIn === void 0 || _callbacksRef_current_onPressIn.call(_callbacksRef_current, {});
          }).onTouchesUp(function () {
            var _callbacksRef_current_onPress, _callbacksRef_current, _callbacksRef_current_onPressOut, _callbacksRef_current1;
            (_callbacksRef_current_onPress = (_callbacksRef_current = callbacksRef.current).onPress) === null || _callbacksRef_current_onPress === void 0 || _callbacksRef_current_onPress.call(_callbacksRef_current, {}), (_callbacksRef_current_onPressOut = (_callbacksRef_current1 = callbacksRef.current).onPressOut) === null || _callbacksRef_current_onPressOut === void 0 || _callbacksRef_current_onPressOut.call(_callbacksRef_current1, {});
          }).onTouchesCancelled(function () {
            var _callbacksRef_current_onPressOut, _callbacksRef_current;
            (_callbacksRef_current_onPressOut = (_callbacksRef_current = callbacksRef.current).onPressOut) === null || _callbacksRef_current_onPressOut === void 0 || _callbacksRef_current_onPressOut.call(_callbacksRef_current, {});
          });
        gestureRef.current = manual;
      } else gestureRef.current = gh.createPressGesture({
        onPressIn: function (e) {
          var _callbacksRef_current_onPressIn, _callbacksRef_current;
          return (_callbacksRef_current_onPressIn = (_callbacksRef_current = callbacksRef.current).onPressIn) === null || _callbacksRef_current_onPressIn === void 0 ? void 0 : _callbacksRef_current_onPressIn.call(_callbacksRef_current, e);
        },
        onPressOut: function (e) {
          var _callbacksRef_current_onPressOut, _callbacksRef_current;
          return (_callbacksRef_current_onPressOut = (_callbacksRef_current = callbacksRef.current).onPressOut) === null || _callbacksRef_current_onPressOut === void 0 ? void 0 : _callbacksRef_current_onPressOut.call(_callbacksRef_current, e);
        },
        onPress: function (e) {
          var _callbacksRef_current_onPress, _callbacksRef_current;
          return (_callbacksRef_current_onPress = (_callbacksRef_current = callbacksRef.current).onPress) === null || _callbacksRef_current_onPress === void 0 ? void 0 : _callbacksRef_current_onPress.call(_callbacksRef_current, e);
        },
        onLongPress: function (e) {
          var _callbacksRef_current_onLongPress, _callbacksRef_current;
          return (_callbacksRef_current_onLongPress = (_callbacksRef_current = callbacksRef.current).onLongPress) === null || _callbacksRef_current_onLongPress === void 0 ? void 0 : _callbacksRef_current_onLongPress.call(_callbacksRef_current, e);
        },
        delayLongPress: events?.delayLongPress,
        hitSlop: viewProps.hitSlop
      });
      return gestureRef.current;
    }
    return null;
  }
  return useMainThreadPressEvents(events, viewProps, hasPressEvents), null;
}
function wrapWithGestureDetector(content, gesture, stateRef, isHOC, isCompositeComponent) {
  if (isHOC || isCompositeComponent) return content;
  var gh = getGestureHandler(),
    {
      GestureDetector,
      Gesture
    } = gh.state,
    shouldWrap = stateRef.current.hasHadEvents;
  if (!GestureDetector || !shouldWrap) return content;
  var gestureToUse = gesture || Gesture?.Manual();
  return gestureToUse ? React.createElement(GestureDetector, {
    gesture: gestureToUse
  }, content) : content;
}
export { getWebEvents, useEvents, wrapWithGestureDetector };
//# sourceMappingURL=eventHandling.native.js.map
