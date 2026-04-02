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
var v5_templates_exports = {};
__export(v5_templates_exports, {
  v5Templates: () => v5Templates
});
module.exports = __toCommonJS(v5_templates_exports);
var import_theme_builder = require("@tamagui/theme-builder");
const objectFromEntries = entries => Object.fromEntries(entries),
  objectKeys = obj => Object.keys(obj),
  getTemplates = () => {
    const lightTemplates = getBaseTemplates("light"),
      darkTemplates = getBaseTemplates("dark");
    return {
      ...objectFromEntries(objectKeys(lightTemplates).map(name => [`light_${name}`, lightTemplates[name]])),
      ...objectFromEntries(objectKeys(darkTemplates).map(name => [`dark_${name}`, darkTemplates[name]]))
    };
  },
  getBaseTemplates = scheme => {
    const isLight = scheme === "light",
      lighten = isLight ? -1 : 1,
      darken = -lighten,
      background = import_theme_builder.PALETTE_BACKGROUND_OFFSET,
      borderColor = background + 2,
      color = -background,
      makeSurface = (offset, colorOffset = 0) => {
        const clr = color - colorOffset,
          bg = background + offset,
          brdr = borderColor + offset;
        return {
          color: clr,
          colorHover: clr + (isLight ? 0 : lighten),
          colorPress: clr,
          colorFocus: clr + darken,
          background: bg,
          // hover lightens always
          backgroundHover: bg + lighten,
          // press darkens always
          backgroundPress: bg + darken,
          // focus: lightens in dark mode, darkens in light
          backgroundFocus: bg + offset,
          backgroundActive: bg,
          borderColor: brdr,
          borderColorHover: brdr + lighten,
          borderColorFocus: brdr,
          borderColorPress: brdr + darken
        };
      },
      base = {
        accentBackground: 0,
        accentColor: -0,
        background0: 1,
        background02: 2,
        background04: 3,
        background06: 4,
        background08: 5,
        color1: background,
        color2: background + 1,
        color3: background + 2,
        color4: background + 3,
        color5: background + 4,
        color6: background + 5,
        color7: background + 6,
        color8: background + 7,
        color9: background + 8,
        color10: background + 9,
        color11: background + 10,
        color12: background + 11,
        color0: -1,
        color02: -2,
        color04: -3,
        color06: -4,
        color08: -5,
        // v5 = we make this actually 1 up (surface1 technically from before)
        // this way "generics" are automatically differentiated from base bg
        ...makeSurface(1),
        placeholderColor: color - 3,
        colorTransparent: -1
      },
      surface1 = makeSurface(2, 1),
      surface2 = makeSurface(3, 1),
      surface3 = makeSurface(5, 1),
      accent = Object.fromEntries(Object.entries(base).map(([key, index]) => [key, -index]));
    return {
      base,
      surface1,
      surface2,
      surface3,
      accent
    };
  },
  v5Templates = getTemplates();