var import_linearGradientState = require("./linearGradientState.cjs");
function setup() {
  const g = globalThis;
  if (!g.__tamagui_native_linear_gradient_setup) {
    g.__tamagui_native_linear_gradient_setup = !0;
    try {
      const expoLinearGradient = require("expo-linear-gradient");
      expoLinearGradient?.LinearGradient && (0, import_linearGradientState.getLinearGradient)().set({
        enabled: !0,
        Component: expoLinearGradient.LinearGradient
      });
    } catch {}
  }
}
setup();