var import_portalState = require("./portalState.cjs");
function setup() {
  const g = globalThis;
  if (!g.__tamagui_native_portal_setup) {
    g.__tamagui_native_portal_setup = !0;
    try {
      const teleport = require("react-native-teleport");
      if (teleport?.Portal && teleport?.PortalHost && teleport?.PortalProvider) {
        g.__tamagui_teleport = teleport, (0, import_portalState.getPortal)().set({
          enabled: !0,
          type: "teleport"
        });
        return;
      }
    } catch {}
  }
}
setup();