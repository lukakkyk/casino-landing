import { blue, blueDark, gray, grayDark, green, greenDark, orange, orangeDark, pink, pinkDark, purple, purpleDark, red, redDark, teal, tealDark, yellow, yellowDark } from "@tamagui/colors";
import { createThemes } from "@tamagui/theme-builder";
import { opacify } from "./opacify.mjs";
import { v5Templates } from "./v5-templates.mjs";
import { interpolateColor, opacify as opacify2 } from "./opacify.mjs";
const V5_BG_OFFSET = 7,
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
  const m = str.match(/hsl\((\d+(?:\.\d+)?),\s*(\d+(?:\.\d+)?)%,\s*(\d+(?:\.\d+)?)%\)/);
  return m ? {
    h: +m[1],
    s: +m[2],
    l: +m[3]
  } : null;
}
function parseHex(str) {
  if (!str.startsWith("#")) return null;
  let hex = str.slice(1);
  if (hex.length === 3 && (hex = hex.split("").map(c => c + c).join("")), hex.length !== 6) return null;
  const r = Number.parseInt(hex.slice(0, 2), 16) / 255,
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
  const d = max - min,
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
  let h = 0;
  return max === r ? h = ((g - b) / d + (g < b ? 6 : 0)) / 6 : max === g ? h = ((b - r) / d + 2) / 6 : h = ((r - g) / d + 4) / 6, {
    h: Math.round(h * 360),
    s: s * 100,
    l: l * 100
  };
}
function parseColor(str) {
  return parseHSL(str) ?? parseHex(str);
}
function hslToString(hsl) {
  return `hsl(${hsl.h}, ${Math.round(Math.min(100, Math.max(0, hsl.s)))}%, ${Math.round(Math.min(100, Math.max(0, hsl.l)))}%)`;
}
function adjustPalette(palette, fn) {
  const out = {},
    keys = Object.keys(palette);
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i],
      parsed = parseColor(palette[key]);
    if (!parsed) {
      out[key] = palette[key];
      continue;
    }
    out[key] = hslToString(fn(parsed, i + 1));
  }
  return out;
}
const identity = hsl => hsl;
function adjustPalettes(themes2, adjustments) {
  const result = {};
  for (const [name, theme] of Object.entries(themes2)) {
    const adj = adjustments[name] ?? adjustments.default;
    if (!adj) {
      result[name] = theme;
      continue;
    }
    result[name] = {
      light: adjustPalette(theme.light, adj.light ?? identity),
      dark: adjustPalette(theme.dark, adj.dark ?? identity)
    };
  }
  return result;
}
function paletteToNamedColors(name, palette) {
  return Object.fromEntries(palette.map((color, i) => [`${name}${i + 1}`, color]));
}
const darkPalette = ["#090909", "#151515", "#191919", "#232323", "#333", "#444", "#666", "#777", "#858585", "#aaa", "#ccc", "#ffffff"],
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
const defaultChildrenThemes = {
  gray: {
    light: gray,
    dark: grayDark
  },
  blue: {
    light: blue,
    dark: blueDark
  },
  red: {
    light: red,
    dark: redDark
  },
  yellow: {
    light: yellow,
    dark: yellowDark
  },
  green: {
    light: green,
    dark: greenDark
  },
  orange: {
    light: orange,
    dark: orangeDark
  },
  pink: {
    light: pink,
    dark: pinkDark
  },
  purple: {
    light: purple,
    dark: purpleDark
  },
  teal: {
    light: teal,
    dark: tealDark
  },
  neutral: {
    light: neutral,
    dark: neutral
  }
};
function getDefaultV5ThemeValues({
  palette
}) {
  if (!palette || palette.length < 3) throw new Error(`invalid palette: ${JSON.stringify(palette)}`);
  const bgColor = palette[V5_BG_OFFSET],
    fgColor = palette[palette.length - 2];
  return {
    color01: opacify(fgColor, 0.1),
    color0075: opacify(fgColor, 0.075),
    color005: opacify(fgColor, 0.05),
    color0025: opacify(fgColor, 0.025),
    color002: opacify(fgColor, 0.02),
    color001: opacify(fgColor, 0.01),
    background01: opacify(bgColor, 0.1),
    background0075: opacify(bgColor, 0.075),
    background005: opacify(bgColor, 0.05),
    background0025: opacify(bgColor, 0.025),
    background002: opacify(bgColor, 0.02),
    background001: opacify(bgColor, 0.01),
    background02: opacify(bgColor, 0.2),
    background04: opacify(bgColor, 0.4),
    background06: opacify(bgColor, 0.6),
    background08: opacify(bgColor, 0.8),
    outlineColor: opacify(palette[V5_BG_OFFSET + 4], 0.6)
  };
}
function createV5Theme(options = {}) {
  const {
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
    };
  for (const theme of Object.values(childrenThemes)) theme.light && Object.assign(lightExtra, theme.light), theme.dark && Object.assign(darkExtra, theme.dark);
  const childrenWithPalettes = {
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
    ...Object.fromEntries(Object.entries(childrenThemes).map(([name, theme]) => [name, {
      palette: {
        light: Object.values(theme.light),
        dark: Object.values(theme.dark)
      }
    }]))
  };
  return createThemes({
    // componentThemes: false disables them, undefined/truthy values enable them
    componentThemes: customComponentThemes,
    templates: v5Templates,
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
    getTheme: props => {
      const builtInTheme = getDefaultV5ThemeValues(props),
        customTheme = userGetTheme?.(props);
      return customTheme ? {
        ...builtInTheme,
        ...customTheme
      } : builtInTheme;
    }
  });
}
const themes = createV5Theme();
themes.dark.background0075;
themes.dark_yellow.background0075;
themes.dark.background;
themes.dark.accent1;
themes.dark.nonValid;
export { V5_BG_OFFSET, adjustPalette, adjustPalettes, createV5Theme, defaultChildrenThemes, darkPalette as defaultDarkPalette, lightPalette as defaultLightPalette, hslToString, interpolateColor, opacify2 as opacify, parseColor, parseHSL, parseHex, themes, v5ComponentThemes, v5ComponentThemesWithInverses, v5GrandchildrenThemes };
//# sourceMappingURL=v5-themes.mjs.map
