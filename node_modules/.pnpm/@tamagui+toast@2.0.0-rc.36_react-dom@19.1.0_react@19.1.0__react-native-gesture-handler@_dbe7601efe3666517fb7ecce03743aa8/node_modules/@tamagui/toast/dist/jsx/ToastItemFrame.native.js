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
var ToastItemFrame_exports = {};
__export(ToastItemFrame_exports, {
  DefaultCloseIcon: () => DefaultCloseIcon,
  ToastActionFrame: () => ToastActionFrame,
  ToastCloseFrame: () => ToastCloseFrame,
  ToastItemFrame: () => ToastItemFrame,
  ToastPositionWrapper: () => ToastPositionWrapper
});
module.exports = __toCommonJS(ToastItemFrame_exports);
var import_jsx_runtime = require("react/jsx-runtime"),
  import_core = require("@tamagui/core"),
  import_stacks = require("@tamagui/stacks"),
  import_text = require("@tamagui/text"),
  ToastPositionWrapper = (0, import_core.styled)(import_stacks.YStack, {
    name: "ToastPositionWrapper",
    pointerEvents: "auto",
    position: "absolute",
    left: 0,
    right: 0,
    opacity: 1,
    scale: 1,
    y: 0,
    x: 0
  }),
  ToastItemFrame = (0, import_core.styled)(import_stacks.YStack, {
    name: "ToastItem",
    userSelect: "none",
    cursor: "default",
    focusable: !0,
    variants: {
      unstyled: {
        false: {
          backgroundColor: "$background",
          borderRadius: "$6",
          paddingHorizontal: "$4",
          paddingVertical: "$3",
          borderWidth: 1,
          borderColor: "$borderColor",
          shadowColor: "rgba(0, 0, 0, 0.15)",
          shadowOffset: {
            width: 0,
            height: 4
          },
          shadowRadius: 12,
          focusVisibleStyle: {
            outlineWidth: 2,
            outlineColor: "$color8",
            outlineStyle: "solid"
          }
        }
      }
    },
    defaultVariants: {
      unstyled: process.env.TAMAGUI_HEADLESS === "1"
    }
  }),
  ToastCloseFrame = (0, import_core.styled)(import_stacks.XStack, {
    name: "ToastClose",
    render: "button",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    variants: {
      unstyled: {
        false: {
          width: 18,
          height: 18,
          borderRadius: "$10",
          backgroundColor: "$background",
          borderWidth: 1,
          borderColor: "$borderColor",
          shadowColor: "rgba(0, 0, 0, 0.08)",
          shadowOffset: {
            width: 0,
            height: 1
          },
          shadowRadius: 3,
          hoverStyle: {
            backgroundColor: "$color3"
          },
          pressStyle: {
            backgroundColor: "$color4"
          }
        }
      }
    },
    defaultVariants: {
      unstyled: process.env.TAMAGUI_HEADLESS === "1"
    }
  }),
  ToastActionFrame = (0, import_core.styled)(import_stacks.XStack, {
    name: "ToastAction",
    render: "button",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    variants: {
      unstyled: {
        false: {
          borderRadius: "$2",
          paddingHorizontal: "$2",
          height: 24,
          backgroundColor: "$color5",
          hoverStyle: {
            backgroundColor: "$color6"
          },
          pressStyle: {
            backgroundColor: "$color7"
          }
        }
      }
    },
    defaultVariants: {
      unstyled: process.env.TAMAGUI_HEADLESS === "1"
    }
  }),
  DefaultCloseIcon = function () {
    return /* @__PURE__ */(0, import_jsx_runtime.jsx)(import_text.SizableText, {
      size: "$1",
      color: "$color11",
      children: "\u2715"
    });
  };
//# sourceMappingURL=ToastItemFrame.native.js.map
