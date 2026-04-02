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
var v5_themes_exports = {};
__export(v5_themes_exports, {
  V5_BG_OFFSET: () => V5_BG_OFFSET,
  adjustPalette: () => adjustPalette,
  adjustPalettes: () => adjustPalettes,
  createV5Theme: () => createV5Theme,
  defaultChildrenThemes: () => defaultChildrenThemes,
  defaultDarkPalette: () => darkPalette,
  defaultLightPalette: () => lightPalette,
  hslToString: () => hslToString,
  interpolateColor: () => import_opacify2.interpolateColor,
  opacify: () => import_opacify2.opacify,
  parseColor: () => parseColor,
  parseHSL: () => parseHSL,
  parseHex: () => parseHex,
  themes: () => themes,
  v5ComponentThemes: () => v5ComponentThemes,
  v5ComponentThemesWithInverses: () => v5ComponentThemesWithInverses,
  v5GrandchildrenThemes: () => v5GrandchildrenThemes
});
module.exports = __toCommonJS(v5_themes_exports);
var import_colors = require("@tamagui/colors"),
  import_theme_builder = require("@tamagui/theme-builder"),
  import_opacify = require("./opacify.native.js"),
  import_v5_templates = require("./v5-templates.native.js"),
  import_opacify2 = require("./opacify.native.js"),
  V5_BG_OFFSET = 7,
  v5ComponentThemes = {
    Button: {
      template: "surface2"
    },
    Input: {
      template: "surface1"
    },
    Progress: {
      template: "surface1"
    },
    ProgressIndicator: {
      template: "surface3"
    },
    Slider: {
      template: "surface1"
    },
    SliderActive: {
      template: "surface3"
    },
    SliderThumb: {
      template: "surface2"
    },
    Switch: {
      template: "surface2"
    },
    TextArea: {
      template: "surface1"
    },
    Tooltip: {
      template: "accent"
    },
    SwitchThumb: {
      template: "accent"
    }
  },
  v5ComponentThemesWithInverses = {
    ...v5ComponentThemes,
    ProgressIndicator: {
      template: "accent"
    },
    SliderThumb: {
      template: "accent"
    },
    Tooltip: {
      template: "accent"
    }
  },
  v5GrandchildrenThemes = {
    accent: {
      template: "accent"
    },
    surface1: {
      template: "surface1"
    },
    surface2: {
      template: "surface2"
    }
  };
function parseHSL(str) {
  var m = str.match(/hsl\((\d+(?:\.\d+)?),\s*(\d+(?:\.\d+)?)%,\s*(\d+(?:\.\d+)?)%\)/);
  return m ? {
    h: +m[1],
    s: +m[2],
    l: +m[3]
  } : null;
}
function parseHex(str) {
  if (!str.startsWith("#")) return null;
  var hex = str.slice(1);
  if (hex.length === 3 && (hex = hex.split("").map(function (c) {
    return c + c;
  }).join("")), hex.length !== 6) return null;
  var r = Number.parseInt(hex.slice(0, 2), 16) / 255,
    g = Number.parseInt(hex.slice(2, 4), 16) / 255,
    b = Number.parseInt(hex.slice(4, 6), 16) / 255,
    max = Math.max(r, g, b),
    min = Math.min(r, g, b),
    l = (max + min) / 2;
  if (max === min) return {
    h: 0,
    s: 0,
    l: l * 100
  };
  var d = max - min,
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min),
    h = 0;
  return max === r ? h = ((g - b) / d + (g < b ? 6 : 0)) / 6 : max === g ? h = ((b - r) / d + 2) / 6 : h = ((r - g) / d + 4) / 6, {
    h: Math.round(h * 360),
    s: s * 100,
    l: l * 100
  };
}
function parseColor(str) {
  var _parseHSL;
  return (_parseHSL = parseHSL(str)) !== null && _parseHSL !== void 0 ? _parseHSL : parseHex(str);
}
function hslToString(hsl) {
  return `hsl(${hsl.h}, ${Math.round(Math.min(100, Math.max(0, hsl.s)))}%, ${Math.round(Math.min(100, Math.max(0, hsl.l)))}%)`;
}
function adjustPalette(palette, fn) {
  for (var out = {}, keys = Object.keys(palette), i = 0; i < keys.length; i++) {
    var key = keys[i],
      parsed = parseColor(palette[key]);
    if (!parsed) {
      out[key] = palette[key];
      continue;
    }
    out[key] = hslToString(fn(parsed, i + 1));
  }
  return out;
}
var identity = function (hsl) {
  return hsl;
};
function adjustPalettes(themes2, adjustments) {
  var result = {},
    _iteratorNormalCompletion = !0,
    _didIteratorError = !1,
    _iteratorError = void 0;
  try {
    for (var _iterator = Object.entries(themes2)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = !0) {
      var [name, theme] = _step.value,
        _adjustments_name,
        adj = (_adjustments_name = adjustments[name]) !== null && _adjustments_name !== void 0 ? _adjustments_name : adjustments.default;
      if (!adj) {
        result[name] = theme;
        continue;
      }
      var _adj_light, _adj_dark;
      result[name] = {
        light: adjustPalette(theme.light, (_adj_light = adj.light) !== null && _adj_light !== void 0 ? _adj_light : identity),
        dark: adjustPalette(theme.dark, (_adj_dark = adj.dark) !== null && _adj_dark !== void 0 ? _adj_dark : identity)
      };
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
  return result;
}
function paletteToNamedColors(name, palette) {
  return Object.fromEntries(palette.map(function (color, i) {
    return [`${name}${i + 1}`, color];
  }));
}
var darkPalette = ["#090909", "#151515", "#191919", "#232323", "#333", "#444", "#666", "#777", "#858585", "#aaa", "#ccc", "#ffffff"],
  lightPalette = ["#fff", "#f8f8f8", "hsl(0, 0%, 93%)", "hsl(0, 0%, 85%)", "hsl(0, 0%, 80%)", "hsl(0, 0%, 70%)", "hsl(0, 0%, 59%)", "hsl(0, 0%, 45%)", "hsl(0, 0%, 30%)", "hsl(0, 0%, 20%)", "hsl(0, 0%, 14%)", "hsl(0, 0%, 2%)"],
  neutralPalette = ["hsl(0, 0%, 68%)", "hsl(0, 0%, 65%)", "hsl(0, 0%, 62%)", "hsl(0, 0%, 59%)", "hsl(0, 0%, 56%)", "hsl(0, 0%, 53%)", "hsl(0, 0%, 50%)", "hsl(0, 0%, 47%)", "hsl(0, 0%, 44%)", "hsl(0, 0%, 41%)", "hsl(0, 0%, 38%)", "hsl(0, 0%, 32%)"],
  neutral = paletteToNamedColors("neutral", neutralPalette),
  whiteBlack = {
    white: "rgba(255,255,255,1)",
    white0: "rgba(255,255,255,0)",
    white02: "rgba(255,255,255,0.2)",
    white04: "rgba(255,255,255,0.4)",
    white06: "rgba(255,255,255,0.6)",
    white08: "rgba(255,255,255,0.8)",
    black: "rgba(0,0,0,1)",
    black0: "rgba(0,0,0,0)",
    black02: "rgba(0,0,0,0.2)",
    black04: "rgba(0,0,0,0.4)",
    black06: "rgba(0,0,0,0.6)",
    black08: "rgba(0,0,0,0.8)"
  },
  darkShadows = {
    shadow1: "rgba(0,0,0,0.15)",
    shadow2: "rgba(0,0,0,0.23)",
    shadow3: "rgba(0,0,0,0.33)",
    shadow4: "rgba(0,0,0,0.45)",
    shadow5: "rgba(0,0,0,0.65)",
    shadow6: "rgba(0,0,0,0.8)",
    shadow7: "rgba(0,0,0,0.9)",
    shadow8: "rgba(0,0,0,1)"
  },
  lightShadows = {
    shadow1: "rgba(0,0,0,0.04)",
    shadow2: "rgba(0,0,0,0.08)",
    shadow3: "rgba(0,0,0,0.12)",
    shadow4: "rgba(0,0,0,0.22)",
    shadow5: "rgba(0,0,0,0.33)",
    shadow6: "rgba(0,0,0,0.44)",
    shadow7: "rgba(0,0,0,0.6)",
    shadow8: "rgba(0,0,0,0.75)"
  },
  darkHighlights = {
    highlight1: "rgba(255,255,255,0.1)",
    highlight2: "rgba(255,255,255,0.2)",
    highlight3: "rgba(255,255,255,0.3)",
    highlight4: "rgba(255,255,255,0.45)",
    highlight5: "rgba(255,255,255,0.65)",
    highlight6: "rgba(255,255,255,0.85)",
    highlight7: "rgba(255,255,255,0.95)",
    highlight8: "rgba(255,255,255,1)"
  },
  lightHighlights = {
    highlight1: "rgba(255,255,255,0.05)",
    highlight2: "rgba(255,255,255,0.1)",
    highlight3: "rgba(255,255,255,0.15)",
    highlight4: "rgba(255,255,255,0.3)",
    highlight5: "rgba(255,255,255,0.4)",
    highlight6: "rgba(255,255,255,0.55)",
    highlight7: "rgba(255,255,255,0.7)",
    highlight8: "rgba(255,255,255,0.85)"
  };
var defaultChildrenThemes = {
  gray: {
    light: import_colors.gray,
    dark: import_colors.grayDark
  },
  blue: {
    light: import_colors.blue,
    dark: import_colors.blueDark
  },
  red: {
    light: import_colors.red,
    dark: import_colors.redDark
  },
  yellow: {
    light: import_colors.yellow,
    dark: import_colors.yellowDark
  },
  green: {
    light: import_colors.green,
    dark: import_colors.greenDark
  },
  orange: {
    light: import_colors.orange,
    dark: import_colors.orangeDark
  },
  pink: {
    light: import_colors.pink,
    dark: import_colors.pinkDark
  },
  purple: {
    light: import_colors.purple,
    dark: import_colors.purpleDark
  },
  teal: {
    light: import_colors.teal,
    dark: import_colors.tealDark
  },
  neutral: {
    light: neutral,
    dark: neutral
  }
};
function getDefaultV5ThemeValues(param) {
  var {
    palette
  } = param;
  if (!palette || palette.length < 3) throw new Error(`invalid palette: ${JSON.stringify(palette)}`);
  var bgColor = palette[V5_BG_OFFSET],
    fgColor = palette[palette.length - 2];
  return {
    color01: (0, import_opacify.opacify)(fgColor, 0.1),
    color0075: (0, import_opacify.opacify)(fgColor, 0.075),
    color005: (0, import_opacify.opacify)(fgColor, 0.05),
    color0025: (0, import_opacify.opacify)(fgColor, 0.025),
    color002: (0, import_opacify.opacify)(fgColor, 0.02),
    color001: (0, import_opacify.opacify)(fgColor, 0.01),
    background01: (0, import_opacify.opacify)(bgColor, 0.1),
    background0075: (0, import_opacify.opacify)(bgColor, 0.075),
    background005: (0, import_opacify.opacify)(bgColor, 0.05),
    background0025: (0, import_opacify.opacify)(bgColor, 0.025),
    background002: (0, import_opacify.opacify)(bgColor, 0.02),
    background001: (0, import_opacify.opacify)(bgColor, 0.01),
    background02: (0, import_opacify.opacify)(bgColor, 0.2),
    background04: (0, import_opacify.opacify)(bgColor, 0.4),
    background06: (0, import_opacify.opacify)(bgColor, 0.6),
    background08: (0, import_opacify.opacify)(bgColor, 0.8),
    outlineColor: (0, import_opacify.opacify)(palette[V5_BG_OFFSET + 4], 0.6)
  };
}
function createV5Theme() {
  var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
    {
      darkPalette: customDarkPalette = darkPalette,
      lightPalette: customLightPalette = lightPalette,
      accent: customAccent,
      childrenThemes = defaultChildrenThemes,
      grandChildrenThemes = v5GrandchildrenThemes,
      componentThemes: customComponentThemes = v5ComponentThemes,
      getTheme: userGetTheme
    } = options,
    blackColors = paletteToNamedColors("black", customDarkPalette),
    whiteColors = paletteToNamedColors("white", customLightPalette),
    extraBase = {
      ...blackColors,
      ...whiteColors,
      ...whiteBlack
    },
    lightExtraBase = {
      ...extraBase,
      ...lightShadows,
      ...lightHighlights,
      shadowColor: lightShadows.shadow3
    },
    darkExtraBase = {
      ...extraBase,
      ...darkShadows,
      ...darkHighlights,
      shadowColor: darkShadows.shadow3
    },
    lightExtra = {
      ...lightExtraBase
    },
    darkExtra = {
      ...darkExtraBase
    },
    _iteratorNormalCompletion = !0,
    _didIteratorError = !1,
    _iteratorError = void 0;
  try {
    for (var _iterator = Object.values(childrenThemes)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = !0) {
      var theme = _step.value;
      theme.light && Object.assign(lightExtra, theme.light), theme.dark && Object.assign(darkExtra, theme.dark);
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
  var childrenWithPalettes = {
    // Always include black/white for theme generation
    black: {
      palette: {
        dark: Object.values(blackColors),
        light: Object.values(blackColors)
      }
    },
    white: {
      palette: {
        dark: Object.values(whiteColors),
        light: Object.values(whiteColors)
      }
    },
    ...Object.fromEntries(Object.entries(childrenThemes).map(function (param) {
      var [name, theme2] = param;
      return [name, {
        palette: {
          light: Object.values(theme2.light),
          dark: Object.values(theme2.dark)
        }
      }];
    }))
  };
  return (0, import_theme_builder.createThemes)({
    // componentThemes: false disables them, undefined/truthy values enable them
    componentThemes: customComponentThemes,
    templates: import_v5_templates.v5Templates,
    base: {
      palette: {
        dark: customDarkPalette,
        light: customLightPalette
      },
      extra: {
        light: lightExtra,
        dark: darkExtra
      }
    },
    accent: {
      palette: customAccent ? {
        light: Object.values(customAccent.light),
        dark: Object.values(customAccent.dark)
      } : {
        dark: customLightPalette,
        light: customDarkPalette
      }
    },
    childrenThemes: childrenWithPalettes,
    grandChildrenThemes,
    getTheme: function (props) {
      var builtInTheme = getDefaultV5ThemeValues(props),
        customTheme = userGetTheme?.(props);
      return customTheme ? {
        ...builtInTheme,
        ...customTheme
      } : builtInTheme;
    }
  });
}
var themes = createV5Theme();
themes.dark.background0075;
themes.dark_yellow.background0075;
themes.dark.background;
themes.dark.accent1;
themes.dark.nonValid;
//# sourceMappingURL=v5-themes.native.js.map
