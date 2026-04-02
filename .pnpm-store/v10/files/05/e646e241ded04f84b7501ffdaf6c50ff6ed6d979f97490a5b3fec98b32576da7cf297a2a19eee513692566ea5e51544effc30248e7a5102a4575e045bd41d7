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
var opacify_exports = {};
__export(opacify_exports, {
  interpolateColor: () => interpolateColor,
  opacify: () => opacify
});
module.exports = __toCommonJS(opacify_exports);
function interpolateColor(color1, color2, amount) {
  var rgb1 = parseToRgb(color1),
    rgb2 = parseToRgb(color2);
  if (!rgb1 || !rgb2) return color1;
  var r = Math.round(rgb1.r + (rgb2.r - rgb1.r) * amount),
    g = Math.round(rgb1.g + (rgb2.g - rgb1.g) * amount),
    b = Math.round(rgb1.b + (rgb2.b - rgb1.b) * amount);
  return `rgb(${r}, ${g}, ${b})`;
}
function parseToRgb(color) {
  if (typeof color != "string") return null;
  if (color.startsWith("#")) {
    var hex = color.slice(1);
    if (hex.length === 3 && (hex = hex.split("").map(function (c) {
      return c + c;
    }).join("")), hex.length >= 6) return {
      r: Number.parseInt(hex.slice(0, 2), 16),
      g: Number.parseInt(hex.slice(2, 4), 16),
      b: Number.parseInt(hex.slice(4, 6), 16)
    };
  }
  if (color.startsWith("rgb")) {
    var match = color.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
    if (match) return {
      r: Number.parseInt(match[1], 10),
      g: Number.parseInt(match[2], 10),
      b: Number.parseInt(match[3], 10)
    };
  }
  if (color.startsWith("hsl")) {
    var match1 = color.match(/hsla?\((\d+),\s*(\d+)%,\s*(\d+)%/);
    if (match1) {
      var h = Number.parseInt(match1[1], 10),
        s = Number.parseInt(match1[2], 10) / 100,
        l = Number.parseInt(match1[3], 10) / 100;
      return hslToRgb(h, s, l);
    }
  }
  return null;
}
function hslToRgb(h, s, l) {
  var r, g, b;
  if (s === 0) r = g = b = l;else {
    var hue2rgb = function (p2, q2, t) {
        return t < 0 && (t += 1), t > 1 && (t -= 1), t < 0.16666666666666666 ? p2 + (q2 - p2) * 6 * t : t < 0.5 ? q2 : t < 0.6666666666666666 ? p2 + (q2 - p2) * (0.6666666666666666 - t) * 6 : p2;
      },
      q = l < 0.5 ? l * (1 + s) : l + s - l * s,
      p = 2 * l - q;
    r = hue2rgb(p, q, h / 360 + 1 / 3), g = hue2rgb(p, q, h / 360), b = hue2rgb(p, q, h / 360 - 1 / 3);
  }
  return {
    r: Math.round(r * 255),
    g: Math.round(g * 255),
    b: Math.round(b * 255)
  };
}
function opacify(color) {
  var opacity = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0.1;
  if (typeof color != "string") return color;
  if (color.startsWith("hsl")) {
    var match = color.match(/hsla?\((\d+),\s*(\d+)%,\s*(\d+)%(?:,\s*([\d.]+))?\)/);
    if (match) {
      var [, h, s, l] = match;
      return `hsla(${h}, ${s}%, ${l}%, ${opacity})`;
    }
  }
  if (color.startsWith("#")) {
    var hex = color.slice(1);
    if (hex.length === 3 && (hex = hex.split("").map(function (c) {
      return c + c;
    }).join("")), hex.length === 6 || hex.length === 8) {
      var alphaHex = Math.round(opacity * 255).toString(16).padStart(2, "0");
      return `#${hex.slice(0, 6)}${alphaHex}`;
    }
  }
  return color;
}
//# sourceMappingURL=opacify.native.js.map
