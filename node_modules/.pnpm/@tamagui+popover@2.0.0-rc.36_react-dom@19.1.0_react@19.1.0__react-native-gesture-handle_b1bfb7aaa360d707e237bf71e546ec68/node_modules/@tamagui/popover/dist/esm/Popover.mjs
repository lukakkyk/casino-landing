import { Adapt, AdaptParent, AdaptPortalContents, ProvideAdaptContext, useAdaptContext, useAdaptIsActive } from "@tamagui/adapt";
import { Animate } from "@tamagui/animate";
import { ResetPresence } from "@tamagui/animate-presence";
import { useComposedRefs } from "@tamagui/compose-refs";
import { isWeb, useIsomorphicLayoutEffect } from "@tamagui/constants";
import { createStyledContext, useCreateShallowSetState, useEvent, useGet, View } from "@tamagui/core";
import { Dismissable, DismissableBranch } from "@tamagui/dismissable";
import { FloatingOverrideContext } from "@tamagui/floating";
import { FocusScope, FocusScopeController } from "@tamagui/focus-scope";
import { composeEventHandlers, withStaticProperties } from "@tamagui/helpers";
import { Popper, PopperAnchor, PopperArrow, PopperArrowFrame, PopperContent, PopperContentFrame, PopperProvider, usePopperContext } from "@tamagui/popper";
import { needsPortalRepropagation, Portal } from "@tamagui/portal";
import { RemoveScroll } from "@tamagui/remove-scroll";
import { ScrollView } from "@tamagui/scroll-view";
import { SheetController } from "@tamagui/sheet/controller";
import { YStack } from "@tamagui/stacks";
import { useControllableState } from "@tamagui/use-controllable-state";
import * as React from "react";
import { useFloatingContext } from "./useFloatingContext.mjs";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
const needsRepropagation = needsPortalRepropagation(),
  openPopovers = /* @__PURE__ */new Set(),
  hasOpenPopovers = () => openPopovers.size > 0,
  closeOpenPopovers = () => openPopovers.size === 0 ? !1 : (openPopovers.forEach(setOpen => setOpen(!1)), !0),
  closeLastOpenedPopover = () => {
    if (openPopovers.size === 0) return !1;
    const last = Array.from(openPopovers).pop();
    return last ? (last(!1), !0) : !1;
  },
  PopoverContext = createStyledContext(
  // since we always provide this we can avoid setting here
  {}, "Popover__"),
  PopoverZIndexContext = React.createContext(void 0),
  PopoverTriggerContext = createStyledContext({}, "PopoverTrigger__"),
  usePopoverContext = PopoverContext.useStyledContext,
  usePopoverTriggerContext = PopoverTriggerContext.useStyledContext;
function usePopoverOpen(scope) {
  return usePopoverContext(scope).open;
}
function usePopoverTriggerSetup(open) {
  const triggerStateSettersRef = React.useRef(/* @__PURE__ */new Map()),
    activeTriggerIdRef = React.useRef(null),
    setActiveTrigger = useEvent(id => {
      const prevId = activeTriggerIdRef.current;
      prevId !== id && (prevId && triggerStateSettersRef.current.get(prevId)?.(!1), activeTriggerIdRef.current = id, id && open && triggerStateSettersRef.current.get(id)?.(!0));
    }),
    registerTrigger = useEvent((id, setOpenState) => {
      triggerStateSettersRef.current.set(id, setOpenState), setOpenState(activeTriggerIdRef.current === id && open);
    }),
    unregisterTrigger = useEvent(id => {
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
    return /* @__PURE__ */jsx(PopoverContext.Provider, {
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
      children: /* @__PURE__ */jsx(PopoverTriggerContext.Provider, {
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
    return React.useEffect(() => (onCustomAnchorAdd(), () => onCustomAnchorRemove()), [onCustomAnchorAdd, onCustomAnchorRemove]), /* @__PURE__ */jsx(PopperAnchor, {
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
      composedTriggerRef = useComposedRefs(forwardedRef, triggerElRef),
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
      trigger = /* @__PURE__ */jsx(View, {
        "aria-expanded": open,
        "data-state": getState(open),
        ...rest,
        ref: composedTriggerRef,
        onPress: composeEventHandlers(rest.onPress, () => {
          disablePressTrigger || (triggerContext.setActiveTrigger(open ? null : triggerId), triggerContext.onOpenToggle());
        }),
        onMouseEnter: composeEventHandlers(rest.onMouseEnter, activateSelf),
        onPressIn: composeEventHandlers(rest.onPressIn, activateSelf),
        onFocus: composeEventHandlers(rest.onFocus, activateSelf)
      }),
      virtualRef = React.useMemo(() => anchorTo ? {
        current: {
          getBoundingClientRect: () => isWeb ? DOMRect.fromRect(anchorTo) : anchorTo,
          ...(!isWeb && {
            measure: c => c(anchorTo?.x, anchorTo?.y, anchorTo?.width, anchorTo?.height),
            measureInWindow: c => c(anchorTo?.x, anchorTo?.y, anchorTo?.width, anchorTo?.height)
          })
        }
      } : null, [triggerContext.anchorTo, anchorTo?.x, anchorTo?.y, anchorTo?.height, anchorTo?.width]),
      wrappedTrigger = isWeb ? /* @__PURE__ */jsx(DismissableBranch, {
        branches: triggerContext.branches,
        children: trigger
      }) : trigger;
    return triggerContext.hasCustomAnchor ? wrappedTrigger : /* @__PURE__ */jsx(PopperAnchor, {
      ...(virtualRef && {
        virtualRef
      }),
      scope,
      asChild: !0,
      children: wrappedTrigger
    });
  })),
  PopoverContent = PopperContentFrame.styleable(function (props, forwardedRef) {
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
      composedRefs = useComposedRefs(forwardedRef, contentRef),
      isRightClickOutsideRef = React.useRef(!1),
      [isFullyHidden, setIsFullyHidden] = React.useState(!open);
    return useIsomorphicLayoutEffect(() => {
      open && isFullyHidden && setIsFullyHidden(!1);
    }, [open, isFullyHidden]), !context.keepChildrenMounted && isFullyHidden && !open ? null : /* @__PURE__ */jsx(PopoverPortal, {
      passThrough: context.breakpointActive,
      context,
      open,
      zIndex,
      children: /* @__PURE__ */jsx(View, {
        passThrough: context.breakpointActive,
        pointerEvents: open ? contentImplProps.pointerEvents ?? "auto" : "none",
        children: /* @__PURE__ */jsx(PopoverContentImpl, {
          ...contentImplProps,
          context,
          open,
          enableRemoveScroll,
          ref: composedRefs,
          setIsFullyHidden,
          scope,
          trapFocus: trapFocus ?? open,
          disableOutsidePointerEvents: !0,
          onCloseAutoFocus: props.onCloseAutoFocus === !1 ? void 0 : composeEventHandlers(props.onCloseAutoFocus, event => {
            event.defaultPrevented || (event.preventDefault(), isRightClickOutsideRef.current || context.triggerRef.current?.focus());
          }),
          onPointerDownOutside: composeEventHandlers(props.onPointerDownOutside, event => {
            const originalEvent = event.detail.originalEvent,
              ctrlLeftClick = originalEvent.button === 0 && originalEvent.ctrlKey === !0,
              isRightClick = originalEvent.button === 2 || ctrlLeftClick;
            isRightClickOutsideRef.current = isRightClick;
          }, {
            checkDefaultPrevented: !1
          }),
          onFocusOutside: composeEventHandlers(props.onFocusOutside, event => event.preventDefault(), {
            checkDefaultPrevented: !1
          })
        })
      })
    });
  }),
  useParentContexts = scope => {
    const context = usePopoverContext(scope),
      triggerContext = usePopoverTriggerContext(scope),
      popperContext = usePopperContext(scope),
      adaptContext = useAdaptContext(context.adaptScope);
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
  return /* @__PURE__ */jsx(PopperProvider, {
    scope: context.popoverScope,
    ...popperContext,
    children: /* @__PURE__ */jsx(PopoverContext.Provider, {
      scope: context.popoverScope,
      ...context,
      children: /* @__PURE__ */jsx(PopoverTriggerContext.Provider, {
        scope: context.popoverScope,
        ...triggerContext,
        children: /* @__PURE__ */jsx(ProvideAdaptContext, {
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
    return /* @__PURE__ */jsx(AdaptPortalContents, {
      scope: context.adaptScope,
      children: /* @__PURE__ */jsx(RepropagateParentContexts, {
        ...parentContexts,
        children
      })
    });
  }
  return /* @__PURE__ */jsx(AdaptPortalContents, {
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
    content = /* @__PURE__ */jsx(RepropagateParentContexts, {
      ...parentContexts,
      children: content
    });
  }
  return /* @__PURE__ */jsxs(Portal, {
    passThrough,
    stackZIndex: !0,
    zIndex,
    children: [!!open && !context.breakpointActive && !context.hoverable && /* @__PURE__ */jsx(YStack, {
      fullscreen: !0,
      onPress: composeEventHandlers(onPress, context.onOpenToggle)
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
    let contents = /* @__PURE__ */jsx(ResetPresence, {
      disable: context.breakpointActive,
      children
    });
    const handleDismiss = React.useCallback(() => {
      context.onOpenChange(!1, "press");
    }, [context]);
    return context.breakpointActive || ((!alwaysDisable || !alwaysDisable.focus) && (contents = /* @__PURE__ */jsx(FocusScope, {
      loop: trapFocus !== !1,
      enabled: context.breakpointActive || disableFocusScope ? !1 : open,
      trapped: context.breakpointActive ? !1 : trapFocus,
      onMountAutoFocus: onOpenAutoFocus,
      onUnmountAutoFocus: onCloseAutoFocus === !1 ? void 0 : onCloseAutoFocus,
      children: /* @__PURE__ */jsx("div", {
        style: dspContentsStyle,
        children: contents
      })
    })), (!alwaysDisable || !alwaysDisable["remove-scroll"]) && (contents = /* @__PURE__ */jsx(RemoveScroll, {
      enabled: context.breakpointActive ? !1 : enableRemoveScroll ? open : !1,
      children: contents
    })), (!alwaysDisable || !alwaysDisable.dismiss) && (contents = /* @__PURE__ */jsx(Dismissable, {
      branches: context.branches,
      forceUnmount: disableDismissable || (forceUnmount ?? !open),
      onEscapeKeyDown,
      onPointerDownOutside,
      onFocusOutside,
      onInteractOutside,
      onDismiss: handleDismiss,
      children: contents
    }))), /* @__PURE__ */jsx(Animate, {
      type: "presence",
      present: !!open,
      keepChildrenMounted: !!keepChildrenMounted,
      onExitComplete: handleExitComplete,
      lazyMount,
      passThrough: context.breakpointActive,
      children: /* @__PURE__ */jsx(PopperContent, {
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
        children: /* @__PURE__ */jsx(PortalAdaptSafe, {
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
    return /* @__PURE__ */jsx(YStack, {
      ...rest,
      ref: forwardedRef,
      componentName: "PopoverClose",
      onPress: composeEventHandlers(props.onPress, () => context?.onOpenChange?.(!1, "press"))
    });
  }),
  PopoverArrow = PopperArrowFrame.styleable(function (props, forwardedRef) {
    const {
        scope,
        ...rest
      } = props,
      context = usePopoverContext(scope);
    return useAdaptIsActive(context.adaptScope) ? null : /* @__PURE__ */jsx(PopperArrow, {
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
    return /* @__PURE__ */jsx(ScrollView, {
      ref,
      pointerEvents: context.breakpointActive ? "none" : void 0,
      scrollEnabled: !context.breakpointActive,
      passThrough: context.breakpointActive,
      ...props
    });
  }),
  DEFAULT_SCOPE = "",
  Popover = withStaticProperties(React.forwardRef(function ({
    scope = DEFAULT_SCOPE,
    ...props
  }, ref) {
    const id = React.useId(),
      adaptScope = `PopoverAdapt${scope}`;
    return /* @__PURE__ */jsx(AdaptParent, {
      scope: adaptScope,
      portal: !0,
      children: /* @__PURE__ */jsx(PopoverInner, {
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
    Adapt,
    ScrollView: PopoverScrollView,
    FocusScope: FocusScopeController
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
      [keepChildrenMounted] = useControllableState({
        prop: keepChildrenMountedProp,
        defaultProp: !1,
        transition: keepChildrenMountedProp === "lazy"
      }),
      [open, setOpen] = useControllableState({
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
    const handleOpenChange = useEvent((val, via) => {
        viaRef.current = via, setOpen(val);
      }),
      isAdapted = useAdaptIsActive(adaptScope),
      floatingContext = useFloatingContext({
        open,
        setOpen: handleOpenChange,
        disable: isAdapted,
        hoverable,
        disableFocus
      }),
      [anchorTo, setAnchorToRaw] = React.useState(),
      setAnchorTo = useCreateShallowSetState(setAnchorToRaw);
    React.useImperativeHandle(forwardedRef, () => ({
      anchorTo: setAnchorTo,
      toggle: () => setOpen(prev => !prev),
      open: () => setOpen(!0),
      close: () => setOpen(!1),
      setOpen
    }));
    const contentId = React.useId(),
      onOpenToggle = useEvent(() => {
        open && isAdapted || setOpen(!open);
      }),
      onCustomAnchorAdd = React.useCallback(() => setHasCustomAnchor(!0), []),
      onCustomAnchorRemove = React.useCallback(() => setHasCustomAnchor(!1), []),
      contents = /* @__PURE__ */jsx(Popper, {
        open,
        passThrough: isAdapted,
        scope,
        stayInFrame: !0,
        ...restProps,
        children: /* @__PURE__ */jsx(PopoverContextProvider, {
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
          children: /* @__PURE__ */jsx(PopoverSheetController, {
            onOpenChange: setOpen,
            open,
            scope,
            children
          })
        })
      });
    let result = /* @__PURE__ */jsx(Fragment, {
      children: isWeb ? /* @__PURE__ */jsx(FloatingOverrideContext.Provider, {
        value: floatingContext,
        children: contents
      }) : contents
    });
    return zIndex !== void 0 ? /* @__PURE__ */jsx(PopoverZIndexContext.Provider, {
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
      getShowSheet = useGet(showSheet);
    return /* @__PURE__ */jsx(SheetController, {
      onOpenChange: val => {
        getShowSheet() && props.onOpenChange?.(val);
      },
      open,
      hidden: !breakpointActive,
      children: props.children
    });
  },
  useShowPopoverSheet = (context, open) => {
    const isAdapted = useAdaptIsActive(context.adaptScope);
    return open === !1 ? !1 : isAdapted;
  };
export { Popover, PopoverAnchor, PopoverArrow, PopoverClose, PopoverContent, PopoverContext, PopoverContextProvider, PopoverTrigger, PopoverTriggerContext, PopoverZIndexContext, closeLastOpenedPopover, closeOpenPopovers, hasOpenPopovers, usePopoverContext, usePopoverOpen, usePopoverTriggerContext, usePopoverTriggerSetup };
//# sourceMappingURL=Popover.mjs.map
