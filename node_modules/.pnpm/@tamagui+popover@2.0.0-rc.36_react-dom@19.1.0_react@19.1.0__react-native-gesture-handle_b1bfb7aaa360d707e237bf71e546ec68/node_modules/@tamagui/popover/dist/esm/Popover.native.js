import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Adapt, AdaptParent, AdaptPortalContents, ProvideAdaptContext, useAdaptContext, useAdaptIsActive } from "@tamagui/adapt";
import { Animate } from "@tamagui/animate";
import { ResetPresence } from "@tamagui/animate-presence";
import { useComposedRefs } from "@tamagui/compose-refs";
import { isWeb, useIsomorphicLayoutEffect } from "@tamagui/constants";
import { createStyledContext, useCreateShallowSetState, useEvent, useGet, View } from "@tamagui/core";
import { DismissableBranch } from "@tamagui/dismissable";
import { FloatingOverrideContext } from "@tamagui/floating";
import { FocusScopeController } from "@tamagui/focus-scope";
import { composeEventHandlers, withStaticProperties } from "@tamagui/helpers";
import { Popper, PopperAnchor, PopperArrow, PopperArrowFrame, PopperContent, PopperContentFrame, PopperProvider, usePopperContext } from "@tamagui/popper";
import { needsPortalRepropagation, Portal } from "@tamagui/portal";
import { ScrollView } from "@tamagui/scroll-view";
import { SheetController } from "@tamagui/sheet/controller";
import { YStack } from "@tamagui/stacks";
import { useControllableState } from "@tamagui/use-controllable-state";
import * as React from "react";
import { useFloatingContext } from "./useFloatingContext.native.js";
var needsRepropagation = needsPortalRepropagation(),
  openPopovers = /* @__PURE__ */new Set(),
  hasOpenPopovers = function () {
    return openPopovers.size > 0;
  },
  closeOpenPopovers = function () {
    return openPopovers.size === 0 ? !1 : (openPopovers.forEach(function (setOpen) {
      return setOpen(!1);
    }), !0);
  },
  closeLastOpenedPopover = function () {
    if (openPopovers.size === 0) return !1;
    var last = Array.from(openPopovers).pop();
    return last ? (last(!1), !0) : !1;
  },
  PopoverContext = createStyledContext(
  // since we always provide this we can avoid setting here
  {}, "Popover__"),
  PopoverZIndexContext = /* @__PURE__ */React.createContext(void 0),
  PopoverTriggerContext = createStyledContext({}, "PopoverTrigger__"),
  usePopoverContext = PopoverContext.useStyledContext,
  usePopoverTriggerContext = PopoverTriggerContext.useStyledContext;
function usePopoverOpen(scope) {
  return usePopoverContext(scope).open;
}
function usePopoverTriggerSetup(open) {
  var triggerStateSettersRef = React.useRef(/* @__PURE__ */new Map()),
    activeTriggerIdRef = React.useRef(null),
    setActiveTrigger = useEvent(function (id) {
      var prevId = activeTriggerIdRef.current;
      if (prevId !== id) {
        if (prevId) {
          var _triggerStateSettersRef_current_get;
          (_triggerStateSettersRef_current_get = triggerStateSettersRef.current.get(prevId)) === null || _triggerStateSettersRef_current_get === void 0 || _triggerStateSettersRef_current_get(!1);
        }
        if (activeTriggerIdRef.current = id, id && open) {
          var _triggerStateSettersRef_current_get1;
          (_triggerStateSettersRef_current_get1 = triggerStateSettersRef.current.get(id)) === null || _triggerStateSettersRef_current_get1 === void 0 || _triggerStateSettersRef_current_get1(!0);
        }
      }
    }),
    registerTrigger = useEvent(function (id, setOpenState) {
      triggerStateSettersRef.current.set(id, setOpenState), setOpenState(activeTriggerIdRef.current === id && open);
    }),
    unregisterTrigger = useEvent(function (id) {
      triggerStateSettersRef.current.delete(id), activeTriggerIdRef.current === id && (activeTriggerIdRef.current = null);
    });
  return React.useEffect(function () {
    if (!open) {
      setActiveTrigger(null);
      return;
    }
    var activeId = activeTriggerIdRef.current;
    if (activeId) {
      var _triggerStateSettersRef_current_get;
      (_triggerStateSettersRef_current_get = triggerStateSettersRef.current.get(activeId)) === null || _triggerStateSettersRef_current_get === void 0 || _triggerStateSettersRef_current_get(!0);
    }
  }, [open, setActiveTrigger]), {
    setActiveTrigger,
    registerTrigger,
    unregisterTrigger
  };
}
var PopoverContextProvider = /* @__PURE__ */React.memo(function (param) {
    var {
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
      } = param,
      [branches] = React.useState(function () {
        return /* @__PURE__ */new Set();
      }),
      {
        setActiveTrigger,
        registerTrigger,
        unregisterTrigger
      } = usePopoverTriggerSetup(open);
    return /* @__PURE__ */_jsx(PopoverContext.Provider, {
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
      children: /* @__PURE__ */_jsx(PopoverTriggerContext.Provider, {
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
  voidFn = function () {},
  PopoverAnchor = /* @__PURE__ */React.memo(/* @__PURE__ */React.forwardRef(function (props, forwardedRef) {
    var {
        scope,
        ...rest
      } = props,
      context = usePopoverContext(scope),
      {
        onCustomAnchorAdd,
        onCustomAnchorRemove
      } = context || {};
    return React.useEffect(function () {
      return onCustomAnchorAdd(), function () {
        return onCustomAnchorRemove();
      };
    }, [onCustomAnchorAdd, onCustomAnchorRemove]), /* @__PURE__ */_jsx(PopperAnchor, {
      scope,
      ...rest,
      ref: forwardedRef
    });
  })),
  PopoverTrigger = /* @__PURE__ */React.memo(/* @__PURE__ */React.forwardRef(function (props, forwardedRef) {
    var {
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
    if (React.useEffect(function () {
      return registerTrigger(triggerId, setOpen), function () {
        unregisterTrigger(triggerId);
      };
    }, [registerTrigger, unregisterTrigger, triggerId]), !rest.children) return null;
    var activateSelf = function () {
        triggerContext.setActiveTrigger(triggerId);
        var el = triggerElRef.current;
        el && (triggerContext.triggerRef.current = el);
      },
      trigger = /* @__PURE__ */_jsx(View, {
        "aria-expanded": open,
        // TODO not matching
        // aria-controls={context.contentId}
        "data-state": getState(open),
        ...rest,
        // @ts-ignore
        ref: composedTriggerRef,
        onPress: composeEventHandlers(rest.onPress, function () {
          disablePressTrigger || (triggerContext.setActiveTrigger(open ? null : triggerId), triggerContext.onOpenToggle());
        }),
        onMouseEnter: composeEventHandlers(rest.onMouseEnter, activateSelf),
        onPressIn: composeEventHandlers(rest.onPressIn, activateSelf),
        onFocus: composeEventHandlers(rest.onFocus, activateSelf)
      }),
      virtualRef = React.useMemo(function () {
        return anchorTo ? {
          current: {
            getBoundingClientRect: function () {
              return isWeb ? DOMRect.fromRect(anchorTo) : anchorTo;
            },
            ...(!isWeb && {
              measure: function (c) {
                return c(anchorTo?.x, anchorTo?.y, anchorTo?.width, anchorTo?.height);
              },
              measureInWindow: function (c) {
                return c(anchorTo?.x, anchorTo?.y, anchorTo?.width, anchorTo?.height);
              }
            })
          }
        } : null;
      }, [triggerContext.anchorTo, anchorTo?.x, anchorTo?.y, anchorTo?.height, anchorTo?.width]),
      wrappedTrigger = isWeb ? /* @__PURE__ */_jsx(DismissableBranch, {
        branches: triggerContext.branches,
        children: trigger
      }) : trigger;
    return triggerContext.hasCustomAnchor ? wrappedTrigger : /* @__PURE__ */_jsx(PopperAnchor, {
      ...(virtualRef && {
        virtualRef
      }),
      scope,
      asChild: !0,
      children: wrappedTrigger
    });
  })),
  PopoverContent = PopperContentFrame.styleable(function (props, forwardedRef) {
    var {
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
    if (useIsomorphicLayoutEffect(function () {
      open && isFullyHidden && setIsFullyHidden(!1);
    }, [open, isFullyHidden]), !context.keepChildrenMounted && isFullyHidden && !open) return null;
    var _contentImplProps_pointerEvents;
    return /* @__PURE__ */_jsx(PopoverPortal, {
      passThrough: context.breakpointActive,
      context,
      open,
      zIndex,
      children: /* @__PURE__ */_jsx(View, {
        passThrough: context.breakpointActive,
        pointerEvents: open ? (_contentImplProps_pointerEvents = contentImplProps.pointerEvents) !== null && _contentImplProps_pointerEvents !== void 0 ? _contentImplProps_pointerEvents : "auto" : "none",
        children: /* @__PURE__ */_jsx(PopoverContentImpl, {
          ...contentImplProps,
          context,
          open,
          enableRemoveScroll,
          ref: composedRefs,
          setIsFullyHidden,
          scope,
          // we make sure we're not trapping once it's been closed
          // (closed !== unmounted when animating out)
          trapFocus: trapFocus ?? open,
          disableOutsidePointerEvents: !0,
          onCloseAutoFocus: props.onCloseAutoFocus === !1 ? void 0 : composeEventHandlers(props.onCloseAutoFocus, function (event) {
            var _context_triggerRef_current;
            event.defaultPrevented || (event.preventDefault(), isRightClickOutsideRef.current || (_context_triggerRef_current = context.triggerRef.current) === null || _context_triggerRef_current === void 0 || _context_triggerRef_current.focus());
          }),
          onPointerDownOutside: composeEventHandlers(props.onPointerDownOutside, function (event) {
            var originalEvent = event.detail.originalEvent,
              ctrlLeftClick = originalEvent.button === 0 && originalEvent.ctrlKey === !0,
              isRightClick = originalEvent.button === 2 || ctrlLeftClick;
            isRightClickOutsideRef.current = isRightClick;
          }, {
            checkDefaultPrevented: !1
          }),
          // When focus is trapped, a `focusout` event may still happen.
          // We make sure we don't trigger our `onDismiss` in such case.
          onFocusOutside: composeEventHandlers(props.onFocusOutside, function (event) {
            return event.preventDefault();
          }, {
            checkDefaultPrevented: !1
          })
        })
      })
    });
  }),
  useParentContexts = function (scope) {
    var context = usePopoverContext(scope),
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
function RepropagateParentContexts(param) {
  var {
    adaptContext,
    children,
    context,
    triggerContext,
    popperContext
  } = param;
  return /* @__PURE__ */_jsx(PopperProvider, {
    scope: context.popoverScope,
    ...popperContext,
    children: /* @__PURE__ */_jsx(PopoverContext.Provider, {
      scope: context.popoverScope,
      ...context,
      children: /* @__PURE__ */_jsx(PopoverTriggerContext.Provider, {
        scope: context.popoverScope,
        ...triggerContext,
        children: /* @__PURE__ */_jsx(ProvideAdaptContext, {
          ...adaptContext,
          children
        })
      })
    })
  });
}
var PortalAdaptSafe = function (param) {
  "use no memo";

  var {
    children,
    context
  } = param;
  if (needsRepropagation) {
    var parentContexts = useParentContexts(context.popoverScope);
    return /* @__PURE__ */_jsx(AdaptPortalContents, {
      scope: context.adaptScope,
      children: /* @__PURE__ */_jsx(RepropagateParentContexts, {
        ...parentContexts,
        children
      })
    });
  }
  return /* @__PURE__ */_jsx(AdaptPortalContents, {
    scope: context.adaptScope,
    children
  });
};
function PopoverPortal(param) {
  "use no memo";

  var {
      context,
      open,
      zIndex,
      passThrough,
      children,
      onPress
    } = param,
    content = children;
  if (needsRepropagation) {
    var parentContexts = useParentContexts(context.popoverScope);
    content = /* @__PURE__ */_jsx(RepropagateParentContexts, {
      ...parentContexts,
      children: content
    });
  }
  return /* @__PURE__ */_jsxs(Portal, {
    passThrough,
    stackZIndex: !0,
    zIndex,
    children: [/* forceClassName avoids forced re-mount renders for some reason... see the HeadMenu as you change tints a few times */
    /* without this you'll see the site menu re-rendering. It must be something in wrapping children in Theme */
    !!open && !context.breakpointActive && !context.hoverable && /* @__PURE__ */_jsx(YStack, {
      fullscreen: !0,
      onPress: composeEventHandlers(onPress, context.onOpenToggle)
    }), /* i removed a hardcoded StackZIndex because Portal has it internally now with useStackedZIndex + ZIndexHardcoded */
    content]
  });
}
var PopoverContentImpl = /* @__PURE__ */React.forwardRef(function (props, forwardedRef) {
  var {
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
    handleExitComplete = React.useCallback(function () {
      setIsFullyHidden?.(!0);
    }, [setIsFullyHidden]),
    contents = /* @__PURE__ */_jsx(ResetPresence, {
      disable: context.breakpointActive,
      children
    }),
    handleDismiss = React.useCallback(function () {
      context.onOpenChange(!1, "press");
    }, [context]);
  return context.breakpointActive, /* @__PURE__ */_jsx(Animate, {
    type: "presence",
    present: !!open,
    keepChildrenMounted: !!keepChildrenMounted,
    onExitComplete: handleExitComplete,
    lazyMount,
    passThrough: context.breakpointActive,
    children: /* @__PURE__ */_jsx(PopperContent, {
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
      children: /* @__PURE__ */_jsx(PortalAdaptSafe, {
        context,
        children: contents
      })
    }, context.contentId)
  });
});
var PopoverClose = /* @__PURE__ */React.forwardRef(function (props, forwardedRef) {
    var {
        scope,
        ...rest
      } = props,
      context = usePopoverContext(scope);
    return /* @__PURE__ */_jsx(YStack, {
      ...rest,
      ref: forwardedRef,
      componentName: "PopoverClose",
      onPress: composeEventHandlers(props.onPress, function () {
        var _context_onOpenChange;
        return context == null || (_context_onOpenChange = context.onOpenChange) === null || _context_onOpenChange === void 0 ? void 0 : _context_onOpenChange.call(context, !1, "press");
      })
    });
  }),
  PopoverArrow = PopperArrowFrame.styleable(function (props, forwardedRef) {
    var {
        scope,
        ...rest
      } = props,
      context = usePopoverContext(scope),
      isAdapted = useAdaptIsActive(context.adaptScope);
    return isAdapted ? null : /* @__PURE__ */_jsx(PopperArrow, {
      scope,
      componentName: "PopoverArrow",
      ...rest,
      ref: forwardedRef
    });
  }),
  PopoverScrollView = /* @__PURE__ */React.forwardRef(function (param, ref) {
    var {
        scope,
        ...props
      } = param,
      context = usePopoverContext(scope);
    return /* @__PURE__ */_jsx(ScrollView, {
      ref,
      // when adapted, no pointer events!
      pointerEvents: context.breakpointActive ? "none" : void 0,
      scrollEnabled: !context.breakpointActive,
      passThrough: context.breakpointActive,
      ...props
    });
  }),
  DEFAULT_SCOPE = "",
  Popover = withStaticProperties(/* @__PURE__ */React.forwardRef(function (param, ref) {
    var {
        scope = DEFAULT_SCOPE,
        ...props
      } = param,
      id = React.useId(),
      adaptScope = `PopoverAdapt${scope}`;
    return /* @__PURE__ */_jsx(AdaptParent, {
      scope: adaptScope,
      portal: !0,
      children: /* @__PURE__ */_jsx(PopoverInner, {
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
  PopoverInner = /* @__PURE__ */React.forwardRef(function (props, forwardedRef) {
    var {
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
        onChange: function (val) {
          onOpenChange?.(val, viaRef.current);
        }
      });
    React.useEffect(function () {
      if (open) return openPopovers.add(setOpen), function () {
        openPopovers.delete(setOpen);
      };
    }, [open, setOpen]);
    var handleOpenChange = useEvent(function (val, via) {
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
    React.useImperativeHandle(forwardedRef, function () {
      return {
        anchorTo: setAnchorTo,
        toggle: function () {
          return setOpen(function (prev) {
            return !prev;
          });
        },
        open: function () {
          return setOpen(!0);
        },
        close: function () {
          return setOpen(!1);
        },
        setOpen
      };
    });
    var contentId = React.useId(),
      onOpenToggle = useEvent(function () {
        open && isAdapted || setOpen(!open);
      }),
      onCustomAnchorAdd = React.useCallback(function () {
        return setHasCustomAnchor(!0);
      }, []),
      onCustomAnchorRemove = React.useCallback(function () {
        return setHasCustomAnchor(!1);
      }, []),
      contents = /* @__PURE__ */_jsx(Popper, {
        open,
        passThrough: isAdapted,
        scope,
        stayInFrame: !0,
        ...restProps,
        children: /* @__PURE__ */_jsx(PopoverContextProvider, {
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
          children: /* @__PURE__ */_jsx(PopoverSheetController, {
            onOpenChange: setOpen,
            open,
            scope,
            children
          })
        })
      }),
      result = /* @__PURE__ */_jsx(_Fragment, {
        children: isWeb ? /* @__PURE__ */_jsx(FloatingOverrideContext.Provider, {
          value: floatingContext,
          children: contents
        }) : contents
      });
    return zIndex !== void 0 ? /* @__PURE__ */_jsx(PopoverZIndexContext.Provider, {
      value: zIndex,
      children: result
    }) : result;
  });
function getState(open) {
  return open ? "open" : "closed";
}
var PopoverSheetController = function (param) {
    var {
        open,
        scope,
        ...props
      } = param,
      context = usePopoverContext(scope),
      showSheet = useShowPopoverSheet(context, open),
      breakpointActive = context?.breakpointActive,
      getShowSheet = useGet(showSheet);
    return /* @__PURE__ */_jsx(SheetController, {
      onOpenChange: function (val) {
        if (getShowSheet()) {
          var _props_onOpenChange;
          (_props_onOpenChange = props.onOpenChange) === null || _props_onOpenChange === void 0 || _props_onOpenChange.call(props, val);
        }
      },
      open,
      hidden: !breakpointActive,
      children: props.children
    });
  },
  useShowPopoverSheet = function (context, open) {
    var isAdapted = useAdaptIsActive(context.adaptScope);
    return open === !1 ? !1 : isAdapted;
  };
export { Popover, PopoverAnchor, PopoverArrow, PopoverClose, PopoverContent, PopoverContext, PopoverContextProvider, PopoverTrigger, PopoverTriggerContext, PopoverZIndexContext, closeLastOpenedPopover, closeOpenPopovers, hasOpenPopovers, usePopoverContext, usePopoverOpen, usePopoverTriggerContext, usePopoverTriggerSetup };
//# sourceMappingURL=Popover.native.js.map
