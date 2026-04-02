import { createGlobalState } from "./globalState.mjs";
const state = createGlobalState("safe_area", {
    enabled: !1,
    useSafeAreaInsets: null,
    useSafeAreaFrame: null,
    initialMetrics: null
  }),
  defaultInsets = {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  },
  defaultFrame = {
    x: 0,
    y: 0,
    width: 0,
    height: 0
  };
function getSafeArea() {
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
    getInsets() {
      const s = state.get();
      return !s.enabled || !s.initialMetrics ? defaultInsets : s.initialMetrics.insets;
    },
    getFrame() {
      const s = state.get();
      return !s.enabled || !s.initialMetrics ? defaultFrame : s.initialMetrics.frame;
    }
  };
}
export { getSafeArea };
//# sourceMappingURL=safeAreaState.mjs.map
