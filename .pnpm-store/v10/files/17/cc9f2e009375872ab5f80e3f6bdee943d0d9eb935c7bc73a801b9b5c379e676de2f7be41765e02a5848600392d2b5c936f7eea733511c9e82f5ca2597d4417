import { createGlobalState } from "./globalState.native.js";
var state = createGlobalState("gesture", {
  enabled: !1,
  Gesture: null,
  GestureDetector: null,
  ScrollView: null
});
function getGestureHandler() {
  return {
    get isEnabled() {
      return state.get().enabled;
    },
    get state() {
      return state.get();
    },
    set(updates) {
      Object.assign(state.get(), updates);
    },
    disable() {
      state.get().enabled = !1;
    },
    createPressGesture(config) {
      var {
        Gesture
      } = state.get();
      if (!Gesture) return null;
      var _config_delayLongPress,
        longPressDuration = (_config_delayLongPress = config.delayLongPress) !== null && _config_delayLongPress !== void 0 ? _config_delayLongPress : 500,
        tap = Gesture.Tap().runOnJS(!0).maxDuration(1e4).onBegin(function (e) {
          var _config_onPressIn;
          (_config_onPressIn = config.onPressIn) === null || _config_onPressIn === void 0 || _config_onPressIn.call(config, e);
        }).onEnd(function (e) {
          var _config_onPress;
          (_config_onPress = config.onPress) === null || _config_onPress === void 0 || _config_onPress.call(config, e);
        }).onFinalize(function (e) {
          var _config_onPressOut;
          (_config_onPressOut = config.onPressOut) === null || _config_onPressOut === void 0 || _config_onPressOut.call(config, e);
        });
      if (config.hitSlop && tap.hitSlop(config.hitSlop), !config.onLongPress) return tap;
      var longPress = Gesture.LongPress().runOnJS(!0).minDuration(longPressDuration).onBegin(function (e) {
        var _config_onPressIn;
        return (_config_onPressIn = config.onPressIn) === null || _config_onPressIn === void 0 ? void 0 : _config_onPressIn.call(config, e);
      }).onStart(function (e) {
        var _config_onLongPress;
        return (_config_onLongPress = config.onLongPress) === null || _config_onLongPress === void 0 ? void 0 : _config_onLongPress.call(config, e);
      }).onFinalize(function (e) {
        var _config_onPressOut;
        return (_config_onPressOut = config.onPressOut) === null || _config_onPressOut === void 0 ? void 0 : _config_onPressOut.call(config, e);
      });
      return config.hitSlop && longPress.hitSlop(config.hitSlop), Gesture.Exclusive(longPress, tap);
    }
  };
}
export { getGestureHandler };
//# sourceMappingURL=gestureState.native.js.map
