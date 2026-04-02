import { getVariableValue, styled } from "@tamagui/core";
import { getSize } from "@tamagui/get-token";
import { YStack } from "@tamagui/stacks";
import { CheckboxStyledContext } from "./CheckboxStyledContext.mjs";
const INDICATOR_NAME = "CheckboxIndicator",
  CheckboxIndicatorFrame = styled(YStack, {
    // use Checkbox for easier themes
    name: INDICATOR_NAME,
    context: CheckboxStyledContext,
    variants: {
      unstyled: {
        false: {}
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
  CHECKBOX_NAME = "Checkbox",
  CheckboxFrame = styled(YStack, {
    name: CHECKBOX_NAME,
    render: "button",
    context: CheckboxStyledContext,
    variants: {
      unstyled: {
        false: {
          size: "$true",
          backgroundColor: "$background",
          alignItems: "center",
          justifyContent: "center",
          borderWidth: 1,
          borderColor: "$borderColor",
          hoverStyle: {
            borderColor: "$borderColorHover"
          },
          pressStyle: {
            backgroundColor: "$backgroundPress",
            borderColor: "$borderColorPress"
          },
          focusStyle: {
            borderColor: "$borderColorFocus"
          },
          focusVisibleStyle: {
            outlineStyle: "solid",
            outlineWidth: 2,
            outlineColor: "$outlineColor"
          }
        }
      },
      disabled: {
        true: {
          pointerEvents: "none",
          userSelect: "none",
          cursor: "not-allowed",
          hoverStyle: {
            borderColor: "$borderColor",
            backgroundColor: "$background"
          },
          pressStyle: {
            borderColor: "$borderColor",
            backgroundColor: "$background"
          },
          focusStyle: {
            outlineWidth: 0
          }
        }
      },
      size: {
        "...size": val => ({
          borderRadius: getVariableValue(getSize(val)) / 8
        })
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
export { CheckboxFrame, CheckboxIndicatorFrame };
//# sourceMappingURL=Checkbox.mjs.map
