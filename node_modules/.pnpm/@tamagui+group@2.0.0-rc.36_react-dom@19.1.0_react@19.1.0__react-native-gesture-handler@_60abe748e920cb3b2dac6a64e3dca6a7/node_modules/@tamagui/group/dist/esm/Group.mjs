import { mergeSlotStyleProps, styled } from "@tamagui/core";
import { createContextScope } from "@tamagui/create-context";
import { withStaticProperties } from "@tamagui/helpers";
import { YStack } from "@tamagui/stacks";
import React from "react";
import { useIndex, useIndexedChildren } from "./useIndexedChildren.mjs";
import { jsx } from "react/jsx-runtime";
const GROUP_NAME = "Group",
  [createGroupContext, createGroupScope] = createContextScope(GROUP_NAME),
  [GroupProvider, useGroupContext] = createGroupContext(GROUP_NAME),
  GroupFrame = styled(YStack, {
    name: "GroupFrame",
    variants: {
      unstyled: {
        false: {
          size: "$true"
        }
      },
      size: (val, {
        tokens
      }) => ({
        borderRadius: tokens.radius[val] ?? val ?? tokens.radius.$true
      })
    },
    defaultVariants: {
      unstyled: process.env.TAMAGUI_HEADLESS === "1"
    }
  });
function createGroup(verticalDefault) {
  return withStaticProperties(GroupFrame.styleable((props, ref) => {
    const {
        __scopeGroup,
        children: childrenProp,
        orientation = verticalDefault ? "vertical" : "horizontal",
        disabled,
        ...restProps
      } = props,
      vertical = orientation === "vertical",
      indexedChildren = useIndexedChildren(React.Children.toArray(childrenProp));
    return /* @__PURE__ */jsx(GroupProvider, {
      vertical,
      disabled,
      scope: __scopeGroup,
      children: /* @__PURE__ */jsx(GroupFrame, {
        ref,
        flexDirection: vertical ? "column" : "row",
        ...restProps,
        children: indexedChildren
      })
    });
  }), {
    Item: GroupItem
  });
}
function GroupItem(props) {
  const {
      __scopeGroup,
      children,
      forcePlacement,
      ...forwardedProps
    } = props,
    context = useGroupContext("GroupItem", __scopeGroup),
    treeIndex = useIndex();
  if (!treeIndex) throw Error("<Group.Item/> should only be used within a <Group/>");
  if (!React.isValidElement(children)) return children;
  const isFirst = forcePlacement === "first" || forcePlacement !== "last" && treeIndex.index === 0,
    isLast = forcePlacement === "last" || forcePlacement !== "first" && treeIndex.index === treeIndex.maxIndex,
    radiusStyles = getZeroedRadius(isFirst, isLast, context.vertical),
    groupProps = {
      ...forwardedProps,
      ...radiusStyles
    };
  context.disabled != null && (groupProps.disabled = children.props.disabled ?? context.disabled);
  const mergedProps = mergeSlotStyleProps(groupProps, children.props);
  return React.cloneElement(children, mergedProps);
}
const useGroupItem = (childrenProps, forcePlacement, __scopeGroup) => {
    const treeIndex = useIndex(),
      context = useGroupContext("GroupItem", __scopeGroup);
    if (!treeIndex) throw Error("useGroupItem should only be used within a <Group/>");
    const isFirst = forcePlacement === "first" || forcePlacement !== "last" && treeIndex.index === 0,
      isLast = forcePlacement === "last" || forcePlacement !== "first" && treeIndex.index === treeIndex.maxIndex,
      radiusStyles = getZeroedRadius(isFirst, isLast, context.vertical);
    return {
      disabled: childrenProps.disabled ?? context.disabled,
      ...radiusStyles
    };
  },
  Group = createGroup(!0),
  YGroup = Group,
  XGroup = createGroup(!1);
function getZeroedRadius(isFirst, isLast, vertical) {
  return vertical ? {
    ...(isFirst ? null : {
      borderTopLeftRadius: 0,
      borderTopRightRadius: 0
    }),
    ...(isLast ? null : {
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0
    })
  } : {
    ...(isFirst ? null : {
      borderTopLeftRadius: 0,
      borderBottomLeftRadius: 0
    }),
    ...(isLast ? null : {
      borderTopRightRadius: 0,
      borderBottomRightRadius: 0
    })
  };
}
export { Group, GroupFrame, XGroup, YGroup, createGroupScope, useGroupItem };
//# sourceMappingURL=Group.mjs.map
