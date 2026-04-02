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
var createSwitch_exports = {};
__export(createSwitch_exports, {
  createSwitch: () => createSwitch
});
module.exports = __toCommonJS(createSwitch_exports);
var import_core = require("@tamagui/core"),
  import_switch_headless = require("@tamagui/switch-headless"),
  import_use_controllable_state = require("@tamagui/use-controllable-state"),
  React = __toESM(require("react"), 1),
  import_StyledContext = require("./StyledContext.cjs"),
  import_Switch = require("./Switch.cjs"),
  import_useSwitchNative = require("./useSwitchNative.cjs"),
  import_jsx_runtime = require("react/jsx-runtime");
function createSwitch(createProps) {
  const {
    Frame = import_Switch.SwitchFrame,
    Thumb = import_Switch.SwitchThumb
  } = createProps;
  process.env.NODE_ENV === "development" && (Frame !== import_Switch.SwitchFrame && Frame.staticConfig.context && Frame.staticConfig.context !== import_StyledContext.SwitchStyledContext || Thumb !== import_Switch.SwitchThumb && Thumb.staticConfig.context && Thumb.staticConfig.context !== import_StyledContext.SwitchStyledContext) && console.warn("Warning: createSwitch() needs to control context to pass checked state from Frame to Thumb, any custom context passed will be overridden."), Frame.staticConfig.context = import_StyledContext.SwitchStyledContext, Thumb.staticConfig.context = import_StyledContext.SwitchStyledContext;
  const SwitchThumbComponent = Thumb.styleable(function (props, forwardedRef) {
      const {
          size: sizeProp,
          unstyled: unstyledProp,
          activeStyle,
          ...thumbProps
        } = props,
        styledContext = import_StyledContext.SwitchStyledContext.useStyledContext(),
        {
          unstyled: unstyledContext,
          size: sizeContext,
          active,
          disabled,
          frameWidth = 0
        } = styledContext,
        unstyled = process.env.TAMAGUI_HEADLESS === "1" ? !0 : unstyledProp ?? unstyledContext ?? !1,
        size = sizeProp ?? sizeContext ?? "$true",
        initialChecked = React.useRef(active).current,
        initialWidth = (0, import_core.getVariableValue)(props.width || size, "size"),
        [thumbWidth, setThumbWidth] = React.useState(typeof initialWidth == "number" ? initialWidth : 0),
        distance = frameWidth - thumbWidth,
        x = initialChecked ? active ? 0 : -distance : active ? distance : 0;
      return /* @__PURE__ */(0, import_jsx_runtime.jsx)(Thumb, {
        ref: forwardedRef,
        unstyled,
        ...(unstyled === !1 && {
          size
        }),
        alignSelf: initialChecked ? "flex-end" : "flex-start",
        x,
        onLayout: (0, import_core.composeEventHandlers)(props.onLayout, e => {
          const next = e.nativeEvent.layout.width;
          setThumbWidth(next);
        }),
        disabled,
        ...thumbProps,
        ...(active && activeStyle)
      });
    }),
    SwitchComponent = Frame.styleable(function (_props, forwardedRef) {
      const {
          native,
          nativeProps,
          checked: checkedProp,
          defaultChecked,
          onCheckedChange,
          activeStyle,
          unstyled: unstyledProp,
          activeTheme: activeThemeProp,
          ...props
        } = _props,
        [checked, setChecked] = (0, import_use_controllable_state.useControllableState)({
          prop: checkedProp,
          defaultProp: defaultChecked || !1,
          onChange: onCheckedChange,
          transition: !0
        }),
        styledContext = React.useContext(import_StyledContext.SwitchStyledContext.context),
        [frameWidth, setFrameInnerWidth] = React.useState(0),
        {
          switchProps,
          bubbleInput,
          switchRef
        } = (0, import_switch_headless.useSwitch)(props, [checked, setChecked],
        // @ts-ignore TODO tamagui react 19 type error
        forwardedRef),
        nativeSwitch = (0, import_useSwitchNative.useSwitchNative)({
          id: props.id,
          disabled: props.disabled,
          native,
          nativeProps,
          checked,
          setChecked
        });
      if (nativeSwitch) return nativeSwitch;
      const disabled = props.disabled,
        handleLayout = e => {
          const next = e.nativeEvent.layout.width;
          next !== frameWidth && setFrameInnerWidth(next);
        },
        unstyled = styledContext.unstyled ?? unstyledProp ?? !1;
      return /* @__PURE__ */(0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, {
        children: [/* @__PURE__ */(0, import_jsx_runtime.jsx)(import_StyledContext.SwitchStyledContext.Provider, {
          size: styledContext.size ?? props.size ?? "$true",
          unstyled,
          active: checked,
          disabled,
          frameWidth,
          children: /* @__PURE__ */(0, import_jsx_runtime.jsx)(Frame, {
            ref: switchRef,
            render: "button",
            theme: activeThemeProp ?? null,
            ...(import_core.isWeb && {
              type: "button"
            }),
            ...(!unstyled && {
              size: styledContext.size ?? props.size ?? "$true"
            }),
            unstyled,
            ...props,
            ...switchProps,
            disabled,
            ...(checked && {
              ...(!unstyled && !activeStyle && {
                backgroundColor: "$backgroundActive"
              }),
              ...activeStyle
            }),
            children: /* @__PURE__ */(0, import_jsx_runtime.jsx)(import_core.View, {
              alignSelf: "stretch",
              flex: 1,
              onLayout: handleLayout,
              children: props.children
            })
          })
        }), bubbleInput]
      });
    }, {
      disableTheme: !0
    });
  return (0, import_core.withStaticProperties)(SwitchComponent, {
    Thumb: SwitchThumbComponent
  });
}