import { getZeego } from "./zeegoState.mjs";
function setup() {
  const g = globalThis;
  if (!g.__tamagui_native_zeego_setup) {
    g.__tamagui_native_zeego_setup = !0;
    try {
      const DropdownMenu = require("zeego/dropdown-menu"),
        ContextMenu = require("zeego/context-menu");
      DropdownMenu && ContextMenu && getZeego().set({
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
//# sourceMappingURL=setup-zeego.mjs.map
