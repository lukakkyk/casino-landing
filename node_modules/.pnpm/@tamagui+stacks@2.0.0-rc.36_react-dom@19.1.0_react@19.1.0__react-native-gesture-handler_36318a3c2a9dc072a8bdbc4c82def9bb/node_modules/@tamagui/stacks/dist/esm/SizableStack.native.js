import { styled } from "@tamagui/core";
import { getButtonSized } from "@tamagui/get-button-sized";
import { ThemeableStack } from "./ThemeableStack.native.js";
import { bordered, circular, elevate } from "./variants.native.js";
var SizableStack = styled(ThemeableStack, {
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
      "...size": function (val, extras) {
        return getButtonSized(val, extras);
      }
    }
  }
});
export { SizableStack };
//# sourceMappingURL=SizableStack.native.js.map
