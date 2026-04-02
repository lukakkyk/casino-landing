import { createFont, getVariableValue } from "@tamagui/core";
var isWeb = !1,
  isNative = !0,
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
  defaultLineHeight = function (size) {
    if (isNative) return Math.round(size + 5);
    var ratio = 1.5 - Math.max(0, (size - 20) * 4e-3);
    return Math.round(size * ratio);
  },
  createSystemFont = function () {
    var {
        font = {},
        sizeLineHeight = defaultLineHeight,
        sizeSize = function (size2) {
          return Math.round(size2);
        }
      } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      size = Object.fromEntries(Object.entries({
        ...defaultSizes,
        ...font.size
      }).map(function (param) {
        var [k, v] = param;
        return [k, sizeSize(+v)];
      }));
    return createFont({
      family: isWeb ? '-apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif' : "System",
      lineHeight: Object.fromEntries(Object.entries(size).map(function (param) {
        var [k, v] = param;
        return [k, sizeLineHeight(getVariableValue(v))];
      })),
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
  headingLineHeight = function (size) {
    return Math.round(isNative ? size * 1.2 : size * 1.12 + 5);
  },
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
export { createSystemFont, fonts };
//# sourceMappingURL=v5-fonts.native.js.map
