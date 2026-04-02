import { getPortal } from "./portalState.mjs";
function setup() {
  const g = globalThis;
  if (!g.__tamagui_native_portal_setup) {
    g.__tamagui_native_portal_setup = !0;
    try {
      const teleport = require("react-native-teleport");
      if (teleport?.Portal && teleport?.PortalHost && teleport?.PortalProvider) {
        g.__tamagui_teleport = teleport, getPortal().set({
          enabled: !0,
          type: "teleport"
        });
        return;
      }
    } catch {}
  }
}
setup();
//# sourceMappingURL=setup-teleport.mjs.map
