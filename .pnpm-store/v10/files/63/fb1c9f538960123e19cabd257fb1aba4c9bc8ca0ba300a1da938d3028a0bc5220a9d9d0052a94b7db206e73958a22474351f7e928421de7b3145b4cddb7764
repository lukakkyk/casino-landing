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
var ToastComposable_exports = {};
__export(ToastComposable_exports, {
  Toast: () => Toast,
  useToastItem: () => useToastItem,
  useToasts: () => useToasts
});
module.exports = __toCommonJS(ToastComposable_exports);
var import_animate_presence = require("@tamagui/animate-presence"),
  import_constants = require("@tamagui/constants"),
  import_native = require("@tamagui/native"),
  import_core = require("@tamagui/core"),
  import_helpers = require("@tamagui/helpers"),
  import_portal = require("@tamagui/portal"),
  import_stacks = require("@tamagui/stacks"),
  import_text = require("@tamagui/text"),
  React = __toESM(require("react"), 1),
  import_ToastState = require("./ToastState.cjs"),
  import_dispatchNativeToast = require("./dispatchNativeToast.cjs"),
  import_useAnimatedDragGesture = require("./useAnimatedDragGesture.cjs"),
  import_useToastAnimations = require("./useToastAnimations.cjs"),
  import_useReducedMotion = require("./useReducedMotion.cjs"),
  import_ToastItemFrame = require("./ToastItemFrame.cjs"),
  import_jsx_runtime = require("react/jsx-runtime");
const VISIBLE_TOASTS_AMOUNT = 4,
  VIEWPORT_OFFSET = 16,
  TOAST_GAP = 14,
  TOAST_LIFETIME = 4e3,
  FIXED_TOAST_HEIGHT = 72,
  TIME_BEFORE_UNMOUNT = 200,
  DEFAULT_HOTKEY = ["altKey", "KeyT"],
  ToastContext = (0, import_core.createStyledContext)({}, "Toast__"),
  useToastContext = ToastContext.useStyledContext,
  ToastItemContext = React.createContext(null);
function useToastItemContext() {
  const ctx = React.useContext(ToastItemContext);
  if (!ctx) throw new Error("useToastItemContext must be used within Toast.Item or Toast.List");
  return ctx;
}
function resolveSwipeDirection(direction, position) {
  if (direction !== "auto") return direction;
  const [yPosition, xPosition] = position.split("-");
  return import_constants.isWeb ? xPosition === "left" ? "left" : xPosition === "right" ? "right" : "horizontal" : yPosition === "top" ? "up" : "down";
}
const ToastRoot = React.forwardRef(function (props, _ref) {
    const {
        children,
        position = "bottom-right",
        duration = TOAST_LIFETIME,
        gap = TOAST_GAP,
        visibleToasts = VISIBLE_TOASTS_AMOUNT,
        swipeDirection: swipeDirectionProp = "auto",
        swipeThreshold = 50,
        toastHeight = FIXED_TOAST_HEIGHT,
        closeButton = !1,
        expand = !1,
        theme: themeProp,
        reducedMotion: reducedMotionProp,
        native = !1,
        burntOptions,
        notificationOptions,
        icons
      } = props,
      reducedMotion = (0, import_useReducedMotion.useReducedMotion)(reducedMotionProp),
      [toasts, setToasts] = React.useState([]),
      [heights, setHeights] = React.useState({}),
      [localExpanded, setExpanded] = React.useState(!1),
      expanded = expand || localExpanded,
      [interacting, setInteracting] = React.useState(!1),
      heightsLockedRef = React.useRef(!1),
      prevExpandedRef = React.useRef(expanded);
    React.useLayoutEffect(() => {
      prevExpandedRef.current !== expanded && (heightsLockedRef.current = !0, prevExpandedRef.current = expanded);
      const timer = setTimeout(() => {
        heightsLockedRef.current = !1;
      }, 350);
      return () => clearTimeout(timer);
    }, [expanded]);
    const setToastHeight = React.useCallback((toastId, height) => {
        if (heightsLockedRef.current) return;
        const rounded = Math.round(height);
        setHeights(prev => {
          const existing = prev[toastId];
          return existing != null && Math.abs(existing - rounded) <= 2 ? prev : {
            ...prev,
            [toastId]: rounded
          };
        });
      }, []),
      removeToastHeight = React.useCallback(toastId => {
        setHeights(prev => {
          if (!(toastId in prev)) return prev;
          const next = {
            ...prev
          };
          return delete next[toastId], next;
        });
      }, []),
      dismissCooldownRef = React.useRef(!1),
      dismissCooldownTimerRef = React.useRef(null),
      triggerDismissCooldown = React.useCallback(() => {
        dismissCooldownRef.current = !0, dismissCooldownTimerRef.current && clearTimeout(dismissCooldownTimerRef.current), dismissCooldownTimerRef.current = setTimeout(() => {
          dismissCooldownRef.current = !1;
        }, 800);
      }, []),
      isInDismissCooldown = React.useCallback(() => dismissCooldownRef.current, []),
      burntOptionsRef = React.useRef(burntOptions),
      notificationOptionsRef = React.useRef(notificationOptions);
    React.useEffect(() => {
      burntOptionsRef.current = burntOptions;
    }, [burntOptions]), React.useEffect(() => {
      notificationOptionsRef.current = notificationOptions;
    }, [notificationOptions]), React.useEffect(() => import_ToastState.ToastState.subscribe(toast => {
      if (toast.dismiss) {
        setToasts(toasts2 => toasts2.map(t => t.id === toast.id ? {
          ...t,
          delete: !0
        } : t));
        return;
      }
      native && (0, import_dispatchNativeToast.dispatchNativeToast)(toast, {
        duration,
        burntOptions: burntOptionsRef.current,
        notificationOptions: notificationOptionsRef.current
      }) || setToasts(toasts2 => {
        const idx = toasts2.findIndex(t => t.id === toast.id);
        return idx !== -1 ? [...toasts2.slice(0, idx), {
          ...toasts2[idx],
          ...toast
        }, ...toasts2.slice(idx + 1)] : [toast, ...toasts2];
      });
    }), [native, duration]);
    const prevToastCountRef = React.useRef(toasts.length);
    React.useEffect(() => {
      const prevCount = prevToastCountRef.current;
      prevToastCountRef.current = toasts.length, (toasts.length <= 1 && !dismissCooldownRef.current || toasts.length > prevCount && expanded) && setExpanded(!1);
    }, [toasts.length, expanded]);
    const removeToast = React.useCallback(toastToRemove => {
        setToasts(toasts2 => (toasts2.find(t => t.id === toastToRemove.id)?.delete || import_ToastState.ToastState.dismiss(toastToRemove.id), toasts2.filter(({
          id
        }) => id !== toastToRemove.id)));
      }, []),
      swipeDirection = resolveSwipeDirection(swipeDirectionProp, position),
      currentTheme = (0, import_core.useThemeName)(),
      resolvedTheme = themeProp === "system" || !themeProp ? currentTheme?.includes("dark") ? "dark" : "light" : themeProp,
      contextValue = {
        toasts,
        heights,
        setToastHeight,
        removeToastHeight,
        expanded,
        setExpanded,
        interacting,
        setInteracting,
        triggerDismissCooldown,
        isInDismissCooldown,
        removeToast,
        position,
        duration,
        gap,
        visibleToasts,
        swipeDirection,
        swipeThreshold,
        toastHeight,
        closeButton,
        reducedMotion,
        native,
        burntOptions,
        notificationOptions,
        icons
      };
    return /* @__PURE__ */(0, import_jsx_runtime.jsx)(ToastContext.Provider, {
      ...contextValue,
      children: /* @__PURE__ */(0, import_jsx_runtime.jsx)(import_core.Theme, {
        name: resolvedTheme,
        children
      })
    });
  }),
  ToastViewportFrame = (0, import_core.styled)(import_core.View, {
    name: "ToastViewport",
    variants: {
      unstyled: {
        false: {
          position: import_constants.isWeb ? "fixed" : "absolute",
          zIndex: 1e5,
          pointerEvents: "box-none",
          maxWidth: "100%",
          ...(import_constants.isWeb && {
            width: 356
          }),
          minHeight: 1
        }
      }
    },
    defaultVariants: {
      unstyled: process.env.TAMAGUI_HEADLESS === "1"
    }
  }),
  ToastViewport = ToastViewportFrame.styleable(function (props, ref) {
    const {
        offset = VIEWPORT_OFFSET,
        hotkey = DEFAULT_HOTKEY,
        label = "Notifications",
        portalToRoot = !0,
        portalZIndex = Number.MAX_SAFE_INTEGER,
        children,
        ...rest
      } = props,
      ctx = useToastContext(),
      listRef = React.useRef(null),
      hoverTimeoutRef = React.useRef(null),
      hoverCooldownRef = React.useRef(!1),
      deferredCollapseRef = React.useRef(null),
      mouseInsideRef = React.useRef(!1),
      [yPosition, xPosition] = ctx.position.split("-"),
      {
        insets: safeInsets
      } = (0, import_core.useConfiguration)(),
      offsetStyles = React.useMemo(() => {
        const styles = {},
          defaultOffset = typeof offset == "number" ? offset : VIEWPORT_OFFSET,
          offsetObj = typeof offset == "object" ? offset : {
            top: defaultOffset,
            right: defaultOffset,
            bottom: defaultOffset,
            left: defaultOffset
          },
          safeTop = safeInsets?.top ?? 0,
          safeBottom = safeInsets?.bottom ?? 0,
          topOffset = safeTop > 0 ? safeTop : offsetObj.top ?? defaultOffset,
          bottomOffset = safeBottom > 0 ? safeBottom : offsetObj.bottom ?? defaultOffset;
        return yPosition === "top" ? styles.top = topOffset : styles.bottom = bottomOffset, import_constants.isWeb ? xPosition === "left" ? styles.left = offsetObj.left ?? defaultOffset : xPosition === "right" ? styles.right = offsetObj.right ?? defaultOffset : (styles.left = "50%", styles.transform = "translateX(-50%)") : (styles.left = offsetObj.left ?? defaultOffset, styles.right = offsetObj.right ?? defaultOffset), styles;
      }, [offset, yPosition, xPosition]);
    if (React.useEffect(() => {
      if (!import_constants.isWeb) return;
      const handleKeyDown = event => {
        hotkey.length > 0 && hotkey.every(key => event[key] || event.code === key) && (ctx.setExpanded(!0), listRef.current?.focus());
      };
      return document.addEventListener("keydown", handleKeyDown), () => document.removeEventListener("keydown", handleKeyDown);
    }, [hotkey]), ctx.toasts.length === 0) return null;
    const hotkeyLabel = hotkey.join("+").replace(/Key/g, "").replace(/Digit/g, ""),
      content = /* @__PURE__ */(0, import_jsx_runtime.jsx)(ToastViewportFrame, {
        ref: listRef,
        "aria-label": `${label} ${hotkeyLabel}`,
        tabIndex: -1,
        "aria-live": "polite",
        style: offsetStyles,
        "data-y-position": yPosition,
        "data-x-position": xPosition,
        ...(import_constants.isWeb ? {
          onMouseEnter: () => {
            mouseInsideRef.current = !0, deferredCollapseRef.current && (clearTimeout(deferredCollapseRef.current), deferredCollapseRef.current = null), ctx.toasts.length > 1 && !ctx.interacting && !hoverCooldownRef.current && (hoverTimeoutRef.current = setTimeout(() => ctx.setExpanded(!0), 50));
          },
          onMouseLeave: () => {
            mouseInsideRef.current = !1, hoverTimeoutRef.current && (clearTimeout(hoverTimeoutRef.current), hoverTimeoutRef.current = null), !ctx.interacting && !ctx.isInDismissCooldown() ? ctx.setExpanded(!1) : ctx.isInDismissCooldown() && (deferredCollapseRef.current && clearTimeout(deferredCollapseRef.current), deferredCollapseRef.current = setTimeout(() => {
              deferredCollapseRef.current = null, mouseInsideRef.current || ctx.setExpanded(!1);
            }, 1200));
          },
          onPointerDown: () => {
            hoverTimeoutRef.current && (clearTimeout(hoverTimeoutRef.current), hoverTimeoutRef.current = null), ctx.setInteracting(!0);
          },
          onPointerUp: () => ctx.setInteracting(!1),
          onPointerCancel: () => ctx.setInteracting(!1)
        } : {
          onPress: () => {
            ctx.toasts.length > 1 && ctx.setExpanded(prev => !prev);
          }
        }),
        ...(import_constants.isWeb && {
          onFocus: event => {
            event.currentTarget.contains(event.relatedTarget) || (ctx.toasts.length > 1 && ctx.setExpanded(!0), ctx.setInteracting(!0));
          },
          onBlur: event => {
            event.currentTarget.contains(event.relatedTarget) || (ctx.setInteracting(!1), ctx.isInDismissCooldown() || ctx.setExpanded(!1));
          }
        }),
        ...rest,
        children
      });
    return portalToRoot ? /* @__PURE__ */(0, import_jsx_runtime.jsx)(import_portal.Portal, {
      zIndex: portalZIndex,
      children: content
    }) : content;
  });
function ToastList({
  renderItem
}) {
  const ctx = useToastContext(),
    maxRender = ctx.toasts.length;
  return /* @__PURE__ */(0, import_jsx_runtime.jsx)(import_animate_presence.AnimatePresence, {
    children: ctx.toasts.slice(0, maxRender).map((toast, index) => {
      const handleClose = () => {
          toast.dismissible !== !1 && (toast.onDismiss?.(toast), ctx.removeToast(toast));
        },
        itemContextValue = {
          toast,
          handleClose
        };
      return renderItem ? /* @__PURE__ */(0, import_jsx_runtime.jsx)(ToastItemContext.Provider, {
        value: itemContextValue,
        children: renderItem({
          toast,
          index,
          handleClose
        })
      }, toast.id) : /* @__PURE__ */(0, import_jsx_runtime.jsx)(ToastItemContext.Provider, {
        value: itemContextValue,
        children: /* @__PURE__ */(0, import_jsx_runtime.jsx)(ToastItemInner, {
          toast,
          index,
          children: /* @__PURE__ */(0, import_jsx_runtime.jsx)(DefaultToastContent, {
            toast
          })
        })
      }, toast.id);
    })
  });
}
function DefaultToastContent({
  toast
}) {
  const ctx = useToastContext(),
    {
      handleClose
    } = useToastItemContext(),
    toastType = toast.type ?? "default",
    dismissible = toast.dismissible !== !1,
    title = typeof toast.title == "function" ? toast.title() : toast.title,
    description = typeof toast.description == "function" ? toast.description() : toast.description;
  return /* @__PURE__ */(0, import_jsx_runtime.jsxs)(import_stacks.XStack, {
    alignItems: "flex-start",
    gap: "$3",
    children: [/* @__PURE__ */(0, import_jsx_runtime.jsx)(ToastIcon, {}), /* @__PURE__ */(0, import_jsx_runtime.jsxs)(import_stacks.YStack, {
      flex: 1,
      gap: "$1",
      children: [title && /* @__PURE__ */(0, import_jsx_runtime.jsx)(ToastTitle, {
        children: title
      }), description && /* @__PURE__ */(0, import_jsx_runtime.jsx)(ToastDescription, {
        children: description
      }), (toast.action || toast.cancel) && /* @__PURE__ */(0, import_jsx_runtime.jsxs)(import_stacks.XStack, {
        gap: "$2",
        marginTop: "$2",
        children: [toast.cancel && /* @__PURE__ */(0, import_jsx_runtime.jsx)(import_ToastItemFrame.ToastActionFrame, {
          backgroundColor: "transparent",
          onPress: e => {
            toast.cancel?.onClick?.(e), handleClose();
          },
          children: /* @__PURE__ */(0, import_jsx_runtime.jsx)(import_text.SizableText, {
            size: "$2",
            color: "$color11",
            children: toast.cancel.label
          })
        }), toast.action && /* @__PURE__ */(0, import_jsx_runtime.jsx)(import_ToastItemFrame.ToastActionFrame, {
          backgroundColor: "$color12",
          hoverStyle: {
            backgroundColor: "$color11"
          },
          pressStyle: {
            backgroundColor: "$color10"
          },
          onPress: e => {
            toast.action?.onClick?.(e), e.defaultPrevented || handleClose();
          },
          children: /* @__PURE__ */(0, import_jsx_runtime.jsx)(import_text.SizableText, {
            size: "$2",
            fontWeight: "600",
            color: "$background",
            children: toast.action.label
          })
        })]
      })]
    }), ctx.closeButton && dismissible && /* @__PURE__ */(0, import_jsx_runtime.jsx)(ToastClose, {})]
  });
}
function DragWrapper({
  animatedStyle,
  gestureHandlers,
  gesture,
  AnimatedView,
  dragRef,
  children
}) {
  if (import_constants.isWeb) return /* @__PURE__ */(0, import_jsx_runtime.jsx)("div", {
    ref: dragRef,
    style: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      userSelect: "none",
      WebkitUserSelect: "none",
      touchAction: "none",
      cursor: "default"
    },
    ...gestureHandlers,
    children
  });
  if (gesture) {
    const GestureDetector = (0, import_native.getGestureHandler)().state.GestureDetector;
    if (GestureDetector) return /* @__PURE__ */(0, import_jsx_runtime.jsx)(GestureDetector, {
      gesture,
      children: /* @__PURE__ */(0, import_jsx_runtime.jsx)(import_core.View, {
        style: {
          flex: 1
        },
        collapsable: !1,
        children: /* @__PURE__ */(0, import_jsx_runtime.jsx)(AnimatedView, {
          style: [{
            flex: 1
          }, animatedStyle],
          children
        })
      })
    });
  }
  return /* @__PURE__ */(0, import_jsx_runtime.jsx)(AnimatedView, {
    style: [{
      flex: 1
    }, animatedStyle],
    ...gestureHandlers,
    children
  });
}
const ToastItemInner = import_ToastItemFrame.ToastItemFrame.styleable(function (props, ref) {
    const {
        toast,
        index,
        children,
        ...rest
      } = props,
      ctx = useToastContext(),
      [mounted, setMounted] = React.useState(!1),
      [removed, setRemoved] = React.useState(!1),
      [swipeOut, setSwipeOut] = React.useState(!1),
      [offsetBeforeRemove, setOffsetBeforeRemove] = React.useState(0),
      swipeExitYRef = React.useRef(null),
      closeTimerRef = React.useRef(null),
      closeTimerStartRef = React.useRef(0),
      lastPauseTimeRef = React.useRef(0),
      remainingTimeRef = React.useRef(toast.duration ?? ctx.duration),
      isFront = index === 0,
      isVisible = index < ctx.visibleToasts,
      toastType = toast.type ?? "default",
      dismissible = toast.dismissible !== !1,
      duration = toast.duration ?? ctx.duration,
      [yPosition] = ctx.position.split("-"),
      isTop = yPosition === "top",
      expandedOffset = import_constants.isWeb ? (() => {
        let totalHeight = 0,
          activeCount = 0;
        for (let i = 0; i < index; i++) {
          const toastId = ctx.toasts[i]?.id;
          if (toastId == null) continue;
          const h = ctx.heights[toastId];
          h !== 0 && (totalHeight += h ?? ctx.toastHeight, activeCount++);
        }
        return totalHeight + activeCount * ctx.gap;
      })() : index * (ctx.toastHeight + ctx.gap),
      expandedOffsetRef = React.useRef(expandedOffset);
    expandedOffsetRef.current = expandedOffset;
    const isExpandedRef = React.useRef(ctx.expanded);
    isExpandedRef.current = ctx.expanded;
    const startTimer = React.useCallback(() => {
        duration === Number.POSITIVE_INFINITY || toastType === "loading" || (closeTimerStartRef.current = Date.now(), closeTimerRef.current = setTimeout(() => {
          toast.onAutoClose?.(toast), setRemoved(!0), setTimeout(() => ctx.removeToast(toast), TIME_BEFORE_UNMOUNT);
        }, remainingTimeRef.current));
      }, [duration, toastType, toast, ctx.removeToast]),
      pauseTimer = (0, import_core.useEvent)(() => {
        if (closeTimerRef.current && clearTimeout(closeTimerRef.current), lastPauseTimeRef.current < closeTimerStartRef.current) {
          const elapsed = Date.now() - closeTimerStartRef.current;
          remainingTimeRef.current = Math.max(0, remainingTimeRef.current - elapsed);
        }
        lastPauseTimeRef.current = Date.now();
      }),
      resumeTimer = (0, import_core.useEvent)(() => {
        ctx.expanded || ctx.interacting || (remainingTimeRef.current = duration, startTimer());
      });
    React.useEffect(() => {
      setMounted(!0);
    }, []), React.useEffect(() => {
      toast.delete && (setRemoved(!0), isExpandedRef.current && setOffsetBeforeRemove(expandedOffsetRef.current), setTimeout(() => ctx.removeToast(toast), TIME_BEFORE_UNMOUNT));
    }, [toast.delete, toast, ctx.removeToast]), React.useEffect(() => (ctx.expanded || ctx.interacting ? pauseTimer() : startTimer(), () => {
      closeTimerRef.current && clearTimeout(closeTimerRef.current);
    }), [ctx.expanded, ctx.interacting, startTimer]), React.useEffect(() => {
      remainingTimeRef.current = duration;
    }, [duration]);
    const {
        setDragOffset,
        springBack,
        animateOut,
        animatedStyle,
        AnimatedView,
        dragRef
      } = (0, import_useToastAnimations.useToastAnimations)({
        reducedMotion: ctx.reducedMotion,
        swipeAxis: ctx.swipeDirection === "up" || ctx.swipeDirection === "down" || ctx.swipeDirection === "vertical" ? "vertical" : "horizontal"
      }),
      {
        isDragging,
        gestureHandlers,
        gesture
      } = (0, import_useAnimatedDragGesture.useAnimatedDragGesture)({
        direction: ctx.swipeDirection,
        threshold: ctx.swipeThreshold,
        disabled: !dismissible || toastType === "loading",
        expanded: ctx.expanded,
        onDragStart: pauseTimer,
        onDragMove: setDragOffset,
        onDismiss: (exitDirection, velocity) => {
          ctx.triggerDismissCooldown(), setSwipeOut(!0), toast.onDismiss?.(toast), swipeExitYRef.current = isExpandedRef.current ? isTop ? expandedOffsetRef.current : -expandedOffsetRef.current : isFront ? 0 : isTop ? ctx.gap * index : -ctx.gap * index, setRemoved(!0), ctx.removeToast(toast), animateOut(exitDirection, velocity);
        },
        onCancel: () => {
          springBack(() => {
            resumeTimer();
          });
        }
      }),
      handleLayout = React.useCallback(event => {
        if (!import_constants.isWeb || removed || !ctx.expanded && index !== 0) return;
        const {
          height
        } = event.nativeEvent.layout;
        ctx.setToastHeight(toast.id, height);
      }, [toast.id, ctx.setToastHeight, index, ctx.expanded, removed]);
    React.useEffect(() => {
      if (import_constants.isWeb) return () => {
        ctx.removeToastHeight(toast.id);
      };
    }, [toast.id, ctx.removeToastHeight]);
    const handleClose = React.useCallback(() => {
        dismissible && (ctx.triggerDismissCooldown(), toast.onDismiss?.(toast), setRemoved(!0), isExpandedRef.current && setOffsetBeforeRemove(expandedOffsetRef.current), setTimeout(() => ctx.removeToast(toast), TIME_BEFORE_UNMOUNT));
      }, [dismissible, toast, ctx.removeToast, ctx.triggerDismissCooldown]),
      itemContextValue = React.useMemo(() => ({
        toast,
        handleClose
      }), [toast, handleClose]);
    let frontToastHeight = -1;
    if (import_constants.isWeb) for (const t of ctx.toasts) {
      const h = ctx.heights[t.id];
      if (h != null && h > 0) {
        frontToastHeight = h;
        break;
      }
    }
    const stackScale = !ctx.expanded && !isFront ? 1 - index * 0.05 : 1,
      activeExpandedOffset = removed ? offsetBeforeRemove : expandedOffset,
      stackY = ctx.expanded ? isTop ? activeExpandedOffset : -activeExpandedOffset : isFront ? 0 : isTop ? ctx.gap * index : -ctx.gap * index,
      computedOpacity = removed && !swipeOut || index >= ctx.visibleToasts ? 0 : 1,
      computedZIndex = removed ? 0 : ctx.visibleToasts - index + 1,
      computedHeight = import_constants.isWeb ? ctx.expanded ? ctx.heights[toast.id] || void 0 : !isFront && frontToastHeight > 0 ? frontToastHeight : void 0 : void 0,
      computedPointerEvents = index >= ctx.visibleToasts ? "none" : "auto",
      gapFillerHeight = ctx.expanded ? ctx.gap + 1 : 0,
      dataAttributes = {
        "data-mounted": mounted ? "true" : "false",
        "data-removed": removed ? "true" : "false",
        "data-swipe-out": swipeOut ? "true" : "false",
        "data-visible": isVisible ? "true" : "false",
        "data-front": isFront ? "true" : "false",
        "data-index": String(index),
        "data-type": toastType,
        "data-expanded": ctx.expanded ? "true" : "false"
      };
    return /* @__PURE__ */(0, import_jsx_runtime.jsx)(import_ToastItemFrame.ToastPositionWrapper, {
      ref,
      testID: rest.testID,
      accessibilityLabel: rest.accessibilityLabel,
      ...dataAttributes,
      transition: isDragging || ctx.reducedMotion ? void 0 : removed ? "200ms" : "400ms",
      animateOnly: import_constants.isWeb ? ["transform", "opacity", "height"] : ["transform", "opacity"],
      y: stackY,
      scale: stackScale,
      opacity: computedOpacity,
      zIndex: computedZIndex,
      height: computedHeight,
      overflow: "visible",
      pointerEvents: computedPointerEvents,
      top: isTop ? 0 : void 0,
      bottom: isTop ? void 0 : 0,
      ...(import_constants.isWeb && !isFront && {
        style: {
          transformOrigin: isTop ? "top center" : "bottom center"
        }
      }),
      enterStyle: ctx.reducedMotion ? {
        opacity: 0
      } : {
        opacity: 0,
        y: isTop ? -80 : 80
      },
      exitStyle: ctx.reducedMotion ? {
        opacity: 0
      } : swipeOut ? {
        opacity: 0,
        y: swipeExitYRef.current ?? stackY,
        scale: stackScale
      } : {
        opacity: 0,
        y: stackY,
        scale: stackScale
      },
      children: /* @__PURE__ */(0, import_jsx_runtime.jsx)(DragWrapper, {
        animatedStyle,
        gestureHandlers,
        gesture,
        AnimatedView,
        dragRef,
        children: /* @__PURE__ */(0, import_jsx_runtime.jsxs)(import_ToastItemFrame.ToastItemFrame, {
          role: "status",
          "aria-live": "polite",
          "aria-atomic": !0,
          tabIndex: 0,
          onLayout: handleLayout,
          ...(import_constants.isWeb && {
            onKeyDown: event => {
              if (event.key === "Escape" && dismissible) {
                const current = event.currentTarget,
                  container = current.closest("[aria-label]");
                if (container) {
                  const focusables = container.querySelectorAll('[tabindex="0"]'),
                    arr = Array.from(focusables),
                    idx = arr.indexOf(current);
                  (arr[idx + 1] || arr[idx - 1])?.focus();
                }
                handleClose();
              }
            }
          }),
          ...rest,
          children: [ctx.expanded && gapFillerHeight > 0 && /* @__PURE__ */(0, import_jsx_runtime.jsx)(import_core.View, {
            position: "absolute",
            left: 0,
            right: 0,
            height: gapFillerHeight,
            pointerEvents: "auto",
            ...(isTop ? {
              top: "100%"
            } : {
              bottom: "100%"
            })
          }), /* @__PURE__ */(0, import_jsx_runtime.jsx)(ToastItemContext.Provider, {
            value: itemContextValue,
            children
          })]
        })
      })
    });
  }),
  ToastTitle = (0, import_core.styled)(import_text.SizableText, {
    name: "ToastTitle",
    variants: {
      unstyled: {
        false: {
          color: "$color",
          fontWeight: "600",
          size: "$4"
        }
      }
    },
    defaultVariants: {
      unstyled: process.env.TAMAGUI_HEADLESS === "1"
    }
  }),
  ToastDescription = (0, import_core.styled)(import_text.SizableText, {
    name: "ToastDescription",
    variants: {
      unstyled: {
        false: {
          color: "$color11",
          size: "$2"
        }
      }
    },
    defaultVariants: {
      unstyled: process.env.TAMAGUI_HEADLESS === "1"
    }
  }),
  ToastClose = import_ToastItemFrame.ToastCloseFrame.styleable(function (props, ref) {
    let handleClose;
    try {
      handleClose = useToastItemContext().handleClose;
    } catch {}
    const ctx = useToastContext();
    return /* @__PURE__ */(0, import_jsx_runtime.jsx)(import_ToastItemFrame.ToastCloseFrame, {
      ref,
      "aria-label": "Close toast",
      onPress: handleClose,
      ...props,
      children: props.children ?? ctx.icons?.close ?? /* @__PURE__ */(0, import_jsx_runtime.jsx)(import_ToastItemFrame.DefaultCloseIcon, {})
    });
  }),
  ToastAction = import_ToastItemFrame.ToastActionFrame.styleable(function (props, ref) {
    return /* @__PURE__ */(0, import_jsx_runtime.jsx)(import_ToastItemFrame.ToastActionFrame, {
      ref,
      ...props
    });
  });
function ToastIcon(props) {
  const ctx = useToastContext();
  let toast;
  try {
    toast = useToastItemContext().toast;
  } catch {
    return null;
  }
  if (!toast) return null;
  if (toast.icon !== void 0) return /* @__PURE__ */(0, import_jsx_runtime.jsx)(import_core.View, {
    flexShrink: 0,
    marginTop: "$0.5",
    children: toast.icon
  });
  const toastType = toast.type ?? "default",
    icon = ctx.icons?.[toastType] ?? null;
  return icon ? /* @__PURE__ */(0, import_jsx_runtime.jsx)(import_core.View, {
    flexShrink: 0,
    marginTop: "$0.5",
    children: icon
  }) : null;
}
function useToasts() {
  const ctx = useToastContext();
  return {
    toasts: ctx.toasts,
    expanded: ctx.expanded,
    position: ctx.position
  };
}
function useToastItem() {
  return useToastItemContext();
}
ToastRoot.displayName = "Toast";
const Toast = (0, import_helpers.withStaticProperties)(ToastRoot, {
  Viewport: ToastViewport,
  List: ToastList,
  Item: ToastItemInner,
  Title: ToastTitle,
  Description: ToastDescription,
  Close: ToastClose,
  Action: ToastAction,
  Icon: ToastIcon
});