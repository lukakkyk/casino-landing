import { composeEventHandlers } from "@tamagui/helpers";
import { useControllableState } from "@tamagui/use-controllable-state";
import { styled, View } from "@tamagui/web";
import * as React from "react";
import { context } from "./context.mjs";
import { jsx } from "react/jsx-runtime";
const NAME = "Toggle",
  ToggleFrame = styled(View, {
    name: NAME,
    render: "button",
    context,
    variants: {
      unstyled: {
        false: {
          size: "$true",
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
          backgroundColor: "$background",
          borderColor: "$borderColor",
          borderWidth: 1,
          margin: -1,
          hoverStyle: {
            backgroundColor: "$backgroundHover",
            borderColor: "$borderColorHover"
          },
          pressStyle: {
            backgroundColor: "$backgroundPress",
            borderColor: "$borderColorPress"
          },
          focusVisibleStyle: {
            outlineColor: "$outlineColor",
            outlineWidth: 2,
            outlineStyle: "solid",
            zIndex: 10
          }
        }
      },
      size: {
        "...size": (val, {
          tokens
        }) => {
          if (val) return {
            width: tokens.size[val],
            height: tokens.size[val]
          };
        },
        ":number": val => ({
          width: val,
          height: val
        })
      },
      defaultActiveStyle: {
        true: {
          backgroundColor: "$backgroundActive",
          hoverStyle: {
            backgroundColor: "$backgroundActive"
          },
          focusStyle: {
            backgroundColor: "$backgroundActive"
          }
        }
      }
    },
    defaultVariants: {
      unstyled: process.env.TAMAGUI_HEADLESS === "1"
    }
  }, {
    accept: {
      activeStyle: "style"
    }
  }),
  Toggle = React.forwardRef(function (props, forwardedRef) {
    const {
        active: activeProp,
        activeStyle,
        defaultActive = !1,
        onActiveChange,
        activeTheme,
        unstyled = !1,
        ...buttonProps
      } = props,
      [active = !1, setActive] = useControllableState({
        prop: activeProp,
        onChange: onActiveChange,
        defaultProp: defaultActive
      });
    return /* @__PURE__ */jsx(ToggleFrame, {
      theme: activeTheme ?? null,
      "aria-pressed": active,
      "data-state": active ? "on" : "off",
      "data-disabled": props.disabled ? "" : void 0,
      unstyled,
      ...(active && !activeStyle && !unstyled && {
        defaultActiveStyle: !0
      }),
      ...(active && activeStyle && {
        ...activeStyle,
        hoverStyle: activeStyle,
        focusStyle: activeStyle
      }),
      ...buttonProps,
      ref: forwardedRef,
      onPress: composeEventHandlers(props.onPress ?? void 0, () => {
        props.disabled || setActive(prev => !prev);
      })
    });
  });
export { Toggle, ToggleFrame };
//# sourceMappingURL=Toggle.mjs.map
