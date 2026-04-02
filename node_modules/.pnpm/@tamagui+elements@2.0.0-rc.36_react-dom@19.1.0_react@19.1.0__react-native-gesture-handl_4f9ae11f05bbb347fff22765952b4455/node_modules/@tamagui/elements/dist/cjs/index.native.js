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
  Article: () => Article,
  Aside: () => Aside,
  Footer: () => Footer,
  Header: () => Header,
  Main: () => Main,
  Nav: () => Nav,
  Section: () => Section
});
module.exports = __toCommonJS(index_exports);
var import_core = require("@tamagui/core"),
  Section = (0, import_core.styled)(import_core.View, {
    name: "Section",
    render: "section",
    flexDirection: "column",
    role: "region"
  }),
  Article = (0, import_core.styled)(import_core.View, {
    name: "Article",
    render: "article",
    flexDirection: "column"
  }),
  Main = (0, import_core.styled)(import_core.View, {
    name: "Main",
    render: "main",
    flexDirection: "column"
  }),
  Header = (0, import_core.styled)(import_core.View, {
    name: "Header",
    render: "header",
    role: "banner",
    flexDirection: "column"
  }),
  Aside = (0, import_core.styled)(import_core.View, {
    name: "Aside",
    render: "aside",
    flexDirection: "column"
  }),
  Footer = (0, import_core.styled)(import_core.View, {
    name: "Footer",
    render: "footer",
    flexDirection: "column"
  }),
  Nav = (0, import_core.styled)(import_core.View, {
    name: "Nav",
    render: "nav",
    flexDirection: "column"
  });
//# sourceMappingURL=index.native.js.map
