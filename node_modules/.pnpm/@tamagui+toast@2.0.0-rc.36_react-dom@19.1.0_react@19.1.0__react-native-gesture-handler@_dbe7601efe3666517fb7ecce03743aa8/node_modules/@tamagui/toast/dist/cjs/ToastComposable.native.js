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
var ToastComposable_exports = {};
__export(ToastComposable_exports, {
  Toast: () => Toast,
  useToastItem: () => useToastItem,
  useToasts: () => useToasts
});
module.exports = __toCommonJS(ToastComposable_exports);
var import_jsx_runtime = require("react/jsx-runtime"),
  import_animate_presence = require("@tamagui/animate-presence"),
  import_constants = require("@tamagui/constants"),
  import_native = require("@tamagui/native"),
  import_core = require("@tamagui/core"),
  import_helpers = require("@tamagui/helpers"),
  import_portal = require("@tamagui/portal"),
  import_stacks = require("@tamagui/stacks"),
  import_text = require("@tamagui/text"),
  React = __toESM(require("react"), 1),
  import_ToastState = require("./ToastState.native.js"),
  import_dispatchNativeToast = require("./dispatchNativeToast.native.js"),
  import_useAnimatedDragGesture = require("./useAnimatedDragGesture.native.js"),
  import_useToastAnimations = require("./useToastAnimations.native.js"),
  import_useReducedMotion = require("./useReducedMotion.native.js"),
  import_ToastItemFrame = require("./ToastItemFrame.native.js");
function _type_of(obj) {
  "@swc/helpers - typeof";

  return obj && typeof Symbol < "u" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
var VISIBLE_TOASTS_AMOUNT = 4,
  VIEWPORT_OFFSET = 16,
  TOAST_GAP = 14,
  TOAST_LIFETIME = 4e3,
  FIXED_TOAST_HEIGHT = 72,
  TIME_BEFORE_UNMOUNT = 200,
  DEFAULT_HOTKEY = ["altKey", "KeyT"],
  ToastContext = (0, import_core.createStyledContext)({}, "Toast__"),
  useToastContext = ToastContext.useStyledContext,
  ToastItemContext = /* @__PURE__ */React.createContext(null);
function useToastItemContext() {
  var ctx = React.useContext(ToastItemContext);
  if (!ctx) throw new Error("useToastItemContext must be used within Toast.Item or Toast.List");
  return ctx;
}
function resolveSwipeDirection(direction, position) {
  if (direction !== "auto") return direction;
  var [yPosition, xPosition] = position.split("-");
  return import_constants.isWeb ? xPosition === "left" ? "left" : xPosition === "right" ? "right" : "horizontal" : yPosition === "top" ? "up" : "down";
}
var ToastRoot = /* @__PURE__ */React.forwardRef(function (props, _ref) {
    var {
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
    React.useLayoutEffect(function () {
      prevExpandedRef.current !== expanded && (heightsLockedRef.current = !0, prevExpandedRef.current = expanded);
      var timer = setTimeout(function () {
        heightsLockedRef.current = !1;
      }, 350);
      return function () {
        return clearTimeout(timer);
      };
    }, [expanded]);
    var setToastHeight = React.useCallback(function (toastId, height) {
        if (!heightsLockedRef.current) {
          var rounded = Math.round(height);
          setHeights(function (prev) {
            var existing = prev[toastId];
            return existing != null && Math.abs(existing - rounded) <= 2 ? prev : {
              ...prev,
              [toastId]: rounded
            };
          });
        }
      }, []),
      removeToastHeight = React.useCallback(function (toastId) {
        setHeights(function (prev) {
          if (!(toastId in prev)) return prev;
          var next = {
            ...prev
          };
          return delete next[toastId], next;
        });
      }, []),
      dismissCooldownRef = React.useRef(!1),
      dismissCooldownTimerRef = React.useRef(null),
      triggerDismissCooldown = React.useCallback(function () {
        dismissCooldownRef.current = !0, dismissCooldownTimerRef.current && clearTimeout(dismissCooldownTimerRef.current), dismissCooldownTimerRef.current = setTimeout(function () {
          dismissCooldownRef.current = !1;
        }, 800);
      }, []),
      isInDismissCooldown = React.useCallback(function () {
        return dismissCooldownRef.current;
      }, []),
      burntOptionsRef = React.useRef(burntOptions),
      notificationOptionsRef = React.useRef(notificationOptions);
    React.useEffect(function () {
      burntOptionsRef.current = burntOptions;
    }, [burntOptions]), React.useEffect(function () {
      notificationOptionsRef.current = notificationOptions;
    }, [notificationOptions]), React.useEffect(function () {
      return import_ToastState.ToastState.subscribe(function (toast) {
        if (toast.dismiss) {
          setToasts(function (toasts2) {
            return toasts2.map(function (t) {
              return t.id === toast.id ? {
                ...t,
                delete: !0
              } : t;
            });
          });
          return;
        }
        if (native) {
          var handled = (0, import_dispatchNativeToast.dispatchNativeToast)(toast, {
            duration,
            burntOptions: burntOptionsRef.current,
            notificationOptions: notificationOptionsRef.current
          });
          if (handled) return;
        }
        setToasts(function (toasts2) {
          var idx = toasts2.findIndex(function (t) {
            return t.id === toast.id;
          });
          return idx !== -1 ? [...toasts2.slice(0, idx), {
            ...toasts2[idx],
            ...toast
          }, ...toasts2.slice(idx + 1)] : [toast, ...toasts2];
        });
      });
    }, [native, duration]);
    var prevToastCountRef = React.useRef(toasts.length);
    React.useEffect(function () {
      var prevCount = prevToastCountRef.current;
      prevToastCountRef.current = toasts.length, (toasts.length <= 1 && !dismissCooldownRef.current || toasts.length > prevCount && expanded) && setExpanded(!1);
    }, [toasts.length, expanded]);
    var removeToast = React.useCallback(function (toastToRemove) {
        setToasts(function (toasts2) {
          var _toasts_find;
          return !((_toasts_find = toasts2.find(function (t) {
            return t.id === toastToRemove.id;
          })) === null || _toasts_find === void 0) && _toasts_find.delete || import_ToastState.ToastState.dismiss(toastToRemove.id), toasts2.filter(function (param) {
            var {
              id
            } = param;
            return id !== toastToRemove.id;
          });
        });
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
    var {
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
      offsetStyles = React.useMemo(function () {
        var styles = {},
          defaultOffset = typeof offset == "number" ? offset : VIEWPORT_OFFSET,
          offsetObj = (typeof offset > "u" ? "undefined" : _type_of(offset)) === "object" ? offset : {
            top: defaultOffset,
            right: defaultOffset,
            bottom: defaultOffset,
            left: defaultOffset
          },
          _safeInsets_top,
          safeTop = (_safeInsets_top = safeInsets?.top) !== null && _safeInsets_top !== void 0 ? _safeInsets_top : 0,
          _safeInsets_bottom,
          safeBottom = (_safeInsets_bottom = safeInsets?.bottom) !== null && _safeInsets_bottom !== void 0 ? _safeInsets_bottom : 0,
          _offsetObj_top,
          topOffset = safeTop > 0 ? safeTop : (_offsetObj_top = offsetObj.top) !== null && _offsetObj_top !== void 0 ? _offsetObj_top : defaultOffset,
          _offsetObj_bottom,
          bottomOffset = safeBottom > 0 ? safeBottom : (_offsetObj_bottom = offsetObj.bottom) !== null && _offsetObj_bottom !== void 0 ? _offsetObj_bottom : defaultOffset;
        if (yPosition === "top" ? styles.top = topOffset : styles.bottom = bottomOffset, import_constants.isWeb) {
          var _offsetObj_left, _offsetObj_right;
          xPosition === "left" ? styles.left = (_offsetObj_left = offsetObj.left) !== null && _offsetObj_left !== void 0 ? _offsetObj_left : defaultOffset : xPosition === "right" ? styles.right = (_offsetObj_right = offsetObj.right) !== null && _offsetObj_right !== void 0 ? _offsetObj_right : defaultOffset : (styles.left = "50%", styles.transform = "translateX(-50%)");
        } else {
          var _offsetObj_left1;
          styles.left = (_offsetObj_left1 = offsetObj.left) !== null && _offsetObj_left1 !== void 0 ? _offsetObj_left1 : defaultOffset;
          var _offsetObj_right1;
          styles.right = (_offsetObj_right1 = offsetObj.right) !== null && _offsetObj_right1 !== void 0 ? _offsetObj_right1 : defaultOffset;
        }
        return styles;
      }, [offset, yPosition, xPosition]);
    if (React.useEffect(function () {
      if (import_constants.isWeb) {
        var handleKeyDown = function (event) {
          var isHotkeyPressed = hotkey.length > 0 && hotkey.every(function (key) {
            return event[key] || event.code === key;
          });
          if (isHotkeyPressed) {
            var _listRef_current;
            ctx.setExpanded(!0), (_listRef_current = listRef.current) === null || _listRef_current === void 0 || _listRef_current.focus();
          }
        };
        return document.addEventListener("keydown", handleKeyDown), function () {
          return document.removeEventListener("keydown", handleKeyDown);
        };
      }
    }, [hotkey]), ctx.toasts.length === 0) return null;
    var hotkeyLabel = hotkey.join("+").replace(/Key/g, "").replace(/Digit/g, ""),
      content = /* @__PURE__ */(0, import_jsx_runtime.jsx)(ToastViewportFrame, {
        ref: listRef,
        "aria-label": `${label} ${hotkeyLabel}`,
        tabIndex: -1,
        "aria-live": "polite",
        style: offsetStyles,
        "data-y-position": yPosition,
        "data-x-position": xPosition,
        ...(import_constants.isWeb ? {
          onMouseEnter: function () {
            mouseInsideRef.current = !0, deferredCollapseRef.current && (clearTimeout(deferredCollapseRef.current), deferredCollapseRef.current = null), ctx.toasts.length > 1 && !ctx.interacting && !hoverCooldownRef.current && (hoverTimeoutRef.current = setTimeout(function () {
              return ctx.setExpanded(!0);
            }, 50));
          },
          onMouseLeave: function () {
            mouseInsideRef.current = !1, hoverTimeoutRef.current && (clearTimeout(hoverTimeoutRef.current), hoverTimeoutRef.current = null), !ctx.interacting && !ctx.isInDismissCooldown() ? ctx.setExpanded(!1) : ctx.isInDismissCooldown() && (deferredCollapseRef.current && clearTimeout(deferredCollapseRef.current), deferredCollapseRef.current = setTimeout(function () {
              deferredCollapseRef.current = null, mouseInsideRef.current || ctx.setExpanded(!1);
            }, 1200));
          },
          onPointerDown: function () {
            hoverTimeoutRef.current && (clearTimeout(hoverTimeoutRef.current), hoverTimeoutRef.current = null), ctx.setInteracting(!0);
          },
          onPointerUp: function () {
            return ctx.setInteracting(!1);
          },
          onPointerCancel: function () {
            return ctx.setInteracting(!1);
          }
        } : {
          onPress: function () {
            ctx.toasts.length > 1 && ctx.setExpanded(function (prev) {
              return !prev;
            });
          }
        }),
        ...(import_constants.isWeb && {
          onFocus: function (event) {
            event.currentTarget.contains(event.relatedTarget) || (ctx.toasts.length > 1 && ctx.setExpanded(!0), ctx.setInteracting(!0));
          },
          onBlur: function (event) {
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
function ToastList(param) {
  var {
      renderItem
    } = param,
    ctx = useToastContext(),
    maxRender = ctx.toasts.length;
  return /* @__PURE__ */(0, import_jsx_runtime.jsx)(import_animate_presence.AnimatePresence, {
    children: ctx.toasts.slice(0, maxRender).map(function (toast, index) {
      var handleClose = function () {
          var _toast_onDismiss;
          toast.dismissible !== !1 && ((_toast_onDismiss = toast.onDismiss) === null || _toast_onDismiss === void 0 || _toast_onDismiss.call(toast, toast), ctx.removeToast(toast));
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
function DefaultToastContent(param) {
  var {
      toast
    } = param,
    ctx = useToastContext(),
    {
      handleClose
    } = useToastItemContext(),
    _toast_type,
    toastType = (_toast_type = toast.type) !== null && _toast_type !== void 0 ? _toast_type : "default",
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
          onPress: function (e) {
            var _toast_cancel_onClick, _toast_cancel;
            (_toast_cancel = toast.cancel) === null || _toast_cancel === void 0 || (_toast_cancel_onClick = _toast_cancel.onClick) === null || _toast_cancel_onClick === void 0 || _toast_cancel_onClick.call(_toast_cancel, e), handleClose();
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
          onPress: function (e) {
            var _toast_action_onClick, _toast_action;
            (_toast_action = toast.action) === null || _toast_action === void 0 || (_toast_action_onClick = _toast_action.onClick) === null || _toast_action_onClick === void 0 || _toast_action_onClick.call(_toast_action, e), e.defaultPrevented || handleClose();
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
function DragWrapper(param) {
  var {
    animatedStyle,
    gestureHandlers,
    gesture,
    AnimatedView,
    dragRef,
    children
  } = param;
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
    var gh = (0, import_native.getGestureHandler)(),
      GestureDetector = gh.state.GestureDetector;
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
var ToastItemInner = import_ToastItemFrame.ToastItemFrame.styleable(function (props, ref) {
    var {
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
      _toast_duration,
      remainingTimeRef = React.useRef((_toast_duration = toast.duration) !== null && _toast_duration !== void 0 ? _toast_duration : ctx.duration),
      isFront = index === 0,
      isVisible = index < ctx.visibleToasts,
      _toast_type,
      toastType = (_toast_type = toast.type) !== null && _toast_type !== void 0 ? _toast_type : "default",
      dismissible = toast.dismissible !== !1,
      _toast_duration1,
      duration = (_toast_duration1 = toast.duration) !== null && _toast_duration1 !== void 0 ? _toast_duration1 : ctx.duration,
      [yPosition] = ctx.position.split("-"),
      isTop = yPosition === "top",
      expandedOffset = import_constants.isWeb ? function () {
        for (var totalHeight = 0, activeCount = 0, i = 0; i < index; i++) {
          var _ctx_toasts_i,
            toastId = (_ctx_toasts_i = ctx.toasts[i]) === null || _ctx_toasts_i === void 0 ? void 0 : _ctx_toasts_i.id;
          if (toastId != null) {
            var h2 = ctx.heights[toastId];
            h2 !== 0 && (totalHeight += h2 ?? ctx.toastHeight, activeCount++);
          }
        }
        return totalHeight + activeCount * ctx.gap;
      }() : index * (ctx.toastHeight + ctx.gap),
      expandedOffsetRef = React.useRef(expandedOffset);
    expandedOffsetRef.current = expandedOffset;
    var isExpandedRef = React.useRef(ctx.expanded);
    isExpandedRef.current = ctx.expanded;
    var startTimer = React.useCallback(function () {
        duration === Number.POSITIVE_INFINITY || toastType === "loading" || (closeTimerStartRef.current = Date.now(), closeTimerRef.current = setTimeout(function () {
          var _toast_onAutoClose;
          (_toast_onAutoClose = toast.onAutoClose) === null || _toast_onAutoClose === void 0 || _toast_onAutoClose.call(toast, toast), setRemoved(!0), setTimeout(function () {
            return ctx.removeToast(toast);
          }, TIME_BEFORE_UNMOUNT);
        }, remainingTimeRef.current));
      }, [duration, toastType, toast, ctx.removeToast]),
      pauseTimer = (0, import_core.useEvent)(function () {
        if (closeTimerRef.current && clearTimeout(closeTimerRef.current), lastPauseTimeRef.current < closeTimerStartRef.current) {
          var elapsed = Date.now() - closeTimerStartRef.current;
          remainingTimeRef.current = Math.max(0, remainingTimeRef.current - elapsed);
        }
        lastPauseTimeRef.current = Date.now();
      }),
      resumeTimer = (0, import_core.useEvent)(function () {
        ctx.expanded || ctx.interacting || (remainingTimeRef.current = duration, startTimer());
      });
    React.useEffect(function () {
      setMounted(!0);
    }, []), React.useEffect(function () {
      toast.delete && (setRemoved(!0), isExpandedRef.current && setOffsetBeforeRemove(expandedOffsetRef.current), setTimeout(function () {
        return ctx.removeToast(toast);
      }, TIME_BEFORE_UNMOUNT));
    }, [toast.delete, toast, ctx.removeToast]), React.useEffect(function () {
      return ctx.expanded || ctx.interacting ? pauseTimer() : startTimer(), function () {
        closeTimerRef.current && clearTimeout(closeTimerRef.current);
      };
    }, [ctx.expanded, ctx.interacting, startTimer]), React.useEffect(function () {
      remainingTimeRef.current = duration;
    }, [duration]);
    var {
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
        onDismiss: function (exitDirection, velocity) {
          var _toast_onDismiss;
          ctx.triggerDismissCooldown(), setSwipeOut(!0), (_toast_onDismiss = toast.onDismiss) === null || _toast_onDismiss === void 0 || _toast_onDismiss.call(toast, toast), swipeExitYRef.current = isExpandedRef.current ? isTop ? expandedOffsetRef.current : -expandedOffsetRef.current : isFront ? 0 : isTop ? ctx.gap * index : -ctx.gap * index, setRemoved(!0), ctx.removeToast(toast), animateOut(exitDirection, velocity);
        },
        onCancel: function () {
          springBack(function () {
            resumeTimer();
          });
        }
      }),
      handleLayout = React.useCallback(function (event) {
        if (import_constants.isWeb && !removed && !(!ctx.expanded && index !== 0)) {
          var {
            height
          } = event.nativeEvent.layout;
          ctx.setToastHeight(toast.id, height);
        }
      }, [toast.id, ctx.setToastHeight, index, ctx.expanded, removed]);
    React.useEffect(function () {
      if (import_constants.isWeb) return function () {
        ctx.removeToastHeight(toast.id);
      };
    }, [toast.id, ctx.removeToastHeight]);
    var handleClose = React.useCallback(function () {
        var _toast_onDismiss;
        dismissible && (ctx.triggerDismissCooldown(), (_toast_onDismiss = toast.onDismiss) === null || _toast_onDismiss === void 0 || _toast_onDismiss.call(toast, toast), setRemoved(!0), isExpandedRef.current && setOffsetBeforeRemove(expandedOffsetRef.current), setTimeout(function () {
          return ctx.removeToast(toast);
        }, TIME_BEFORE_UNMOUNT));
      }, [dismissible, toast, ctx.removeToast, ctx.triggerDismissCooldown]),
      itemContextValue = React.useMemo(function () {
        return {
          toast,
          handleClose
        };
      }, [toast, handleClose]),
      frontToastHeight = -1;
    if (import_constants.isWeb) {
      var _iteratorNormalCompletion = !0,
        _didIteratorError = !1,
        _iteratorError = void 0;
      try {
        for (var _iterator = ctx.toasts[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = !0) {
          var t = _step.value,
            h = ctx.heights[t.id];
          if (h != null && h > 0) {
            frontToastHeight = h;
            break;
          }
        }
      } catch (err) {
        _didIteratorError = !0, _iteratorError = err;
      } finally {
        try {
          !_iteratorNormalCompletion && _iterator.return != null && _iterator.return();
        } finally {
          if (_didIteratorError) throw _iteratorError;
        }
      }
    }
    var stackScale = !ctx.expanded && !isFront ? 1 - index * 0.05 : 1,
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
      },
      _swipeExitYRef_current;
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
        y: (_swipeExitYRef_current = swipeExitYRef.current) !== null && _swipeExitYRef_current !== void 0 ? _swipeExitYRef_current : stackY,
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
            onKeyDown: function (event) {
              if (event.key === "Escape" && dismissible) {
                var current = event.currentTarget,
                  container = current.closest("[aria-label]");
                if (container) {
                  var focusables = container.querySelectorAll('[tabindex="0"]'),
                    arr = Array.from(focusables),
                    idx = arr.indexOf(current),
                    next = arr[idx + 1] || arr[idx - 1];
                  next?.focus();
                }
                handleClose();
              }
            }
          }),
          ...rest,
          children: [/* gap filler to prevent hover flicker */
          ctx.expanded && gapFillerHeight > 0 && /* @__PURE__ */(0, import_jsx_runtime.jsx)(import_core.View, {
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
    var _ctx_icons, handleClose;
    try {
      var itemCtx = useToastItemContext();
      handleClose = itemCtx.handleClose;
    } catch {}
    var ctx = useToastContext(),
      _props_children,
      _ref;
    return /* @__PURE__ */(0, import_jsx_runtime.jsx)(import_ToastItemFrame.ToastCloseFrame, {
      ref,
      "aria-label": "Close toast",
      onPress: handleClose,
      ...props,
      children: (_ref = (_props_children = props.children) !== null && _props_children !== void 0 ? _props_children : (_ctx_icons = ctx.icons) === null || _ctx_icons === void 0 ? void 0 : _ctx_icons.close) !== null && _ref !== void 0 ? _ref : /* @__PURE__ */(0, import_jsx_runtime.jsx)(import_ToastItemFrame.DefaultCloseIcon, {})
    });
  }),
  ToastAction = import_ToastItemFrame.ToastActionFrame.styleable(function (props, ref) {
    return /* @__PURE__ */(0, import_jsx_runtime.jsx)(import_ToastItemFrame.ToastActionFrame, {
      ref,
      ...props
    });
  });
function ToastIcon(props) {
  var _ctx_icons,
    ctx = useToastContext(),
    toast;
  try {
    var itemCtx = useToastItemContext();
    toast = itemCtx.toast;
  } catch {
    return null;
  }
  if (!toast) return null;
  if (toast.icon !== void 0) return /* @__PURE__ */(0, import_jsx_runtime.jsx)(import_core.View, {
    flexShrink: 0,
    marginTop: "$0.5",
    children: toast.icon
  });
  var _toast_type,
    toastType = (_toast_type = toast.type) !== null && _toast_type !== void 0 ? _toast_type : "default",
    _ctx_icons_toastType,
    icon = (_ctx_icons_toastType = (_ctx_icons = ctx.icons) === null || _ctx_icons === void 0 ? void 0 : _ctx_icons[toastType]) !== null && _ctx_icons_toastType !== void 0 ? _ctx_icons_toastType : null;
  return icon ? /* @__PURE__ */(0, import_jsx_runtime.jsx)(import_core.View, {
    flexShrink: 0,
    marginTop: "$0.5",
    children: icon
  }) : null;
}
function useToasts() {
  var ctx = useToastContext();
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
var Toast = (0, import_helpers.withStaticProperties)(ToastRoot, {
  Viewport: ToastViewport,
  List: ToastList,
  Item: ToastItemInner,
  Title: ToastTitle,
  Description: ToastDescription,
  Close: ToastClose,
  Action: ToastAction,
  Icon: ToastIcon
});
//# sourceMappingURL=ToastComposable.native.js.map
