import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { composeEventHandlers, getVariableValue, isWeb, View, withStaticProperties } from "@tamagui/core";
import { useSwitch } from "@tamagui/switch-headless";
import { useControllableState } from "@tamagui/use-controllable-state";
import * as React from "react";
import { SwitchStyledContext } from "./StyledContext.native.js";
import { SwitchFrame as DefaultSwitchFrame, SwitchThumb } from "./Switch.native.js";
import { useSwitchNative } from "./useSwitchNative.native.js";
function createSwitch(createProps) {
  var {
    Frame = DefaultSwitchFrame,
    Thumb = SwitchThumb
  } = createProps;
  process.env.NODE_ENV === "development" && (Frame !== DefaultSwitchFrame && Frame.staticConfig.context && Frame.staticConfig.context !== SwitchStyledContext || Thumb !== SwitchThumb && Thumb.staticConfig.context && Thumb.staticConfig.context !== SwitchStyledContext) && console.warn("Warning: createSwitch() needs to control context to pass checked state from Frame to Thumb, any custom context passed will be overridden."), Frame.staticConfig.context = SwitchStyledContext, Thumb.staticConfig.context = SwitchStyledContext;
  var SwitchThumbComponent = Thumb.styleable(function (props, forwardedRef) {
      var {
          size: sizeProp,
          unstyled: unstyledProp,
          activeStyle,
          ...thumbProps
        } = props,
        styledContext = SwitchStyledContext.useStyledContext(),
        {
          unstyled: unstyledContext,
          size: sizeContext,
          active,
          disabled,
          frameWidth = 0
        } = styledContext,
        _ref,
        unstyled = process.env.TAMAGUI_HEADLESS === "1" ? !0 : (_ref = unstyledProp ?? unstyledContext) !== null && _ref !== void 0 ? _ref : !1,
        _ref1,
        size = (_ref1 = sizeProp ?? sizeContext) !== null && _ref1 !== void 0 ? _ref1 : "$true",
        initialChecked = React.useRef(active).current,
        initialWidth = getVariableValue(props.width || size, "size"),
        [thumbWidth, setThumbWidth] = React.useState(typeof initialWidth == "number" ? initialWidth : 0),
        distance = frameWidth - thumbWidth,
        x = initialChecked ? active ? 0 : -distance : active ? distance : 0;
      return /* @__PURE__ */_jsx(Thumb, {
        ref: forwardedRef,
        unstyled,
        ...(unstyled === !1 && {
          size
        }),
        alignSelf: initialChecked ? "flex-end" : "flex-start",
        x,
        onLayout: composeEventHandlers(props.onLayout, function (e) {
          var next = e.nativeEvent.layout.width;
          setThumbWidth(next);
        }),
        disabled,
        ...thumbProps,
        ...(active && activeStyle)
      });
    }),
    SwitchComponent = Frame.styleable(function (_props, forwardedRef) {
      var {
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
        [checked, setChecked] = useControllableState({
          prop: checkedProp,
          defaultProp: defaultChecked || !1,
          onChange: onCheckedChange,
          transition: !0
        }),
        styledContext = React.useContext(SwitchStyledContext.context),
        [frameWidth, setFrameInnerWidth] = React.useState(0),
        {
          switchProps,
          bubbleInput,
          switchRef
        } = useSwitch(props, [checked, setChecked],
        // @ts-ignore TODO tamagui react 19 type error
        forwardedRef),
        nativeSwitch = useSwitchNative({
          id: props.id,
          disabled: props.disabled,
          native,
          nativeProps,
          checked,
          setChecked
        });
      if (nativeSwitch) return nativeSwitch;
      var disabled = props.disabled,
        handleLayout = function (e) {
          var next = e.nativeEvent.layout.width;
          next !== frameWidth && setFrameInnerWidth(next);
        },
        _styledContext_unstyled,
        _ref,
        unstyled = (_ref = (_styledContext_unstyled = styledContext.unstyled) !== null && _styledContext_unstyled !== void 0 ? _styledContext_unstyled : unstyledProp) !== null && _ref !== void 0 ? _ref : !1,
        _styledContext_size,
        _ref1,
        _styledContext_size1,
        _ref2;
      return /* @__PURE__ */_jsxs(_Fragment, {
        children: [/* @__PURE__ */_jsx(SwitchStyledContext.Provider, {
          size: (_ref1 = (_styledContext_size = styledContext.size) !== null && _styledContext_size !== void 0 ? _styledContext_size : props.size) !== null && _ref1 !== void 0 ? _ref1 : "$true",
          unstyled,
          active: checked,
          disabled,
          frameWidth,
          children: /* @__PURE__ */_jsx(Frame, {
            ref: switchRef,
            render: "button",
            // activeThemeProp should be a theme name string like "active", not a style object
            theme: activeThemeProp ?? null,
            ...(isWeb && {
              type: "button"
            }),
            ...(!unstyled && {
              size: (_ref2 = (_styledContext_size1 = styledContext.size) !== null && _styledContext_size1 !== void 0 ? _styledContext_size1 : props.size) !== null && _ref2 !== void 0 ? _ref2 : "$true"
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
            children: /* @__PURE__ */_jsx(View, {
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
  return withStaticProperties(SwitchComponent, {
    Thumb: SwitchThumbComponent
  });
}
export { createSwitch };
//# sourceMappingURL=createSwitch.native.js.map
