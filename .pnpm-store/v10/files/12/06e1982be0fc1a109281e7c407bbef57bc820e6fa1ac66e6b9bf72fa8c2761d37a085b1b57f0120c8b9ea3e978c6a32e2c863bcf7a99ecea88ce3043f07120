var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
    for (var name in all) __defProp(target, name, {
      get: all[name],
      enumerable: !0
    });
  },
  __copyProps = (to, from, except, desc) => {
    if (from && typeof from == "object" || typeof from == "function") for (let key of __getOwnPropNames(from)) !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, {
      get: () => from[key],
      enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
    });
    return to;
  };
var __toCommonJS = mod => __copyProps(__defProp({}, "__esModule", {
  value: !0
}), mod);
var keyboardControllerState_exports = {};
__export(keyboardControllerState_exports, {
  getKeyboardControllerState: () => getKeyboardControllerState,
  isKeyboardControllerEnabled: () => isKeyboardControllerEnabled,
  setKeyboardControllerState: () => setKeyboardControllerState
});
module.exports = __toCommonJS(keyboardControllerState_exports);
var import_globalState = require("./globalState.cjs");
const state = (0, import_globalState.createGlobalState)("keyboard_controller", {
  enabled: !1,
  KeyboardProvider: null,
  KeyboardAwareScrollView: null,
  useKeyboardHandler: null,
  useReanimatedKeyboardAnimation: null,
  KeyboardController: null,
  KeyboardEvents: null,
  KeyboardStickyView: null
});
function isKeyboardControllerEnabled() {
  return state.get().enabled;
}
function getKeyboardControllerState() {
  return state.get();
}
function setKeyboardControllerState(updates) {
  Object.assign(state.get(), updates);
}