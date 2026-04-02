import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useIsomorphicLayoutEffect } from "@tamagui/constants";
import { ClientOnly } from "@tamagui/use-did-finish-ssr";
import React, { useEffect } from "react";
import { getSetting } from "../config.native.js";
import { ComponentContext } from "../contexts/ComponentContext.native.js";
import { stopAccumulatingRules } from "../helpers/insertStyleRule.native.js";
import { updateMediaListeners } from "../hooks/useMedia.native.js";
import { resolveAnimationDriver } from "../helpers/resolveAnimationDriver.native.js";
import { TamaguiRoot } from "./TamaguiRoot.native.js";
import { ThemeProvider } from "./ThemeProvider.native.js";
var _cachedFirstKey, _cachedConfig;
function firstThemeKey(config) {
  return config !== _cachedConfig && (_cachedConfig = config, _cachedFirstKey = config?.themes ? Object.keys(config.themes)[0] : void 0), _cachedFirstKey;
}
function TamaguiProvider(param) {
  var {
      children,
      disableInjectCSS,
      config,
      className,
      defaultTheme: defaultThemeProp,
      reset,
      insets
    } = param,
    defaultTheme = defaultThemeProp || firstThemeKey(config) || "light";
  useIsomorphicLayoutEffect(function () {
    stopAccumulatingRules(), updateMediaListeners();
  }, []);
  var memoizedInsets = React.useMemo(function () {
      return insets;
    }, [insets?.top, insets?.right, insets?.bottom, insets?.left]),
    defaultAnimationDriver = React.useMemo(function () {
      return resolveAnimationDriver(config?.animations);
    }, [config?.animations]);
  useEffect(function () {
    var _defaultAnimationDriver_onMount;
    defaultAnimationDriver == null || (_defaultAnimationDriver_onMount = defaultAnimationDriver.onMount) === null || _defaultAnimationDriver_onMount === void 0 || _defaultAnimationDriver_onMount.call(defaultAnimationDriver);
  }, []);
  var contents = /* @__PURE__ */_jsx(ComponentContext.Provider, {
    animationDriver: defaultAnimationDriver,
    insets: memoizedInsets,
    children: /* @__PURE__ */_jsx(ThemeProvider, {
      defaultTheme,
      reset,
      className,
      children: /* @__PURE__ */_jsx(TamaguiRoot, {
        theme: defaultTheme,
        isRootRoot: !0,
        children
      })
    })
  });
  return getSetting("disableSSR") && (contents = /* @__PURE__ */_jsx(ClientOnly, {
    enabled: !0,
    children: contents
  })), /* @__PURE__ */_jsxs(_Fragment, {
    children: [contents, !1]
  });
}
export { TamaguiProvider };
//# sourceMappingURL=TamaguiProvider.native.js.map
