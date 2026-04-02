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
var FocusGuard_exports = {};
__export(FocusGuard_exports, {
  FocusGuards: () => FocusGuards,
  Root: () => Root,
  useFocusGuards: () => useFocusGuards
});
module.exports = __toCommonJS(FocusGuard_exports);
var React = __toESM(require("react"), 1);
let count = 0;
function FocusGuards(props) {
  return useFocusGuards(), props.children;
}
function useFocusGuards() {
  React.useEffect(() => {
    const edgeGuards = document.querySelectorAll("[data-tamagui-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", edgeGuards[0] ?? createFocusGuard()), document.body.insertAdjacentElement("beforeend", edgeGuards[1] ?? createFocusGuard()), count++, () => {
      count === 1 && document.querySelectorAll("[data-tamagui-focus-guard]").forEach(node => node.remove()), count--;
    };
  }, []);
}
function createFocusGuard() {
  const element = document.createElement("span");
  return element.setAttribute("data-tamagui-focus-guard", ""), element.tabIndex = 0, element.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none", element;
}
const Root = FocusGuards;