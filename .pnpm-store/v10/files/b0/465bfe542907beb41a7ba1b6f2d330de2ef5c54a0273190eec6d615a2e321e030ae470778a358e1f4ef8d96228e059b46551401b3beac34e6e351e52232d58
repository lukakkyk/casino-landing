import { jsx as _jsx } from "react/jsx-runtime";
import React, { Children, cloneElement, isValidElement } from "react";
function flattenChildrenKeyless(children) {
  var childrenArray = React.Children.toArray(children);
  return childrenArray.reduce(function (flatChildren, child) {
    return child.type === React.Fragment ? flatChildren.concat(flattenChildren(child.props.children)) : (flatChildren.push(child), flatChildren);
  }, []);
}
function flattenChildren(children, componentNamesToIgnore) {
  var depth = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0,
    keys = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : [];
  return Children.toArray(children).flatMap(function (elem) {
    return /* @__PURE__ */isValidElement(elem) && typeof elem?.type == "function" && componentNamesToIgnore?.some(function (skipComponentName) {
      return elem.type.displayName.includes(skipComponentName);
    }) ? elem.props.children : elem;
  }).reduce(function (acc, node, nodeIndex) {
    return node.type === React.Fragment ? acc.push.apply(acc, flattenChildren(node.props.children, componentNamesToIgnore, depth + 1, keys.concat(node.key || nodeIndex))) : /* @__PURE__ */isValidElement(node) ? acc.push(/* @__PURE__ */cloneElement(node, {
      key: keys.concat(String(node.key)).join(".")
    })) : (typeof node == "string" || typeof node == "number") && acc.push(node), acc;
  }, []);
}
var pickChildren = function (_children, targetChild, componentNamesToIgnore) {
    var children = flattenChildren(_children, componentNamesToIgnore),
      target = [],
      withoutTargetChildren = React.Children.map(children, function (item) {
        return /* @__PURE__ */isValidElement(item) && isInstanceOfComponent(item, targetChild) ? (target.push(/* @__PURE__ */cloneElement(item)), null) : item;
      }),
      targetChildren = target.length >= 0 ? target : void 0;
    return {
      targetChildren,
      withoutTargetChildren
    };
  },
  isInstanceOfComponent = function (element, targetElement) {
    var _element_type,
      _element_type1,
      matches = element?.type === targetElement || typeof element?.type == "function" && ((element == null || (_element_type = element.type) === null || _element_type === void 0 ? void 0 : _element_type.displayName) === targetElement.displayName || (element == null || (_element_type1 = element.type) === null || _element_type1 === void 0 ? void 0 : _element_type1.displayName) === targetElement.displayName + "Wrapper");
    return matches;
  },
  filterNull = function (t) {
    return t != null;
  },
  create = function (Component, displayName) {
    var MenuComponent = function (props) {
      return /* @__PURE__ */_jsx(Component, {
        ...props
      });
    };
    return MenuComponent.displayName = displayName, MenuComponent;
  };
export { create, filterNull, flattenChildren, flattenChildrenKeyless, isInstanceOfComponent, pickChildren };
//# sourceMappingURL=utils.native.js.map
