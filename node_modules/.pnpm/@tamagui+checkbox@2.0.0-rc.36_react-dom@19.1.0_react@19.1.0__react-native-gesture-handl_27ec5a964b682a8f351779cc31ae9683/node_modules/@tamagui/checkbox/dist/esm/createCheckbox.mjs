import { isIndeterminate, useCheckbox } from "@tamagui/checkbox-headless";
import { getVariableValue, isWeb, shouldRenderNativePlatform, useProps, useTheme, withStaticProperties } from "@tamagui/core";
import { getFontSize } from "@tamagui/font-size";
import { getSize } from "@tamagui/get-token";
import { useGetThemedIcon } from "@tamagui/helpers-tamagui";
import { useControllableState } from "@tamagui/use-controllable-state";
import React, { useMemo } from "react";
import { CheckboxFrame, CheckboxIndicatorFrame } from "./Checkbox.mjs";
import { CheckboxStyledContext } from "./CheckboxStyledContext.mjs";
import { jsx, jsxs } from "react/jsx-runtime";
const CheckboxContext = React.createContext({
    checked: !1,
    disabled: !1
  }),
  ensureContext = x => {
    x.context || (x.context = CheckboxContext);
  };
function createCheckbox(createProps) {
  const {
    Frame = CheckboxFrame,
    Indicator = CheckboxIndicatorFrame
  } = createProps;
  ensureContext(Frame), ensureContext(Indicator);
  const FrameComponent = Frame.styleable(function (_props, forwardedRef) {
      const {
          scaleSize = 0.45,
          sizeAdjust = 0,
          scaleIcon,
          checked: checkedProp,
          defaultChecked,
          onCheckedChange,
          native,
          unstyled = !1,
          activeStyle,
          activeTheme,
          ...props
        } = _props,
        propsActive = useProps(props),
        styledContext = React.useContext(CheckboxStyledContext.context);
      let adjustedSize = 0,
        size = 0;
      unstyled || (adjustedSize = getVariableValue(getSize(propsActive.size ?? styledContext?.size ?? "$true", {
        shift: sizeAdjust
      })), size = scaleSize ? Math.round(adjustedSize * scaleSize) : adjustedSize);
      const [checked = !1, setChecked] = useControllableState({
          prop: checkedProp,
          defaultProp: defaultChecked,
          onChange: onCheckedChange
        }),
        {
          checkboxProps,
          checkboxRef,
          bubbleInput
        } = useCheckbox(
        // @ts-ignore
        propsActive, [checked, setChecked], forwardedRef);
      if (shouldRenderNativePlatform(native) === "web") return /* @__PURE__ */jsx("input", {
        type: "checkbox",
        defaultChecked: isIndeterminate(checked) ? !1 : checked,
        tabIndex: -1,
        ref: checkboxRef,
        disabled: checkboxProps.disabled,
        style: {
          appearance: "auto",
          accentColor: "var(--color6)",
          ...checkboxProps.style
        }
      });
      const memoizedContext = useMemo(() => ({
          checked,
          disabled: checkboxProps.disabled
        }), [checked, checkboxProps.disabled]),
        isActive = !!checked,
        disabled = checkboxProps.disabled;
      return /* @__PURE__ */jsx(CheckboxContext.Provider, {
        value: memoizedContext,
        children: /* @__PURE__ */jsxs(CheckboxStyledContext.Provider, {
          size: propsActive.size ?? styledContext?.size ?? "$true",
          scaleIcon: scaleIcon ?? styledContext?.scaleIcon ?? 1,
          unstyled,
          active: isActive,
          disabled,
          children: [/* @__PURE__ */jsx(Frame, {
            render: "button",
            ref: checkboxRef,
            unstyled,
            theme: activeTheme ?? null,
            ...(isWeb && {
              type: "button"
            }),
            ...(!unstyled && {
              width: size,
              height: size,
              size
            }),
            checked,
            disabled,
            ...checkboxProps,
            ...props,
            ...(isActive && {
              ...(!unstyled && !activeStyle && {
                backgroundColor: "$backgroundActive"
              }),
              ...activeStyle
            }),
            children: propsActive.children
          }), bubbleInput]
        })
      });
    }),
    IndicatorComponent = Indicator.styleable((props, forwardedRef) => {
      const {
          children: childrenProp,
          forceMount,
          disablePassStyles,
          unstyled = !1,
          activeStyle,
          ...indicatorProps
        } = props,
        styledContext = CheckboxStyledContext.useStyledContext(),
        {
          active
        } = styledContext;
      let children = childrenProp;
      if (!unstyled) {
        const iconSize = (typeof styledContext.size == "number" ? styledContext.size * 0.65 : getFontSize(styledContext.size)) * styledContext.scaleIcon,
          theme = useTheme(),
          getThemedIcon = useGetThemedIcon({
            size: iconSize,
            color: theme.color
          });
        children = React.Children.toArray(childrenProp).map(child => disablePassStyles || !React.isValidElement(child) ? child : getThemedIcon(child));
      }
      const context = React.useContext(CheckboxContext);
      return forceMount || isIndeterminate(context.checked) || context.checked === !0 ? /* @__PURE__ */jsx(Indicator, {
        pointerEvents: "none",
        ...indicatorProps,
        ...(active && activeStyle),
        ref: forwardedRef,
        children
      }) : null;
    });
  return withStaticProperties(FrameComponent, {
    Indicator: IndicatorComponent
  });
}
export { CheckboxContext, createCheckbox };
//# sourceMappingURL=createCheckbox.mjs.map
