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
var Button_exports = {};
__export(Button_exports, {
  Button: () => Button,
  ButtonContext: () => ButtonContext
});
module.exports = __toCommonJS(Button_exports);
var import_font_size = require("@tamagui/font-size"),
  import_get_button_sized = require("@tamagui/get-button-sized"),
  import_helpers_tamagui = require("@tamagui/helpers-tamagui"),
  import_stacks = require("@tamagui/stacks"),
  import_text = require("@tamagui/text"),
  import_web = require("@tamagui/web"),
  import_react = require("react"),
  import_jsx_runtime = require("react/jsx-runtime");
const context = (0, import_web.createStyledContext)({
    size: void 0,
    variant: void 0,
    color: void 0,
    elevation: void 0
  }),
  Frame = (0, import_web.styled)(import_web.View, {
    context,
    name: "Button",
    role: "button",
    render: /* @__PURE__ */(0, import_jsx_runtime.jsx)("button", {
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
      circular: import_stacks.themeableVariants.circular,
      chromeless: import_stacks.themeableVariants.chromeless,
      size: {
        "...size": (val, extras) => {
          const buttonStyle = (0, import_get_button_sized.getButtonSized)(val, extras),
            gap = (0, import_web.getTokenValue)(val);
          return {
            ...buttonStyle,
            gap
          };
        },
        ":number": (val, extras) => {
          const buttonStyle = (0, import_get_button_sized.getButtonSized)(val, extras),
            gap = val * 0.4;
          return {
            ...buttonStyle,
            gap
          };
        }
      },
      elevation: {
        "...size": import_stacks.getElevation,
        ":number": import_stacks.getElevation
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
  Text = (0, import_web.styled)(import_text.SizableText, {
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
  Icon = props => {
    const {
        children,
        scaleIcon = 1,
        size
      } = props,
      styledContext = context.useStyledContext();
    if (!styledContext) throw new Error("Button.Icon must be used within a Button");
    const sizeToken = size ?? styledContext.size,
      iconColor = (0, import_helpers_tamagui.useCurrentColor)(styledContext.color),
      iconSize = (typeof sizeToken == "number" ? sizeToken * 0.5 : (0, import_font_size.getFontSize)(sizeToken)) * scaleIcon;
    return (0, import_helpers_tamagui.getIcon)(children, {
      size: iconSize,
      color: iconColor
    });
  },
  ButtonContext = (0, import_web.createStyledContext)({
    size: void 0,
    variant: void 0,
    color: void 0
  }),
  ButtonComponent = Frame.styleable((propsIn, ref) => {
    const isNested = (0, import_react.useContext)(import_stacks.ButtonNestingContext),
      processedProps = (0, import_web.useProps)(propsIn, {
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
      iconColor = (0, import_helpers_tamagui.useCurrentColor)(styledContext?.color),
      finalSize = iconSize ?? size ?? styledContext?.size,
      iconSizeNumber = (typeof finalSize == "number" ? finalSize * 0.5 : (0, import_font_size.getFontSize)(finalSize)) * scaleIcon,
      [themedIcon, themedIconAfter] = [icon, iconAfter].map(icon2 => icon2 ? (0, import_helpers_tamagui.getIcon)(icon2, {
        size: iconSizeNumber,
        color: iconColor
        // No marginLeft or marginRight needed - spacing is handled by the gap property in Frame's size variants
      }) : null),
      wrappedChildren = (0, import_text.wrapChildrenInText)(Text, {
        children
      }, {
        unstyled: process.env.TAMAGUI_HEADLESS === "1",
        size: finalSize ?? styledContext?.size
      });
    return /* @__PURE__ */(0, import_jsx_runtime.jsx)(import_stacks.ButtonNestingContext.Provider, {
      value: !0,
      children: /* @__PURE__ */(0, import_jsx_runtime.jsxs)(Frame, {
        ref,
        ...props,
        ...(isNested && {
          render: "span"
        }),
        ...(props.circular && !propsIn.size && {
          size
        }),
        tabIndex: 0,
        children: [themedIcon, wrappedChildren, themedIconAfter]
      })
    });
  }),
  Button = (0, import_web.withStaticProperties)(ButtonComponent, {
    Apply: context.Provider,
    Frame,
    Text,
    Icon
  });