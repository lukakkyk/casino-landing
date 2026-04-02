import { createNativeMenu, withNativeMenu } from "@tamagui/create-menu";
import { isWeb, withStaticProperties } from "@tamagui/web";
import React from "react";
import { DROPDOWN_MENU_CONTEXT, createNonNativeMenu } from "./createNonNativeMenu.mjs";
import { Fragment, jsx } from "react/jsx-runtime";
function createMenu(params) {
  const {
      Menu: NativeMenuRoot
    } = createNativeMenu("Menu"),
    NonNativeMenu = createNonNativeMenu(params),
    COMMON_PARAMS = {
      isRoot: !1,
      scope: DROPDOWN_MENU_CONTEXT
    },
    MenuComp = withNativeMenu({
      ...COMMON_PARAMS,
      Component: NonNativeMenu.Root,
      NativeComponent: NativeMenuRoot,
      isRoot: !0
    }),
    Trigger = withNativeMenu({
      ...COMMON_PARAMS,
      Component: NonNativeMenu.Trigger,
      NativeComponent: NativeMenuRoot.Trigger
    }),
    Portal = withNativeMenu({
      ...COMMON_PARAMS,
      Component: NonNativeMenu.Portal,
      NativeComponent: React.Fragment
    }),
    Content = withNativeMenu({
      ...COMMON_PARAMS,
      Component: NonNativeMenu.Content,
      NativeComponent: NativeMenuRoot.Content
    }),
    Group = withNativeMenu({
      ...COMMON_PARAMS,
      Component: NonNativeMenu.Group,
      NativeComponent: NativeMenuRoot.Group
    }),
    Label = withNativeMenu({
      ...COMMON_PARAMS,
      Component: NonNativeMenu.Label,
      NativeComponent: NativeMenuRoot.Label
    }),
    Item = withNativeMenu({
      ...COMMON_PARAMS,
      Component: NonNativeMenu.Item,
      NativeComponent: NativeMenuRoot.Item
    }),
    ItemTitle = withNativeMenu({
      ...COMMON_PARAMS,
      Component: NonNativeMenu.ItemTitle,
      NativeComponent: NativeMenuRoot.ItemTitle
    }),
    ItemSubtitle = withNativeMenu({
      ...COMMON_PARAMS,
      Component: NonNativeMenu.ItemSubtitle,
      NativeComponent: NativeMenuRoot.ItemSubtitle
    }),
    ItemIcon = withNativeMenu({
      ...COMMON_PARAMS,
      Component: NonNativeMenu.ItemIcon,
      NativeComponent: NativeMenuRoot.ItemIcon
    }),
    ItemImage = withNativeMenu({
      ...COMMON_PARAMS,
      Component: NonNativeMenu.ItemImage,
      NativeComponent: NativeMenuRoot.ItemImage
    }),
    CheckboxItem = withNativeMenu({
      ...COMMON_PARAMS,
      Component: NonNativeMenu.CheckboxItem,
      NativeComponent: NativeMenuRoot.CheckboxItem
    }),
    RadioGroup = withNativeMenu({
      ...COMMON_PARAMS,
      Component: NonNativeMenu.RadioGroup,
      NativeComponent: ({
        children
      }) => /* @__PURE__ */jsx(Fragment, {
        children
      })
    }),
    RadioItem = withNativeMenu({
      ...COMMON_PARAMS,
      Component: NonNativeMenu.RadioItem,
      NativeComponent: ({
        children
      }) => /* @__PURE__ */jsx(Fragment, {
        children
      })
    }),
    ItemIndicator = withNativeMenu({
      ...COMMON_PARAMS,
      Component: NonNativeMenu.ItemIndicator,
      NativeComponent: NativeMenuRoot.ItemIndicator
    }),
    Separator = withNativeMenu({
      ...COMMON_PARAMS,
      Component: NonNativeMenu.Separator,
      NativeComponent: NativeMenuRoot.Separator
    }),
    Arrow = withNativeMenu({
      ...COMMON_PARAMS,
      Component: NonNativeMenu.Arrow,
      NativeComponent: NativeMenuRoot.Arrow
    }),
    Sub = withNativeMenu({
      ...COMMON_PARAMS,
      Component: NonNativeMenu.Sub,
      NativeComponent: NativeMenuRoot.Sub
    }),
    SubTrigger = withNativeMenu({
      ...COMMON_PARAMS,
      Component: NonNativeMenu.SubTrigger,
      NativeComponent: NativeMenuRoot.SubTrigger
    }),
    SubContent = withNativeMenu({
      ...COMMON_PARAMS,
      Component: NonNativeMenu.SubContent,
      NativeComponent: NativeMenuRoot.SubContent
    }),
    NativeScrollView = ({
      children
    }) => /* @__PURE__ */jsx(Fragment, {
      children
    });
  NativeScrollView.displayName = "MenuScrollView";
  const ScrollView = isWeb ? NonNativeMenu.ScrollView : NativeScrollView;
  return withStaticProperties(MenuComp, {
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
    SubTrigger,
    SubContent,
    ItemTitle,
    ItemSubtitle,
    ItemIcon,
    ItemImage,
    ScrollView
  });
}
export { createMenu };
//# sourceMappingURL=Menu.mjs.map
