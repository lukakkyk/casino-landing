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
var Group_exports = {};
__export(Group_exports, {
  Group: () => Group,
  GroupFrame: () => GroupFrame,
  XGroup: () => XGroup,
  YGroup: () => YGroup,
  createGroupScope: () => createGroupScope,
  useGroupItem: () => useGroupItem
});
module.exports = __toCommonJS(Group_exports);
var import_jsx_runtime = require("react/jsx-runtime"),
  import_core = require("@tamagui/core"),
  import_create_context = require("@tamagui/create-context"),
  import_helpers = require("@tamagui/helpers"),
  import_stacks = require("@tamagui/stacks"),
  import_react = __toESM(require("react"), 1),
  import_useIndexedChildren = require("./useIndexedChildren.native.js"),
  GROUP_NAME = "Group",
  [createGroupContext, createGroupScope] = (0, import_create_context.createContextScope)(GROUP_NAME),
  [GroupProvider, useGroupContext] = createGroupContext(GROUP_NAME),
  GroupFrame = (0, import_core.styled)(import_stacks.YStack, {
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
  return (0, import_helpers.withStaticProperties)(GroupFrame.styleable(function (props, ref) {
    var {
        __scopeGroup,
        children: childrenProp,
        orientation = verticalDefault ? "vertical" : "horizontal",
        disabled,
        ...restProps
      } = props,
      vertical = orientation === "vertical",
      indexedChildren = (0, import_useIndexedChildren.useIndexedChildren)(import_react.default.Children.toArray(childrenProp));
    return /* @__PURE__ */(0, import_jsx_runtime.jsx)(GroupProvider, {
      vertical,
      disabled,
      scope: __scopeGroup,
      children: /* @__PURE__ */(0, import_jsx_runtime.jsx)(GroupFrame, {
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
    treeIndex = (0, import_useIndexedChildren.useIndex)();
  if (!treeIndex) throw Error("<Group.Item/> should only be used within a <Group/>");
  if (! /* @__PURE__ */import_react.default.isValidElement(children)) return children;
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
  var mergedProps = (0, import_core.mergeSlotStyleProps)(groupProps, children.props);
  return /* @__PURE__ */import_react.default.cloneElement(children, mergedProps);
}
var useGroupItem = function (childrenProps, forcePlacement, __scopeGroup) {
    var treeIndex = (0, import_useIndexedChildren.useIndex)(),
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
//# sourceMappingURL=Group.native.js.map
