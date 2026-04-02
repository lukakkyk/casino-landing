import { jsx as _jsx } from "react/jsx-runtime";
import { mergeSlotStyleProps, styled } from "@tamagui/core";
import { createContextScope } from "@tamagui/create-context";
import { withStaticProperties } from "@tamagui/helpers";
import { YStack } from "@tamagui/stacks";
import React from "react";
import { useIndex, useIndexedChildren } from "./useIndexedChildren.native.js";
var GROUP_NAME = "Group",
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
      size: function (val, param) {
        var {
            tokens
          } = param,
          _tokens_radius_val,
          _ref,
          borderRadius = (_ref = (_tokens_radius_val = tokens.radius[val]) !== null && _tokens_radius_val !== void 0 ? _tokens_radius_val : val) !== null && _ref !== void 0 ? _ref : tokens.radius.$true;
        return {
          borderRadius
        };
      }
    },
    defaultVariants: {
      unstyled: process.env.TAMAGUI_HEADLESS === "1"
    }
  });
function createGroup(verticalDefault) {
  return withStaticProperties(GroupFrame.styleable(function (props, ref) {
    var {
        __scopeGroup,
        children: childrenProp,
        orientation = verticalDefault ? "vertical" : "horizontal",
        disabled,
        ...restProps
      } = props,
      vertical = orientation === "vertical",
      indexedChildren = useIndexedChildren(React.Children.toArray(childrenProp));
    return /* @__PURE__ */_jsx(GroupProvider, {
      vertical,
      disabled,
      scope: __scopeGroup,
      children: /* @__PURE__ */_jsx(GroupFrame, {
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
  var {
      __scopeGroup,
      children,
      forcePlacement,
      ...forwardedProps
    } = props,
    context = useGroupContext("GroupItem", __scopeGroup),
    treeIndex = useIndex();
  if (!treeIndex) throw Error("<Group.Item/> should only be used within a <Group/>");
  if (! /* @__PURE__ */React.isValidElement(children)) return children;
  var isFirst = forcePlacement === "first" || forcePlacement !== "last" && treeIndex.index === 0,
    isLast = forcePlacement === "last" || forcePlacement !== "first" && treeIndex.index === treeIndex.maxIndex,
    radiusStyles = getZeroedRadius(isFirst, isLast, context.vertical),
    groupProps = {
      ...forwardedProps,
      ...radiusStyles
    };
  if (context.disabled != null) {
    var _children_props_disabled;
    groupProps.disabled = (_children_props_disabled = children.props.disabled) !== null && _children_props_disabled !== void 0 ? _children_props_disabled : context.disabled;
  }
  var mergedProps = mergeSlotStyleProps(groupProps, children.props);
  return /* @__PURE__ */React.cloneElement(children, mergedProps);
}
var useGroupItem = function (childrenProps, forcePlacement, __scopeGroup) {
    var treeIndex = useIndex(),
      context = useGroupContext("GroupItem", __scopeGroup);
    if (!treeIndex) throw Error("useGroupItem should only be used within a <Group/>");
    var isFirst = forcePlacement === "first" || forcePlacement !== "last" && treeIndex.index === 0,
      isLast = forcePlacement === "last" || forcePlacement !== "first" && treeIndex.index === treeIndex.maxIndex,
      radiusStyles = getZeroedRadius(isFirst, isLast, context.vertical),
      _childrenProps_disabled;
    return {
      disabled: (_childrenProps_disabled = childrenProps.disabled) !== null && _childrenProps_disabled !== void 0 ? _childrenProps_disabled : context.disabled,
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
//# sourceMappingURL=Group.native.js.map
