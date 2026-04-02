"use strict";

var import_safeAreaState = require("./safeAreaState.native.js");
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
      useSafeAreaInsets && (0, import_safeAreaState.getSafeArea)().set({
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
