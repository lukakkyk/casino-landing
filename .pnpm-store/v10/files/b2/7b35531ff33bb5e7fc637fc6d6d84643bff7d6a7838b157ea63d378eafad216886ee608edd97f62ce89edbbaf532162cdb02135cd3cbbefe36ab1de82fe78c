import { getConfigMaybe, setConfig, setTokens } from "./config.mjs";
import { createVariables } from "./createVariables.mjs";
import { defaultAnimationDriver } from "./helpers/defaultAnimationDriver.mjs";
import { resolveAnimationDriver } from "./helpers/resolveAnimationDriver.mjs";
import { buildCSSRuleSets, createFontCSS, createThemeCSS, createTokenCSS, getCSS as getCSSHelper } from "./helpers/createDesignSystem.mjs";
import { scanAllSheets } from "./helpers/insertStyleRule.mjs";
import { proxyThemesToParents } from "./helpers/proxyThemeToParents.mjs";
import { ensureThemeVariable } from "./helpers/themes.mjs";
import { configureMedia } from "./hooks/useMedia.mjs";
import { parseFont, registerFontVariables } from "./insertFont.mjs";
import { Tamagui } from "./Tamagui.mjs";
function shouldTokenCategoryHaveUnits(category) {
  return (/* @__PURE__ */new Set(["size", "space", "radius"])).has(category);
}
function createTamagui(configIn) {
  const existingConfig = getConfigMaybe();
  existingConfig && (configIn = {
    ...existingConfig,
    ...configIn
  });
  const tokensParsed = {},
    tokens = createVariables(configIn.tokens || {});
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
    setTokens(tokensMerged);
  }
  let foundThemes;
  if (configIn.themes) {
    const noThemes = Object.keys(configIn.themes).length === 0;
    noThemes && !process.env.TAMAGUI_DID_OUTPUT_CSS && (foundThemes = scanAllSheets(noThemes, tokensParsed));
  }
  let fontSizeTokens = null,
    fontsParsed;
  if (configIn.fonts) {
    const fontTokens = Object.fromEntries(Object.entries(configIn.fonts).map(([k, v]) => [k, createVariables(v, "f", !0)]));
    fontsParsed = (() => {
      const res = {};
      for (const familyName in fontTokens) {
        const font = fontTokens[familyName],
          fontParsed = parseFont(font);
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
      const declarations = createTokenCSS(tokens, shouldTokenCategoryHaveUnits),
        fontDeclarations = createFontCSS(fontsParsed, registerFontVariables),
        cssRuleSets = buildCSSRuleSets(declarations, fontDeclarations),
        themesIn = configIn.themes,
        dedupedThemes = foundThemes ?? getThemesDeduped(themesIn, tokens.color);
      return {
        themes: proxyThemesToParents(dedupedThemes),
        cssRuleSets,
        getThemeRulesSets() {
          return createThemeCSS(dedupedThemes, configIn);
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
    getCSS = (opts = {}) => getCSSHelper(themeConfig, opts, lastCSSIndex),
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
    resolvedDriver = resolveAnimationDriver(inputAnimations),
    config = {
      fonts: {},
      onlyAllowShorthands: !1,
      fontLanguages: [],
      media: {},
      ...configIn,
      // normalized animations (resolved from multi-driver format if needed)
      animations: resolvedDriver ?? inputAnimations ?? defaultAnimationDriver,
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
  return setConfig(config), configureMedia(config), process.env.NODE_ENV === "development" && (process.env.DEBUG?.startsWith("tamagui") && console.info("Tamagui config:", config), globalThis.Tamagui || (globalThis.Tamagui = Tamagui)), config;
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
    for (const key2 in theme) ensureThemeVariable(theme, key2);
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
export { createTamagui };
//# sourceMappingURL=createTamagui.mjs.map
