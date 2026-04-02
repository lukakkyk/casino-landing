"use strict";

var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all2) => {
    for (var name in all2) __defProp(target, name, {
      get: all2[name],
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
var expandStyle_exports = {};
__export(expandStyle_exports, {
  expandStyle: () => expandStyle
});
module.exports = __toCommonJS(expandStyle_exports);
var import_constants = require("@tamagui/constants"),
  import_config = require("../config.native.js"),
  import_parseBorderShorthand = require("./parseBorderShorthand.native.js"),
  import_parseOutlineShorthand = require("./parseOutlineShorthand.native.js"),
  _loop = function (parent) {
    var _exec,
      _exec_index,
      prefix = parent.slice(0, (_exec_index = (_exec = /[A-Z]/.exec(parent)) === null || _exec === void 0 ? void 0 : _exec.index) !== null && _exec_index !== void 0 ? _exec_index : parent.length);
    EXPANSIONS[parent] = EXPANSIONS[parent].map(function (k) {
      return `${prefix}${k}`;
    });
  };
function expandStyle(key, value) {
  if (import_constants.isAndroid && key === "elevationAndroid") return [["elevation", value]];
  switch (key) {
    case "objectFit":
      {
        var resizeMode = resizeModeMap[value] || "cover";
        return [["resizeMode", resizeMode]];
      }
    case "verticalAlign":
      return [["textAlignVertical", verticalAlignMap[value] || "auto"]];
    case "position":
      return value === "fixed" || value === "sticky" ? [["position", "absolute"]] : void 0;
    case "backgroundImage":
      return [["experimental_backgroundImage", value]];
    case "border":
      {
        if (typeof value == "string") {
          var parsed = (0, import_parseBorderShorthand.parseBorderShorthand)(value);
          if (parsed) return parsed;
        }
        return;
      }
    case "outline":
      {
        if (typeof value == "string") {
          var parsed1 = (0, import_parseOutlineShorthand.parseOutlineShorthand)(value);
          if (parsed1) return parsed1;
        }
        return;
      }
  }
  if (key in nativeExpansions) return nativeExpansions[key].map(function (k) {
    return [k, value];
  });
  if (key in EXPANSIONS) return EXPANSIONS[key].map(function (k) {
    return [k, value];
  });
}
var resizeModeMap = {
    fill: "stretch",
    none: "center",
    "scale-down": "contain",
    contain: "contain",
    cover: "cover"
  },
  verticalAlignMap = {
    top: "top",
    middle: "center",
    bottom: "bottom",
    auto: "auto"
  },
  all = ["Top", "Right", "Bottom", "Left"],
  horiz = ["Right", "Left"],
  vert = ["Top", "Bottom"],
  xy = ["X", "Y"],
  EXPANSIONS = {
    borderColor: ["TopColor", "RightColor", "BottomColor", "LeftColor"],
    borderRadius: ["TopLeftRadius", "TopRightRadius", "BottomRightRadius", "BottomLeftRadius"],
    borderWidth: ["TopWidth", "RightWidth", "BottomWidth", "LeftWidth"],
    margin: all,
    marginHorizontal: horiz,
    marginVertical: vert,
    padding: all,
    paddingHorizontal: horiz,
    paddingVertical: vert,
    ...(import_constants.isWeb && {
      // react-native only supports borderStyle
      borderStyle: ["TopStyle", "RightStyle", "BottomStyle", "LeftStyle"],
      // react-native doesn't support X / Y
      overflow: xy,
      overscrollBehavior: xy
    })
  };
for (var parent in EXPANSIONS) _loop(parent);
var nativeExpansions = {
  // logical border properties
  borderBlockColor: ["borderTopColor", "borderBottomColor"],
  borderInlineColor: ["borderEndColor", "borderStartColor"],
  borderBlockWidth: ["borderTopWidth", "borderBottomWidth"],
  borderInlineWidth: ["borderEndWidth", "borderStartWidth"],
  borderBlockStyle: ["borderTopStyle", "borderBottomStyle"],
  borderInlineStyle: ["borderEndStyle", "borderStartStyle"],
  borderBlockStartColor: ["borderTopColor"],
  borderBlockEndColor: ["borderBottomColor"],
  borderInlineStartColor: ["borderStartColor"],
  borderInlineEndColor: ["borderEndColor"],
  borderBlockStartWidth: ["borderTopWidth"],
  borderBlockEndWidth: ["borderBottomWidth"],
  borderInlineStartWidth: ["borderStartWidth"],
  borderInlineEndWidth: ["borderEndWidth"],
  borderBlockStartStyle: ["borderTopStyle"],
  borderBlockEndStyle: ["borderBottomStyle"],
  borderInlineStartStyle: ["borderStartStyle"],
  borderInlineEndStyle: ["borderEndStyle"],
  // logical margin/padding
  marginBlock: ["marginTop", "marginBottom"],
  marginInline: ["marginEnd", "marginStart"],
  paddingBlock: ["paddingTop", "paddingBottom"],
  paddingInline: ["paddingEnd", "paddingStart"],
  marginBlockStart: ["marginTop"],
  marginBlockEnd: ["marginBottom"],
  marginInlineStart: ["marginStart"],
  marginInlineEnd: ["marginEnd"],
  paddingBlockStart: ["paddingTop"],
  paddingBlockEnd: ["paddingBottom"],
  paddingInlineStart: ["paddingStart"],
  paddingInlineEnd: ["paddingEnd"],
  // logical sizing
  minBlockSize: ["minHeight"],
  maxBlockSize: ["maxHeight"],
  minInlineSize: ["minWidth"],
  maxInlineSize: ["maxWidth"],
  blockSize: ["height"],
  inlineSize: ["width"],
  // inset
  inset: ["top", "right", "bottom", "left"],
  insetBlock: ["top", "bottom"],
  insetBlockStart: ["top"],
  insetBlockEnd: ["bottom"],
  insetInlineStart: ["left"],
  insetInlineEnd: ["right"]
};
//# sourceMappingURL=expandStyle.native.js.map
