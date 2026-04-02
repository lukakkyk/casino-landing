import { useLayoutEffect } from "react";
import { Platform } from "react-native";
var isWeb = !1,
  isBrowser = !1,
  isServer = !1,
  isClient = !0,
  isWindowDefined = !1,
  useIsomorphicLayoutEffect = useLayoutEffect,
  isChrome = !1,
  isWebTouchable = !1,
  isTouchable = !0,
  isAndroid = (Platform === null || Platform === void 0 ? void 0 : Platform.OS) === "android" || process.env.TEST_NATIVE_PLATFORM === "android",
  isIos = (Platform === null || Platform === void 0 ? void 0 : Platform.OS) === "ios" || process.env.TEST_NATIVE_PLATFORM === "ios",
  platforms = {
    ios: "ios",
    android: "android"
  },
  currentPlatform = (!(Platform === null || Platform === void 0) && Platform.OS ? platforms[Platform.OS] : void 0) || "native";
export { currentPlatform, isAndroid, isBrowser, isChrome, isClient, isIos, isServer, isTouchable, isWeb, isWebTouchable, isWindowDefined, useIsomorphicLayoutEffect };
//# sourceMappingURL=constants.native.js.map
