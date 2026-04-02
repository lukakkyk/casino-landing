"use strict";

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
var index_exports = {};
__export(index_exports, {
  ContextMenu: () => ContextMenu
});
module.exports = __toCommonJS(index_exports);
var import_polyfill_dev = require("@tamagui/polyfill-dev"),
  import_create_menu = require("@tamagui/create-menu"),
  import_ContextMenu = require("./ContextMenu.native.js"),
  ContextMenu = (0, import_ContextMenu.createContextMenu)({
    Icon: import_create_menu.MenuPredefined.MenuIcon,
    Image: import_create_menu.MenuPredefined.MenuImage,
    Indicator: import_create_menu.MenuPredefined.MenuIndicator,
    Item: import_create_menu.MenuPredefined.MenuItem,
    Label: import_create_menu.MenuPredefined.MenuLabel,
    MenuGroup: import_create_menu.MenuPredefined.MenuGroup,
    Separator: import_create_menu.MenuPredefined.MenuSeparator,
    SubTitle: import_create_menu.MenuPredefined.SubTitle,
    Title: import_create_menu.MenuPredefined.Title
  });
//# sourceMappingURL=index.native.js.map
