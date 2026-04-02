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
var v5_fonts_exports = {};
__export(v5_fonts_exports, {
  createSystemFont: () => createSystemFont,
  fonts: () => fonts
});
module.exports = __toCommonJS(v5_fonts_exports);
var import_core = require("@tamagui/core");
const isWeb = !0,
  isNative = !1,
  webSizes = {
    1: 12,
    2: 13,
    3: 14,
    4: 15,
    true: 15,
    5: 16,
    6: 18,
    7: 22,
    8: 26,
    9: 30,
    10: 40,
    11: 46,
    12: 52,
    13: 60,
    14: 70,
    15: 85,
    16: 100
  },
  nativeSizes = {
    1: 11,
    2: 12,
    3: 15,
    4: 17,
    true: 17,
    5: 20,
    6: 22,
    7: 24,
    8: 28,
    9: 32,
    10: 40,
    11: 46,
    12: 52,
    13: 60,
    14: 70,
    15: 85,
    16: 100
  },
  defaultSizes = isNative ? nativeSizes : webSizes,
  defaultLineHeight = size => {
    if (isNative) return Math.round(size + 5);
    const ratio = 1.5 - Math.max(0, (size - 20) * 4e-3);
    return Math.round(size * ratio);
  },
  createSystemFont = ({
    font = {},
    sizeLineHeight = defaultLineHeight,
    sizeSize = size => Math.round(size)
  } = {}) => {
    const size = Object.fromEntries(Object.entries({
      ...defaultSizes,
      ...font.size
    }).map(([k, v]) => [k, sizeSize(+v)]));
    return (0, import_core.createFont)({
      family: isWeb ? '-apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif' : "System",
      lineHeight: Object.fromEntries(Object.entries(size).map(([k, v]) => [k, sizeLineHeight((0, import_core.getVariableValue)(v))])),
      weight: {
        1: "400"
      },
      letterSpacing: {
        4: 0
      },
      ...font,
      size
    });
  },
  headingLineHeight = size => Math.round(isNative ? size * 1.2 : size * 1.12 + 5),
  fonts = {
    body: createSystemFont(),
    heading: createSystemFont({
      font: {
        weight: {
          0: "600",
          6: "700",
          9: "800"
        }
      },
      sizeLineHeight: headingLineHeight
    })
  };