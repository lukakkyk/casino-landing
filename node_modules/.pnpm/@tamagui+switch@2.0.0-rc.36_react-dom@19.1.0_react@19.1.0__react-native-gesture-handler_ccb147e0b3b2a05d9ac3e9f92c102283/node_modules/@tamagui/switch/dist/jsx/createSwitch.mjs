import { composeEventHandlers, getVariableValue, isWeb, View, withStaticProperties } from "@tamagui/core";
import { useSwitch } from "@tamagui/switch-headless";
import { useControllableState } from "@tamagui/use-controllable-state";
import * as React from "react";
import { SwitchStyledContext } from "./StyledContext.mjs";
import { SwitchFrame as DefaultSwitchFrame, SwitchThumb } from "./Switch.mjs";
import { useSwitchNative } from "./useSwitchNative.mjs";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
function createSwitch(createProps) {
  const {
    Frame = DefaultSwitchFrame,
    Thumb = SwitchThumb
  } = createProps;
  process.env.NODE_ENV === "development" && (Frame !== DefaultSwitchFrame && Frame.staticConfig.context && Frame.staticConfig.context !== SwitchStyledContext || Thumb !== SwitchThumb && Thumb.staticConfig.context && Thumb.staticConfig.context !== SwitchStyledContext) && console.warn("Warning: createSwitch() needs to control context to pass checked state from Frame to Thumb, any custom context passed will be overridden."), Frame.staticConfig.context = SwitchStyledContext, Thumb.staticConfig.context = SwitchStyledContext;
  const SwitchThumbComponent = Thumb.styleable(function (props, forwardedRef) {
      const {
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
        unstyled = process.env.TAMAGUI_HEADLESS === "1" ? !0 : unstyledProp ?? unstyledContext ?? !1,
        size = sizeProp ?? sizeContext ?? "$true",
        initialChecked = React.useRef(active).current,
        initialWidth = getVariableValue(props.width || size, "size"),
        [thumbWidth, setThumbWidth] = React.useState(typeof initialWidth == "number" ? initialWidth : 0),
        distance = frameWidth - thumbWidth,
        x = initialChecked ? active ? 0 : -distance : active ? distance : 0;
      return /* @__PURE__ */jsx(Thumb, {
        ref: forwardedRef,
        unstyled,
        ...(unstyled === !1 && {
          size
        }),
        alignSelf: initialChecked ? "flex-end" : "flex-start",
        x,
        onLayout: composeEventHandlers(props.onLayout, e => {
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
      const disabled = props.disabled,
        handleLayout = e => {
          const next = e.nativeEvent.layout.width;
          next !== frameWidth && setFrameInnerWidth(next);
        },
        unstyled = styledContext.unstyled ?? unstyledProp ?? !1;
      return /* @__PURE__ */jsxs(Fragment, {
        children: [/* @__PURE__ */jsx(SwitchStyledContext.Provider, {
          size: styledContext.size ?? props.size ?? "$true",
          unstyled,
          active: checked,
          disabled,
          frameWidth,
          children: /* @__PURE__ */jsx(Frame, {
            ref: switchRef,
            render: "button",
            theme: activeThemeProp ?? null,
            ...(isWeb && {
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
            children: /* @__PURE__ */jsx(View, {
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
//# sourceMappingURL=createSwitch.mjs.map
