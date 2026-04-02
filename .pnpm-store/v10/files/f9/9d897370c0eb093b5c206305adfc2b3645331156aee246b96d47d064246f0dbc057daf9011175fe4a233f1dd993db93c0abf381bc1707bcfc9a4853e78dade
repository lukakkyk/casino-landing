import { normalizeCSSColor, rgba } from "@tamagui/normalize-css-color";
import { rgba as rgba2 } from "@tamagui/normalize-css-color";
var normalizeColor = function (color, opacity) {
    if (color) {
      if (typeof color != "string" || color[0] === "$") return color;
      var rgbaVal = getRgba(color);
      if (rgbaVal) {
        var colors = `${rgbaVal.r},${rgbaVal.g},${rgbaVal.b}`,
          _ref;
        return opacity === 1 ? `rgb(${colors})` : `rgba(${colors},${(_ref = opacity ?? rgbaVal.a) !== null && _ref !== void 0 ? _ref : 1})`;
      }
      return color;
    }
  },
  getRgba = function (color) {
    if (typeof color == "string") {
      var colorNum = normalizeCSSColor(color);
      if (colorNum != null) return rgba(colorNum);
    }
  };
export { getRgba, normalizeColor, rgba2 as rgba };
//# sourceMappingURL=normalizeColor.native.js.map
