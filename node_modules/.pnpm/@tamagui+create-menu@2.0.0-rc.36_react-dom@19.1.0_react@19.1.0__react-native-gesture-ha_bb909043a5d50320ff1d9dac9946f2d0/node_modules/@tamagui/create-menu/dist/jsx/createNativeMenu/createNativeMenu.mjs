import { getZeego, NativeMenuContext } from "@tamagui/native";
import { isWeb, withStaticProperties, isIos } from "@tamagui/web";
import React from "react";
import { Fragment, jsx } from "react/jsx-runtime";
const MAPPED_TYPES = ["SubContent", "SubTrigger", "Content", "Sub", "Group", "CheckboxItem"],
  CONTAINER_TYPES = ["SubContent", "Content", "Sub", "Group"];
function getComponentType(displayName) {
  for (const type of MAPPED_TYPES) if (displayName === type || displayName.includes(`(${type})`)) return type;
  return null;
}
function isItemLike(props, displayName) {
  return getComponentType(displayName) ? !1 : "onSelect" in props || "textValue" in props;
}
function isPortalLike(displayName) {
  return displayName === "Portal" || displayName.includes("Portal");
}
const emptyStub = () => null;
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
const createNativeMenu = MenuType => {
  if (isWeb) return createWebStubs();
  const isContextMenu = MenuType === "ContextMenu",
    isAndroid = !isIos && !isWeb;
  let resolved = null,
    warned = !1;
  function resolve() {
    if (resolved) return resolved;
    const zeego = getZeego();
    if (!zeego.isEnabled) return warned || (warned = !0, console.warn("Warning: Must call import '@tamagui/native/setup-zeego' at your app entry point to use native menus")), null;
    const menu = isContextMenu ? zeego.state.ContextMenu : zeego.state.DropdownMenu;
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
  function transformChildren(menu, map, children, shouldReverseOnIos = !1) {
    const result = [];
    return React.Children.forEach(children, child => {
      if (!React.isValidElement(child)) {
        result.push(child);
        return;
      }
      const displayName = child.type?.displayName || "",
        props = child.props;
      if (isPortalLike(displayName)) {
        const inner = transformChildren(menu, map, props.children, !1);
        React.Children.forEach(inner, c => result.push(c));
        return;
      }
      if (displayName.includes("ScrollView")) {
        const inner = transformChildren(menu, map, props.children, !1);
        React.Children.forEach(inner, c => result.push(c));
        return;
      }
      const componentType = getComponentType(displayName);
      if (componentType === "CheckboxItem") {
        const {
            checked,
            onCheckedChange,
            value,
            onValueChange,
            children: cbChildren,
            ...rest
          } = props,
          finalValue = value ?? (checked ? "on" : "off"),
          finalOnValueChange = onValueChange ?? (onCheckedChange && (v => onCheckedChange(v === "on"))),
          cleanChildren = React.Children.map(cbChildren, c => React.isValidElement(c) && (c.type?.displayName || "").includes("ItemIndicator") ? null : c);
        result.push(React.createElement(menu.CheckboxItem, {
          ...rest,
          key: child.key,
          value: finalValue,
          onValueChange: finalOnValueChange
        }, cleanChildren));
        return;
      }
      if (componentType) {
        const {
            children: childChildren,
            ...restProps
          } = props,
          isContainer = CONTAINER_TYPES.includes(componentType),
          shouldReverse = componentType === "Content" || componentType === "SubContent";
        result.push(React.createElement(map[componentType], {
          ...restProps,
          key: child.key
        }, isContainer ? transformChildren(menu, map, childChildren, shouldReverse) : childChildren));
        return;
      }
      if (isItemLike(props, displayName)) {
        const {
          children: itemChildren,
          ...itemProps
        } = props;
        result.push(React.createElement(menu.Item, {
          ...itemProps,
          key: child.key
        }, itemChildren));
        return;
      }
      result.push(child);
    }), isIos && shouldReverseOnIos && !isContextMenu && result.reverse(), result;
  }
  function lazyZeego(name, displayName) {
    const Comp = props => {
      const z = resolve();
      return z ? React.createElement(z.menu[name], props) : null;
    };
    return Comp.displayName = displayName || name, Comp;
  }
  const Trigger = lazyZeego("Trigger"),
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
    Portal = ({
      children
    }) => /* @__PURE__ */jsx(Fragment, {
      children
    });
  Portal.displayName = "Portal";
  const Arrow = () => null;
  Arrow.displayName = "Arrow";
  const RadioGroup = ({
    children
  }) => /* @__PURE__ */jsx(Fragment, {
    children
  });
  RadioGroup.displayName = `${MenuType}RadioGroup`;
  const RadioItem = ({
    children
  }) => /* @__PURE__ */jsx(Fragment, {
    children
  });
  RadioItem.displayName = `${MenuType}RadioItem`;
  const CheckboxItem = () => null;
  CheckboxItem.displayName = "CheckboxItem";
  const Preview = isContextMenu ? lazyZeego("Preview", `${MenuType}Preview`) : () => null;
  Preview.displayName = `${MenuType}Preview`;
  const Auxiliary = isContextMenu ? lazyZeego("Auxiliary", `${MenuType}Auxiliary`) : () => null;
  Auxiliary.displayName = `${MenuType}Auxiliary`;
  const Menu = ({
    children,
    onOpenChange,
    onOpenWillChange
  }) => {
    const z = resolve();
    if (!z) return null;
    const rootProps = {
      onOpenChange
    };
    isContextMenu && onOpenWillChange && (rootProps.onOpenWillChange = onOpenWillChange);
    const content = /* @__PURE__ */jsx(z.menu.Root, {
      ...rootProps,
      children: transformChildren(z.menu, z.componentMap, children)
    });
    return isAndroid ? /* @__PURE__ */jsx(NativeMenuContext.Provider, {
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
//# sourceMappingURL=createNativeMenu.mjs.map
