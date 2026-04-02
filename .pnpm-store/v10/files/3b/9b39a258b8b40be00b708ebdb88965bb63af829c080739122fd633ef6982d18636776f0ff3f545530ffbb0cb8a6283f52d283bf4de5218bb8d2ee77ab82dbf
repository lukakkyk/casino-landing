import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { getFontSize } from "@tamagui/font-size";
import { getButtonSized } from "@tamagui/get-button-sized";
import { getIcon, useCurrentColor } from "@tamagui/helpers-tamagui";
import { ButtonNestingContext, getElevation, themeableVariants } from "@tamagui/stacks";
import { SizableText, wrapChildrenInText } from "@tamagui/text";
import { createStyledContext, getTokenValue, styled, useProps, View, withStaticProperties } from "@tamagui/web";
import { useContext } from "react";
var context = createStyledContext({
    size: void 0,
    variant: void 0,
    color: void 0,
    elevation: void 0
  }),
  Frame = styled(View, {
    context,
    name: "Button",
    role: "button",
    render: /* @__PURE__ */_jsx("button", {
      type: "button"
    }),
    tabIndex: 0,
    variants: {
      unstyled: {
        false: {
          size: "$true",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexDirection: "row",
          cursor: "pointer",
          backgroundColor: "$background",
          borderWidth: 1,
          borderColor: "transparent",
          hoverStyle: {
            backgroundColor: "$backgroundHover",
            borderColor: "$borderColorHover"
          },
          pressStyle: {
            backgroundColor: "$backgroundPress",
            borderColor: "$borderColorHover"
          },
          focusVisibleStyle: {
            outlineColor: "$outlineColor",
            outlineStyle: "solid",
            outlineWidth: 2
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
      circular: themeableVariants.circular,
      chromeless: themeableVariants.chromeless,
      size: {
        "...size": function (val, extras) {
          var buttonStyle = getButtonSized(val, extras),
            gap = getTokenValue(val);
          return {
            ...buttonStyle,
            gap
          };
        },
        ":number": function (val, extras) {
          var buttonStyle = getButtonSized(val, extras),
            gap = val * 0.4;
          return {
            ...buttonStyle,
            gap
          };
        }
      },
      elevation: {
        "...size": getElevation,
        ":number": getElevation
      },
      disabled: {
        true: {
          pointerEvents: "none",
          // @ts-ignore
          "aria-disabled": !0
        }
      }
    },
    defaultVariants: {
      unstyled: process.env.TAMAGUI_HEADLESS === "1"
    }
  }),
  Text = styled(SizableText, {
    context,
    variants: {
      unstyled: {
        false: {
          userSelect: "none",
          cursor: "pointer",
          // flexGrow 1 leads to inconsistent native style where text pushes to start of view
          flexGrow: 0,
          flexShrink: 1,
          ellipsis: !0,
          color: "$color"
        }
      }
    },
    defaultVariants: {
      unstyled: process.env.TAMAGUI_HEADLESS === "1"
    }
  }),
  Icon = function (props) {
    var {
        children,
        scaleIcon = 1,
        size
      } = props,
      styledContext = context.useStyledContext();
    if (!styledContext) throw new Error("Button.Icon must be used within a Button");
    var sizeToken = size ?? styledContext.size,
      iconColor = useCurrentColor(styledContext.color),
      iconSize = (typeof sizeToken == "number" ? sizeToken * 0.5 : getFontSize(sizeToken)) * scaleIcon;
    return getIcon(children, {
      size: iconSize,
      color: iconColor
    });
  },
  ButtonContext = createStyledContext({
    size: void 0,
    variant: void 0,
    color: void 0
  }),
  ButtonComponent = Frame.styleable(function (propsIn, ref) {
    var isNested = useContext(ButtonNestingContext),
      processedProps = useProps(propsIn, {
        noNormalize: !0,
        noExpand: !0
      }),
      {
        children,
        iconSize,
        icon,
        iconAfter,
        scaleIcon = 1,
        ...props
      } = processedProps,
      size = propsIn.size || (propsIn.unstyled ? void 0 : "$true"),
      styledContext = context.useStyledContext(),
      iconColor = useCurrentColor(styledContext?.color),
      _ref,
      finalSize = (_ref = iconSize ?? size) !== null && _ref !== void 0 ? _ref : styledContext?.size,
      iconSizeNumber = (typeof finalSize == "number" ? finalSize * 0.5 : getFontSize(finalSize)) * scaleIcon,
      [themedIcon, themedIconAfter] = [icon, iconAfter].map(function (icon2) {
        return icon2 ? getIcon(icon2, {
          size: iconSizeNumber,
          color: iconColor
        }) : null;
      }),
      wrappedChildren = wrapChildrenInText(Text, {
        children
      }, {
        unstyled: process.env.TAMAGUI_HEADLESS === "1",
        size: finalSize ?? styledContext?.size
      });
    return /* @__PURE__ */_jsx(ButtonNestingContext.Provider, {
      value: !0,
      children: /* @__PURE__ */_jsxs(Frame, {
        ref,
        ...props,
        ...(isNested && {
          render: "span"
        }),
        // Pass resolved size to circular variant when no explicit size provided
        ...(props.circular && !propsIn.size && {
          size
        }),
        tabIndex: 0,
        children: [themedIcon, wrappedChildren, themedIconAfter]
      })
    });
  }),
  Button = withStaticProperties(ButtonComponent, {
    Apply: context.Provider,
    Frame,
    Text,
    Icon
  });
export { Button, ButtonContext };
//# sourceMappingURL=Button.native.js.map
