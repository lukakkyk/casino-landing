import { getVariableValue, styled } from "@tamagui/core";
import { getSize } from "@tamagui/get-token";
import { YStack } from "@tamagui/stacks";
var SwitchThumb = styled(YStack, {
    name: "SwitchThumb",
    variants: {
      unstyled: {
        false: {
          size: "$true",
          backgroundColor: "$background",
          borderRadius: 1e3
        }
      },
      size: {
        "...size": function (val) {
          var size = getSwitchHeight(val);
          return {
            height: size,
            width: size
          };
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
  getSwitchHeight = function (val) {
    return Math.round(getVariableValue(getSize(val)) * 0.65);
  },
  getSwitchWidth = function (val) {
    return getSwitchHeight(val) * 2;
  },
  SwitchFrame = styled(YStack, {
    name: "Switch",
    render: "button",
    tabIndex: 0,
    variants: {
      unstyled: {
        false: {
          borderRadius: 1e3,
          backgroundColor: "$background",
          focusVisibleStyle: {
            outlineColor: "$outlineColor",
            outlineStyle: "solid",
            outlineWidth: 2
          }
        }
      },
      size: {
        "...size": function (val, param) {
          var {
            props
          } = param;
          if (!props.unstyled) {
            var height = getSwitchHeight(val),
              width = getSwitchWidth(val);
            return {
              height,
              minHeight: height,
              width
            };
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
  });
export { SwitchFrame, SwitchThumb };
//# sourceMappingURL=Switch.native.js.map
