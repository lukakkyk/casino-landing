import { getConfigMaybe, setConfig, setTokens } from "./config.native.js";
import { createVariables } from "./createVariables.native.js";
import { defaultAnimationDriver } from "./helpers/defaultAnimationDriver.native.js";
import { resolveAnimationDriver } from "./helpers/resolveAnimationDriver.native.js";
import { buildCSSRuleSets, createFontCSS, createThemeCSS, createTokenCSS, getCSS as getCSSHelper } from "./helpers/createDesignSystem.native.js";
import { scanAllSheets } from "./helpers/insertStyleRule.native.js";
import { proxyThemesToParents } from "./helpers/proxyThemeToParents.native.js";
import { ensureThemeVariable } from "./helpers/themes.native.js";
import { configureMedia } from "./hooks/useMedia.native.js";
import { parseFont, registerFontVariables } from "./insertFont.native.js";
import { Tamagui } from "./Tamagui.native.js";
function shouldTokenCategoryHaveUnits(category) {
  var UNIT_CATEGORIES = /* @__PURE__ */new Set(["size", "space", "radius"]);
  return UNIT_CATEGORIES.has(category);
}
function createTamagui(configIn) {
  var _configIn_settings,
    _configIn_settings1,
    existingConfig = getConfigMaybe();
  existingConfig && (configIn = {
    ...existingConfig,
    ...configIn
  });
  var tokensParsed = {},
    tokens = createVariables(configIn.tokens || {});
  if (configIn.tokens) {
    var tokensMerged = {};
    for (var cat in tokens) {
      tokensParsed[cat] = {}, tokensMerged[cat] = {};
      var tokenCat = tokens[cat];
      for (var key in tokenCat) {
        var val = tokenCat[key],
          prefixedKey = `$${key}`;
        tokensParsed[cat][prefixedKey] = val, tokensMerged[cat][prefixedKey] = val, tokensMerged[cat][key] = val;
      }
    }
    setTokens(tokensMerged);
  }
  var foundThemes;
  if (configIn.themes) {
    var noThemes = Object.keys(configIn.themes).length === 0;
    noThemes && !process.env.TAMAGUI_DID_OUTPUT_CSS && (foundThemes = scanAllSheets(noThemes, tokensParsed));
  }
  var fontSizeTokens = null,
    fontsParsed;
  if (configIn.fonts) {
    var fontTokens = Object.fromEntries(Object.entries(configIn.fonts).map(function (param) {
      var [k, v] = param;
      return [k, createVariables(v, "f", !0)];
    }));
    fontsParsed = function () {
      var res = {};
      for (var familyName in fontTokens) {
        var font = fontTokens[familyName],
          fontParsed = parseFont(font);
        res[`$${familyName}`] = fontParsed, !fontSizeTokens && fontParsed.size && (fontSizeTokens = new Set(Object.keys(fontParsed.size)));
      }
      return res;
    }();
  }
  var specificTokens = {},
    themeConfig = function () {
      var sortedTokenKeys = Object.keys(tokens).sort(),
        _iteratorNormalCompletion = !0,
        _didIteratorError = !1,
        _iteratorError = void 0;
      try {
        for (var _iterator = sortedTokenKeys[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = !0) {
          var key2 = _step.value,
            sortedSubKeys = Object.keys(tokens[key2]).sort(),
            _iteratorNormalCompletion1 = !0,
            _didIteratorError1 = !1,
            _iteratorError1 = void 0;
          try {
            for (var _iterator1 = sortedSubKeys[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = !0) {
              var skey = _step1.value,
                variable = tokens[key2][skey];
              if (specificTokens[`$${key2}.${skey}`] = variable, process.env.NODE_ENV === "development" && typeof variable > "u") throw new Error(`No value for tokens.${key2}.${skey}:
${JSON.stringify(variable, null, 2)}`);
            }
          } catch (err) {
            _didIteratorError1 = !0, _iteratorError1 = err;
          } finally {
            try {
              !_iteratorNormalCompletion1 && _iterator1.return != null && _iterator1.return();
            } finally {
              if (_didIteratorError1) throw _iteratorError1;
            }
          }
        }
      } catch (err) {
        _didIteratorError = !0, _iteratorError = err;
      } finally {
        try {
          !_iteratorNormalCompletion && _iterator.return != null && _iterator.return();
        } finally {
          if (_didIteratorError) throw _iteratorError;
        }
      }
      var declarations = createTokenCSS(tokens, shouldTokenCategoryHaveUnits),
        fontDeclarations = createFontCSS(fontsParsed, registerFontVariables),
        cssRuleSets = buildCSSRuleSets(declarations, fontDeclarations),
        themesIn = configIn.themes,
        dedupedThemes = foundThemes ?? getThemesDeduped(themesIn, tokens.color),
        themes = proxyThemesToParents(dedupedThemes);
      return {
        themes,
        cssRuleSets,
        getThemeRulesSets() {
          return createThemeCSS(dedupedThemes, configIn);
        }
      };
    }(),
    userShorthands = configIn.shorthands || {},
    shorthands = {
      ...builtinShorthands,
      ...userShorthands
    },
    lastCSSIndex = {
      value: -1
    },
    getCSS = function () {
      var opts = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      return getCSSHelper(themeConfig, opts, lastCSSIndex);
    },
    getNewCSS = function (opts) {
      return getCSS({
        ...opts,
        sinceLastCall: !0
      });
    },
    defaultFontSetting = (_configIn_settings = configIn.settings) === null || _configIn_settings === void 0 ? void 0 : _configIn_settings.defaultFont,
    defaultFont = function () {
      var val2 = defaultFontSetting;
      return val2?.[0] === "$" && (val2 = val2.slice(1)), val2;
    }(),
    defaultPositionSetting = ((_configIn_settings1 = configIn.settings) === null || _configIn_settings1 === void 0 ? void 0 : _configIn_settings1.defaultPosition) || "static",
    defaultProps = configIn.defaultProps || {},
    defaultFontToken = defaultFont ? `$${defaultFont}` : "",
    inputAnimations = configIn.animations,
    resolvedDriver = resolveAnimationDriver(inputAnimations),
    isMultiDriver = resolvedDriver !== null && resolvedDriver !== inputAnimations,
    resolvedAnimations = resolvedDriver ?? inputAnimations,
    animationDrivers = isMultiDriver ? inputAnimations : void 0,
    config = {
      fonts: {},
      onlyAllowShorthands: !1,
      fontLanguages: [],
      media: {},
      ...configIn,
      // normalized animations (resolved from multi-driver format if needed)
      animations: resolvedAnimations ?? defaultAnimationDriver,
      animationDrivers,
      defaultProps,
      settings: {
        webContainerType: "inline-size",
        ...configIn.settings
      },
      tokens,
      // vite made this into a function if it wasn't set
      shorthands,
      userShorthands,
      inverseShorthands: shorthands ? Object.fromEntries(Object.entries(shorthands).map(function (param) {
        var [k, v] = param;
        return [v, k];
      })) : {},
      themes: themeConfig.themes,
      fontsParsed: fontsParsed || {},
      themeConfig,
      tokensParsed,
      parsed: !0,
      getNewCSS,
      getCSS,
      defaultFont,
      fontSizeTokens: fontSizeTokens || /* @__PURE__ */new Set(),
      specificTokens,
      defaultFontToken
    };
  if (setConfig(config), configureMedia(config), process.env.NODE_ENV === "development") {
    var _process_env_DEBUG;
    !((_process_env_DEBUG = process.env.DEBUG) === null || _process_env_DEBUG === void 0) && _process_env_DEBUG.startsWith("tamagui") && console.info("Tamagui config:", config), globalThis.Tamagui || (globalThis.Tamagui = Tamagui);
  }
  return config;
}
function getThemesDeduped(themes, colorTokens) {
  var dedupedThemes = [],
    existing = /* @__PURE__ */new Map(),
    sortedThemeNames = Object.keys(themes).sort(),
    _iteratorNormalCompletion = !0,
    _didIteratorError = !1,
    _iteratorError = void 0;
  try {
    for (var _iterator = sortedThemeNames[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = !0) {
      var themeName = _step.value,
        darkOrLightSpecificPrefix = themeName.startsWith("dark") ? "dark" : themeName.startsWith("light") ? "light" : "",
        rawTheme = themes[themeName],
        key = darkOrLightSpecificPrefix + JSON.stringify(rawTheme);
      if (existing.has(key)) {
        var e = existing.get(key);
        e.names.push(themeName);
        continue;
      }
      var theme = {
        ...colorTokens,
        ...rawTheme
      };
      for (var key1 in theme) ensureThemeVariable(theme, key1);
      var deduped = {
        names: [themeName],
        theme
      };
      dedupedThemes.push(deduped), existing.set(key, deduped);
    }
  } catch (err) {
    _didIteratorError = !0, _iteratorError = err;
  } finally {
    try {
      !_iteratorNormalCompletion && _iterator.return != null && _iterator.return();
    } finally {
      if (_didIteratorError) throw _iteratorError;
    }
  }
  return dedupedThemes;
}
var builtinShorthands = {
  bblr: "borderBottomLeftRadius",
  bbrr: "borderBottomRightRadius",
  bbs: "borderBottomStyle",
  bls: "borderLeftStyle",
  brc: "borderRightColor",
  brs: "borderRightStyle",
  brw: "borderRightWidth",
  bs: "borderStyle",
  btc: "borderTopColor",
  btlr: "borderTopLeftRadius",
  btrr: "borderTopRightRadius",
  bts: "borderTopStyle",
  btw: "borderTopWidth",
  bw: "borderWidth",
  bxs: "boxSizing",
  bxsh: "boxShadow",
  col: "color",
  cur: "cursor",
  dsp: "display",
  fb: "flexBasis",
  fd: "flexDirection",
  ff: "fontFamily",
  fs: "fontSize",
  fst: "fontStyle",
  fw: "fontWeight",
  fwr: "flexWrap",
  // height: 'h',
  lh: "lineHeight",
  ls: "letterSpacing",
  o: "opacity",
  ov: "overflow",
  ox: "overflowX",
  oy: "overflowY",
  pe: "pointerEvents",
  pos: "position",
  td: "textDecorationLine",
  tr: "transform",
  tt: "textTransform",
  va: "verticalAlign",
  wb: "wordBreak",
  // width: 'w',
  ws: "whiteSpace",
  ww: "wordWrap"
};
export { createTamagui };
//# sourceMappingURL=createTamagui.native.js.map
