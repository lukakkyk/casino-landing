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
var createNativeMenu_exports = {};
__export(createNativeMenu_exports, {
  createNativeMenu: () => createNativeMenu
});
module.exports = __toCommonJS(createNativeMenu_exports);
var import_jsx_runtime = require("react/jsx-runtime"),
  import_native = require("@tamagui/native"),
  import_web = require("@tamagui/web"),
  import_react = __toESM(require("react"), 1),
  MAPPED_TYPES = ["SubContent", "SubTrigger", "Content", "Sub", "Group", "CheckboxItem"],
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
    Menu: (0, import_web.withStaticProperties)(emptyStub, {
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
  if (import_web.isWeb) return createWebStubs();
  var isContextMenu = MenuType === "ContextMenu",
    isAndroid = !import_web.isIos && !import_web.isWeb,
    resolved = null,
    warned = !1;
  function resolve() {
    if (resolved) return resolved;
    var zeego = (0, import_native.getZeego)();
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
    return import_react.default.Children.forEach(children, function (child) {
      var _child_type;
      if (! /* @__PURE__ */import_react.default.isValidElement(child)) {
        result.push(child);
        return;
      }
      var displayName = ((_child_type = child.type) === null || _child_type === void 0 ? void 0 : _child_type.displayName) || "",
        props = child.props;
      if (isPortalLike(displayName)) {
        var inner = transformChildren(menu, map, props.children, !1);
        import_react.default.Children.forEach(inner, function (c) {
          return result.push(c);
        });
        return;
      }
      if (displayName.includes("ScrollView")) {
        var inner1 = transformChildren(menu, map, props.children, !1);
        import_react.default.Children.forEach(inner1, function (c) {
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
          cleanChildren = import_react.default.Children.map(cbChildren, function (c) {
            var _c_type;
            if (! /* @__PURE__ */import_react.default.isValidElement(c)) return c;
            var dn = ((_c_type = c.type) === null || _c_type === void 0 ? void 0 : _c_type.displayName) || "";
            return dn.includes("ItemIndicator") ? null : c;
          });
        result.push(/* @__PURE__ */import_react.default.createElement(menu.CheckboxItem, {
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
        result.push(/* @__PURE__ */import_react.default.createElement(map[componentType], {
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
        result.push(/* @__PURE__ */import_react.default.createElement(menu.Item, {
          ...itemProps,
          key: child.key
        }, itemChildren));
        return;
      }
      result.push(child);
    }), import_web.isIos && shouldReverseOnIos && !isContextMenu && result.reverse(), result;
  }
  function lazyZeego(name, displayName) {
    var Comp = function (props) {
      var z = resolve();
      return z ? /* @__PURE__ */import_react.default.createElement(z.menu[name], props) : null;
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
      return /* @__PURE__ */(0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, {
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
    return /* @__PURE__ */(0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, {
      children
    });
  };
  RadioGroup.displayName = `${MenuType}RadioGroup`;
  var RadioItem = function (param) {
    var {
      children
    } = param;
    return /* @__PURE__ */(0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, {
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
    var content = /* @__PURE__ */(0, import_jsx_runtime.jsx)(z.menu.Root, {
      ...rootProps,
      children: transformChildren(z.menu, z.componentMap, children)
    });
    return isAndroid ? /* @__PURE__ */(0, import_jsx_runtime.jsx)(import_native.NativeMenuContext.Provider, {
      value: !0,
      children: content
    }) : content;
  };
  return Menu.displayName = MenuType, {
    Menu: (0, import_web.withStaticProperties)(Menu, {
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
//# sourceMappingURL=createNativeMenu.native.js.map
