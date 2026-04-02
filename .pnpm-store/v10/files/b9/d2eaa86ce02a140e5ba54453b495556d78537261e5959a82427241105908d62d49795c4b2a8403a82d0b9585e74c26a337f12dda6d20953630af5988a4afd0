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
var createTamagui_exports = {};
__export(createTamagui_exports, {
  createTamagui: () => createTamagui
});
module.exports = __toCommonJS(createTamagui_exports);
var import_config = require("./config.cjs"),
  import_createVariables = require("./createVariables.cjs"),
  import_defaultAnimationDriver = require("./helpers/defaultAnimationDriver.cjs"),
  import_resolveAnimationDriver = require("./helpers/resolveAnimationDriver.cjs"),
  import_createDesignSystem = require("./helpers/createDesignSystem.cjs"),
  import_insertStyleRule = require("./helpers/insertStyleRule.cjs"),
  import_proxyThemeToParents = require("./helpers/proxyThemeToParents.cjs"),
  import_themes = require("./helpers/themes.cjs"),
  import_useMedia = require("./hooks/useMedia.cjs"),
  import_insertFont = require("./insertFont.cjs"),
  import_Tamagui = require("./Tamagui.cjs");
function shouldTokenCategoryHaveUnits(category) {
  return (/* @__PURE__ */new Set(["size", "space", "radius"])).has(category);
}
function createTamagui(configIn) {
  const existingConfig = (0, import_config.getConfigMaybe)();
  existingConfig && (configIn = {
    ...existingConfig,
    ...configIn
  });
  const tokensParsed = {},
    tokens = (0, import_createVariables.createVariables)(configIn.tokens || {});
  if (configIn.tokens) {
    const tokensMerged = {};
    for (const cat in tokens) {
      tokensParsed[cat] = {}, tokensMerged[cat] = {};
      const tokenCat = tokens[cat];
      for (const key in tokenCat) {
        const val = tokenCat[key],
          prefixedKey = `$${key}`;
        tokensParsed[cat][prefixedKey] = val, tokensMerged[cat][prefixedKey] = val, tokensMerged[cat][key] = val;
      }
    }
    (0, import_config.setTokens)(tokensMerged);
  }
  let foundThemes;
  if (configIn.themes) {
    const noThemes = Object.keys(configIn.themes).length === 0;
    noThemes && !process.env.TAMAGUI_DID_OUTPUT_CSS && (foundThemes = (0, import_insertStyleRule.scanAllSheets)(noThemes, tokensParsed));
  }
  let fontSizeTokens = null,
    fontsParsed;
  if (configIn.fonts) {
    const fontTokens = Object.fromEntries(Object.entries(configIn.fonts).map(([k, v]) => [k, (0, import_createVariables.createVariables)(v, "f", !0)]));
    fontsParsed = (() => {
      const res = {};
      for (const familyName in fontTokens) {
        const font = fontTokens[familyName],
          fontParsed = (0, import_insertFont.parseFont)(font);
        res[`$${familyName}`] = fontParsed, !fontSizeTokens && fontParsed.size && (fontSizeTokens = new Set(Object.keys(fontParsed.size)));
      }
      return res;
    })();
  }
  const specificTokens = {},
    themeConfig = (() => {
      const sortedTokenKeys = Object.keys(tokens).sort();
      for (const key of sortedTokenKeys) {
        const sortedSubKeys = Object.keys(tokens[key]).sort();
        for (const skey of sortedSubKeys) {
          const variable = tokens[key][skey];
          if (specificTokens[`$${key}.${skey}`] = variable, process.env.NODE_ENV === "development" && typeof variable > "u") throw new Error(`No value for tokens.${key}.${skey}:
${JSON.stringify(variable, null, 2)}`);
        }
      }
      const declarations = (0, import_createDesignSystem.createTokenCSS)(tokens, shouldTokenCategoryHaveUnits),
        fontDeclarations = (0, import_createDesignSystem.createFontCSS)(fontsParsed, import_insertFont.registerFontVariables),
        cssRuleSets = (0, import_createDesignSystem.buildCSSRuleSets)(declarations, fontDeclarations),
        themesIn = configIn.themes,
        dedupedThemes = foundThemes ?? getThemesDeduped(themesIn, tokens.color);
      return {
        themes: (0, import_proxyThemeToParents.proxyThemesToParents)(dedupedThemes),
        cssRuleSets,
        getThemeRulesSets() {
          return (0, import_createDesignSystem.createThemeCSS)(dedupedThemes, configIn);
        }
      };
    })(),
    userShorthands = configIn.shorthands || {},
    shorthands = {
      ...builtinShorthands,
      ...userShorthands
    },
    lastCSSIndex = {
      value: -1
    },
    getCSS = (opts = {}) => (0, import_createDesignSystem.getCSS)(themeConfig, opts, lastCSSIndex),
    getNewCSS = opts => getCSS({
      ...opts,
      sinceLastCall: !0
    }),
    defaultFontSetting = configIn.settings?.defaultFont,
    defaultFont = (() => {
      let val = defaultFontSetting;
      return val?.[0] === "$" && (val = val.slice(1)), val;
    })(),
    defaultPositionSetting = configIn.settings?.defaultPosition || "static",
    defaultProps = configIn.defaultProps || {};
  defaultPositionSetting !== "static" && (defaultProps.View = {
    ...defaultProps.View,
    position: defaultPositionSetting
  });
  const defaultFontToken = defaultFont ? `$${defaultFont}` : "",
    inputAnimations = configIn.animations,
    resolvedDriver = (0, import_resolveAnimationDriver.resolveAnimationDriver)(inputAnimations),
    config = {
      fonts: {},
      onlyAllowShorthands: !1,
      fontLanguages: [],
      media: {},
      ...configIn,
      // normalized animations (resolved from multi-driver format if needed)
      animations: resolvedDriver ?? inputAnimations ?? import_defaultAnimationDriver.defaultAnimationDriver,
      animationDrivers: resolvedDriver !== null && resolvedDriver !== inputAnimations ? inputAnimations : void 0,
      defaultProps,
      settings: {
        webContainerType: "inline-size",
        ...configIn.settings
      },
      tokens,
      // vite made this into a function if it wasn't set
      shorthands,
      userShorthands,
      inverseShorthands: shorthands ? Object.fromEntries(Object.entries(shorthands).map(([k, v]) => [v, k])) : {},
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
      // const tokens = [...getToken(tokens.size[0])]
      // .spacer-sm + ._dsp_contents._dsp-sm-hidden { margin-left: -var(--${}) }
    };
  return (0, import_config.setConfig)(config), (0, import_useMedia.configureMedia)(config), process.env.NODE_ENV === "development" && (process.env.DEBUG?.startsWith("tamagui") && console.info("Tamagui config:", config), globalThis.Tamagui || (globalThis.Tamagui = import_Tamagui.Tamagui)), config;
}
function getThemesDeduped(themes, colorTokens) {
  const dedupedThemes = [],
    existing = /* @__PURE__ */new Map(),
    sortedThemeNames = Object.keys(themes).sort();
  for (const themeName of sortedThemeNames) {
    const darkOrLightSpecificPrefix = themeName.startsWith("dark") ? "dark" : themeName.startsWith("light") ? "light" : "",
      rawTheme = themes[themeName],
      key = darkOrLightSpecificPrefix + JSON.stringify(rawTheme);
    if (existing.has(key)) {
      existing.get(key).names.push(themeName);
      continue;
    }
    const theme = {
      ...colorTokens,
      ...rawTheme
    };
    for (const key2 in theme) (0, import_themes.ensureThemeVariable)(theme, key2);
    const deduped = {
      names: [themeName],
      theme
    };
    dedupedThemes.push(deduped), existing.set(key, deduped);
  }
  return dedupedThemes;
}
const builtinShorthands = {
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