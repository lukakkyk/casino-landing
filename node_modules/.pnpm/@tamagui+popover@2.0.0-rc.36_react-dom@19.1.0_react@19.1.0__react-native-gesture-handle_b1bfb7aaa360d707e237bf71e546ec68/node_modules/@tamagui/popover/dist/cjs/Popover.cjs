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
var Popover_exports = {};
__export(Popover_exports, {
  Popover: () => Popover,
  PopoverAnchor: () => PopoverAnchor,
  PopoverArrow: () => PopoverArrow,
  PopoverClose: () => PopoverClose,
  PopoverContent: () => PopoverContent,
  PopoverContext: () => PopoverContext,
  PopoverContextProvider: () => PopoverContextProvider,
  PopoverTrigger: () => PopoverTrigger,
  PopoverTriggerContext: () => PopoverTriggerContext,
  PopoverZIndexContext: () => PopoverZIndexContext,
  closeLastOpenedPopover: () => closeLastOpenedPopover,
  closeOpenPopovers: () => closeOpenPopovers,
  hasOpenPopovers: () => hasOpenPopovers,
  usePopoverContext: () => usePopoverContext,
  usePopoverOpen: () => usePopoverOpen,
  usePopoverTriggerContext: () => usePopoverTriggerContext,
  usePopoverTriggerSetup: () => usePopoverTriggerSetup
});
module.exports = __toCommonJS(Popover_exports);
var import_polyfill_dev = require("@tamagui/polyfill-dev"),
  import_adapt = require("@tamagui/adapt"),
  import_animate = require("@tamagui/animate"),
  import_animate_presence = require("@tamagui/animate-presence"),
  import_compose_refs = require("@tamagui/compose-refs"),
  import_constants = require("@tamagui/constants"),
  import_core = require("@tamagui/core"),
  import_dismissable = require("@tamagui/dismissable"),
  import_floating = require("@tamagui/floating"),
  import_focus_scope = require("@tamagui/focus-scope"),
  import_helpers = require("@tamagui/helpers"),
  import_popper = require("@tamagui/popper"),
  import_portal = require("@tamagui/portal"),
  import_remove_scroll = require("@tamagui/remove-scroll"),
  import_scroll_view = require("@tamagui/scroll-view"),
  import_controller = require("@tamagui/sheet/controller"),
  import_stacks = require("@tamagui/stacks"),
  import_use_controllable_state = require("@tamagui/use-controllable-state"),
  React = __toESM(require("react"), 1),
  import_useFloatingContext = require("./useFloatingContext.cjs"),
  import_jsx_runtime = require("react/jsx-runtime");
const needsRepropagation = (0, import_portal.needsPortalRepropagation)(),
  openPopovers = /* @__PURE__ */new Set(),
  hasOpenPopovers = () => openPopovers.size > 0,
  closeOpenPopovers = () => openPopovers.size === 0 ? !1 : (openPopovers.forEach(setOpen => setOpen(!1)), !0),
  closeLastOpenedPopover = () => {
    if (openPopovers.size === 0) return !1;
    const last = Array.from(openPopovers).pop();
    return last ? (last(!1), !0) : !1;
  },
  PopoverContext = (0, import_core.createStyledContext)(
  // since we always provide this we can avoid setting here
  {}, "Popover__"),
  PopoverZIndexContext = React.createContext(void 0),
  PopoverTriggerContext = (0, import_core.createStyledContext)({}, "PopoverTrigger__"),
  usePopoverContext = PopoverContext.useStyledContext,
  usePopoverTriggerContext = PopoverTriggerContext.useStyledContext;
function usePopoverOpen(scope) {
  return usePopoverContext(scope).open;
}
function usePopoverTriggerSetup(open) {
  const triggerStateSettersRef = React.useRef(/* @__PURE__ */new Map()),
    activeTriggerIdRef = React.useRef(null),
    setActiveTrigger = (0, import_core.useEvent)(id => {
      const prevId = activeTriggerIdRef.current;
      prevId !== id && (prevId && triggerStateSettersRef.current.get(prevId)?.(!1), activeTriggerIdRef.current = id, id && open && triggerStateSettersRef.current.get(id)?.(!0));
    }),
    registerTrigger = (0, import_core.useEvent)((id, setOpenState) => {
      triggerStateSettersRef.current.set(id, setOpenState), setOpenState(activeTriggerIdRef.current === id && open);
    }),
    unregisterTrigger = (0, import_core.useEvent)(id => {
      triggerStateSettersRef.current.delete(id), activeTriggerIdRef.current === id && (activeTriggerIdRef.current = null);
    });
  return React.useEffect(() => {
    if (!open) {
      setActiveTrigger(null);
      return;
    }
    const activeId = activeTriggerIdRef.current;
    activeId && triggerStateSettersRef.current.get(activeId)?.(!0);
  }, [open, setActiveTrigger]), {
    setActiveTrigger,
    registerTrigger,
    unregisterTrigger
  };
}
const PopoverContextProvider = React.memo(({
    scope,
    children,
    open,
    onOpenChange,
    onOpenToggle,
    triggerRef,
    id = "",
    contentId,
    hasCustomAnchor = !1,
    onCustomAnchorAdd = voidFn,
    onCustomAnchorRemove = voidFn,
    anchorTo,
    adaptScope,
    breakpointActive,
    keepChildrenMounted,
    disableDismissable,
    hoverable
  }) => {
    const [branches] = React.useState(() => /* @__PURE__ */new Set()),
      {
        setActiveTrigger,
        registerTrigger,
        unregisterTrigger
      } = usePopoverTriggerSetup(open);
    return /* @__PURE__ */(0, import_jsx_runtime.jsx)(PopoverContext.Provider, {
      scope,
      popoverScope: scope,
      adaptScope,
      id,
      contentId,
      triggerRef,
      open,
      onOpenChange,
      onOpenToggle,
      hasCustomAnchor,
      onCustomAnchorAdd,
      onCustomAnchorRemove,
      anchorTo,
      branches,
      breakpointActive,
      keepChildrenMounted,
      disableDismissable,
      hoverable,
      children: /* @__PURE__ */(0, import_jsx_runtime.jsx)(PopoverTriggerContext.Provider, {
        scope,
        triggerRef,
        hasCustomAnchor,
        anchorTo,
        branches,
        onOpenToggle,
        setActiveTrigger,
        registerTrigger,
        unregisterTrigger,
        children
      })
    });
  }),
  voidFn = () => {},
  PopoverAnchor = React.memo(React.forwardRef(function (props, forwardedRef) {
    const {
        scope,
        ...rest
      } = props,
      context = usePopoverContext(scope),
      {
        onCustomAnchorAdd,
        onCustomAnchorRemove
      } = context || {};
    return React.useEffect(() => (onCustomAnchorAdd(), () => onCustomAnchorRemove()), [onCustomAnchorAdd, onCustomAnchorRemove]), /* @__PURE__ */(0, import_jsx_runtime.jsx)(import_popper.PopperAnchor, {
      scope,
      ...rest,
      ref: forwardedRef
    });
  })),
  PopoverTrigger = React.memo(React.forwardRef(function (props, forwardedRef) {
    const {
        scope,
        disablePressTrigger,
        ...rest
      } = props,
      triggerContext = usePopoverTriggerContext(scope),
      triggerId = React.useId(),
      [open, setOpen] = React.useState(!1),
      anchorTo = triggerContext.anchorTo,
      triggerElRef = React.useRef(null),
      composedTriggerRef = (0, import_compose_refs.useComposedRefs)(forwardedRef, triggerElRef),
      {
        registerTrigger,
        unregisterTrigger
      } = triggerContext;
    if (React.useEffect(() => (registerTrigger(triggerId, setOpen), () => {
      unregisterTrigger(triggerId);
    }), [registerTrigger, unregisterTrigger, triggerId]), !rest.children) return null;
    const activateSelf = () => {
        triggerContext.setActiveTrigger(triggerId);
        const el = triggerElRef.current;
        el && (triggerContext.triggerRef.current = el);
      },
      trigger = /* @__PURE__ */(0, import_jsx_runtime.jsx)(import_core.View, {
        "aria-expanded": open,
        "data-state": getState(open),
        ...rest,
        ref: composedTriggerRef,
        onPress: (0, import_helpers.composeEventHandlers)(rest.onPress, () => {
          disablePressTrigger || (triggerContext.setActiveTrigger(open ? null : triggerId), triggerContext.onOpenToggle());
        }),
        onMouseEnter: (0, import_helpers.composeEventHandlers)(rest.onMouseEnter, activateSelf),
        onPressIn: (0, import_helpers.composeEventHandlers)(rest.onPressIn, activateSelf),
        onFocus: (0, import_helpers.composeEventHandlers)(rest.onFocus, activateSelf)
      }),
      virtualRef = React.useMemo(() => anchorTo ? {
        current: {
          getBoundingClientRect: () => import_constants.isWeb ? DOMRect.fromRect(anchorTo) : anchorTo,
          ...(!import_constants.isWeb && {
            measure: c => c(anchorTo?.x, anchorTo?.y, anchorTo?.width, anchorTo?.height),
            measureInWindow: c => c(anchorTo?.x, anchorTo?.y, anchorTo?.width, anchorTo?.height)
          })
        }
      } : null, [triggerContext.anchorTo, anchorTo?.x, anchorTo?.y, anchorTo?.height, anchorTo?.width]),
      wrappedTrigger = import_constants.isWeb ? /* @__PURE__ */(0, import_jsx_runtime.jsx)(import_dismissable.DismissableBranch, {
        branches: triggerContext.branches,
        children: trigger
      }) : trigger;
    return triggerContext.hasCustomAnchor ? wrappedTrigger : /* @__PURE__ */(0, import_jsx_runtime.jsx)(import_popper.PopperAnchor, {
      ...(virtualRef && {
        virtualRef
      }),
      scope,
      asChild: !0,
      children: wrappedTrigger
    });
  })),
  PopoverContent = import_popper.PopperContentFrame.styleable(function (props, forwardedRef) {
    const {
        trapFocus,
        enableRemoveScroll = !1,
        zIndex: zIndexProp,
        scope,
        ...contentImplProps
      } = props,
      context = usePopoverContext(scope),
      zIndexFromContext = React.useContext(PopoverZIndexContext),
      zIndex = zIndexProp ?? zIndexFromContext,
      open = usePopoverOpen(scope),
      contentRef = React.useRef(null),
      composedRefs = (0, import_compose_refs.useComposedRefs)(forwardedRef, contentRef),
      isRightClickOutsideRef = React.useRef(!1),
      [isFullyHidden, setIsFullyHidden] = React.useState(!open);
    return (0, import_constants.useIsomorphicLayoutEffect)(() => {
      open && isFullyHidden && setIsFullyHidden(!1);
    }, [open, isFullyHidden]), !context.keepChildrenMounted && isFullyHidden && !open ? null : /* @__PURE__ */(0, import_jsx_runtime.jsx)(PopoverPortal, {
      passThrough: context.breakpointActive,
      context,
      open,
      zIndex,
      children: /* @__PURE__ */(0, import_jsx_runtime.jsx)(import_core.View, {
        passThrough: context.breakpointActive,
        pointerEvents: open ? contentImplProps.pointerEvents ?? "auto" : "none",
        children: /* @__PURE__ */(0, import_jsx_runtime.jsx)(PopoverContentImpl, {
          ...contentImplProps,
          context,
          open,
          enableRemoveScroll,
          ref: composedRefs,
          setIsFullyHidden,
          scope,
          trapFocus: trapFocus ?? open,
          disableOutsidePointerEvents: !0,
          onCloseAutoFocus: props.onCloseAutoFocus === !1 ? void 0 : (0, import_helpers.composeEventHandlers)(props.onCloseAutoFocus, event => {
            event.defaultPrevented || (event.preventDefault(), isRightClickOutsideRef.current || context.triggerRef.current?.focus());
          }),
          onPointerDownOutside: (0, import_helpers.composeEventHandlers)(props.onPointerDownOutside, event => {
            const originalEvent = event.detail.originalEvent,
              ctrlLeftClick = originalEvent.button === 0 && originalEvent.ctrlKey === !0,
              isRightClick = originalEvent.button === 2 || ctrlLeftClick;
            isRightClickOutsideRef.current = isRightClick;
          }, {
            checkDefaultPrevented: !1
          }),
          onFocusOutside: (0, import_helpers.composeEventHandlers)(props.onFocusOutside, event => event.preventDefault(), {
            checkDefaultPrevented: !1
          })
        })
      })
    });
  }),
  useParentContexts = scope => {
    const context = usePopoverContext(scope),
      triggerContext = usePopoverTriggerContext(scope),
      popperContext = (0, import_popper.usePopperContext)(scope),
      adaptContext = (0, import_adapt.useAdaptContext)(context.adaptScope);
    return {
      popperContext,
      adaptContext,
      context,
      triggerContext
    };
  };
function RepropagateParentContexts({
  adaptContext,
  children,
  context,
  triggerContext,
  popperContext
}) {
  return /* @__PURE__ */(0, import_jsx_runtime.jsx)(import_popper.PopperProvider, {
    scope: context.popoverScope,
    ...popperContext,
    children: /* @__PURE__ */(0, import_jsx_runtime.jsx)(PopoverContext.Provider, {
      scope: context.popoverScope,
      ...context,
      children: /* @__PURE__ */(0, import_jsx_runtime.jsx)(PopoverTriggerContext.Provider, {
        scope: context.popoverScope,
        ...triggerContext,
        children: /* @__PURE__ */(0, import_jsx_runtime.jsx)(import_adapt.ProvideAdaptContext, {
          ...adaptContext,
          children
        })
      })
    })
  });
}
const PortalAdaptSafe = ({
  children,
  context
}) => {
  "use no memo";

  if (needsRepropagation) {
    const parentContexts = useParentContexts(context.popoverScope);
    return /* @__PURE__ */(0, import_jsx_runtime.jsx)(import_adapt.AdaptPortalContents, {
      scope: context.adaptScope,
      children: /* @__PURE__ */(0, import_jsx_runtime.jsx)(RepropagateParentContexts, {
        ...parentContexts,
        children
      })
    });
  }
  return /* @__PURE__ */(0, import_jsx_runtime.jsx)(import_adapt.AdaptPortalContents, {
    scope: context.adaptScope,
    children
  });
};
function PopoverPortal({
  context,
  open,
  zIndex,
  passThrough,
  children,
  onPress
}) {
  "use no memo";

  let content = children;
  if (needsRepropagation) {
    const parentContexts = useParentContexts(context.popoverScope);
    content = /* @__PURE__ */(0, import_jsx_runtime.jsx)(RepropagateParentContexts, {
      ...parentContexts,
      children: content
    });
  }
  return /* @__PURE__ */(0, import_jsx_runtime.jsxs)(import_portal.Portal, {
    passThrough,
    stackZIndex: !0,
    zIndex,
    children: [!!open && !context.breakpointActive && !context.hoverable && /* @__PURE__ */(0, import_jsx_runtime.jsx)(import_stacks.YStack, {
      fullscreen: !0,
      onPress: (0, import_helpers.composeEventHandlers)(onPress, context.onOpenToggle)
    }), content]
  });
}
const PopoverContentImpl = React.forwardRef(function (props, forwardedRef) {
    const {
        trapFocus,
        scope,
        onOpenAutoFocus,
        onCloseAutoFocus,
        disableOutsidePointerEvents,
        disableFocusScope,
        onEscapeKeyDown,
        onPointerDownOutside,
        onFocusOutside,
        onInteractOutside,
        children,
        enableRemoveScroll,
        freezeContentsWhenHidden,
        setIsFullyHidden,
        lazyMount,
        forceUnmount,
        context,
        open,
        alwaysDisable,
        ...contentProps
      } = props,
      {
        keepChildrenMounted,
        disableDismissable
      } = context,
      handleExitComplete = React.useCallback(() => {
        setIsFullyHidden?.(!0);
      }, [setIsFullyHidden]);
    let contents = /* @__PURE__ */(0, import_jsx_runtime.jsx)(import_animate_presence.ResetPresence, {
      disable: context.breakpointActive,
      children
    });
    const handleDismiss = React.useCallback(() => {
      context.onOpenChange(!1, "press");
    }, [context]);
    return context.breakpointActive || ((!alwaysDisable || !alwaysDisable.focus) && (contents = /* @__PURE__ */(0, import_jsx_runtime.jsx)(import_focus_scope.FocusScope, {
      loop: trapFocus !== !1,
      enabled: context.breakpointActive || disableFocusScope ? !1 : open,
      trapped: context.breakpointActive ? !1 : trapFocus,
      onMountAutoFocus: onOpenAutoFocus,
      onUnmountAutoFocus: onCloseAutoFocus === !1 ? void 0 : onCloseAutoFocus,
      children: /* @__PURE__ */(0, import_jsx_runtime.jsx)("div", {
        style: dspContentsStyle,
        children: contents
      })
    })), (!alwaysDisable || !alwaysDisable["remove-scroll"]) && (contents = /* @__PURE__ */(0, import_jsx_runtime.jsx)(import_remove_scroll.RemoveScroll, {
      enabled: context.breakpointActive ? !1 : enableRemoveScroll ? open : !1,
      children: contents
    })), (!alwaysDisable || !alwaysDisable.dismiss) && (contents = /* @__PURE__ */(0, import_jsx_runtime.jsx)(import_dismissable.Dismissable, {
      branches: context.branches,
      forceUnmount: disableDismissable || (forceUnmount ?? !open),
      onEscapeKeyDown,
      onPointerDownOutside,
      onFocusOutside,
      onInteractOutside,
      onDismiss: handleDismiss,
      children: contents
    }))), /* @__PURE__ */(0, import_jsx_runtime.jsx)(import_animate.Animate, {
      type: "presence",
      present: !!open,
      keepChildrenMounted: !!keepChildrenMounted,
      onExitComplete: handleExitComplete,
      lazyMount,
      passThrough: context.breakpointActive,
      children: /* @__PURE__ */(0, import_jsx_runtime.jsx)(import_popper.PopperContent, {
        scope,
        "data-state": getState(open),
        id: context.contentId,
        ref: forwardedRef,
        passThrough: context.breakpointActive,
        ...(!contentProps.unstyled && {
          size: "$true",
          backgroundColor: "$background",
          alignItems: "center"
        }),
        ...contentProps,
        children: /* @__PURE__ */(0, import_jsx_runtime.jsx)(PortalAdaptSafe, {
          context,
          children: contents
        })
      }, context.contentId)
    });
  }),
  dspContentsStyle = {
    display: "contents"
  },
  PopoverClose = React.forwardRef(function (props, forwardedRef) {
    const {
        scope,
        ...rest
      } = props,
      context = usePopoverContext(scope);
    return /* @__PURE__ */(0, import_jsx_runtime.jsx)(import_stacks.YStack, {
      ...rest,
      ref: forwardedRef,
      componentName: "PopoverClose",
      onPress: (0, import_helpers.composeEventHandlers)(props.onPress, () => context?.onOpenChange?.(!1, "press"))
    });
  }),
  PopoverArrow = import_popper.PopperArrowFrame.styleable(function (props, forwardedRef) {
    const {
        scope,
        ...rest
      } = props,
      context = usePopoverContext(scope);
    return (0, import_adapt.useAdaptIsActive)(context.adaptScope) ? null : /* @__PURE__ */(0, import_jsx_runtime.jsx)(import_popper.PopperArrow, {
      scope,
      componentName: "PopoverArrow",
      ...rest,
      ref: forwardedRef
    });
  }),
  PopoverScrollView = React.forwardRef(({
    scope,
    ...props
  }, ref) => {
    const context = usePopoverContext(scope);
    return /* @__PURE__ */(0, import_jsx_runtime.jsx)(import_scroll_view.ScrollView, {
      ref,
      pointerEvents: context.breakpointActive ? "none" : void 0,
      scrollEnabled: !context.breakpointActive,
      passThrough: context.breakpointActive,
      ...props
    });
  }),
  DEFAULT_SCOPE = "",
  Popover = (0, import_helpers.withStaticProperties)(React.forwardRef(function ({
    scope = DEFAULT_SCOPE,
    ...props
  }, ref) {
    const id = React.useId(),
      adaptScope = `PopoverAdapt${scope}`;
    return /* @__PURE__ */(0, import_jsx_runtime.jsx)(import_adapt.AdaptParent, {
      scope: adaptScope,
      portal: !0,
      children: /* @__PURE__ */(0, import_jsx_runtime.jsx)(PopoverInner, {
        adaptScope,
        ref,
        id,
        scope,
        ...props
      })
    });
  }), {
    Anchor: PopoverAnchor,
    Arrow: PopoverArrow,
    Trigger: PopoverTrigger,
    Content: PopoverContent,
    Close: PopoverClose,
    Adapt: import_adapt.Adapt,
    ScrollView: PopoverScrollView,
    FocusScope: import_focus_scope.FocusScopeController
  }),
  PopoverInner = React.forwardRef(function (props, forwardedRef) {
    const {
        children,
        open: openProp,
        defaultOpen,
        onOpenChange,
        scope = DEFAULT_SCOPE,
        keepChildrenMounted: keepChildrenMountedProp,
        hoverable,
        disableFocus,
        disableDismissable,
        zIndex,
        id,
        adaptScope,
        ...restProps
      } = props,
      triggerRef = React.useRef(null),
      [hasCustomAnchor, setHasCustomAnchor] = React.useState(!1),
      viaRef = React.useRef(void 0),
      [keepChildrenMounted] = (0, import_use_controllable_state.useControllableState)({
        prop: keepChildrenMountedProp,
        defaultProp: !1,
        transition: keepChildrenMountedProp === "lazy"
      }),
      [open, setOpen] = (0, import_use_controllable_state.useControllableState)({
        prop: openProp,
        defaultProp: defaultOpen || !1,
        onChange: val => {
          onOpenChange?.(val, viaRef.current);
        }
      });
    React.useEffect(() => {
      if (open) return openPopovers.add(setOpen), () => {
        openPopovers.delete(setOpen);
      };
    }, [open, setOpen]);
    const handleOpenChange = (0, import_core.useEvent)((val, via) => {
        viaRef.current = via, setOpen(val);
      }),
      isAdapted = (0, import_adapt.useAdaptIsActive)(adaptScope),
      floatingContext = (0, import_useFloatingContext.useFloatingContext)({
        open,
        setOpen: handleOpenChange,
        disable: isAdapted,
        hoverable,
        disableFocus
      }),
      [anchorTo, setAnchorToRaw] = React.useState(),
      setAnchorTo = (0, import_core.useCreateShallowSetState)(setAnchorToRaw);
    React.useImperativeHandle(forwardedRef, () => ({
      anchorTo: setAnchorTo,
      toggle: () => setOpen(prev => !prev),
      open: () => setOpen(!0),
      close: () => setOpen(!1),
      setOpen
    }));
    const contentId = React.useId(),
      onOpenToggle = (0, import_core.useEvent)(() => {
        open && isAdapted || setOpen(!open);
      }),
      onCustomAnchorAdd = React.useCallback(() => setHasCustomAnchor(!0), []),
      onCustomAnchorRemove = React.useCallback(() => setHasCustomAnchor(!1), []),
      contents = /* @__PURE__ */(0, import_jsx_runtime.jsx)(import_popper.Popper, {
        open,
        passThrough: isAdapted,
        scope,
        stayInFrame: !0,
        ...restProps,
        children: /* @__PURE__ */(0, import_jsx_runtime.jsx)(PopoverContextProvider, {
          scope,
          open,
          onOpenChange: handleOpenChange,
          onOpenToggle,
          triggerRef,
          id,
          contentId,
          hasCustomAnchor,
          onCustomAnchorAdd,
          onCustomAnchorRemove,
          anchorTo,
          adaptScope,
          breakpointActive: isAdapted,
          keepChildrenMounted,
          disableDismissable,
          hoverable,
          children: /* @__PURE__ */(0, import_jsx_runtime.jsx)(PopoverSheetController, {
            onOpenChange: setOpen,
            open,
            scope,
            children
          })
        })
      });
    let result = /* @__PURE__ */(0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, {
      children: import_constants.isWeb ? /* @__PURE__ */(0, import_jsx_runtime.jsx)(import_floating.FloatingOverrideContext.Provider, {
        value: floatingContext,
        children: contents
      }) : contents
    });
    return zIndex !== void 0 ? /* @__PURE__ */(0, import_jsx_runtime.jsx)(PopoverZIndexContext.Provider, {
      value: zIndex,
      children: result
    }) : result;
  });
function getState(open) {
  return open ? "open" : "closed";
}
const PopoverSheetController = ({
    open,
    scope,
    ...props
  }) => {
    const context = usePopoverContext(scope),
      showSheet = useShowPopoverSheet(context, open),
      breakpointActive = context?.breakpointActive,
      getShowSheet = (0, import_core.useGet)(showSheet);
    return /* @__PURE__ */(0, import_jsx_runtime.jsx)(import_controller.SheetController, {
      onOpenChange: val => {
        getShowSheet() && props.onOpenChange?.(val);
      },
      open,
      hidden: !breakpointActive,
      children: props.children
    });
  },
  useShowPopoverSheet = (context, open) => {
    const isAdapted = (0, import_adapt.useAdaptIsActive)(context.adaptScope);
    return open === !1 ? !1 : isAdapted;
  };