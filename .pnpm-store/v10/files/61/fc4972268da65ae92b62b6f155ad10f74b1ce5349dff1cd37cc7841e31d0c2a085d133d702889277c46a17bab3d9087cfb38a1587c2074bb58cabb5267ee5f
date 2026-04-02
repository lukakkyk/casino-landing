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
var normalizeColor_native_exports = {};
__export(normalizeColor_native_exports, {
  getRgba: () => getRgba,
  normalizeColor: () => normalizeColor,
  rgba: () => import_normalize_css_color2.rgba
});
module.exports = __toCommonJS(normalizeColor_native_exports);
var import_normalize_css_color = require("@tamagui/normalize-css-color"),
  import_normalize_css_color2 = require("@tamagui/normalize-css-color"),
  normalizeColor = function (color, opacity) {
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
      var colorNum = (0, import_normalize_css_color.normalizeCSSColor)(color);
      if (colorNum != null) return (0, import_normalize_css_color.rgba)(colorNum);
    }
  };
//# sourceMappingURL=normalizeColor.native.js.map
