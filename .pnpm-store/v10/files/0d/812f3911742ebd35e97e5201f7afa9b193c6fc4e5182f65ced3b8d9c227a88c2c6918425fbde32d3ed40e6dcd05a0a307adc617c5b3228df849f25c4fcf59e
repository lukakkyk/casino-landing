import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { getFontSize } from "@tamagui/font-size";
import { getFontSized } from "@tamagui/get-font-sized";
import { getSize, getSpace } from "@tamagui/get-token";
import { withStaticProperties } from "@tamagui/helpers";
import { getIcon, useCurrentColor } from "@tamagui/helpers-tamagui";
import { YStack } from "@tamagui/stacks";
import { SizableText, wrapChildrenInText } from "@tamagui/text";
import { createStyledContext, styled, View } from "@tamagui/web";
var NAME = "ListItem",
  context = createStyledContext({
    size: void 0,
    variant: void 0,
    color: void 0
  }),
  ListItemFrame = styled(View, {
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
            paddingVertical: getSpace(tokens.space[val], {
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
  ListItemText = styled(SizableText, {
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
  ListItemSubtitle = styled(ListItemText, {
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
          var oneSmaller = getSize(val, {
              shift: -1,
              excludeHalfSteps: !0
            }),
            fontStyle = getFontSized(oneSmaller.key, extras);
          return fontStyle;
        }
      }
    },
    defaultVariants: {
      unstyled: process.env.TAMAGUI_HEADLESS === "1"
    }
  }),
  ListItemTitle = styled(ListItemText, {
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
      iconColor = useCurrentColor(styledContext.color),
      iconSize = getFontSize(sizeToken) * scaleIcon;
    return getIcon(children, {
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
      iconColor = useCurrentColor(styledContext?.color),
      iconSizeNumber = getFontSize(iconSize || size) * scaleIcon,
      [themedIcon, themedIconAfter] = [icon, iconAfter].map(function (icon2, i) {
        if (!icon2) return null;
        var isBefore = i === 0;
        return getIcon(icon2, {
          size: iconSizeNumber,
          color: iconColor,
          style: {
            [isBefore ? "marginRight" : "marginLeft"]: `${iconSizeNumber * 0.4}%`
          }
        });
      }),
      wrappedChildren = wrapChildrenInText(ListItemText, {
        children
      }, propsIn.unstyled !== !0 ? {
        unstyled: process.env.TAMAGUI_HEADLESS === "1",
        fontSize: propsIn.size
      } : void 0);
    return /* @__PURE__ */_jsxs(ListItemFrame, {
      ref,
      ...rest,
      children: [themedIcon, title || subTitle ? /* @__PURE__ */_jsxs(YStack, {
        flex: 1,
        children: [title ? typeof title == "string" ? /* @__PURE__ */_jsx(ListItemTitle, {
          unstyled,
          size,
          children: title
        }) : title : null, subTitle ? /* @__PURE__ */_jsx(_Fragment, {
          children: typeof subTitle == "string" ? /* @__PURE__ */_jsx(ListItemSubtitle, {
            unstyled,
            size,
            children: subTitle
          }) : subTitle
        }) : null, wrappedChildren]
      }) : wrappedChildren, themedIconAfter]
    });
  }),
  ListItem2 = withStaticProperties(ListItemComponent, {
    Apply: context.Provider,
    Frame: ListItemFrame,
    Text: ListItemText,
    Subtitle: ListItemSubtitle,
    Icon: ListItemIcon,
    Title: ListItemTitle
  });
export { ListItem2 as ListItem };
//# sourceMappingURL=ListItem.native.js.map
