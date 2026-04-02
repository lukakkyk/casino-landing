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
var import_jsx_runtime = require("react/jsx-runtime"),
  import_polyfill_dev = require("@tamagui/polyfill-dev"),
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
  import_useFloatingContext = require("./useFloatingContext.native.js"),
  needsRepropagation = (0, import_portal.needsPortalRepropagation)(),
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
  PopoverContext = (0, import_core.createStyledContext)(
  // since we always provide this we can avoid setting here
  {}, "Popover__"),
  PopoverZIndexContext = /* @__PURE__ */React.createContext(void 0),
  PopoverTriggerContext = (0, import_core.createStyledContext)({}, "PopoverTrigger__"),
  usePopoverContext = PopoverContext.useStyledContext,
  usePopoverTriggerContext = PopoverTriggerContext.useStyledContext;
function usePopoverOpen(scope) {
  return usePopoverContext(scope).open;
}
function usePopoverTriggerSetup(open) {
  var triggerStateSettersRef = React.useRef(/* @__PURE__ */new Map()),
    activeTriggerIdRef = React.useRef(null),
    setActiveTrigger = (0, import_core.useEvent)(function (id) {
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
    registerTrigger = (0, import_core.useEvent)(function (id, setOpenState) {
      triggerStateSettersRef.current.set(id, setOpenState), setOpenState(activeTriggerIdRef.current === id && open);
    }),
    unregisterTrigger = (0, import_core.useEvent)(function (id) {
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
    }, [onCustomAnchorAdd, onCustomAnchorRemove]), /* @__PURE__ */(0, import_jsx_runtime.jsx)(import_popper.PopperAnchor, {
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
      composedTriggerRef = (0, import_compose_refs.useComposedRefs)(forwardedRef, triggerElRef),
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
      trigger = /* @__PURE__ */(0, import_jsx_runtime.jsx)(import_core.View, {
        "aria-expanded": open,
        // TODO not matching
        // aria-controls={context.contentId}
        "data-state": getState(open),
        ...rest,
        // @ts-ignore
        ref: composedTriggerRef,
        onPress: (0, import_helpers.composeEventHandlers)(rest.onPress, function () {
          disablePressTrigger || (triggerContext.setActiveTrigger(open ? null : triggerId), triggerContext.onOpenToggle());
        }),
        onMouseEnter: (0, import_helpers.composeEventHandlers)(rest.onMouseEnter, activateSelf),
        onPressIn: (0, import_helpers.composeEventHandlers)(rest.onPressIn, activateSelf),
        onFocus: (0, import_helpers.composeEventHandlers)(rest.onFocus, activateSelf)
      }),
      virtualRef = React.useMemo(function () {
        return anchorTo ? {
          current: {
            getBoundingClientRect: function () {
              return import_constants.isWeb ? DOMRect.fromRect(anchorTo) : anchorTo;
            },
            ...(!import_constants.isWeb && {
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
      composedRefs = (0, import_compose_refs.useComposedRefs)(forwardedRef, contentRef),
      isRightClickOutsideRef = React.useRef(!1),
      [isFullyHidden, setIsFullyHidden] = React.useState(!open);
    if ((0, import_constants.useIsomorphicLayoutEffect)(function () {
      open && isFullyHidden && setIsFullyHidden(!1);
    }, [open, isFullyHidden]), !context.keepChildrenMounted && isFullyHidden && !open) return null;
    var _contentImplProps_pointerEvents;
    return /* @__PURE__ */(0, import_jsx_runtime.jsx)(PopoverPortal, {
      passThrough: context.breakpointActive,
      context,
      open,
      zIndex,
      children: /* @__PURE__ */(0, import_jsx_runtime.jsx)(import_core.View, {
        passThrough: context.breakpointActive,
        pointerEvents: open ? (_contentImplProps_pointerEvents = contentImplProps.pointerEvents) !== null && _contentImplProps_pointerEvents !== void 0 ? _contentImplProps_pointerEvents : "auto" : "none",
        children: /* @__PURE__ */(0, import_jsx_runtime.jsx)(PopoverContentImpl, {
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
          onCloseAutoFocus: props.onCloseAutoFocus === !1 ? void 0 : (0, import_helpers.composeEventHandlers)(props.onCloseAutoFocus, function (event) {
            var _context_triggerRef_current;
            event.defaultPrevented || (event.preventDefault(), isRightClickOutsideRef.current || (_context_triggerRef_current = context.triggerRef.current) === null || _context_triggerRef_current === void 0 || _context_triggerRef_current.focus());
          }),
          onPointerDownOutside: (0, import_helpers.composeEventHandlers)(props.onPointerDownOutside, function (event) {
            var originalEvent = event.detail.originalEvent,
              ctrlLeftClick = originalEvent.button === 0 && originalEvent.ctrlKey === !0,
              isRightClick = originalEvent.button === 2 || ctrlLeftClick;
            isRightClickOutsideRef.current = isRightClick;
          }, {
            checkDefaultPrevented: !1
          }),
          // When focus is trapped, a `focusout` event may still happen.
          // We make sure we don't trigger our `onDismiss` in such case.
          onFocusOutside: (0, import_helpers.composeEventHandlers)(props.onFocusOutside, function (event) {
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
      popperContext = (0, import_popper.usePopperContext)(scope),
      adaptContext = (0, import_adapt.useAdaptContext)(context.adaptScope);
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
var PortalAdaptSafe = function (param) {
  "use no memo";

  var {
    children,
    context
  } = param;
  if (needsRepropagation) {
    var parentContexts = useParentContexts(context.popoverScope);
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
    content = /* @__PURE__ */(0, import_jsx_runtime.jsx)(RepropagateParentContexts, {
      ...parentContexts,
      children: content
    });
  }
  return /* @__PURE__ */(0, import_jsx_runtime.jsxs)(import_portal.Portal, {
    passThrough,
    stackZIndex: !0,
    zIndex,
    children: [/* forceClassName avoids forced re-mount renders for some reason... see the HeadMenu as you change tints a few times */
    /* without this you'll see the site menu re-rendering. It must be something in wrapping children in Theme */
    !!open && !context.breakpointActive && !context.hoverable && /* @__PURE__ */(0, import_jsx_runtime.jsx)(import_stacks.YStack, {
      fullscreen: !0,
      onPress: (0, import_helpers.composeEventHandlers)(onPress, context.onOpenToggle)
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
    contents = /* @__PURE__ */(0, import_jsx_runtime.jsx)(import_animate_presence.ResetPresence, {
      disable: context.breakpointActive,
      children
    }),
    handleDismiss = React.useCallback(function () {
      context.onOpenChange(!1, "press");
    }, [context]);
  return context.breakpointActive, /* @__PURE__ */(0, import_jsx_runtime.jsx)(import_animate.Animate, {
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
});
var PopoverClose = /* @__PURE__ */React.forwardRef(function (props, forwardedRef) {
    var {
        scope,
        ...rest
      } = props,
      context = usePopoverContext(scope);
    return /* @__PURE__ */(0, import_jsx_runtime.jsx)(import_stacks.YStack, {
      ...rest,
      ref: forwardedRef,
      componentName: "PopoverClose",
      onPress: (0, import_helpers.composeEventHandlers)(props.onPress, function () {
        var _context_onOpenChange;
        return context == null || (_context_onOpenChange = context.onOpenChange) === null || _context_onOpenChange === void 0 ? void 0 : _context_onOpenChange.call(context, !1, "press");
      })
    });
  }),
  PopoverArrow = import_popper.PopperArrowFrame.styleable(function (props, forwardedRef) {
    var {
        scope,
        ...rest
      } = props,
      context = usePopoverContext(scope),
      isAdapted = (0, import_adapt.useAdaptIsActive)(context.adaptScope);
    return isAdapted ? null : /* @__PURE__ */(0, import_jsx_runtime.jsx)(import_popper.PopperArrow, {
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
    return /* @__PURE__ */(0, import_jsx_runtime.jsx)(import_scroll_view.ScrollView, {
      ref,
      // when adapted, no pointer events!
      pointerEvents: context.breakpointActive ? "none" : void 0,
      scrollEnabled: !context.breakpointActive,
      passThrough: context.breakpointActive,
      ...props
    });
  }),
  DEFAULT_SCOPE = "",
  Popover = (0, import_helpers.withStaticProperties)(/* @__PURE__ */React.forwardRef(function (param, ref) {
    var {
        scope = DEFAULT_SCOPE,
        ...props
      } = param,
      id = React.useId(),
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
      [keepChildrenMounted] = (0, import_use_controllable_state.useControllableState)({
        prop: keepChildrenMountedProp,
        defaultProp: !1,
        transition: keepChildrenMountedProp === "lazy"
      }),
      [open, setOpen] = (0, import_use_controllable_state.useControllableState)({
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
    var handleOpenChange = (0, import_core.useEvent)(function (val, via) {
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
      onOpenToggle = (0, import_core.useEvent)(function () {
        open && isAdapted || setOpen(!open);
      }),
      onCustomAnchorAdd = React.useCallback(function () {
        return setHasCustomAnchor(!0);
      }, []),
      onCustomAnchorRemove = React.useCallback(function () {
        return setHasCustomAnchor(!1);
      }, []),
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
      }),
      result = /* @__PURE__ */(0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, {
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
var PopoverSheetController = function (param) {
    var {
        open,
        scope,
        ...props
      } = param,
      context = usePopoverContext(scope),
      showSheet = useShowPopoverSheet(context, open),
      breakpointActive = context?.breakpointActive,
      getShowSheet = (0, import_core.useGet)(showSheet);
    return /* @__PURE__ */(0, import_jsx_runtime.jsx)(import_controller.SheetController, {
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
    var isAdapted = (0, import_adapt.useAdaptIsActive)(context.adaptScope);
    return open === !1 ? !1 : isAdapted;
  };
//# sourceMappingURL=Popover.native.js.map
