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
var Tooltip_exports = {};
__export(Tooltip_exports, {
  Tooltip: () => Tooltip2,
  TooltipGroup: () => TooltipGroup,
  closeOpenTooltips: () => closeOpenTooltips
});
module.exports = __toCommonJS(Tooltip_exports);
var import_polyfill_dev = require("@tamagui/polyfill-dev"),
  import_floating = require("@tamagui/floating"),
  import_core = require("@tamagui/core"),
  import_floating2 = require("@tamagui/floating"),
  import_get_token = require("@tamagui/get-token"),
  import_helpers = require("@tamagui/helpers"),
  import_popover = require("@tamagui/popover"),
  import_popper = require("@tamagui/popper"),
  import_use_controllable_state = require("@tamagui/use-controllable-state"),
  React = __toESM(require("react"), 1),
  import_jsx_runtime = require("react/jsx-runtime");
const TOOLTIP_SCOPE = "",
  ALWAYS_DISABLE_TOOLTIP = {
    focus: !0,
    "remove-scroll": !0
    // it's nice to hit escape to hide a tooltip
    // dismiss: true
  },
  TooltipContent = import_popper.PopperContentFrame.styleable((props, ref) => {
    const preventAnimation = React.useContext(PreventTooltipAnimationContext),
      zIndexFromContext = React.useContext(TooltipZIndexContext);
    return /* @__PURE__ */(0, import_jsx_runtime.jsx)(import_popover.PopoverContent, {
      scope: props.scope || TOOLTIP_SCOPE,
      alwaysDisable: ALWAYS_DISABLE_TOOLTIP,
      ...(!props.unstyled && {
        backgroundColor: "$background",
        alignItems: "center",
        pointerEvents: "none",
        size: "$true"
      }),
      ref,
      ...(zIndexFromContext !== void 0 && {
        zIndex: zIndexFromContext
      }),
      ...props,
      ...(preventAnimation && {
        transition: null
      })
    });
  }, {
    staticConfig: {
      componentName: "Tooltip"
    }
  }),
  TooltipArrow = React.forwardRef((props, ref) => /* @__PURE__ */(0, import_jsx_runtime.jsx)(import_popover.PopoverArrow, {
    scope: props.scope || TOOLTIP_SCOPE,
    componentName: "Tooltip",
    ref,
    ...props
  })),
  PreventTooltipAnimationContext = React.createContext(!1),
  TooltipZIndexContext = React.createContext(void 0),
  TooltipGroup = ({
    children,
    delay,
    preventAnimation = !1,
    timeoutMs
  }) => /* @__PURE__ */(0, import_jsx_runtime.jsx)(PreventTooltipAnimationContext.Provider, {
    value: preventAnimation,
    children: /* @__PURE__ */(0, import_jsx_runtime.jsx)(import_floating.FloatingDelayGroup, {
      timeoutMs,
      delay: React.useMemo(() => delay, [JSON.stringify(delay)]),
      children
    })
  }),
  setOpens = /* @__PURE__ */new Set(),
  closeOpenTooltips = () => {
    setOpens.forEach(x => x(!1));
  },
  TooltipComponent = React.forwardRef(function (props, ref) {
    "use no memo";

    const {
        children,
        delay: delayProp,
        restMs: restMsProp,
        onOpenChange: onOpenChangeProp,
        focus,
        open: openProp,
        disableAutoCloseOnScroll,
        zIndex,
        scope = TOOLTIP_SCOPE,
        ...restProps
      } = props,
      triggerRef = React.useRef(null),
      [hasCustomAnchor, setHasCustomAnchor] = React.useState(!1),
      {
        delay: delayGroup,
        setCurrentId
      } = (0, import_floating.useDelayGroupContext)(),
      delay = delayProp !== void 0 ? delayProp : delayGroup ?? 400,
      restMs = restMsProp ?? (typeof delay == "number" ? delay : 0),
      [open, setOpen] = (0, import_use_controllable_state.useControllableState)({
        prop: openProp,
        defaultProp: !1,
        onChange: onOpenChangeProp
      }),
      id = props.groupId,
      onOpenChange = (0, import_core.useEvent)(open2 => {
        open2 && setCurrentId(id), setOpen(open2);
      });
    React.useEffect(() => {
      if (!open || disableAutoCloseOnScroll || typeof document > "u") return;
      const closeIt = () => {
        setOpen(!1);
      };
      return setOpens.add(setOpen), document.documentElement.addEventListener("scroll", closeIt), () => {
        setOpens.delete(setOpen), document.documentElement.removeEventListener("scroll", closeIt);
      };
    }, [open, disableAutoCloseOnScroll]);
    const floatingContext = (0, import_popover.useFloatingContext)({
        open,
        setOpen: onOpenChange,
        disable: !1,
        disableFocus: !1,
        hoverable: !0,
        role: "tooltip",
        focus,
        groupId: id,
        delay,
        restMs
      }),
      onCustomAnchorAdd = React.useCallback(() => setHasCustomAnchor(!0), []),
      onCustomAnchorRemove = React.useCallback(() => setHasCustomAnchor(!1), []),
      contentId = React.useId(),
      smallerSize = props.unstyled ? null : (0, import_get_token.getSize)("$true", {
        shift: -2,
        bounds: [0]
      }),
      content = /* @__PURE__ */(0, import_jsx_runtime.jsx)(import_floating2.FloatingOverrideContext.Provider, {
        value: floatingContext,
        children: /* @__PURE__ */(0, import_jsx_runtime.jsx)(import_popper.Popper, {
          scope,
          size: smallerSize?.key,
          allowFlip: !0,
          stayInFrame: !0,
          open,
          ...restProps,
          children: /* @__PURE__ */(0, import_jsx_runtime.jsx)(import_popover.PopoverContextProvider, {
            scope,
            contentId,
            triggerRef,
            open,
            onOpenChange: setOpen,
            onOpenToggle: voidFn,
            hasCustomAnchor,
            onCustomAnchorAdd,
            onCustomAnchorRemove,
            children
          })
        })
      });
    return zIndex !== void 0 ? /* @__PURE__ */(0, import_jsx_runtime.jsx)(TooltipZIndexContext.Provider, {
      value: zIndex,
      children: content
    }) : content;
  }),
  TooltipTrigger = React.forwardRef(function (props, ref) {
    const {
      scope,
      ...rest
    } = props;
    return /* @__PURE__ */(0, import_jsx_runtime.jsx)(import_popover.PopoverTrigger, {
      ...rest,
      scope: scope || TOOLTIP_SCOPE,
      ref
    });
  }),
  TooltipAnchor = React.forwardRef(function (props, ref) {
    const {
      scope,
      ...rest
    } = props;
    return /* @__PURE__ */(0, import_jsx_runtime.jsx)(import_popover.PopoverAnchor, {
      ...rest,
      scope: scope || TOOLTIP_SCOPE,
      ref
    });
  }),
  Tooltip2 = (0, import_helpers.withStaticProperties)(TooltipComponent, {
    Anchor: TooltipAnchor,
    Arrow: TooltipArrow,
    Content: TooltipContent,
    Trigger: TooltipTrigger
  }),
  voidFn = () => {};