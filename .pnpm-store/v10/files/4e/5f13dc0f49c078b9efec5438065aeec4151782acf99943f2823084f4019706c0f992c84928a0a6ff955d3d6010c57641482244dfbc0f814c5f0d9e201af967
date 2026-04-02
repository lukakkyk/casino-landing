import { getSafeArea } from "./safeAreaState.native.js";
function setup() {
  var g = globalThis;
  if (!g.__tamagui_native_safe_area_setup_complete) {
    g.__tamagui_native_safe_area_setup_complete = !0;
    try {
      var safeAreaContext = require("react-native-safe-area-context"),
        {
          useSafeAreaInsets,
          useSafeAreaFrame,
          initialWindowMetrics
        } = safeAreaContext;
      useSafeAreaInsets && getSafeArea().set({
        enabled: !0,
        useSafeAreaInsets,
        useSafeAreaFrame: useSafeAreaFrame || null,
        initialMetrics: initialWindowMetrics || null
      });
    } catch {}
  }
}
setup();
//# sourceMappingURL=setup-safe-area.native.js.map
