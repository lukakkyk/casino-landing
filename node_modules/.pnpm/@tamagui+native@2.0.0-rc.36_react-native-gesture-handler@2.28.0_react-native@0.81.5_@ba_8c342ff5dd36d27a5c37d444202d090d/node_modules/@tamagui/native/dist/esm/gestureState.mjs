import { createGlobalState } from "./globalState.mjs";
const state = createGlobalState("gesture", {
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
      const {
        Gesture
      } = state.get();
      if (!Gesture) return null;
      const longPressDuration = config.delayLongPress ?? 500,
        tap = Gesture.Tap().runOnJS(!0).maxDuration(1e4).onBegin(e => {
          config.onPressIn?.(e);
        }).onEnd(e => {
          config.onPress?.(e);
        }).onFinalize(e => {
          config.onPressOut?.(e);
        });
      if (config.hitSlop && tap.hitSlop(config.hitSlop), !config.onLongPress) return tap;
      const longPress = Gesture.LongPress().runOnJS(!0).minDuration(longPressDuration).onBegin(e => config.onPressIn?.(e)).onStart(e => config.onLongPress?.(e)).onFinalize(e => config.onPressOut?.(e));
      return config.hitSlop && longPress.hitSlop(config.hitSlop), Gesture.Exclusive(longPress, tap);
    }
  };
}
export { getGestureHandler };
//# sourceMappingURL=gestureState.mjs.map
