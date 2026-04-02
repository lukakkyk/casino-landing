"use strict";

var import_gestureState = require("./gestureState.native.js");
function setup() {
  var g = globalThis;
  if (!g.__tamagui_native_gesture_setup_complete) {
    g.__tamagui_native_gesture_setup_complete = !0;
    try {
      var rngh = require("react-native-gesture-handler"),
        {
          Gesture,
          GestureDetector,
          ScrollView
        } = rngh;
      Gesture && GestureDetector && ((0, import_gestureState.getGestureHandler)().set({
        enabled: !0,
        Gesture,
        GestureDetector,
        ScrollView: ScrollView || null
      }), g.__tamagui_sheet_gesture_state__ = {
        enabled: !0,
        Gesture,
        GestureDetector,
        ScrollView: ScrollView || null
      });
    } catch {}
  }
}
setup();
//# sourceMappingURL=setup-gesture-handler.native.js.map
