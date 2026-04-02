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
var utils_exports = {};
__export(utils_exports, {
  create: () => create,
  filterNull: () => filterNull,
  flattenChildren: () => flattenChildren,
  flattenChildrenKeyless: () => flattenChildrenKeyless,
  isInstanceOfComponent: () => isInstanceOfComponent,
  pickChildren: () => pickChildren
});
module.exports = __toCommonJS(utils_exports);
var import_react = __toESM(require("react"), 1),
  import_jsx_runtime = require("react/jsx-runtime");
function flattenChildrenKeyless(children) {
  return import_react.default.Children.toArray(children).reduce((flatChildren, child) => child.type === import_react.default.Fragment ? flatChildren.concat(flattenChildren(child.props.children)) : (flatChildren.push(child), flatChildren), []);
}
function flattenChildren(children, componentNamesToIgnore, depth = 0, keys = []) {
  return import_react.Children.toArray(children).flatMap(elem => (0, import_react.isValidElement)(elem) && typeof elem?.type == "function" && componentNamesToIgnore?.some(skipComponentName => elem.type.displayName.includes(skipComponentName)) ? elem.props.children : elem).reduce((acc, node, nodeIndex) => (node.type === import_react.default.Fragment ? acc.push.apply(acc, flattenChildren(node.props.children, componentNamesToIgnore, depth + 1, keys.concat(node.key || nodeIndex))) : (0, import_react.isValidElement)(node) ? acc.push((0, import_react.cloneElement)(node, {
    key: keys.concat(String(node.key)).join(".")
  })) : (typeof node == "string" || typeof node == "number") && acc.push(node), acc), []);
}
const pickChildren = (_children, targetChild, componentNamesToIgnore) => {
    const children = flattenChildren(_children, componentNamesToIgnore),
      target = [],
      withoutTargetChildren = import_react.default.Children.map(children, item => (0, import_react.isValidElement)(item) && isInstanceOfComponent(item, targetChild) ? (target.push((0, import_react.cloneElement)(item)), null) : item);
    return {
      targetChildren: target.length >= 0 ? target : void 0,
      withoutTargetChildren
    };
  },
  isInstanceOfComponent = (element, targetElement) => element?.type === targetElement || typeof element?.type == "function" && (element?.type?.displayName === targetElement.displayName || element?.type?.displayName === targetElement.displayName + "Wrapper"),
  filterNull = t => t != null,
  create = (Component, displayName) => {
    const MenuComponent = props => /* @__PURE__ */(0, import_jsx_runtime.jsx)(Component, {
      ...props
    });
    return MenuComponent.displayName = displayName, MenuComponent;
  };