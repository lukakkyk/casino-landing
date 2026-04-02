var import_burntState = require("./burntState.cjs");
function setup() {
  const g = globalThis;
  if (!g.__tamagui_native_burnt_setup) {
    g.__tamagui_native_burnt_setup = !0;
    try {
      const Burnt = require("burnt");
      Burnt && (0, import_burntState.getBurnt)().set({
        enabled: !0,
        toast: Burnt.toast,
        dismissAllAlerts: Burnt.dismissAllAlerts
      });
    } catch {}
  }
}
setup();