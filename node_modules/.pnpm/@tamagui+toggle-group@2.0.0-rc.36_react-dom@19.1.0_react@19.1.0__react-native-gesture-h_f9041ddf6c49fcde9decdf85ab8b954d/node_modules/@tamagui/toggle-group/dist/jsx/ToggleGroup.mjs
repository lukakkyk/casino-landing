import { isWeb } from "@tamagui/constants";
import { registerFocusable } from "@tamagui/focusable";
import { withStaticProperties } from "@tamagui/helpers";
import { RovingFocusGroup } from "@tamagui/roving-focus";
import { useControllableState } from "@tamagui/use-controllable-state";
import { useDirection } from "@tamagui/use-direction";
import { createStyledContext, styled, View } from "@tamagui/web";
import React from "react";
import { Toggle, ToggleFrame } from "./Toggle.mjs";
import { context as ToggleContext } from "./context.mjs";
import { jsx } from "react/jsx-runtime";
const TOGGLE_GROUP_NAME = "ToggleGroup",
  TOGGLE_GROUP_ITEM_NAME = "ToggleGroupItem",
  TOGGLE_GROUP_CONTEXT = "ToggleGroup",
  {
    Provider: ToggleGroupItemProvider
  } = createStyledContext(),
  {
    Provider: ToggleGroupContext,
    useStyledContext: useToggleGroupContext
  } = createStyledContext({}),
  ToggleGroupItem = ToggleFrame.styleable((props, forwardedRef) => {
    const valueContext = useToggleGroupValueContext(props.__scopeToggleGroup),
      context = useToggleGroupContext(props.__scopeToggleGroup),
      toggleContext = ToggleContext.useStyledContext(props.__scopeToggleGroup),
      active = valueContext?.value.includes(props.value),
      color = props.color || toggleContext.color,
      disabled = context.disabled || props.disabled || !1,
      inner = /* @__PURE__ */jsx(ToggleGroupItemImpl, {
        ref: forwardedRef,
        tabIndex: disabled ? -1 : 0,
        ...props,
        active,
        disabled
      });
    return /* @__PURE__ */jsx(ToggleGroupItemProvider, {
      scope: props.__scopeToggleGroup,
      children: /* @__PURE__ */jsx(ToggleContext.Provider, {
        color,
        active,
        children: context.rovingFocus ? /* @__PURE__ */jsx(RovingFocusGroup.Item, {
          asChild: "except-style",
          __scopeRovingFocusGroup: props.__scopeToggleGroup || TOGGLE_GROUP_CONTEXT,
          focusable: !disabled,
          active,
          children: inner
        }) : inner
      })
    });
  });
ToggleGroupItem.displayName = TOGGLE_GROUP_ITEM_NAME;
const ToggleGroupItemImpl = React.forwardRef((props, forwardedRef) => {
    const {
        __scopeToggleGroup,
        value,
        ...itemProps
      } = props,
      valueContext = useToggleGroupValueContext(__scopeToggleGroup),
      singleProps = {
        "aria-pressed": void 0
      },
      typeProps = valueContext.type === "single" ? singleProps : void 0;
    return /* @__PURE__ */jsx(Toggle, {
      ...typeProps,
      ...itemProps,
      ref: forwardedRef,
      onActiveChange: pressed => {
        pressed ? valueContext.onItemActivate(value) : valueContext.onItemDeactivate(value);
      }
    });
  }),
  ToggleGroup = withStaticProperties(React.forwardRef((props, forwardedRef) => {
    const {
      type,
      ...toggleGroupProps
    } = props;
    if (isWeb || React.useEffect(() => {
      if (props.id) return registerFocusable(props.id, {
        focus: () => {}
      });
    }, [props.id]), type === "single") return /* @__PURE__ */jsx(ToggleGroupImplSingle, {
      ...toggleGroupProps,
      ref: forwardedRef
    });
    if (type === "multiple") return /* @__PURE__ */jsx(ToggleGroupImplMultiple, {
      ...toggleGroupProps,
      ref: forwardedRef
    });
    throw new Error(`Missing prop \`type\` expected on \`${TOGGLE_GROUP_NAME}\``);
  }), {
    Item: ToggleGroupItem
  });
ToggleGroup.displayName = TOGGLE_GROUP_NAME;
const {
    Provider: ToggleGroupValueProvider,
    useStyledContext: useToggleGroupValueContext
  } = createStyledContext(),
  ToggleGroupImplSingle = React.forwardRef((props, forwardedRef) => {
    const {
        value: valueProp,
        defaultValue,
        onValueChange = () => {},
        disableDeactivation = !1,
        children,
        ...toggleGroupSingleProps
      } = props,
      [value, setValue] = useControllableState({
        prop: valueProp,
        defaultProp: defaultValue,
        onChange: onValueChange
      });
    return /* @__PURE__ */jsx(ToggleGroupValueProvider, {
      scope: props.__scopeToggleGroup,
      type: "single",
      value: value ? [value] : [],
      defaultValue: value,
      onItemActivate: setValue,
      onItemDeactivate: React.useCallback(() => disableDeactivation ? null : setValue(""), [setValue, disableDeactivation]),
      children: /* @__PURE__ */jsx(ToggleGroupImpl, {
        ...toggleGroupSingleProps,
        ref: forwardedRef,
        children
      })
    });
  }),
  ToggleGroupImplMultiple = React.forwardRef((props, forwardedRef) => {
    const {
        value: valueProp,
        defaultValue,
        onValueChange = () => {},
        disableDeactivation,
        children,
        ...toggleGroupMultipleProps
      } = props,
      [value = [], setValue] = useControllableState({
        prop: valueProp,
        defaultProp: defaultValue,
        onChange: onValueChange
      }),
      handleButtonActivate = React.useCallback(itemValue => setValue((prevValue = []) => [...prevValue, itemValue]), [setValue]),
      handleButtonDeactivate = React.useCallback(itemValue => setValue((prevValue = []) => prevValue.filter(value2 => value2 !== itemValue)), [setValue]);
    return /* @__PURE__ */jsx(ToggleGroupValueProvider, {
      scope: props.__scopeToggleGroup,
      type: "multiple",
      value,
      defaultValue: value,
      onItemActivate: handleButtonActivate,
      onItemDeactivate: handleButtonDeactivate,
      children: /* @__PURE__ */jsx(ToggleGroupImpl, {
        ...toggleGroupMultipleProps,
        ref: forwardedRef,
        children
      })
    });
  }),
  ToggleGroupFrame = styled(View, {
    name: TOGGLE_GROUP_NAME
  }),
  ToggleGroupImpl = ToggleGroupFrame.styleable((props, forwardedRef) => {
    const {
        __scopeToggleGroup,
        disabled = !1,
        orientation = "horizontal",
        dir,
        rovingFocus = !0,
        loop = !0,
        color,
        ...toggleGroupProps
      } = props,
      direction = useDirection(dir),
      content = /* @__PURE__ */jsx(ToggleGroupFrame, {
        role: "group",
        ref: forwardedRef,
        "data-disabled": disabled ? "" : void 0,
        ...toggleGroupProps
      });
    return /* @__PURE__ */jsx(ToggleGroupContext, {
      scope: __scopeToggleGroup,
      rovingFocus,
      disabled,
      children: /* @__PURE__ */jsx(ToggleContext.Provider, {
        color,
        children: rovingFocus ? /* @__PURE__ */jsx(RovingFocusGroup, {
          asChild: "except-style",
          __scopeRovingFocusGroup: __scopeToggleGroup || TOGGLE_GROUP_CONTEXT,
          orientation,
          dir: direction,
          loop,
          children: content
        }) : content
      })
    });
  });
export { ToggleGroup };
//# sourceMappingURL=ToggleGroup.mjs.map
