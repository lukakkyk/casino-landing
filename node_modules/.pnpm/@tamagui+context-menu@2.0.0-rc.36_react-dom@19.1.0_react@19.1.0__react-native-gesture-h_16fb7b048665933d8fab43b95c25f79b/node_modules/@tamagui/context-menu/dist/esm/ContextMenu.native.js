import { createNativeMenu, withNativeMenu } from "@tamagui/create-menu";
import { withStaticProperties } from "@tamagui/web";
import React from "react";
import { CONTEXTMENU_CONTEXT, createNonNativeContextMenu } from "./createNonNativeContextMenu.native.js";
var COMMON_PARAMS = {
  isRoot: !1,
  scope: CONTEXTMENU_CONTEXT
};
function createContextMenu(param) {
  var {
      Menu: NativeMenuRoot
    } = createNativeMenu("ContextMenu"),
    NonNativeContextMenu = createNonNativeContextMenu(param),
    ContextMenuComp = withNativeMenu({
      ...COMMON_PARAMS,
      Component: NonNativeContextMenu.Root,
      NativeComponent: NativeMenuRoot,
      isRoot: !0
    }),
    Trigger = withNativeMenu({
      ...COMMON_PARAMS,
      Component: NonNativeContextMenu.Trigger,
      NativeComponent: NativeMenuRoot.Trigger
    }),
    Portal = withNativeMenu({
      ...COMMON_PARAMS,
      Component: NonNativeContextMenu.Portal,
      NativeComponent: React.Fragment
    }),
    Content = withNativeMenu({
      ...COMMON_PARAMS,
      Component: NonNativeContextMenu.Content,
      NativeComponent: NativeMenuRoot.Content
    }),
    Preview = withNativeMenu({
      ...COMMON_PARAMS,
      Component: NonNativeContextMenu.Preview,
      NativeComponent: NativeMenuRoot.Preview
    }),
    Group = withNativeMenu({
      ...COMMON_PARAMS,
      Component: NonNativeContextMenu.Group,
      NativeComponent: NativeMenuRoot.Group
    }),
    Label = withNativeMenu({
      ...COMMON_PARAMS,
      Component: NonNativeContextMenu.Label,
      NativeComponent: NativeMenuRoot.Label
    }),
    Item = withNativeMenu({
      ...COMMON_PARAMS,
      Component: NonNativeContextMenu.Item,
      NativeComponent: NativeMenuRoot.Item
    }),
    ItemTitle = withNativeMenu({
      ...COMMON_PARAMS,
      Component: NonNativeContextMenu.ItemTitle,
      NativeComponent: NativeMenuRoot.ItemTitle
    }),
    ItemSubtitle = withNativeMenu({
      ...COMMON_PARAMS,
      Component: NonNativeContextMenu.ItemSubtitle,
      NativeComponent: NativeMenuRoot.ItemSubtitle
    }),
    ItemIcon = withNativeMenu({
      ...COMMON_PARAMS,
      Component: NonNativeContextMenu.ItemIcon,
      NativeComponent: NativeMenuRoot.ItemIcon
    }),
    ItemImage = withNativeMenu({
      ...COMMON_PARAMS,
      Component: NonNativeContextMenu.ItemImage,
      NativeComponent: NativeMenuRoot.ItemImage
    }),
    CheckboxItem = withNativeMenu({
      ...COMMON_PARAMS,
      Component: NonNativeContextMenu.CheckboxItem,
      NativeComponent: NativeMenuRoot.CheckboxItem
    }),
    RadioGroup = withNativeMenu({
      ...COMMON_PARAMS,
      Component: NonNativeContextMenu.RadioGroup,
      NativeComponent: function () {
        return null;
      }
    }),
    RadioItem = withNativeMenu({
      ...COMMON_PARAMS,
      Component: NonNativeContextMenu.RadioItem,
      NativeComponent: function (param2) {
        var {
          children
        } = param2;
        return children;
      }
    }),
    ItemIndicator = withNativeMenu({
      ...COMMON_PARAMS,
      Component: NonNativeContextMenu.ItemIndicator,
      NativeComponent: NativeMenuRoot.ItemIndicator
    }),
    Separator = withNativeMenu({
      ...COMMON_PARAMS,
      Component: NonNativeContextMenu.Separator,
      NativeComponent: NativeMenuRoot.Separator
    }),
    Arrow = withNativeMenu({
      ...COMMON_PARAMS,
      Component: NonNativeContextMenu.Arrow,
      NativeComponent: NativeMenuRoot.Arrow
    }),
    Sub = withNativeMenu({
      ...COMMON_PARAMS,
      Component: NonNativeContextMenu.Sub,
      NativeComponent: NativeMenuRoot.Sub
    }),
    SubTrigger = withNativeMenu({
      ...COMMON_PARAMS,
      Component: NonNativeContextMenu.SubTrigger,
      NativeComponent: NativeMenuRoot.SubTrigger
    }),
    SubContent = withNativeMenu({
      ...COMMON_PARAMS,
      Component: NonNativeContextMenu.SubContent,
      NativeComponent: NativeMenuRoot.SubContent
    }),
    ContextMenu = withStaticProperties(ContextMenuComp, {
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
      // cast to React.FC to avoid TS error
      SubTrigger,
      SubContent,
      ItemTitle,
      ItemSubtitle,
      // cast to React.FC to avoid TS error
      ItemIcon,
      ItemImage,
      Preview
    });
  return ContextMenu;
}
export { createContextMenu };
//# sourceMappingURL=ContextMenu.native.js.map
