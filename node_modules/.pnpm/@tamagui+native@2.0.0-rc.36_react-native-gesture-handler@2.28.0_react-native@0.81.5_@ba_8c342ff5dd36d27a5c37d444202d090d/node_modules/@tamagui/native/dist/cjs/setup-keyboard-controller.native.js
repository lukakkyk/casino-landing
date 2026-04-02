"use strict";

var import_keyboardControllerState = require("./keyboardControllerState.native.js");
function setup() {
  var g = globalThis;
  if (!g.__tamagui_native_keyboard_controller_setup_complete) {
    g.__tamagui_native_keyboard_controller_setup_complete = !0;
    try {
      var rnkc = require("react-native-keyboard-controller"),
        {
          KeyboardProvider,
          KeyboardAwareScrollView,
          useKeyboardHandler,
          useReanimatedKeyboardAnimation,
          KeyboardController,
          KeyboardEvents,
          KeyboardStickyView
        } = rnkc;
      useKeyboardHandler && KeyboardProvider && (0, import_keyboardControllerState.setKeyboardControllerState)({
        enabled: !0,
        KeyboardProvider: KeyboardProvider || null,
        KeyboardAwareScrollView: KeyboardAwareScrollView || null,
        useKeyboardHandler: useKeyboardHandler || null,
        useReanimatedKeyboardAnimation: useReanimatedKeyboardAnimation || null,
        KeyboardController: KeyboardController || null,
        KeyboardEvents: KeyboardEvents || null,
        KeyboardStickyView: KeyboardStickyView || null
      });
    } catch {}
  }
}
setup();
//# sourceMappingURL=setup-keyboard-controller.native.js.map
