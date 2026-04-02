import { styled } from "@tamagui/core";
import { getButtonSized } from "@tamagui/get-button-sized";
import { ThemeableStack } from "./ThemeableStack.mjs";
import { bordered, circular, elevate } from "./variants.mjs";
const SizableStack = styled(ThemeableStack, {
  name: "SizableStack",
  variants: {
    unstyled: {
      true: {
        elevate: !1,
        bordered: !1
      }
    },
    circular,
    elevate,
    bordered: {
      true: bordered
    },
    size: {
      "...size": (val, extras) => getButtonSized(val, extras)
    }
  }
});
export { SizableStack };
//# sourceMappingURL=SizableStack.mjs.map
