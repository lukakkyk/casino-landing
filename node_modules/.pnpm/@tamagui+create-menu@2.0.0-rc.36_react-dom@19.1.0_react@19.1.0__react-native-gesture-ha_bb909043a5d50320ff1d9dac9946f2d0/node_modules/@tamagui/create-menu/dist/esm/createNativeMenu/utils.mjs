import React, { Children, cloneElement, isValidElement } from "react";
import { jsx } from "react/jsx-runtime";
function flattenChildrenKeyless(children) {
  return React.Children.toArray(children).reduce((flatChildren, child) => child.type === React.Fragment ? flatChildren.concat(flattenChildren(child.props.children)) : (flatChildren.push(child), flatChildren), []);
}
function flattenChildren(children, componentNamesToIgnore, depth = 0, keys = []) {
  return Children.toArray(children).flatMap(elem => isValidElement(elem) && typeof elem?.type == "function" && componentNamesToIgnore?.some(skipComponentName => elem.type.displayName.includes(skipComponentName)) ? elem.props.children : elem).reduce((acc, node, nodeIndex) => (node.type === React.Fragment ? acc.push.apply(acc, flattenChildren(node.props.children, componentNamesToIgnore, depth + 1, keys.concat(node.key || nodeIndex))) : isValidElement(node) ? acc.push(cloneElement(node, {
    key: keys.concat(String(node.key)).join(".")
  })) : (typeof node == "string" || typeof node == "number") && acc.push(node), acc), []);
}
const pickChildren = (_children, targetChild, componentNamesToIgnore) => {
    const children = flattenChildren(_children, componentNamesToIgnore),
      target = [],
      withoutTargetChildren = React.Children.map(children, item => isValidElement(item) && isInstanceOfComponent(item, targetChild) ? (target.push(cloneElement(item)), null) : item);
    return {
      targetChildren: target.length >= 0 ? target : void 0,
      withoutTargetChildren
    };
  },
  isInstanceOfComponent = (element, targetElement) => element?.type === targetElement || typeof element?.type == "function" && (element?.type?.displayName === targetElement.displayName || element?.type?.displayName === targetElement.displayName + "Wrapper"),
  filterNull = t => t != null,
  create = (Component, displayName) => {
    const MenuComponent = props => /* @__PURE__ */jsx(Component, {
      ...props
    });
    return MenuComponent.displayName = displayName, MenuComponent;
  };
export { create, filterNull, flattenChildren, flattenChildrenKeyless, isInstanceOfComponent, pickChildren };
//# sourceMappingURL=utils.mjs.map
