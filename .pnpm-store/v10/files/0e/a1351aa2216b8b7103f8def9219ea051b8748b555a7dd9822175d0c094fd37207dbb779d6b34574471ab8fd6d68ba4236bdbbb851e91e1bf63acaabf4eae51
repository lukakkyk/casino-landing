"use strict";

var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf,
  __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
    for (var name in all) __defProp(target, name, {
      get: all[name],
      enumerable: !0
    });
  },
  __copyProps = (to, from, except, desc) => {
    if (from && typeof from == "object" || typeof from == "function") for (let key of __getOwnPropNames(from)) !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, {
      get: () => from[key],
      enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
    });
    return to;
  };
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
    value: mod,
    enumerable: !0
  }) : target, mod)),
  __toCommonJS = mod => __copyProps(__defProp({}, "__esModule", {
    value: !0
  }), mod);
var TamaguiProvider_exports = {};
__export(TamaguiProvider_exports, {
  TamaguiProvider: () => TamaguiProvider
});
module.exports = __toCommonJS(TamaguiProvider_exports);
var import_jsx_runtime = require("react/jsx-runtime"),
  import_constants = require("@tamagui/constants"),
  import_use_did_finish_ssr = require("@tamagui/use-did-finish-ssr"),
  import_react = __toESM(require("react"), 1),
  import_config = require("../config.native.js"),
  import_ComponentContext = require("../contexts/ComponentContext.native.js"),
  import_insertStyleRule = require("../helpers/insertStyleRule.native.js"),
  import_useMedia = require("../hooks/useMedia.native.js"),
  import_resolveAnimationDriver = require("../helpers/resolveAnimationDriver.native.js"),
  import_TamaguiRoot = require("./TamaguiRoot.native.js"),
  import_ThemeProvider = require("./ThemeProvider.native.js"),
  _cachedFirstKey,
  _cachedConfig;
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
  (0, import_constants.useIsomorphicLayoutEffect)(function () {
    (0, import_insertStyleRule.stopAccumulatingRules)(), (0, import_useMedia.updateMediaListeners)();
  }, []);
  var memoizedInsets = import_react.default.useMemo(function () {
      return insets;
    }, [insets?.top, insets?.right, insets?.bottom, insets?.left]),
    defaultAnimationDriver = import_react.default.useMemo(function () {
      return (0, import_resolveAnimationDriver.resolveAnimationDriver)(config?.animations);
    }, [config?.animations]);
  (0, import_react.useEffect)(function () {
    var _defaultAnimationDriver_onMount;
    defaultAnimationDriver == null || (_defaultAnimationDriver_onMount = defaultAnimationDriver.onMount) === null || _defaultAnimationDriver_onMount === void 0 || _defaultAnimationDriver_onMount.call(defaultAnimationDriver);
  }, []);
  var contents = /* @__PURE__ */(0, import_jsx_runtime.jsx)(import_ComponentContext.ComponentContext.Provider, {
    animationDriver: defaultAnimationDriver,
    insets: memoizedInsets,
    children: /* @__PURE__ */(0, import_jsx_runtime.jsx)(import_ThemeProvider.ThemeProvider, {
      defaultTheme,
      reset,
      className,
      children: /* @__PURE__ */(0, import_jsx_runtime.jsx)(import_TamaguiRoot.TamaguiRoot, {
        theme: defaultTheme,
        isRootRoot: !0,
        children
      })
    })
  });
  return (0, import_config.getSetting)("disableSSR") && (contents = /* @__PURE__ */(0, import_jsx_runtime.jsx)(import_use_did_finish_ssr.ClientOnly, {
    enabled: !0,
    children: contents
  })), /* @__PURE__ */(0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, {
    children: [contents, !1]
  });
}
//# sourceMappingURL=TamaguiProvider.native.js.map
