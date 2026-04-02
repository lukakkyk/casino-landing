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
var Select_exports = {};
__export(Select_exports, {
  Select: () => Select,
  SelectGroupFrame: () => SelectGroupFrame,
  SelectIcon: () => SelectIcon,
  SelectSeparator: () => SelectSeparator
});
module.exports = __toCommonJS(Select_exports);
var import_jsx_runtime = require("react/jsx-runtime"),
  import_adapt = require("@tamagui/adapt"),
  import_compose_refs = require("@tamagui/compose-refs"),
  import_constants = require("@tamagui/constants"),
  import_core = require("@tamagui/core"),
  import_focus_scope = require("@tamagui/focus-scope"),
  import_focusable = require("@tamagui/focusable"),
  import_get_token = require("@tamagui/get-token"),
  import_helpers = require("@tamagui/helpers"),
  import_separator = require("@tamagui/separator"),
  import_controller = require("@tamagui/sheet/controller"),
  import_stacks = require("@tamagui/stacks"),
  import_text = require("@tamagui/text"),
  import_use_controllable_state = require("@tamagui/use-controllable-state"),
  React = __toESM(require("react"), 1),
  import_context = require("./context.native.js"),
  import_SelectContent = require("./SelectContent.native.js"),
  import_SelectImpl = require("./SelectImpl.native.js"),
  import_SelectItem = require("./SelectItem.native.js"),
  import_SelectItemText = require("./SelectItemText.native.js"),
  import_SelectScrollButton = require("./SelectScrollButton.native.js"),
  import_SelectTrigger = require("./SelectTrigger.native.js"),
  import_SelectViewport = require("./SelectViewport.native.js"),
  import_useSelectBreakpointActive = require("./useSelectBreakpointActive.native.js"),
  VALUE_NAME = "SelectValue",
  SelectValueFrame = (0, import_core.styled)(import_text.SizableText, {
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
      context = (0, import_context.useSelectContext)(scope),
      itemParentContext = (0, import_context.useSelectItemParentContext)(scope),
      composedRefs = (0, import_compose_refs.useComposedRefs)(
      // @ts-ignore TODO react 19 type needs fix
      forwardedRef, context.onValueNodeChange),
      isEmptyValue = context.value == null || context.value === "",
      renderedValue = (_context_renderValue = context.renderValue) === null || _context_renderValue === void 0 ? void 0 : _context_renderValue.call(context, context.value),
      _ref,
      _ref1,
      children = (_ref1 = (_ref = childrenProp ?? renderedValue) !== null && _ref !== void 0 ? _ref : itemParentContext.selectedItem) !== null && _ref1 !== void 0 ? _ref1 : context.value,
      selectValueChildren = isEmptyValue ? placeholder ?? children : children;
    return /* @__PURE__ */(0, import_jsx_runtime.jsx)(SelectValueFrame, {
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
      if (((_child_type = child.type) === null || _child_type === void 0 || (_child_type_staticConfig = _child_type.staticConfig) === null || _child_type_staticConfig === void 0 ? void 0 : _child_type_staticConfig.componentName) === import_SelectItemText.ITEM_TEXT_NAME) return child.props.children;
      if (!((_child_props = child.props) === null || _child_props === void 0) && _child_props.children) return unwrapSelectItem(child.props.children);
    }
    return child;
  });
}
var SelectIcon = (0, import_core.styled)(import_stacks.XStack, {
    name: "SelectIcon",
    // @ts-ignore
    "aria-hidden": !0,
    children: /* @__PURE__ */(0, import_jsx_runtime.jsx)(import_text.Paragraph, {
      children: "\u25BC"
    })
  }),
  SelectItemIndicatorFrame = (0, import_core.styled)(import_stacks.XStack, {
    name: "SelectItemIndicator"
  }),
  SelectItemIndicator = /* @__PURE__ */React.forwardRef(function (props, forwardedRef) {
    var {
        scope,
        ...itemIndicatorProps
      } = props,
      context = (0, import_context.useSelectItemParentContext)(scope),
      itemContext = (0, import_SelectItem.useSelectItemContext)(scope);
    return context.shouldRenderWebNative ? null : itemContext.isSelected ? /* @__PURE__ */(0, import_jsx_runtime.jsx)(SelectItemIndicatorFrame, {
      "aria-hidden": !0,
      ...itemIndicatorProps,
      ref: forwardedRef
    }) : null;
  }),
  SelectIndicatorFrame = (0, import_core.styled)(import_stacks.YStack, {
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
      itemContext = (0, import_context.useSelectItemParentContext)(scope),
      context = (0, import_context.useSelectContext)(scope),
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
    }, [context.open, itemContext.listRef]), layout ? /* @__PURE__ */(0, import_jsx_runtime.jsx)(SelectIndicatorFrame, {
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
  } = (0, import_core.createStyledContext)({
    id: ""
  }, "SelectGroup"),
  SelectGroupFrame = (0, import_core.styled)(import_stacks.YStack, {
    name: GROUP_NAME,
    width: "100%"
  }),
  NativeSelectTextFrame = (0, import_core.styled)(import_text.SizableText, {
    render: "select",
    backgroundColor: "$background",
    borderColor: "$borderColor",
    hoverStyle: {
      backgroundColor: "$backgroundHover"
    }
  }),
  NativeSelectFrame = (0, import_core.styled)(import_stacks.YStack, {
    name: "NativeSelect",
    variants: {
      size: {
        "...size": function (val, extras) {
          var {
              tokens
            } = extras,
            paddingHorizontal = (0, import_core.getVariableValue)(tokens.space[val]),
            _tokens_radius_val;
          return {
            borderRadius: (_tokens_radius_val = tokens.radius[val]) !== null && _tokens_radius_val !== void 0 ? _tokens_radius_val : val,
            minHeight: tokens.size[val],
            paddingRight: paddingHorizontal + 20,
            paddingLeft: paddingHorizontal,
            paddingVertical: (0, import_get_token.getSpace)(val, {
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
      context = (0, import_context.useSelectContext)(scope),
      itemParentContext = (0, import_context.useSelectItemParentContext)(scope),
      _itemParentContext_size,
      size = (_itemParentContext_size = itemParentContext.size) !== null && _itemParentContext_size !== void 0 ? _itemParentContext_size : "$true",
      nativeSelectRef = React.useRef(null),
      content = function () {
        return itemParentContext.shouldRenderWebNative ? /* @__PURE__ */(0, import_jsx_runtime.jsx)(NativeSelectFrame, {
          asChild: !0,
          size,
          // @ts-expect-error until we support typing based on tag
          value: context.value,
          id: itemParentContext.id,
          children: /* @__PURE__ */(0, import_jsx_runtime.jsx)(NativeSelectTextFrame, {
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
        }) : /* @__PURE__ */(0, import_jsx_runtime.jsx)(SelectGroupFrame, {
          // @ts-ignore
          role: "group",
          "aria-labelledby": groupId,
          ...groupProps,
          ref: forwardedRef
        });
      }();
    return /* @__PURE__ */(0, import_jsx_runtime.jsx)(SelectGroupContextProvider, {
      scope,
      id: groupId || "",
      children: content
    });
  });
SelectGroup.displayName = GROUP_NAME;
var LABEL_NAME = "SelectLabel",
  SelectLabelFrame = (0, import_core.styled)(import_text.SizableText, {
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
            paddingVertical: (0, import_get_token.getSpace)(tokens.space[val], {
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
      context = (0, import_context.useSelectItemParentContext)(scope),
      groupContext = useSelectGroupContext(scope);
    return context.shouldRenderWebNative ? null : /* @__PURE__ */(0, import_jsx_runtime.jsx)(SelectLabelFrame, {
      render: "div",
      id: groupContext.id,
      size: context.size,
      ...labelProps,
      ref: forwardedRef
    });
  }),
  SelectSeparator = (0, import_core.styled)(import_separator.Separator, {
    name: "SelectSeparator"
  }),
  SelectSheetController = function (props) {
    var context = (0, import_context.useSelectContext)(props.scope),
      showSheet = (0, import_useSelectBreakpointActive.useShowSelectSheet)(context),
      isAdapted = (0, import_adapt.useAdaptIsActive)(context.adaptScope),
      getShowSheet = (0, import_core.useGet)(showSheet);
    return /* @__PURE__ */(0, import_jsx_runtime.jsx)(import_controller.SheetController, {
      onOpenChange: function (val) {
        getShowSheet() && props.onOpenChange(val);
      },
      open: context.open,
      hidden: !isAdapted,
      children: props.children
    });
  },
  SelectSheetImpl = function (props) {
    return /* @__PURE__ */(0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, {
      children: props.children
    });
  },
  Select = (0, import_helpers.withStaticProperties)(function (props) {
    var adaptScope = `AdaptSelect${props.scope || ""}`;
    return /* @__PURE__ */(0, import_jsx_runtime.jsx)(import_adapt.AdaptParent, {
      scope: adaptScope,
      portal: !0,
      children: /* @__PURE__ */(0, import_jsx_runtime.jsx)(SelectInner, {
        scope: props.scope,
        adaptScope,
        ...props
      })
    });
  }, {
    Adapt: import_adapt.Adapt,
    Content: import_SelectContent.SelectContent,
    Group: SelectGroup,
    Icon: SelectIcon,
    Item: import_SelectItem.SelectItem,
    ItemIndicator: SelectItemIndicator,
    ItemText: import_SelectItemText.SelectItemText,
    Label: SelectLabel,
    ScrollDownButton: import_SelectScrollButton.SelectScrollDownButton,
    ScrollUpButton: import_SelectScrollButton.SelectScrollUpButton,
    Trigger: import_SelectTrigger.SelectTrigger,
    Value: SelectValue,
    Viewport: import_SelectViewport.SelectViewport,
    Indicator: SelectIndicator,
    FocusScope: import_focus_scope.FocusScopeController
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
    isAdapted = (0, import_adapt.useAdaptIsActive)(adaptScope),
    SelectImpl = isAdapted || !import_constants.isWeb ? SelectSheetImpl : import_SelectImpl.SelectInlineImpl,
    forceUpdate = React.useReducer(function () {
      return {};
    }, {})[1],
    [selectedItem, setSelectedItem] = React.useState(null),
    [open, setOpen] = (0, import_use_controllable_state.useControllableState)({
      prop: openProp,
      defaultProp: defaultOpen || !1,
      onChange: onOpenChange
    }),
    [value, setValue] = (0, import_use_controllable_state.useControllableState)({
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
    if (props.id) return (0, import_focusable.registerFocusable)(props.id, {
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
  (0, import_constants.useIsomorphicLayoutEffect)(function () {
    selectedIndexRef.current = selectedIndex;
  });
  var shouldRenderWebNative = import_constants.isWeb && (native === !0 || native === "web" || Array.isArray(native) && native.includes("web")),
    setActiveIndexFast = React.useCallback(function (index) {
      activeIndexRef.current !== index && (activeIndexRef.current = index, typeof index == "number" && emitActiveIndex(index));
    }, [emitActiveIndex]),
    setActiveIndex = React.useCallback(function (index) {
      setActiveIndexFast(index), setActiveIndexState(index);
    }, [setActiveIndexFast]),
    content = /* @__PURE__ */(0, import_jsx_runtime.jsx)(import_context.SelectItemParentProvider, {
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
      onActiveChange: (0, import_core.useEvent)(function (value2, index) {
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
      children: /* @__PURE__ */(0, import_jsx_runtime.jsx)(import_context.SelectProvider, {
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
        children: /* @__PURE__ */(0, import_jsx_runtime.jsx)(SelectSheetController, {
          onOpenChange: setOpen,
          scope,
          children: shouldRenderWebNative ? children : /* @__PURE__ */(0, import_jsx_runtime.jsx)(SelectImpl, {
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
  return zIndex !== void 0 ? /* @__PURE__ */(0, import_jsx_runtime.jsx)(import_context.SelectZIndexContext.Provider, {
    value: zIndex,
    children: content
  }) : content;
}
//# sourceMappingURL=Select.native.js.map
