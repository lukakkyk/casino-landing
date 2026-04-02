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
var withNativeMenu_exports = {};
__export(withNativeMenu_exports, {
  withNativeMenu: () => withNativeMenu
});
module.exports = __toCommonJS(withNativeMenu_exports);
var import_web = require("@tamagui/web"),
  import_jsx_runtime = require("react/jsx-runtime");
function withNativeMenu({
  Component,
  NativeComponent
}) {
  if (import_web.isWeb || !NativeComponent) return Component;
  const Menu = props => /* @__PURE__ */(0, import_jsx_runtime.jsx)(NativeComponent, {
    ...props
  });
  return Menu.displayName = NativeComponent.displayName || Component?.displayName, Menu;
}