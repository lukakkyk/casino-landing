import { styled, View } from "@tamagui/core";
import { getButtonSized } from "@tamagui/get-button-sized";
import { SizableStack, ThemeableStack } from "@tamagui/stacks";
var TABS_NAME = "Tabs",
  DefaultTabsFrame = styled(SizableStack, {
    name: TABS_NAME
  }),
  TRIGGER_NAME = "TabsTrigger",
  DefaultTabsTabFrame = styled(View, {
    name: TRIGGER_NAME,
    role: "tab",
    variants: {
      size: {
        "...size": getButtonSized
      },
      disabled: {
        true: {
          pointerEvents: "none"
        }
      },
      unstyled: {
        false: {
          borderWidth: 0,
          backgroundColor: "$background",
          userSelect: "none",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexDirection: "row",
          cursor: "pointer",
          pressStyle: {
            backgroundColor: "$backgroundPress"
          },
          focusVisibleStyle: {
            outlineColor: "$outlineColor",
            outlineWidth: 2,
            outlineStyle: "solid",
            zIndex: 10
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
  CONTENT_NAME = "TabsContent",
  DefaultTabsContentFrame = styled(ThemeableStack, {
    name: CONTENT_NAME
  });
export { DefaultTabsContentFrame, DefaultTabsFrame, DefaultTabsTabFrame };
//# sourceMappingURL=Tabs.native.js.map
