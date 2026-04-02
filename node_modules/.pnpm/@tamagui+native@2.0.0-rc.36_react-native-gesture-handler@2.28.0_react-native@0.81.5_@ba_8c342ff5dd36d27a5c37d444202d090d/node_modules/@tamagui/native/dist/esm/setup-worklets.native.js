import { getWorklets } from "./workletsState.native.js";
function setup() {
  var g = globalThis;
  if (!g.__tamagui_native_worklets_setup_complete) {
    g.__tamagui_native_worklets_setup_complete = !0;
    try {
      var worklets = require("react-native-worklets-core");
      worklets && getWorklets().set({
        enabled: !0,
        Worklets: worklets.Worklets,
        useRunOnJS: worklets.useRunOnJS,
        useWorklet: worklets.useWorklet,
        createWorkletContextValue: worklets.createWorkletContextValue
      });
    } catch {}
  }
}
setup();
//# sourceMappingURL=setup-worklets.native.js.map
