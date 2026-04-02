import { useEffect, useLayoutEffect } from "react";
const isWeb = !0,
  isBrowser = typeof window < "u",
  isServer = isWeb && !isBrowser,
  isClient = isWeb && isBrowser,
  isWindowDefined = isBrowser,
  useIsomorphicLayoutEffect = isServer ? useEffect : useLayoutEffect,
  isChrome = typeof navigator < "u" && /Chrome/.test(navigator.userAgent || ""),
  isWebTouchable = isClient && ("ontouchstart" in window || navigator.maxTouchPoints > 0),
  isTouchable = !isWeb || isWebTouchable,
  isAndroid = !1,
  isIos = process.env.TEST_NATIVE_PLATFORM === "ios",
  currentPlatform = "web";
export { currentPlatform, isAndroid, isBrowser, isChrome, isClient, isIos, isServer, isTouchable, isWeb, isWebTouchable, isWindowDefined, useIsomorphicLayoutEffect };
//# sourceMappingURL=constants.mjs.map
