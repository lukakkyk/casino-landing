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
var Spacer_exports = {};
__export(Spacer_exports, {
  Spacer: () => Spacer
});
module.exports = __toCommonJS(Spacer_exports);
var import_web = require("@tamagui/web"),
  getSpacerSize = function (size, param) {
    var {
      tokens
    } = param;
    size = size === !0 ? "$true" : size;
    var _tokens_space_size,
      sizePx = (_tokens_space_size = tokens.space[size]) !== null && _tokens_space_size !== void 0 ? _tokens_space_size : size;
    return {
      width: sizePx,
      height: sizePx,
      minWidth: sizePx,
      minHeight: sizePx
    };
  },
  Spacer = (0, import_web.styled)(import_web.View, {
    name: "Spacer",
    pointerEvents: "none",
    render: "span",
    variants: {
      size: {
        "...size": getSpacerSize,
        "...": getSpacerSize
      },
      direction: {
        horizontal: {
          height: 0,
          minHeight: 0
        },
        vertical: {
          width: 0,
          minWidth: 0
        },
        both: {}
      }
    },
    defaultVariants: {
      // @ts-ignore
      size: !0
    }
  });
//# sourceMappingURL=Spacer.native.js.map
