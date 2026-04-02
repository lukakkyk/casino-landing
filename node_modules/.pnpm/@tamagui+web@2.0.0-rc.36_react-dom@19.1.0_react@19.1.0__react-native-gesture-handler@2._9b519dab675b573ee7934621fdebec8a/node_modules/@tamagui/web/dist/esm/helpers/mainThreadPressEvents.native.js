import { useRef } from "react";
var DEFAULT_LONG_PRESS_DELAY = 500,
  DEFAULT_MIN_PRESS_DURATION = 130;
function useMainThreadPressEvents(events, viewProps) {
  var enabled = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0,
    ref = useRef(null);
  if (ref.current || (ref.current = {
    state: "idle",
    pressInTimer: null,
    pressOutTimer: null,
    longPressTimer: null,
    activateTime: 0
  }), !enabled || !events) return;
  var _events_delayPressIn,
    delayPressIn = Math.max(0, (_events_delayPressIn = events.delayPressIn) !== null && _events_delayPressIn !== void 0 ? _events_delayPressIn : 0),
    _events_delayPressOut,
    delayPressOut = Math.max(0, (_events_delayPressOut = events.delayPressOut) !== null && _events_delayPressOut !== void 0 ? _events_delayPressOut : 0),
    _events_delayLongPress,
    delayLongPress = Math.max(0, (_events_delayLongPress = events.delayLongPress) !== null && _events_delayLongPress !== void 0 ? _events_delayLongPress : DEFAULT_LONG_PRESS_DELAY),
    _events_minPressDuration,
    minPressDuration = Math.max(0, (_events_minPressDuration = events.minPressDuration) !== null && _events_minPressDuration !== void 0 ? _events_minPressDuration : DEFAULT_MIN_PRESS_DURATION);
  function activate(e) {
    var _events_onPressIn;
    ref.current.state = "active", ref.current.activateTime = Date.now(), (_events_onPressIn = events.onPressIn) === null || _events_onPressIn === void 0 || _events_onPressIn.call(events, e);
  }
  function deactivate(e) {
    var pressDuration = Date.now() - ref.current.activateTime,
      remaining = Math.max(minPressDuration - pressDuration, delayPressOut);
    if (remaining > 0) ref.current.pressOutTimer = setTimeout(function () {
      var _events_onPressOut2;
      (_events_onPressOut2 = events.onPressOut) === null || _events_onPressOut2 === void 0 || _events_onPressOut2.call(events, e);
    }, remaining);else {
      var _events_onPressOut;
      (_events_onPressOut = events.onPressOut) === null || _events_onPressOut === void 0 || _events_onPressOut.call(events, e);
    }
  }
  function cleanup() {
    ref.current.pressInTimer && clearTimeout(ref.current.pressInTimer), ref.current.pressOutTimer && clearTimeout(ref.current.pressOutTimer), ref.current.longPressTimer && clearTimeout(ref.current.longPressTimer), ref.current.pressInTimer = null, ref.current.pressOutTimer = null, ref.current.longPressTimer = null;
  }
  viewProps.onStartShouldSetResponder = function () {
    return !events.disabled;
  }, viewProps.onResponderGrant = function (e) {
    cleanup(), ref.current.state = "pressing", delayPressIn > 0 ? ref.current.pressInTimer = setTimeout(function () {
      return activate(e);
    }, delayPressIn) : activate(e), events.onLongPress && (ref.current.longPressTimer = setTimeout(function () {
      if (ref.current.state === "active") {
        var _events_onLongPress;
        ref.current.state = "longPressed", (_events_onLongPress = events.onLongPress) === null || _events_onLongPress === void 0 || _events_onLongPress.call(events, e);
      }
    }, delayLongPress + delayPressIn));
  }, viewProps.onResponderRelease = function (e) {
    var wasActive = ref.current.state === "active",
      wasLongPressed = ref.current.state === "longPressed";
    if (cleanup(), ref.current.state === "pressing" && activate(e), !wasLongPressed) {
      var _events_onPress;
      (_events_onPress = events.onPress) === null || _events_onPress === void 0 || _events_onPress.call(events, e);
    }
    deactivate(e), ref.current.state = "idle";
  }, viewProps.onResponderTerminate = function (e) {
    cleanup(), (ref.current.state === "active" || ref.current.state === "longPressed") && deactivate(e), ref.current.state = "idle";
  }, viewProps.onResponderTerminationRequest = function () {
    return events.cancelable !== !1;
  }, viewProps.onResponderMove = function (e) {
    var _events_onPressMove;
    (_events_onPressMove = events.onPressMove) === null || _events_onPressMove === void 0 || _events_onPressMove.call(events, e);
  };
}
export { useMainThreadPressEvents };
//# sourceMappingURL=mainThreadPressEvents.native.js.map
