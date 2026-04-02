import { jsx as _jsx } from "react/jsx-runtime";
import { isWeb } from "@tamagui/constants";
import { registerFocusable } from "@tamagui/focusable";
import { withStaticProperties } from "@tamagui/helpers";
import { RovingFocusGroup } from "@tamagui/roving-focus";
import { useControllableState } from "@tamagui/use-controllable-state";
import { useDirection } from "@tamagui/use-direction";
import { createStyledContext, styled, View } from "@tamagui/web";
import React from "react";
import { Toggle, ToggleFrame } from "./Toggle.native.js";
import { context as ToggleContext } from "./context.native.js";
var TOGGLE_GROUP_NAME = "ToggleGroup",
  TOGGLE_GROUP_ITEM_NAME = "ToggleGroupItem",
  TOGGLE_GROUP_CONTEXT = "ToggleGroup",
  {
    Provider: ToggleGroupItemProvider
  } = createStyledContext(),
  {
    Provider: ToggleGroupContext,
    useStyledContext: useToggleGroupContext
  } = createStyledContext({}),
  ToggleGroupItem = ToggleFrame.styleable(function (props, forwardedRef) {
    var valueContext = useToggleGroupValueContext(props.__scopeToggleGroup),
      context = useToggleGroupContext(props.__scopeToggleGroup),
      toggleContext = ToggleContext.useStyledContext(props.__scopeToggleGroup),
      active = valueContext?.value.includes(props.value),
      color = props.color || toggleContext.color,
      disabled = context.disabled || props.disabled || !1,
      inner = /* @__PURE__ */_jsx(ToggleGroupItemImpl, {
        ref: forwardedRef,
        tabIndex: disabled ? -1 : 0,
        ...props,
        active,
        disabled
      });
    return /* @__PURE__ */_jsx(ToggleGroupItemProvider, {
      scope: props.__scopeToggleGroup,
      children: /* @__PURE__ */_jsx(ToggleContext.Provider, {
        color,
        active,
        children: context.rovingFocus ? /* @__PURE__ */_jsx(RovingFocusGroup.Item, {
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
var ToggleGroupItemImpl = /* @__PURE__ */React.forwardRef(function (props, forwardedRef) {
    var {
        __scopeToggleGroup,
        value,
        ...itemProps
      } = props,
      valueContext = useToggleGroupValueContext(__scopeToggleGroup),
      singleProps = {
        "aria-pressed": void 0
      },
      typeProps = valueContext.type === "single" ? singleProps : void 0;
    return /* @__PURE__ */_jsx(Toggle, {
      ...typeProps,
      ...itemProps,
      ref: forwardedRef,
      onActiveChange: function (pressed) {
        pressed ? valueContext.onItemActivate(value) : valueContext.onItemDeactivate(value);
      }
    });
  }),
  ToggleGroup = withStaticProperties(/* @__PURE__ */React.forwardRef(function (props, forwardedRef) {
    var {
      type,
      ...toggleGroupProps
    } = props;
    if (isWeb || React.useEffect(function () {
      if (props.id) return registerFocusable(props.id, {
        focus: function () {}
      });
    }, [props.id]), type === "single") {
      var singleProps = toggleGroupProps;
      return /* @__PURE__ */_jsx(ToggleGroupImplSingle, {
        ...singleProps,
        ref: forwardedRef
      });
    }
    if (type === "multiple") {
      var multipleProps = toggleGroupProps;
      return /* @__PURE__ */_jsx(ToggleGroupImplMultiple, {
        ...multipleProps,
        ref: forwardedRef
      });
    }
    throw new Error(`Missing prop \`type\` expected on \`${TOGGLE_GROUP_NAME}\``);
  }), {
    Item: ToggleGroupItem
  });
ToggleGroup.displayName = TOGGLE_GROUP_NAME;
var {
    Provider: ToggleGroupValueProvider,
    useStyledContext: useToggleGroupValueContext
  } = createStyledContext(),
  ToggleGroupImplSingle = /* @__PURE__ */React.forwardRef(function (props, forwardedRef) {
    var {
        value: valueProp,
        defaultValue,
        onValueChange = function () {},
        disableDeactivation = !1,
        children,
        ...toggleGroupSingleProps
      } = props,
      [value, setValue] = useControllableState({
        prop: valueProp,
        defaultProp: defaultValue,
        onChange: onValueChange
      });
    return /* @__PURE__ */_jsx(ToggleGroupValueProvider, {
      scope: props.__scopeToggleGroup,
      type: "single",
      value: value ? [value] : [],
      defaultValue: value,
      onItemActivate: setValue,
      onItemDeactivate: React.useCallback(function () {
        return disableDeactivation ? null : setValue("");
      }, [setValue, disableDeactivation]),
      children: /* @__PURE__ */_jsx(ToggleGroupImpl, {
        ...toggleGroupSingleProps,
        ref: forwardedRef,
        children
      })
    });
  }),
  ToggleGroupImplMultiple = /* @__PURE__ */React.forwardRef(function (props, forwardedRef) {
    var {
        value: valueProp,
        defaultValue,
        onValueChange = function () {},
        disableDeactivation,
        children,
        ...toggleGroupMultipleProps
      } = props,
      [value = [], setValue] = useControllableState({
        prop: valueProp,
        defaultProp: defaultValue,
        onChange: onValueChange
      }),
      handleButtonActivate = React.useCallback(function (itemValue) {
        return setValue(function () {
          var prevValue = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
          return [...prevValue, itemValue];
        });
      }, [setValue]),
      handleButtonDeactivate = React.useCallback(function (itemValue) {
        return setValue(function () {
          var prevValue = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
          return prevValue.filter(function (value2) {
            return value2 !== itemValue;
          });
        });
      }, [setValue]);
    return /* @__PURE__ */_jsx(ToggleGroupValueProvider, {
      scope: props.__scopeToggleGroup,
      type: "multiple",
      value,
      defaultValue: value,
      onItemActivate: handleButtonActivate,
      onItemDeactivate: handleButtonDeactivate,
      children: /* @__PURE__ */_jsx(ToggleGroupImpl, {
        ...toggleGroupMultipleProps,
        ref: forwardedRef,
        children
      })
    });
  }),
  ToggleGroupFrame = styled(View, {
    name: TOGGLE_GROUP_NAME
  }),
  ToggleGroupImpl = ToggleGroupFrame.styleable(function (props, forwardedRef) {
    var {
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
      content = /* @__PURE__ */_jsx(ToggleGroupFrame, {
        role: "group",
        ref: forwardedRef,
        "data-disabled": disabled ? "" : void 0,
        ...toggleGroupProps
      });
    return /* @__PURE__ */_jsx(ToggleGroupContext, {
      scope: __scopeToggleGroup,
      rovingFocus,
      disabled,
      children: /* @__PURE__ */_jsx(ToggleContext.Provider, {
        color,
        children: rovingFocus ? /* @__PURE__ */_jsx(RovingFocusGroup, {
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
//# sourceMappingURL=ToggleGroup.native.js.map
