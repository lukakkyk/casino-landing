import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { Adapt, AdaptParent, useAdaptIsActive } from "@tamagui/adapt";
import { useComposedRefs } from "@tamagui/compose-refs";
import { isWeb, useIsomorphicLayoutEffect } from "@tamagui/constants";
import { createStyledContext, getVariableValue, styled, useEvent, useGet } from "@tamagui/core";
import { FocusScopeController } from "@tamagui/focus-scope";
import { registerFocusable } from "@tamagui/focusable";
import { getSpace } from "@tamagui/get-token";
import { withStaticProperties } from "@tamagui/helpers";
import { Separator } from "@tamagui/separator";
import { SheetController } from "@tamagui/sheet/controller";
import { XStack, YStack } from "@tamagui/stacks";
import { Paragraph, SizableText } from "@tamagui/text";
import { useControllableState } from "@tamagui/use-controllable-state";
import * as React from "react";
import { SelectItemParentProvider, SelectProvider, SelectZIndexContext, useSelectContext, useSelectItemParentContext } from "./context.native.js";
import { SelectContent } from "./SelectContent.native.js";
import { SelectInlineImpl } from "./SelectImpl.native.js";
import { SelectItem, useSelectItemContext } from "./SelectItem.native.js";
import { ITEM_TEXT_NAME, SelectItemText } from "./SelectItemText.native.js";
import { SelectScrollDownButton, SelectScrollUpButton } from "./SelectScrollButton.native.js";
import { SelectTrigger } from "./SelectTrigger.native.js";
import { SelectViewport } from "./SelectViewport.native.js";
import { useShowSelectSheet } from "./useSelectBreakpointActive.native.js";
var VALUE_NAME = "SelectValue",
  SelectValueFrame = styled(SizableText, {
    name: VALUE_NAME,
    userSelect: "none"
  }),
  SelectValue = SelectValueFrame.styleable(function (param, forwardedRef) {
    var {
        scope,
        children: childrenProp,
        placeholder,
        ...props
      } = param,
      _context_renderValue,
      context = useSelectContext(scope),
      itemParentContext = useSelectItemParentContext(scope),
      composedRefs = useComposedRefs(
      // @ts-ignore TODO react 19 type needs fix
      forwardedRef, context.onValueNodeChange),
      isEmptyValue = context.value == null || context.value === "",
      renderedValue = (_context_renderValue = context.renderValue) === null || _context_renderValue === void 0 ? void 0 : _context_renderValue.call(context, context.value),
      _ref,
      _ref1,
      children = (_ref1 = (_ref = childrenProp ?? renderedValue) !== null && _ref !== void 0 ? _ref : itemParentContext.selectedItem) !== null && _ref1 !== void 0 ? _ref1 : context.value,
      selectValueChildren = isEmptyValue ? placeholder ?? children : children;
    return /* @__PURE__ */_jsx(SelectValueFrame, {
      ...(!props.unstyled && {
        size: itemParentContext.size,
        ellipsis: !0,
        // we don't want events from the portalled `SelectValue` children to bubble
        // through the item they came from
        pointerEvents: "none"
      }),
      ref: composedRefs,
      ...props,
      children: unwrapSelectItem(selectValueChildren)
    });
  });
function unwrapSelectItem(selectValueChildren) {
  return React.Children.map(selectValueChildren, function (child) {
    if (child) {
      var _child_type_staticConfig, _child_type, _child_props;
      if (((_child_type = child.type) === null || _child_type === void 0 || (_child_type_staticConfig = _child_type.staticConfig) === null || _child_type_staticConfig === void 0 ? void 0 : _child_type_staticConfig.componentName) === ITEM_TEXT_NAME) return child.props.children;
      if (!((_child_props = child.props) === null || _child_props === void 0) && _child_props.children) return unwrapSelectItem(child.props.children);
    }
    return child;
  });
}
var SelectIcon = styled(XStack, {
    name: "SelectIcon",
    // @ts-ignore
    "aria-hidden": !0,
    children: /* @__PURE__ */_jsx(Paragraph, {
      children: "\u25BC"
    })
  }),
  SelectItemIndicatorFrame = styled(XStack, {
    name: "SelectItemIndicator"
  }),
  SelectItemIndicator = /* @__PURE__ */React.forwardRef(function (props, forwardedRef) {
    var {
        scope,
        ...itemIndicatorProps
      } = props,
      context = useSelectItemParentContext(scope),
      itemContext = useSelectItemContext(scope);
    return context.shouldRenderWebNative ? null : itemContext.isSelected ? /* @__PURE__ */_jsx(SelectItemIndicatorFrame, {
      "aria-hidden": !0,
      ...itemIndicatorProps,
      ref: forwardedRef
    }) : null;
  }),
  SelectIndicatorFrame = styled(YStack, {
    name: "SelectIndicator",
    variants: {
      unstyled: {
        false: {
          position: "absolute",
          top: 0,
          left: 0,
          pointerEvents: "none",
          zIndex: 10,
          backgroundColor: "$background",
          borderRadius: 0
        }
      }
    },
    defaultVariants: {
      unstyled: process.env.TAMAGUI_HEADLESS === "1"
    }
  }),
  SelectIndicator = SelectIndicatorFrame.styleable(function (param, forwardedRef) {
    var {
        scope,
        ...props
      } = param,
      itemContext = useSelectItemParentContext(scope),
      context = useSelectContext(scope),
      [layout, setLayout] = React.useState(null),
      rafRef = React.useRef(0);
    return React.useLayoutEffect(function () {
      var update = function (index) {
        typeof index == "number" && (cancelAnimationFrame(rafRef.current), rafRef.current = requestAnimationFrame(function () {
          var _itemContext_listRef_current,
            _itemContext_listRef,
            node = (_itemContext_listRef = itemContext.listRef) === null || _itemContext_listRef === void 0 || (_itemContext_listRef_current = _itemContext_listRef.current) === null || _itemContext_listRef_current === void 0 ? void 0 : _itemContext_listRef_current[index];
          node && setLayout({
            width: Math.round(node.offsetWidth),
            height: Math.round(node.offsetHeight),
            x: Math.round(node.offsetLeft),
            y: Math.round(node.offsetTop)
          });
        }));
      };
      return context.open && context.activeIndexRef.current !== null && update(context.activeIndexRef.current), itemContext.activeIndexSubscribe(update);
    }, [context.open, itemContext.listRef]), layout ? /* @__PURE__ */_jsx(SelectIndicatorFrame, {
      ref: forwardedRef,
      ...props,
      width: layout.width,
      height: layout.height,
      x: layout.x,
      y: layout.y
    }) : null;
  }),
  GROUP_NAME = "SelectGroup",
  {
    Provider: SelectGroupContextProvider,
    useStyledContext: useSelectGroupContext
  } = createStyledContext({
    id: ""
  }, "SelectGroup"),
  SelectGroupFrame = styled(YStack, {
    name: GROUP_NAME,
    width: "100%"
  }),
  NativeSelectTextFrame = styled(SizableText, {
    render: "select",
    backgroundColor: "$background",
    borderColor: "$borderColor",
    hoverStyle: {
      backgroundColor: "$backgroundHover"
    }
  }),
  NativeSelectFrame = styled(YStack, {
    name: "NativeSelect",
    variants: {
      size: {
        "...size": function (val, extras) {
          var {
              tokens
            } = extras,
            paddingHorizontal = getVariableValue(tokens.space[val]),
            _tokens_radius_val;
          return {
            borderRadius: (_tokens_radius_val = tokens.radius[val]) !== null && _tokens_radius_val !== void 0 ? _tokens_radius_val : val,
            minHeight: tokens.size[val],
            paddingRight: paddingHorizontal + 20,
            paddingLeft: paddingHorizontal,
            paddingVertical: getSpace(val, {
              shift: -3
            })
          };
        }
      },
      unstyled: {
        false: {
          borderWidth: 1,
          borderColor: "$borderColor",
          userSelect: "none",
          outlineWidth: 0,
          paddingRight: 10
        }
      }
    },
    defaultVariants: {
      size: "$2",
      unstyled: process.env.TAMAGUI_HEADLESS === "1"
    }
  }),
  SelectGroup = /* @__PURE__ */React.forwardRef(function (props, forwardedRef) {
    var {
        scope,
        ...groupProps
      } = props,
      groupId = React.useId(),
      context = useSelectContext(scope),
      itemParentContext = useSelectItemParentContext(scope),
      _itemParentContext_size,
      size = (_itemParentContext_size = itemParentContext.size) !== null && _itemParentContext_size !== void 0 ? _itemParentContext_size : "$true",
      nativeSelectRef = React.useRef(null),
      content = function () {
        return itemParentContext.shouldRenderWebNative ? /* @__PURE__ */_jsx(NativeSelectFrame, {
          asChild: !0,
          size,
          // @ts-expect-error until we support typing based on tag
          value: context.value,
          id: itemParentContext.id,
          children: /* @__PURE__ */_jsx(NativeSelectTextFrame, {
            // @ts-ignore it's ok since render="select"
            onChange: function (event) {
              itemParentContext.onChange(event.currentTarget.value);
            },
            size,
            ref: nativeSelectRef,
            style: {
              color: "var(--color)",
              // @ts-ignore
              appearance: "none"
            },
            children: props.children
          })
        }) : /* @__PURE__ */_jsx(SelectGroupFrame, {
          // @ts-ignore
          role: "group",
          "aria-labelledby": groupId,
          ...groupProps,
          ref: forwardedRef
        });
      }();
    return /* @__PURE__ */_jsx(SelectGroupContextProvider, {
      scope,
      id: groupId || "",
      children: content
    });
  });
SelectGroup.displayName = GROUP_NAME;
var LABEL_NAME = "SelectLabel",
  SelectLabelFrame = styled(SizableText, {
    name: LABEL_NAME,
    variants: {
      unstyled: {
        false: {
          size: "$true",
          ellipsis: !0,
          maxWidth: "100%",
          cursor: "default"
        }
      },
      size: {
        "...size": function (val, param) {
          var {
            tokens
          } = param;
          return {
            paddingHorizontal: tokens.space[val],
            paddingVertical: getSpace(tokens.space[val], {
              shift: -4
            })
          };
        }
      }
    },
    defaultVariants: {
      unstyled: process.env.TAMAGUI_HEADLESS === "1"
    }
  }),
  SelectLabel = SelectLabelFrame.styleable(function (props, forwardedRef) {
    var {
        scope,
        ...labelProps
      } = props,
      context = useSelectItemParentContext(scope),
      groupContext = useSelectGroupContext(scope);
    return context.shouldRenderWebNative ? null : /* @__PURE__ */_jsx(SelectLabelFrame, {
      render: "div",
      id: groupContext.id,
      size: context.size,
      ...labelProps,
      ref: forwardedRef
    });
  }),
  SelectSeparator = styled(Separator, {
    name: "SelectSeparator"
  }),
  SelectSheetController = function (props) {
    var context = useSelectContext(props.scope),
      showSheet = useShowSelectSheet(context),
      isAdapted = useAdaptIsActive(context.adaptScope),
      getShowSheet = useGet(showSheet);
    return /* @__PURE__ */_jsx(SheetController, {
      onOpenChange: function (val) {
        getShowSheet() && props.onOpenChange(val);
      },
      open: context.open,
      hidden: !isAdapted,
      children: props.children
    });
  },
  SelectSheetImpl = function (props) {
    return /* @__PURE__ */_jsx(_Fragment, {
      children: props.children
    });
  },
  Select = withStaticProperties(function (props) {
    var adaptScope = `AdaptSelect${props.scope || ""}`;
    return /* @__PURE__ */_jsx(AdaptParent, {
      scope: adaptScope,
      portal: !0,
      children: /* @__PURE__ */_jsx(SelectInner, {
        scope: props.scope,
        adaptScope,
        ...props
      })
    });
  }, {
    Adapt,
    Content: SelectContent,
    Group: SelectGroup,
    Icon: SelectIcon,
    Item: SelectItem,
    ItemIndicator: SelectItemIndicator,
    ItemText: SelectItemText,
    Label: SelectLabel,
    ScrollDownButton: SelectScrollDownButton,
    ScrollUpButton: SelectScrollUpButton,
    Trigger: SelectTrigger,
    Value: SelectValue,
    Viewport: SelectViewport,
    Indicator: SelectIndicator,
    FocusScope: FocusScopeController
  });
function useEmitter() {
  var listenersRef = React.useRef(/* @__PURE__ */new Set()),
    emit = React.useCallback(function (value) {
      listenersRef.current.forEach(function (l) {
        return l(value);
      });
    }, []),
    subscribe = React.useCallback(function (listener) {
      return listenersRef.current.add(listener), function () {
        listenersRef.current.delete(listener);
      };
    }, []);
  return [emit, subscribe];
}
function SelectInner(props) {
  var {
      scope = "",
      adaptScope,
      native,
      children,
      open: openProp,
      defaultOpen,
      onOpenChange,
      value: valueProp,
      defaultValue,
      onValueChange,
      disablePreventBodyScroll,
      size: sizeProp = "$true",
      onActiveChange,
      dir,
      id,
      renderValue,
      lazyMount,
      zIndex
    } = props,
    isAdapted = useAdaptIsActive(adaptScope),
    SelectImpl = isAdapted || !isWeb ? SelectSheetImpl : SelectInlineImpl,
    forceUpdate = React.useReducer(function () {
      return {};
    }, {})[1],
    [selectedItem, setSelectedItem] = React.useState(null),
    [open, setOpen] = useControllableState({
      prop: openProp,
      defaultProp: defaultOpen || !1,
      onChange: onOpenChange
    }),
    [value, setValue] = useControllableState({
      prop: valueProp,
      defaultProp: defaultValue || "",
      onChange: onValueChange,
      transition: !0
    });
  React.useEffect(function () {
    open && emitValue(value);
  }, [open]), React.useEffect(function () {
    emitValue(value);
  }, [value]), React.useEffect(function () {
    if (props.id) return registerFocusable(props.id, {
      focusAndSelect: function () {
        setOpen?.(function (value2) {
          return !value2;
        });
      },
      focus: function () {}
    });
  }, [props.id]);
  var activeIndexRef = React.useRef(null),
    [activeIndex, setActiveIndexState] = React.useState(null),
    [emitValue, valueSubscribe] = useEmitter(),
    [emitActiveIndex, activeIndexSubscribe] = useEmitter(),
    selectedIndexRef = React.useRef(null),
    listContentRef = React.useRef([]),
    [selectedIndex, setSelectedIndex] = React.useState(0),
    [valueNode, setValueNode] = React.useState(null);
  useIsomorphicLayoutEffect(function () {
    selectedIndexRef.current = selectedIndex;
  });
  var shouldRenderWebNative = isWeb && (native === !0 || native === "web" || Array.isArray(native) && native.includes("web")),
    setActiveIndexFast = React.useCallback(function (index) {
      activeIndexRef.current !== index && (activeIndexRef.current = index, typeof index == "number" && emitActiveIndex(index));
    }, [emitActiveIndex]),
    setActiveIndex = React.useCallback(function (index) {
      setActiveIndexFast(index), setActiveIndexState(index);
    }, [setActiveIndexFast]),
    content = /* @__PURE__ */_jsx(SelectItemParentProvider, {
      scopeName: scope,
      scope,
      adaptScope,
      initialValue: React.useMemo(function () {
        return value;
      }, [open]),
      size: sizeProp,
      activeIndexSubscribe,
      activeIndexRef,
      valueSubscribe,
      setOpen,
      id,
      onChange: React.useCallback(function (val) {
        setValue(val), emitValue(val);
      }, []),
      onActiveChange: useEvent(function (value2, index) {
        onActiveChange?.(value2, index);
      }),
      setSelectedIndex,
      setValueAtIndex: React.useCallback(function (index, value2) {
        listContentRef.current[index] = value2;
      }, []),
      shouldRenderWebNative,
      setActiveIndexFast,
      selectedItem,
      setSelectedItem,
      children: /* @__PURE__ */_jsx(SelectProvider, {
        scope,
        scopeName: scope,
        adaptScope,
        disablePreventBodyScroll,
        dir,
        blockSelection: !1,
        fallback: !1,
        forceUpdate,
        valueNode,
        onValueNodeChange: setValueNode,
        activeIndex,
        activeIndexRef,
        selectedIndex,
        setActiveIndex,
        value,
        open,
        native,
        renderValue,
        lazyMount,
        children: /* @__PURE__ */_jsx(SelectSheetController, {
          onOpenChange: setOpen,
          scope,
          children: shouldRenderWebNative ? children : /* @__PURE__ */_jsx(SelectImpl, {
            activeIndexRef,
            listContentRef,
            selectedIndexRef,
            setActiveIndexFast,
            ...props,
            open,
            value,
            children
          })
        })
      })
    });
  return zIndex !== void 0 ? /* @__PURE__ */_jsx(SelectZIndexContext.Provider, {
    value: zIndex,
    children: content
  }) : content;
}
export { Select, SelectGroupFrame, SelectIcon, SelectSeparator };
//# sourceMappingURL=Select.native.js.map
