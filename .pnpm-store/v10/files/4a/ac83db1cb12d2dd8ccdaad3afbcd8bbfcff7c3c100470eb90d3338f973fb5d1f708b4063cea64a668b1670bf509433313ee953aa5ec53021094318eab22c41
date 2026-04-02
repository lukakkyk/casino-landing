import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { getZeego, NativeMenuContext } from "@tamagui/native";
import { isWeb, withStaticProperties, isIos } from "@tamagui/web";
import React from "react";
var MAPPED_TYPES = ["SubContent", "SubTrigger", "Content", "Sub", "Group", "CheckboxItem"],
  CONTAINER_TYPES = ["SubContent", "Content", "Sub", "Group"];
function getComponentType(displayName) {
  var _iteratorNormalCompletion = !0,
    _didIteratorError = !1,
    _iteratorError = void 0;
  try {
    for (var _iterator = MAPPED_TYPES[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = !0) {
      var type = _step.value;
      if (displayName === type || displayName.includes(`(${type})`)) return type;
    }
  } catch (err) {
    _didIteratorError = !0, _iteratorError = err;
  } finally {
    try {
      !_iteratorNormalCompletion && _iterator.return != null && _iterator.return();
    } finally {
      if (_didIteratorError) throw _iteratorError;
    }
  }
  return null;
}
function isItemLike(props, displayName) {
  return getComponentType(displayName) ? !1 : "onSelect" in props || "textValue" in props;
}
function isPortalLike(displayName) {
  return displayName === "Portal" || displayName.includes("Portal");
}
var emptyStub = function () {
  return null;
};
function createWebStubs() {
  return {
    Menu: withStaticProperties(emptyStub, {
      Trigger: emptyStub,
      Content: emptyStub,
      Item: emptyStub,
      ItemTitle: emptyStub,
      ItemSubtitle: emptyStub,
      SubTrigger: emptyStub,
      Group: emptyStub,
      ItemIcon: emptyStub,
      Separator: emptyStub,
      CheckboxItem: emptyStub,
      ItemIndicator: emptyStub,
      ItemImage: emptyStub,
      Label: emptyStub,
      Arrow: emptyStub,
      Sub: emptyStub,
      SubContent: emptyStub,
      Preview: emptyStub,
      Portal: emptyStub,
      RadioGroup: emptyStub,
      RadioItem: emptyStub,
      Auxiliary: emptyStub
    })
  };
}
var createNativeMenu = function (MenuType) {
  if (isWeb) return createWebStubs();
  var isContextMenu = MenuType === "ContextMenu",
    isAndroid = !isIos && !isWeb,
    resolved = null,
    warned = !1;
  function resolve() {
    if (resolved) return resolved;
    var zeego = getZeego();
    if (!zeego.isEnabled) return warned || (warned = !0, console.warn("Warning: Must call import '@tamagui/native/setup-zeego' at your app entry point to use native menus")), null;
    var menu = isContextMenu ? zeego.state.ContextMenu : zeego.state.DropdownMenu;
    return resolved = {
      menu,
      componentMap: {
        SubContent: menu.SubContent,
        Content: menu.Content,
        Sub: menu.Sub,
        Group: menu.Group,
        SubTrigger: menu.SubTrigger
      }
    }, resolved;
  }
  function transformChildren(menu, map, children) {
    var shouldReverseOnIos = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1,
      result = [];
    return React.Children.forEach(children, function (child) {
      var _child_type;
      if (! /* @__PURE__ */React.isValidElement(child)) {
        result.push(child);
        return;
      }
      var displayName = ((_child_type = child.type) === null || _child_type === void 0 ? void 0 : _child_type.displayName) || "",
        props = child.props;
      if (isPortalLike(displayName)) {
        var inner = transformChildren(menu, map, props.children, !1);
        React.Children.forEach(inner, function (c) {
          return result.push(c);
        });
        return;
      }
      if (displayName.includes("ScrollView")) {
        var inner1 = transformChildren(menu, map, props.children, !1);
        React.Children.forEach(inner1, function (c) {
          return result.push(c);
        });
        return;
      }
      var componentType = getComponentType(displayName);
      if (componentType === "CheckboxItem") {
        var {
            checked,
            onCheckedChange,
            value,
            onValueChange,
            children: cbChildren,
            ...rest
          } = props,
          finalValue = value ?? (checked ? "on" : "off"),
          finalOnValueChange = onValueChange ?? (onCheckedChange && function (v) {
            return onCheckedChange(v === "on");
          }),
          cleanChildren = React.Children.map(cbChildren, function (c) {
            var _c_type;
            if (! /* @__PURE__ */React.isValidElement(c)) return c;
            var dn = ((_c_type = c.type) === null || _c_type === void 0 ? void 0 : _c_type.displayName) || "";
            return dn.includes("ItemIndicator") ? null : c;
          });
        result.push(/* @__PURE__ */React.createElement(menu.CheckboxItem, {
          ...rest,
          key: child.key,
          value: finalValue,
          onValueChange: finalOnValueChange
        }, cleanChildren));
        return;
      }
      if (componentType) {
        var {
            children: childChildren,
            ...restProps
          } = props,
          isContainer = CONTAINER_TYPES.includes(componentType),
          shouldReverse = componentType === "Content" || componentType === "SubContent";
        result.push(/* @__PURE__ */React.createElement(map[componentType], {
          ...restProps,
          key: child.key
        }, isContainer ? transformChildren(menu, map, childChildren, shouldReverse) : childChildren));
        return;
      }
      if (isItemLike(props, displayName)) {
        var {
          children: itemChildren,
          ...itemProps
        } = props;
        result.push(/* @__PURE__ */React.createElement(menu.Item, {
          ...itemProps,
          key: child.key
        }, itemChildren));
        return;
      }
      result.push(child);
    }), isIos && shouldReverseOnIos && !isContextMenu && result.reverse(), result;
  }
  function lazyZeego(name, displayName) {
    var Comp = function (props) {
      var z = resolve();
      return z ? /* @__PURE__ */React.createElement(z.menu[name], props) : null;
    };
    return Comp.displayName = displayName || name, Comp;
  }
  var Trigger = lazyZeego("Trigger"),
    Content = lazyZeego("Content"),
    Item = lazyZeego("Item"),
    ItemTitle = lazyZeego("ItemTitle"),
    ItemSubtitle = lazyZeego("ItemSubtitle"),
    ItemIcon = lazyZeego("ItemIcon"),
    ItemImage = lazyZeego("ItemImage"),
    ItemIndicator = lazyZeego("ItemIndicator"),
    Group = lazyZeego("Group"),
    Label = lazyZeego("Label"),
    Separator = lazyZeego("Separator"),
    Sub = lazyZeego("Sub"),
    SubTrigger = lazyZeego("SubTrigger"),
    SubContent = lazyZeego("SubContent"),
    Portal = function (param) {
      var {
        children
      } = param;
      return /* @__PURE__ */_jsx(_Fragment, {
        children
      });
    };
  Portal.displayName = "Portal";
  var Arrow = function () {
    return null;
  };
  Arrow.displayName = "Arrow";
  var RadioGroup = function (param) {
    var {
      children
    } = param;
    return /* @__PURE__ */_jsx(_Fragment, {
      children
    });
  };
  RadioGroup.displayName = `${MenuType}RadioGroup`;
  var RadioItem = function (param) {
    var {
      children
    } = param;
    return /* @__PURE__ */_jsx(_Fragment, {
      children
    });
  };
  RadioItem.displayName = `${MenuType}RadioItem`;
  var CheckboxItem = function () {
    return null;
  };
  CheckboxItem.displayName = "CheckboxItem";
  var Preview = isContextMenu ? lazyZeego("Preview", `${MenuType}Preview`) : function () {
    return null;
  };
  Preview.displayName = `${MenuType}Preview`;
  var Auxiliary = isContextMenu ? lazyZeego("Auxiliary", `${MenuType}Auxiliary`) : function () {
    return null;
  };
  Auxiliary.displayName = `${MenuType}Auxiliary`;
  var Menu = function (param) {
    var {
        children,
        onOpenChange,
        onOpenWillChange
      } = param,
      z = resolve();
    if (!z) return null;
    var rootProps = {
      onOpenChange
    };
    isContextMenu && onOpenWillChange && (rootProps.onOpenWillChange = onOpenWillChange);
    var content = /* @__PURE__ */_jsx(z.menu.Root, {
      ...rootProps,
      children: transformChildren(z.menu, z.componentMap, children)
    });
    return isAndroid ? /* @__PURE__ */_jsx(NativeMenuContext.Provider, {
      value: !0,
      children: content
    }) : content;
  };
  return Menu.displayName = MenuType, {
    Menu: withStaticProperties(Menu, {
      Trigger,
      Content,
      Item,
      ItemTitle,
      ItemSubtitle,
      ItemIcon,
      ItemImage,
      ItemIndicator,
      Group,
      Label,
      Separator,
      Sub,
      SubTrigger,
      SubContent,
      CheckboxItem,
      Portal,
      RadioGroup,
      RadioItem,
      Arrow,
      Preview,
      Auxiliary
    })
  };
};
export { createNativeMenu };
//# sourceMappingURL=createNativeMenu.native.js.map
