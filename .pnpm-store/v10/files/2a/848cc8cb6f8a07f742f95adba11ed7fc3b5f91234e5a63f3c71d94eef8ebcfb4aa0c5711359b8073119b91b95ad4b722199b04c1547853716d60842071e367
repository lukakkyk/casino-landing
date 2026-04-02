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
var tokens_exports = {};
__export(tokens_exports, {
  color: () => color,
  colorTokens: () => colorTokens,
  darkColors: () => darkColors,
  lightColors: () => lightColors,
  radius: () => radius,
  size: () => size,
  space: () => space,
  tokens: () => tokens,
  zIndex: () => zIndex
});
module.exports = __toCommonJS(tokens_exports);
var import_legacy = require("@tamagui/colors/legacy"),
  import_web = require("@tamagui/web"),
  size = {
    $0: 0,
    "$0.25": 2,
    "$0.5": 4,
    "$0.75": 8,
    $1: 20,
    "$1.5": 24,
    $2: 28,
    "$2.5": 32,
    $3: 36,
    "$3.5": 40,
    $4: 44,
    $true: 44,
    "$4.5": 48,
    $5: 52,
    $6: 64,
    $7: 74,
    $8: 84,
    $9: 94,
    $10: 104,
    $11: 124,
    $12: 144,
    $13: 164,
    $14: 184,
    $15: 204,
    $16: 224,
    $17: 224,
    $18: 244,
    $19: 264,
    $20: 284
  },
  spaces = Object.entries(size).map(function (param) {
    var [k, v] = param;
    return [k, sizeToSpace(v)];
  });
function sizeToSpace(v) {
  return v === 0 ? 0 : v === 2 ? 0.5 : v === 4 ? 1 : v === 8 ? 1.5 : v <= 16 ? Math.round(v * 0.333) : Math.floor(v * 0.7 - 12);
}
var spacesNegative = spaces.slice(1).map(function (param) {
    var [k, v] = param;
    return [`-${k.slice(1)}`, -v];
  }),
  space = {
    ...Object.fromEntries(spaces),
    ...Object.fromEntries(spacesNegative)
  },
  zIndex = {
    0: 0,
    1: 100,
    2: 200,
    3: 300,
    4: 400,
    5: 500
  },
  colorTokens = {
    light: {
      blue: import_legacy.blue,
      gray: import_legacy.gray,
      green: import_legacy.green,
      orange: import_legacy.orange,
      pink: import_legacy.pink,
      purple: import_legacy.purple,
      red: import_legacy.red,
      yellow: import_legacy.yellow
    },
    dark: {
      blue: import_legacy.blueDark,
      gray: import_legacy.grayDark,
      green: import_legacy.greenDark,
      orange: import_legacy.orangeDark,
      pink: import_legacy.pinkDark,
      purple: import_legacy.purpleDark,
      red: import_legacy.redDark,
      yellow: import_legacy.yellowDark
    }
  },
  darkColors = {
    ...colorTokens.dark.blue,
    ...colorTokens.dark.gray,
    ...colorTokens.dark.green,
    ...colorTokens.dark.orange,
    ...colorTokens.dark.pink,
    ...colorTokens.dark.purple,
    ...colorTokens.dark.red,
    ...colorTokens.dark.yellow
  },
  lightColors = {
    ...colorTokens.light.blue,
    ...colorTokens.light.gray,
    ...colorTokens.light.green,
    ...colorTokens.light.orange,
    ...colorTokens.light.pink,
    ...colorTokens.light.purple,
    ...colorTokens.light.red,
    ...colorTokens.light.yellow
  },
  color = {
    ...postfixObjKeys(lightColors, "Light"),
    ...postfixObjKeys(darkColors, "Dark")
  };
function postfixObjKeys(obj, postfix) {
  return Object.fromEntries(Object.entries(obj).map(function (param) {
    var [k, v] = param;
    return [`${k}${postfix}`, v];
  }));
}
var radius = {
    0: 0,
    1: 3,
    2: 5,
    3: 7,
    4: 9,
    true: 9,
    5: 10,
    6: 16,
    7: 19,
    8: 22,
    9: 26,
    10: 34,
    11: 42,
    12: 50
  },
  tokens = (0, import_web.createTokens)({
    color,
    radius,
    zIndex,
    space,
    size
  });
//# sourceMappingURL=tokens.native.js.map
