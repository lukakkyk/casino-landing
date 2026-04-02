"use strict";

var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf,
  __hasOwnProp = Object.prototype.hasOwnProperty;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
    value: mod,
    enumerable: !0
  }) : target, mod)),
  __toCommonJS = mod => __copyProps(__defProp({}, "__esModule", {
    value: !0
  }), mod);
var Menu_exports = {};
__export(Menu_exports, {
  createMenu: () => createMenu
});
module.exports = __toCommonJS(Menu_exports);
var import_jsx_runtime = require("react/jsx-runtime"),
  import_create_menu = require("@tamagui/create-menu"),
  import_web = require("@tamagui/web"),
  import_react = __toESM(require("react"), 1),
  import_createNonNativeMenu = require("./createNonNativeMenu.native.js");
function createMenu(params) {
  var {
      Menu: NativeMenuRoot
    } = (0, import_create_menu.createNativeMenu)("Menu"),
    NonNativeMenu = (0, import_createNonNativeMenu.createNonNativeMenu)(params),
    COMMON_PARAMS = {
      isRoot: !1,
      scope: import_createNonNativeMenu.DROPDOWN_MENU_CONTEXT
    },
    MenuComp = (0, import_create_menu.withNativeMenu)({
      ...COMMON_PARAMS,
      Component: NonNativeMenu.Root,
      NativeComponent: NativeMenuRoot,
      isRoot: !0
    }),
    Trigger = (0, import_create_menu.withNativeMenu)({
      ...COMMON_PARAMS,
      Component: NonNativeMenu.Trigger,
      NativeComponent: NativeMenuRoot.Trigger
    }),
    Portal = (0, import_create_menu.withNativeMenu)({
      ...COMMON_PARAMS,
      Component: NonNativeMenu.Portal,
      NativeComponent: import_react.default.Fragment
    }),
    Content = (0, import_create_menu.withNativeMenu)({
      ...COMMON_PARAMS,
      Component: NonNativeMenu.Content,
      NativeComponent: NativeMenuRoot.Content
    }),
    Group = (0, import_create_menu.withNativeMenu)({
      ...COMMON_PARAMS,
      Component: NonNativeMenu.Group,
      NativeComponent: NativeMenuRoot.Group
    }),
    Label = (0, import_create_menu.withNativeMenu)({
      ...COMMON_PARAMS,
      Component: NonNativeMenu.Label,
      NativeComponent: NativeMenuRoot.Label
    }),
    Item = (0, import_create_menu.withNativeMenu)({
      ...COMMON_PARAMS,
      Component: NonNativeMenu.Item,
      NativeComponent: NativeMenuRoot.Item
    }),
    ItemTitle = (0, import_create_menu.withNativeMenu)({
      ...COMMON_PARAMS,
      Component: NonNativeMenu.ItemTitle,
      NativeComponent: NativeMenuRoot.ItemTitle
    }),
    ItemSubtitle = (0, import_create_menu.withNativeMenu)({
      ...COMMON_PARAMS,
      Component: NonNativeMenu.ItemSubtitle,
      NativeComponent: NativeMenuRoot.ItemSubtitle
    }),
    ItemIcon = (0, import_create_menu.withNativeMenu)({
      ...COMMON_PARAMS,
      Component: NonNativeMenu.ItemIcon,
      NativeComponent: NativeMenuRoot.ItemIcon
    }),
    ItemImage = (0, import_create_menu.withNativeMenu)({
      ...COMMON_PARAMS,
      Component: NonNativeMenu.ItemImage,
      NativeComponent: NativeMenuRoot.ItemImage
    }),
    CheckboxItem = (0, import_create_menu.withNativeMenu)({
      ...COMMON_PARAMS,
      Component: NonNativeMenu.CheckboxItem,
      NativeComponent: NativeMenuRoot.CheckboxItem
    }),
    RadioGroup = (0, import_create_menu.withNativeMenu)({
      ...COMMON_PARAMS,
      Component: NonNativeMenu.RadioGroup,
      NativeComponent: function (param) {
        var {
          children
        } = param;
        return /* @__PURE__ */(0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, {
          children
        });
      }
    }),
    RadioItem = (0, import_create_menu.withNativeMenu)({
      ...COMMON_PARAMS,
      Component: NonNativeMenu.RadioItem,
      NativeComponent: function (param) {
        var {
          children
        } = param;
        return /* @__PURE__ */(0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, {
          children
        });
      }
    }),
    ItemIndicator = (0, import_create_menu.withNativeMenu)({
      ...COMMON_PARAMS,
      Component: NonNativeMenu.ItemIndicator,
      NativeComponent: NativeMenuRoot.ItemIndicator
    }),
    Separator = (0, import_create_menu.withNativeMenu)({
      ...COMMON_PARAMS,
      Component: NonNativeMenu.Separator,
      NativeComponent: NativeMenuRoot.Separator
    }),
    Arrow = (0, import_create_menu.withNativeMenu)({
      ...COMMON_PARAMS,
      Component: NonNativeMenu.Arrow,
      NativeComponent: NativeMenuRoot.Arrow
    }),
    Sub = (0, import_create_menu.withNativeMenu)({
      ...COMMON_PARAMS,
      Component: NonNativeMenu.Sub,
      NativeComponent: NativeMenuRoot.Sub
    }),
    SubTrigger = (0, import_create_menu.withNativeMenu)({
      ...COMMON_PARAMS,
      Component: NonNativeMenu.SubTrigger,
      NativeComponent: NativeMenuRoot.SubTrigger
    }),
    SubContent = (0, import_create_menu.withNativeMenu)({
      ...COMMON_PARAMS,
      Component: NonNativeMenu.SubContent,
      NativeComponent: NativeMenuRoot.SubContent
    }),
    NativeScrollView = function (param) {
      var {
        children
      } = param;
      return /* @__PURE__ */(0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, {
        children
      });
    };
  NativeScrollView.displayName = "MenuScrollView";
  var ScrollView = import_web.isWeb ? NonNativeMenu.ScrollView : NativeScrollView,
    Menu = (0, import_web.withStaticProperties)(MenuComp, {
      Trigger,
      Portal,
      Content,
      Group,
      Label,
      Item,
      CheckboxItem,
      RadioGroup,
      RadioItem,
      ItemIndicator,
      Separator,
      Arrow,
      Sub,
      SubTrigger,
      SubContent,
      ItemTitle,
      ItemSubtitle,
      ItemIcon,
      ItemImage,
      ScrollView
    });
  return Menu;
}
//# sourceMappingURL=Menu.native.js.map
