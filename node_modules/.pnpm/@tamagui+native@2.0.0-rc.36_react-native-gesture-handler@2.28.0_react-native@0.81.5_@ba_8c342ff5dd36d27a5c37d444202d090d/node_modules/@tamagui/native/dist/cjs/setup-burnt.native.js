"use strict";

var import_burntState = require("./burntState.native.js");
function setup() {
  var g = globalThis;
  if (!g.__tamagui_native_burnt_setup) {
    g.__tamagui_native_burnt_setup = !0;
    try {
      var Burnt = require("burnt");
      Burnt && (0, import_burntState.getBurnt)().set({
        enabled: !0,
        toast: Burnt.toast,
        dismissAllAlerts: Burnt.dismissAllAlerts
      });
    } catch {}
  }
}
setup();
//# sourceMappingURL=setup-burnt.native.js.map
