"use strict";

var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
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
var __toCommonJS = mod => __copyProps(__defProp({}, "__esModule", {
  value: !0
}), mod);
var getThemeProxied_exports = {};
__export(getThemeProxied_exports, {
  getThemeProxied: () => getThemeProxied
});
module.exports = __toCommonJS(getThemeProxied_exports);
var import_constants = require("@tamagui/constants"),
  import_config = require("../config.native.js"),
  import_createVariable = require("../createVariable.native.js"),
  import_getDynamicVal = require("../helpers/getDynamicVal.native.js"),
  import_doesRootSchemeMatchSystem = require("./doesRootSchemeMatchSystem.native.js"),
  cache = /* @__PURE__ */new Map(),
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
  var config = (0, import_config.getConfig)();
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
            var outVal = (0, import_createVariable.getVariable)(value),
              {
                name,
                scheme
              } = curState,
              fastSchemeChange = (0, import_config.getSetting)("fastSchemeChange"),
              rootMatchesSystem = (0, import_doesRootSchemeMatchSystem.doesRootSchemeMatchSystem)(),
              shouldOptimize = scheme && platform !== "web" && import_constants.isIos && !curProps.deopt && !curState.isInverse && fastSchemeChange && rootMatchesSystem;
            if (process.env.NODE_ENV === "development" && curProps.debug === "verbose" && console.info(` \u{1F3A8} useTheme().get(${key}) theme=${name} scheme=${scheme}`, `
   shouldOptimize=${shouldOptimize} (iOS=${import_constants.isIos} deopt=${curProps.deopt} isInverse=${curState.isInverse} fastScheme=${fastSchemeChange} rootMatch=${rootMatchesSystem})`), shouldOptimize) {
              var _config_themes_name,
                _config_themes_oppositeName,
                oppositeScheme = scheme === "dark" ? "light" : "dark",
                oppositeName = name.replace(scheme, oppositeScheme),
                color = (0, import_createVariable.getVariable)((_config_themes_name = config.themes[name]) === null || _config_themes_name === void 0 ? void 0 : _config_themes_name[key]),
                oppositeColor = (0, import_createVariable.getVariable)((_config_themes_oppositeName = config.themes[oppositeName]) === null || _config_themes_oppositeName === void 0 ? void 0 : _config_themes_oppositeName[key]);
              process.env.NODE_ENV === "development" && curProps.debug === "verbose" && console.info(` \u{1F3A8} useTheme().get(${key}) using DynamicColorIOS`, `
   color=${color} oppositeColor=${oppositeColor}`);
              var dynamicVal = (0, import_getDynamicVal.getDynamicVal)({
                scheme,
                val: color,
                oppositeVal: oppositeColor
              });
              return track(key, !0), dynamicVal;
            }
            return process.env.NODE_ENV === "development" && curProps.debug && console.info(` \u{1F3A8} useTheme().get(${key}) tracking key (not optimizing)`, `
   platform=${platform} isIOS=${import_constants.isIos} deopt=${curProps.deopt} fastScheme=${fastSchemeChange}`), track(key, !1), outVal;
          }
        }
      };
    return [[key, proxied2], [`$${key}`, proxied2]];
  }));
  return cache.set(_state.theme, proxied1), proxied1;
}
//# sourceMappingURL=getThemeProxied.native.js.map
