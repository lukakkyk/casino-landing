"use strict";

var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf,
  __hasOwnProp = Object.prototype.hasOwnProperty;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
    value: mod,
    enumerable: !0
  }) : target, mod)),
  __toCommonJS = mod => __copyProps(__defProp({}, "__esModule", {
    value: !0
  }), mod);
var Toggle_exports = {};
__export(Toggle_exports, {
  Toggle: () => Toggle,
  ToggleFrame: () => ToggleFrame
});
module.exports = __toCommonJS(Toggle_exports);
var import_jsx_runtime = require("react/jsx-runtime"),
  import_helpers = require("@tamagui/helpers"),
  import_use_controllable_state = require("@tamagui/use-controllable-state"),
  import_web = require("@tamagui/web"),
  React = __toESM(require("react"), 1),
  import_context = require("./context.native.js"),
  NAME = "Toggle",
  ToggleFrame = (0, import_web.styled)(import_web.View, {
    name: NAME,
    render: "button",
    context: import_context.context,
    variants: {
      unstyled: {
        false: {
          size: "$true",
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
          backgroundColor: "$background",
          borderColor: "$borderColor",
          borderWidth: 1,
          margin: -1,
          hoverStyle: {
            backgroundColor: "$backgroundHover",
            borderColor: "$borderColorHover"
          },
          pressStyle: {
            backgroundColor: "$backgroundPress",
            borderColor: "$borderColorPress"
          },
          focusVisibleStyle: {
            outlineColor: "$outlineColor",
            outlineWidth: 2,
            outlineStyle: "solid",
            zIndex: 10
          }
        }
      },
      size: {
        "...size": function (val, param) {
          var {
            tokens
          } = param;
          if (val) return {
            width: tokens.size[val],
            height: tokens.size[val]
          };
        },
        ":number": function (val) {
          return {
            width: val,
            height: val
          };
        }
      },
      defaultActiveStyle: {
        true: {
          backgroundColor: "$backgroundActive",
          hoverStyle: {
            backgroundColor: "$backgroundActive"
          },
          focusStyle: {
            backgroundColor: "$backgroundActive"
          }
        }
      }
    },
    defaultVariants: {
      unstyled: process.env.TAMAGUI_HEADLESS === "1"
    }
  }, {
    accept: {
      activeStyle: "style"
    }
  }),
  Toggle = /* @__PURE__ */React.forwardRef(function (props, forwardedRef) {
    var {
        active: activeProp,
        activeStyle,
        defaultActive = !1,
        onActiveChange,
        activeTheme,
        unstyled = !1,
        ...buttonProps
      } = props,
      [active = !1, setActive] = (0, import_use_controllable_state.useControllableState)({
        prop: activeProp,
        onChange: onActiveChange,
        defaultProp: defaultActive
      }),
      _props_onPress;
    return /* @__PURE__ */(0, import_jsx_runtime.jsx)(ToggleFrame, {
      theme: activeTheme ?? null,
      "aria-pressed": active,
      "data-state": active ? "on" : "off",
      "data-disabled": props.disabled ? "" : void 0,
      unstyled,
      ...(active && !activeStyle && !unstyled && {
        defaultActiveStyle: !0
      }),
      ...(active && activeStyle && {
        ...activeStyle,
        hoverStyle: activeStyle,
        focusStyle: activeStyle
      }),
      ...buttonProps,
      ref: forwardedRef,
      onPress: (0, import_helpers.composeEventHandlers)((_props_onPress = props.onPress) !== null && _props_onPress !== void 0 ? _props_onPress : void 0, function () {
        props.disabled || setActive(function (prev) {
          return !prev;
        });
      })
    });
  });
//# sourceMappingURL=Toggle.native.js.map
