var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
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
var __toCommonJS = mod => __copyProps(__defProp({}, "__esModule", {
  value: !0
}), mod);
var gestureState_exports = {};
__export(gestureState_exports, {
  getGestureHandler: () => getGestureHandler
});
module.exports = __toCommonJS(gestureState_exports);
var import_globalState = require("./globalState.cjs");
const state = (0, import_globalState.createGlobalState)("gesture", {
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