import { getLinearGradient } from "./linearGradientState.mjs";
function setup() {
  const g = globalThis;
  if (!g.__tamagui_native_linear_gradient_setup) {
    g.__tamagui_native_linear_gradient_setup = !0;
    try {
      const expoLinearGradient = require("expo-linear-gradient");
      expoLinearGradient?.LinearGradient && getLinearGradient().set({
        enabled: !0,
        Component: expoLinearGradient.LinearGradient
      });
    } catch {}
  }
}
setup();
//# sourceMappingURL=setup-expo-linear-gradient.mjs.map
