"use strict";

var import_portalState = require("./portalState.native.js");
function setup() {
  var g = globalThis;
  if (!g.__tamagui_native_portal_setup) {
    g.__tamagui_native_portal_setup = !0;
    try {
      var teleport = require("react-native-teleport");
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
//# sourceMappingURL=setup-teleport.native.js.map
