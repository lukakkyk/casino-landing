import { View, styled } from "@tamagui/core";
import { getElevation } from "./getElevation.native.js";
var fullscreenStyle = {
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
var XStack = styled(View, {
  flexDirection: "row",
  variants
});
XStack.displayName = "XStack";
var ZStack = styled(YStack, {
  position: "relative"
}, {
  neverFlatten: !0,
  isZStack: !0
});
ZStack.displayName = "ZStack";
export { XStack, YStack, ZStack, fullscreenStyle };
//# sourceMappingURL=Stacks.native.js.map
