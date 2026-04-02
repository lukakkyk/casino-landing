import { useIsomorphicLayoutEffect } from "@tamagui/constants";
import { ClientOnly } from "@tamagui/use-did-finish-ssr";
import React, { useEffect } from "react";
import { getSetting } from "../config.mjs";
import { ComponentContext } from "../contexts/ComponentContext.mjs";
import { stopAccumulatingRules } from "../helpers/insertStyleRule.mjs";
import { updateMediaListeners } from "../hooks/useMedia.mjs";
import { resolveAnimationDriver } from "../helpers/resolveAnimationDriver.mjs";
import { TamaguiRoot } from "./TamaguiRoot.mjs";
import { ThemeProvider } from "./ThemeProvider.mjs";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
let _cachedFirstKey, _cachedConfig;
function firstThemeKey(config) {
  return config !== _cachedConfig && (_cachedConfig = config, _cachedFirstKey = config?.themes ? Object.keys(config.themes)[0] : void 0), _cachedFirstKey;
}
function TamaguiProvider({
  children,
  disableInjectCSS,
  config,
  className,
  defaultTheme: defaultThemeProp,
  reset,
  insets
}) {
  const defaultTheme = defaultThemeProp || firstThemeKey(config) || "light";
  useIsomorphicLayoutEffect(() => {
    stopAccumulatingRules(), updateMediaListeners();
  }, []);
  const memoizedInsets = React.useMemo(() => insets, [insets?.top, insets?.right, insets?.bottom, insets?.left]),
    defaultAnimationDriver = React.useMemo(() => resolveAnimationDriver(config?.animations), [config?.animations]);
  useEffect(() => {
    defaultAnimationDriver?.onMount?.();
  }, []);
  let contents = /* @__PURE__ */jsx(ComponentContext.Provider, {
    animationDriver: defaultAnimationDriver,
    insets: memoizedInsets,
    children: /* @__PURE__ */jsx(ThemeProvider, {
      defaultTheme,
      reset,
      className,
      children: /* @__PURE__ */jsx(TamaguiRoot, {
        theme: defaultTheme,
        isRootRoot: !0,
        children
      })
    })
  });
  return getSetting("disableSSR") && (contents = /* @__PURE__ */jsx(ClientOnly, {
    enabled: !0,
    children: contents
  })), /* @__PURE__ */jsxs(Fragment, {
    children: [contents, config && !disableInjectCSS && /* @__PURE__ */jsx("style", {
      precedence: "default",
      href: "tamagui-css",
      children: config.getCSS()
    }, "tamagui-css")]
  });
}
export { TamaguiProvider };
//# sourceMappingURL=TamaguiProvider.mjs.map
