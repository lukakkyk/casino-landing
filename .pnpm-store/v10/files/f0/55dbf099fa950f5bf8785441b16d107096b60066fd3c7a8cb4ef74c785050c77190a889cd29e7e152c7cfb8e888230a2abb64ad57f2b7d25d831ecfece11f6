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
var ContextMenu_exports = {};
__export(ContextMenu_exports, {
  createContextMenu: () => createContextMenu
});
module.exports = __toCommonJS(ContextMenu_exports);
var import_create_menu = require("@tamagui/create-menu"),
  import_web = require("@tamagui/web"),
  import_react = __toESM(require("react"), 1),
  import_createNonNativeContextMenu = require("./createNonNativeContextMenu.native.js"),
  COMMON_PARAMS = {
    isRoot: !1,
    scope: import_createNonNativeContextMenu.CONTEXTMENU_CONTEXT
  };
function createContextMenu(param) {
  var {
      Menu: NativeMenuRoot
    } = (0, import_create_menu.createNativeMenu)("ContextMenu"),
    NonNativeContextMenu = (0, import_createNonNativeContextMenu.createNonNativeContextMenu)(param),
    ContextMenuComp = (0, import_create_menu.withNativeMenu)({
      ...COMMON_PARAMS,
      Component: NonNativeContextMenu.Root,
      NativeComponent: NativeMenuRoot,
      isRoot: !0
    }),
    Trigger = (0, import_create_menu.withNativeMenu)({
      ...COMMON_PARAMS,
      Component: NonNativeContextMenu.Trigger,
      NativeComponent: NativeMenuRoot.Trigger
    }),
    Portal = (0, import_create_menu.withNativeMenu)({
      ...COMMON_PARAMS,
      Component: NonNativeContextMenu.Portal,
      NativeComponent: import_react.default.Fragment
    }),
    Content = (0, import_create_menu.withNativeMenu)({
      ...COMMON_PARAMS,
      Component: NonNativeContextMenu.Content,
      NativeComponent: NativeMenuRoot.Content
    }),
    Preview = (0, import_create_menu.withNativeMenu)({
      ...COMMON_PARAMS,
      Component: NonNativeContextMenu.Preview,
      NativeComponent: NativeMenuRoot.Preview
    }),
    Group = (0, import_create_menu.withNativeMenu)({
      ...COMMON_PARAMS,
      Component: NonNativeContextMenu.Group,
      NativeComponent: NativeMenuRoot.Group
    }),
    Label = (0, import_create_menu.withNativeMenu)({
      ...COMMON_PARAMS,
      Component: NonNativeContextMenu.Label,
      NativeComponent: NativeMenuRoot.Label
    }),
    Item = (0, import_create_menu.withNativeMenu)({
      ...COMMON_PARAMS,
      Component: NonNativeContextMenu.Item,
      NativeComponent: NativeMenuRoot.Item
    }),
    ItemTitle = (0, import_create_menu.withNativeMenu)({
      ...COMMON_PARAMS,
      Component: NonNativeContextMenu.ItemTitle,
      NativeComponent: NativeMenuRoot.ItemTitle
    }),
    ItemSubtitle = (0, import_create_menu.withNativeMenu)({
      ...COMMON_PARAMS,
      Component: NonNativeContextMenu.ItemSubtitle,
      NativeComponent: NativeMenuRoot.ItemSubtitle
    }),
    ItemIcon = (0, import_create_menu.withNativeMenu)({
      ...COMMON_PARAMS,
      Component: NonNativeContextMenu.ItemIcon,
      NativeComponent: NativeMenuRoot.ItemIcon
    }),
    ItemImage = (0, import_create_menu.withNativeMenu)({
      ...COMMON_PARAMS,
      Component: NonNativeContextMenu.ItemImage,
      NativeComponent: NativeMenuRoot.ItemImage
    }),
    CheckboxItem = (0, import_create_menu.withNativeMenu)({
      ...COMMON_PARAMS,
      Component: NonNativeContextMenu.CheckboxItem,
      NativeComponent: NativeMenuRoot.CheckboxItem
    }),
    RadioGroup = (0, import_create_menu.withNativeMenu)({
      ...COMMON_PARAMS,
      Component: NonNativeContextMenu.RadioGroup,
      NativeComponent: function () {
        return null;
      }
    }),
    RadioItem = (0, import_create_menu.withNativeMenu)({
      ...COMMON_PARAMS,
      Component: NonNativeContextMenu.RadioItem,
      NativeComponent: function (param2) {
        var {
          children
        } = param2;
        return children;
      }
    }),
    ItemIndicator = (0, import_create_menu.withNativeMenu)({
      ...COMMON_PARAMS,
      Component: NonNativeContextMenu.ItemIndicator,
      NativeComponent: NativeMenuRoot.ItemIndicator
    }),
    Separator = (0, import_create_menu.withNativeMenu)({
      ...COMMON_PARAMS,
      Component: NonNativeContextMenu.Separator,
      NativeComponent: NativeMenuRoot.Separator
    }),
    Arrow = (0, import_create_menu.withNativeMenu)({
      ...COMMON_PARAMS,
      Component: NonNativeContextMenu.Arrow,
      NativeComponent: NativeMenuRoot.Arrow
    }),
    Sub = (0, import_create_menu.withNativeMenu)({
      ...COMMON_PARAMS,
      Component: NonNativeContextMenu.Sub,
      NativeComponent: NativeMenuRoot.Sub
    }),
    SubTrigger = (0, import_create_menu.withNativeMenu)({
      ...COMMON_PARAMS,
      Component: NonNativeContextMenu.SubTrigger,
      NativeComponent: NativeMenuRoot.SubTrigger
    }),
    SubContent = (0, import_create_menu.withNativeMenu)({
      ...COMMON_PARAMS,
      Component: NonNativeContextMenu.SubContent,
      NativeComponent: NativeMenuRoot.SubContent
    }),
    ContextMenu = (0, import_web.withStaticProperties)(ContextMenuComp, {
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
      // cast to React.FC to avoid TS error
      SubTrigger,
      SubContent,
      ItemTitle,
      ItemSubtitle,
      // cast to React.FC to avoid TS error
      ItemIcon,
      ItemImage,
      Preview
    });
  return ContextMenu;
}
//# sourceMappingURL=ContextMenu.native.js.map
