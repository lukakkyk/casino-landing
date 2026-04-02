import { getBurnt } from "./burntState.mjs";
function setup() {
  const g = globalThis;
  if (!g.__tamagui_native_burnt_setup) {
    g.__tamagui_native_burnt_setup = !0;
    try {
      const Burnt = require("burnt");
      Burnt && getBurnt().set({
        enabled: !0,
        toast: Burnt.toast,
        dismissAllAlerts: Burnt.dismissAllAlerts
      });
    } catch {}
  }
}
setup();
//# sourceMappingURL=setup-burnt.mjs.map
