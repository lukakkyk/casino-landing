"use strict";

var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
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
var __toCommonJS = mod => __copyProps(__defProp({}, "__esModule", {
  value: !0
}), mod);
var ListItem_exports = {};
__export(ListItem_exports, {
  ListItem: () => ListItem2
});
module.exports = __toCommonJS(ListItem_exports);
var import_jsx_runtime = require("react/jsx-runtime"),
  import_font_size = require("@tamagui/font-size"),
  import_get_font_sized = require("@tamagui/get-font-sized"),
  import_get_token = require("@tamagui/get-token"),
  import_helpers = require("@tamagui/helpers"),
  import_helpers_tamagui = require("@tamagui/helpers-tamagui"),
  import_stacks = require("@tamagui/stacks"),
  import_text = require("@tamagui/text"),
  import_web = require("@tamagui/web"),
  NAME = "ListItem",
  context = (0, import_web.createStyledContext)({
    size: void 0,
    variant: void 0,
    color: void 0
  }),
  ListItemFrame = (0, import_web.styled)(import_web.View, {
    context,
    name: NAME,
    render: "li",
    role: "listitem",
    variants: {
      unstyled: {
        false: {
          size: "$true",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "nowrap",
          borderColor: "$borderColor",
          width: "100%",
          maxWidth: "100%",
          overflow: "hidden",
          flexDirection: "row",
          backgroundColor: "$background",
          cursor: "default",
          hoverStyle: {
            backgroundColor: "$backgroundHover",
            borderColor: "$borderColorHover"
          },
          pressStyle: {
            backgroundColor: "$backgroundPress",
            borderColor: "$borderColorPress"
          }
        }
      },
      variant: {
        outlined: process.env.TAMAGUI_HEADLESS === "1" ? {} : {
          backgroundColor: "transparent",
          borderWidth: 1,
          borderColor: "$borderColor",
          hoverStyle: {
            backgroundColor: "transparent",
            borderColor: "$borderColorHover"
          },
          pressStyle: {
            backgroundColor: "transparent",
            borderColor: "$borderColorPress"
          }
        }
      },
      size: {
        "...size": function (val, param) {
          var {
            tokens
          } = param;
          return {
            minHeight: tokens.size[val],
            paddingHorizontal: tokens.space[val],
            paddingVertical: (0, import_get_token.getSpace)(tokens.space[val], {
              shift: -4
            })
          };
        }
      },
      active: {
        true: {
          hoverStyle: {
            backgroundColor: "$background"
          }
        }
      },
      disabled: {
        true: {
          opacity: 0.5,
          pointerEvents: "none"
        }
      }
    },
    defaultVariants: {
      unstyled: process.env.TAMAGUI_HEADLESS === "1"
    }
  }),
  ListItemText = (0, import_web.styled)(import_text.SizableText, {
    context,
    name: "ListItemText",
    variants: {
      unstyled: {
        false: {
          color: "$color",
          size: "$true",
          flexGrow: 1,
          flexShrink: 1,
          ellipsis: !0,
          cursor: "inherit"
        }
      }
    },
    defaultVariants: {
      unstyled: process.env.TAMAGUI_HEADLESS === "1"
    }
  }),
  ListItemSubtitle = (0, import_web.styled)(ListItemText, {
    name: "ListItemSubtitle",
    context,
    variants: {
      unstyled: {
        false: {
          opacity: 0.6,
          maxWidth: "100%",
          color: "$color"
        }
      },
      size: {
        "...size": function (val, extras) {
          var oneSmaller = (0, import_get_token.getSize)(val, {
              shift: -1,
              excludeHalfSteps: !0
            }),
            fontStyle = (0, import_get_font_sized.getFontSized)(oneSmaller.key, extras);
          return fontStyle;
        }
      }
    },
    defaultVariants: {
      unstyled: process.env.TAMAGUI_HEADLESS === "1"
    }
  }),
  ListItemTitle = (0, import_web.styled)(ListItemText, {
    name: "ListItemTitle",
    context,
    variants: {
      unstyled: {
        false: {}
      }
    },
    defaultVariants: {
      unstyled: process.env.TAMAGUI_HEADLESS === "1"
    }
  }),
  ListItemIcon = function (props) {
    var {
        children,
        size,
        scaleIcon = 1
      } = props,
      styledContext = context.useStyledContext();
    if (!styledContext) throw new Error("ListItem.Icon must be used within a ListItem");
    var _ref,
      sizeToken = (_ref = size ?? styledContext.size) !== null && _ref !== void 0 ? _ref : "$true",
      iconColor = (0, import_helpers_tamagui.useCurrentColor)(styledContext.color),
      iconSize = (0, import_font_size.getFontSize)(sizeToken) * scaleIcon;
    return (0, import_helpers_tamagui.getIcon)(children, {
      size: iconSize,
      color: iconColor
    });
  },
  ListItemComponent = ListItemFrame.styleable(function (propsIn, ref) {
    var {
        children,
        icon,
        iconAfter,
        scaleIcon = 1,
        unstyled = !1,
        subTitle,
        title,
        iconSize,
        ...rest
      } = propsIn,
      size = propsIn.size || "$true",
      styledContext = context.useStyledContext(),
      iconColor = (0, import_helpers_tamagui.useCurrentColor)(styledContext?.color),
      iconSizeNumber = (0, import_font_size.getFontSize)(iconSize || size) * scaleIcon,
      [themedIcon, themedIconAfter] = [icon, iconAfter].map(function (icon2, i) {
        if (!icon2) return null;
        var isBefore = i === 0;
        return (0, import_helpers_tamagui.getIcon)(icon2, {
          size: iconSizeNumber,
          color: iconColor,
          style: {
            [isBefore ? "marginRight" : "marginLeft"]: `${iconSizeNumber * 0.4}%`
          }
        });
      }),
      wrappedChildren = (0, import_text.wrapChildrenInText)(ListItemText, {
        children
      }, propsIn.unstyled !== !0 ? {
        unstyled: process.env.TAMAGUI_HEADLESS === "1",
        fontSize: propsIn.size
      } : void 0);
    return /* @__PURE__ */(0, import_jsx_runtime.jsxs)(ListItemFrame, {
      ref,
      ...rest,
      children: [themedIcon, title || subTitle ? /* @__PURE__ */(0, import_jsx_runtime.jsxs)(import_stacks.YStack, {
        flex: 1,
        children: [title ? typeof title == "string" ? /* @__PURE__ */(0, import_jsx_runtime.jsx)(ListItemTitle, {
          unstyled,
          size,
          children: title
        }) : title : null, subTitle ? /* @__PURE__ */(0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, {
          children: typeof subTitle == "string" ? /* @__PURE__ */(0, import_jsx_runtime.jsx)(ListItemSubtitle, {
            unstyled,
            size,
            children: subTitle
          }) : subTitle
        }) : null, wrappedChildren]
      }) : wrappedChildren, themedIconAfter]
    });
  }),
  ListItem2 = (0, import_helpers.withStaticProperties)(ListItemComponent, {
    Apply: context.Provider,
    Frame: ListItemFrame,
    Text: ListItemText,
    Subtitle: ListItemSubtitle,
    Icon: ListItemIcon,
    Title: ListItemTitle
  });
//# sourceMappingURL=ListItem.native.js.map
