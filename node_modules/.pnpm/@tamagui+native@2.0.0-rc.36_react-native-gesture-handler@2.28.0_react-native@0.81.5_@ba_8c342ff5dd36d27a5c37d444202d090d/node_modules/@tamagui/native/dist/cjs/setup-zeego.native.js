"use strict";

var import_zeegoState = require("./zeegoState.native.js");
function setup() {
  var g = globalThis;
  if (!g.__tamagui_native_zeego_setup) {
    g.__tamagui_native_zeego_setup = !0;
    try {
      var DropdownMenu = require("zeego/dropdown-menu"),
        ContextMenu = require("zeego/context-menu");
      DropdownMenu && ContextMenu && (0, import_zeegoState.getZeego)().set({
        enabled: !0,
        DropdownMenu,
        ContextMenu
      });
    } catch (err) {
      process.env.NODE_ENV === "development" && console.warn("Error setting up Zeego", err);
    }
  }
}
setup();
//# sourceMappingURL=setup-zeego.native.js.map
