import { isIos } from "@tamagui/constants";
import { getConfig, getSetting } from "../config.native.js";
import { getVariable } from "../createVariable.native.js";
import { getDynamicVal } from "../helpers/getDynamicVal.native.js";
import { doesRootSchemeMatchSystem } from "./doesRootSchemeMatchSystem.native.js";
var cache = /* @__PURE__ */new Map(),
  curKeys,
  curSchemeKeys,
  curProps,
  curState,
  emptyObject = {};
function getThemeProxied(_props, _state, _keys, _schemeKeys) {
  if (!_state?.theme) return emptyObject;
  if (curKeys = _keys, curSchemeKeys = _schemeKeys, curProps = _props, curState = _state, cache.has(curState.theme)) {
    var proxied = cache.get(curState.theme);
    return proxied;
  }
  var config = getConfig();
  function track(key) {
    var schemeOptimized = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    curKeys && (curKeys.current || (curKeys.current = /* @__PURE__ */new Set()), curKeys.current.add(key), schemeOptimized && curSchemeKeys && (curSchemeKeys.current || (curSchemeKeys.current = /* @__PURE__ */new Set()), curSchemeKeys.current.add(key)), process.env.NODE_ENV === "development" && curProps.debug && console.info(` \u{1F3A8} useTheme() tracking key: ${key} schemeOptimized=${schemeOptimized}`));
  }
  var proxied1 = Object.fromEntries(Object.entries(_state.theme).flatMap(function (param) {
    var [key, value] = param,
      proxied2 = {
        ...value,
        get val() {
          return globalThis.tamaguiAvoidTracking || track(key, !1), value.val;
        },
        get(platform) {
          if (curState) {
            var outVal = getVariable(value),
              {
                name,
                scheme
              } = curState,
              fastSchemeChange = getSetting("fastSchemeChange"),
              rootMatchesSystem = doesRootSchemeMatchSystem(),
              shouldOptimize = scheme && platform !== "web" && isIos && !curProps.deopt && !curState.isInverse && fastSchemeChange && rootMatchesSystem;
            if (process.env.NODE_ENV === "development" && curProps.debug === "verbose" && console.info(` \u{1F3A8} useTheme().get(${key}) theme=${name} scheme=${scheme}`, `
   shouldOptimize=${shouldOptimize} (iOS=${isIos} deopt=${curProps.deopt} isInverse=${curState.isInverse} fastScheme=${fastSchemeChange} rootMatch=${rootMatchesSystem})`), shouldOptimize) {
              var _config_themes_name,
                _config_themes_oppositeName,
                oppositeScheme = scheme === "dark" ? "light" : "dark",
                oppositeName = name.replace(scheme, oppositeScheme),
                color = getVariable((_config_themes_name = config.themes[name]) === null || _config_themes_name === void 0 ? void 0 : _config_themes_name[key]),
                oppositeColor = getVariable((_config_themes_oppositeName = config.themes[oppositeName]) === null || _config_themes_oppositeName === void 0 ? void 0 : _config_themes_oppositeName[key]);
              process.env.NODE_ENV === "development" && curProps.debug === "verbose" && console.info(` \u{1F3A8} useTheme().get(${key}) using DynamicColorIOS`, `
   color=${color} oppositeColor=${oppositeColor}`);
              var dynamicVal = getDynamicVal({
                scheme,
                val: color,
                oppositeVal: oppositeColor
              });
              return track(key, !0), dynamicVal;
            }
            return process.env.NODE_ENV === "development" && curProps.debug && console.info(` \u{1F3A8} useTheme().get(${key}) tracking key (not optimizing)`, `
   platform=${platform} isIOS=${isIos} deopt=${curProps.deopt} fastScheme=${fastSchemeChange}`), track(key, !1), outVal;
          }
        }
      };
    return [[key, proxied2], [`$${key}`, proxied2]];
  }));
  return cache.set(_state.theme, proxied1), proxied1;
}
export { getThemeProxied };
//# sourceMappingURL=getThemeProxied.native.js.map
