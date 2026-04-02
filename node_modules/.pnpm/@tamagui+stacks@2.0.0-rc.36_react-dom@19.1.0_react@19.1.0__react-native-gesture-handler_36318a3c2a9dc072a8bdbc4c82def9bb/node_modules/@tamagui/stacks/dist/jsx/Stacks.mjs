import { View, styled } from "@tamagui/core";
import { getElevation } from "./getElevation.mjs";
const fullscreenStyle = {
    position: "absolute",
    inset: 0
  },
  variants = {
    fullscreen: {
      true: fullscreenStyle
    },
    elevation: {
      "...size": getElevation,
      ":number": getElevation
    }
  },
  YStack = styled(View, {
    flexDirection: "column",
    variants
  });
YStack.displayName = "YStack";
const XStack = styled(View, {
  flexDirection: "row",
  variants
});
XStack.displayName = "XStack";
const ZStack = styled(YStack, {
  position: "relative"
}, {
  neverFlatten: !0,
  isZStack: !0
});
ZStack.displayName = "ZStack";
export { XStack, YStack, ZStack, fullscreenStyle };
//# sourceMappingURL=Stacks.mjs.map
