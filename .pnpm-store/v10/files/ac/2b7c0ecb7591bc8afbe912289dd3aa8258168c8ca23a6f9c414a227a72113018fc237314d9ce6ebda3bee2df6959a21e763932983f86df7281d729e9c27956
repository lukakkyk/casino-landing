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
var ToggleGroup_exports = {};
__export(ToggleGroup_exports, {
  ToggleGroup: () => ToggleGroup
});
module.exports = __toCommonJS(ToggleGroup_exports);
var import_constants = require("@tamagui/constants"),
  import_focusable = require("@tamagui/focusable"),
  import_helpers = require("@tamagui/helpers"),
  import_roving_focus = require("@tamagui/roving-focus"),
  import_use_controllable_state = require("@tamagui/use-controllable-state"),
  import_use_direction = require("@tamagui/use-direction"),
  import_web = require("@tamagui/web"),
  import_react = __toESM(require("react"), 1),
  import_Toggle = require("./Toggle.cjs"),
  import_context = require("./context.cjs"),
  import_jsx_runtime = require("react/jsx-runtime");
const TOGGLE_GROUP_NAME = "ToggleGroup",
  TOGGLE_GROUP_ITEM_NAME = "ToggleGroupItem",
  TOGGLE_GROUP_CONTEXT = "ToggleGroup",
  {
    Provider: ToggleGroupItemProvider
  } = (0, import_web.createStyledContext)(),
  {
    Provider: ToggleGroupContext,
    useStyledContext: useToggleGroupContext
  } = (0, import_web.createStyledContext)({}),
  ToggleGroupItem = import_Toggle.ToggleFrame.styleable((props, forwardedRef) => {
    const valueContext = useToggleGroupValueContext(props.__scopeToggleGroup),
      context = useToggleGroupContext(props.__scopeToggleGroup),
      toggleContext = import_context.context.useStyledContext(props.__scopeToggleGroup),
      active = valueContext?.value.includes(props.value),
      color = props.color || toggleContext.color,
      disabled = context.disabled || props.disabled || !1,
      inner = /* @__PURE__ */(0, import_jsx_runtime.jsx)(ToggleGroupItemImpl, {
        ref: forwardedRef,
        tabIndex: disabled ? -1 : 0,
        ...props,
        active,
        disabled
      });
    return /* @__PURE__ */(0, import_jsx_runtime.jsx)(ToggleGroupItemProvider, {
      scope: props.__scopeToggleGroup,
      children: /* @__PURE__ */(0, import_jsx_runtime.jsx)(import_context.context.Provider, {
        color,
        active,
        children: context.rovingFocus ? /* @__PURE__ */(0, import_jsx_runtime.jsx)(import_roving_focus.RovingFocusGroup.Item, {
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
const ToggleGroupItemImpl = import_react.default.forwardRef((props, forwardedRef) => {
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
    return /* @__PURE__ */(0, import_jsx_runtime.jsx)(import_Toggle.Toggle, {
      ...typeProps,
      ...itemProps,
      ref: forwardedRef,
      onActiveChange: pressed => {
        pressed ? valueContext.onItemActivate(value) : valueContext.onItemDeactivate(value);
      }
    });
  }),
  ToggleGroup = (0, import_helpers.withStaticProperties)(import_react.default.forwardRef((props, forwardedRef) => {
    const {
      type,
      ...toggleGroupProps
    } = props;
    if (import_constants.isWeb || import_react.default.useEffect(() => {
      if (props.id) return (0, import_focusable.registerFocusable)(props.id, {
        focus: () => {}
      });
    }, [props.id]), type === "single") return /* @__PURE__ */(0, import_jsx_runtime.jsx)(ToggleGroupImplSingle, {
      ...toggleGroupProps,
      ref: forwardedRef
    });
    if (type === "multiple") return /* @__PURE__ */(0, import_jsx_runtime.jsx)(ToggleGroupImplMultiple, {
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
  } = (0, import_web.createStyledContext)(),
  ToggleGroupImplSingle = import_react.default.forwardRef((props, forwardedRef) => {
    const {
        value: valueProp,
        defaultValue,
        onValueChange = () => {},
        disableDeactivation = !1,
        children,
        ...toggleGroupSingleProps
      } = props,
      [value, setValue] = (0, import_use_controllable_state.useControllableState)({
        prop: valueProp,
        defaultProp: defaultValue,
        onChange: onValueChange
      });
    return /* @__PURE__ */(0, import_jsx_runtime.jsx)(ToggleGroupValueProvider, {
      scope: props.__scopeToggleGroup,
      type: "single",
      value: value ? [value] : [],
      defaultValue: value,
      onItemActivate: setValue,
      onItemDeactivate: import_react.default.useCallback(() => disableDeactivation ? null : setValue(""), [setValue, disableDeactivation]),
      children: /* @__PURE__ */(0, import_jsx_runtime.jsx)(ToggleGroupImpl, {
        ...toggleGroupSingleProps,
        ref: forwardedRef,
        children
      })
    });
  }),
  ToggleGroupImplMultiple = import_react.default.forwardRef((props, forwardedRef) => {
    const {
        value: valueProp,
        defaultValue,
        onValueChange = () => {},
        disableDeactivation,
        children,
        ...toggleGroupMultipleProps
      } = props,
      [value = [], setValue] = (0, import_use_controllable_state.useControllableState)({
        prop: valueProp,
        defaultProp: defaultValue,
        onChange: onValueChange
      }),
      handleButtonActivate = import_react.default.useCallback(itemValue => setValue((prevValue = []) => [...prevValue, itemValue]), [setValue]),
      handleButtonDeactivate = import_react.default.useCallback(itemValue => setValue((prevValue = []) => prevValue.filter(value2 => value2 !== itemValue)), [setValue]);
    return /* @__PURE__ */(0, import_jsx_runtime.jsx)(ToggleGroupValueProvider, {
      scope: props.__scopeToggleGroup,
      type: "multiple",
      value,
      defaultValue: value,
      onItemActivate: handleButtonActivate,
      onItemDeactivate: handleButtonDeactivate,
      children: /* @__PURE__ */(0, import_jsx_runtime.jsx)(ToggleGroupImpl, {
        ...toggleGroupMultipleProps,
        ref: forwardedRef,
        children
      })
    });
  }),
  ToggleGroupFrame = (0, import_web.styled)(import_web.View, {
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
      direction = (0, import_use_direction.useDirection)(dir),
      content = /* @__PURE__ */(0, import_jsx_runtime.jsx)(ToggleGroupFrame, {
        role: "group",
        ref: forwardedRef,
        "data-disabled": disabled ? "" : void 0,
        ...toggleGroupProps
      });
    return /* @__PURE__ */(0, import_jsx_runtime.jsx)(ToggleGroupContext, {
      scope: __scopeToggleGroup,
      rovingFocus,
      disabled,
      children: /* @__PURE__ */(0, import_jsx_runtime.jsx)(import_context.context.Provider, {
        color,
        children: rovingFocus ? /* @__PURE__ */(0, import_jsx_runtime.jsx)(import_roving_focus.RovingFocusGroup, {
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