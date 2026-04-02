import { getLinearGradient } from "./linearGradientState.native.js";
function setup() {
  var g = globalThis;
  if (!g.__tamagui_native_linear_gradient_setup) {
    g.__tamagui_native_linear_gradient_setup = !0;
    try {
      var expoLinearGradient = require("expo-linear-gradient");
      expoLinearGradient?.LinearGradient && getLinearGradient().set({
        enabled: !0,
        Component: expoLinearGradient.LinearGradient
      });
    } catch {}
  }
}
setup();
//# sourceMappingURL=setup-expo-linear-gradient.native.js.map
