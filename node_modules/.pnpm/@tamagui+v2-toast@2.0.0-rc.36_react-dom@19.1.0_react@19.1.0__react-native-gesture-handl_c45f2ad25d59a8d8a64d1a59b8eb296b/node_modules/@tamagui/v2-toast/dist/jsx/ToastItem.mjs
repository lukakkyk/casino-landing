import { isWeb } from "@tamagui/constants";
import { styled, useEvent, View } from "@tamagui/core";
import { XStack, YStack } from "@tamagui/stacks";
import { SizableText } from "@tamagui/text";
import * as React from "react";
import { useDragGesture } from "./useDragGesture.mjs";
import { createNativeToast } from "./createNativeToast.mjs";
import { jsx, jsxs } from "react/jsx-runtime";
const TIME_BEFORE_UNMOUNT = 200,
  ToastItemFrame = styled(YStack, {
    name: "ToastItem",
    focusable: !0,
    pointerEvents: "auto",
    position: "absolute",
    left: 0,
    right: 0,
    // for stacking animation - default visible state
    opacity: 1,
    scale: 1,
    y: 0,
    x: 0,
    variants: {
      unstyled: {
        false: {
          backgroundColor: "$background",
          borderRadius: "$4",
          paddingHorizontal: "$4",
          paddingVertical: "$3",
          // shadow using elevation for cross-platform
          elevation: "$4",
          shadowColor: "$shadowColor",
          shadowOffset: {
            width: 0,
            height: 4
          },
          shadowOpacity: 0.15,
          shadowRadius: 12,
          borderWidth: 1,
          borderColor: "$borderColor",
          // only show focus outline on keyboard navigation, not on click/tap
          focusVisibleStyle: {
            outlineStyle: "solid",
            outlineWidth: 2,
            outlineColor: "$outlineColor"
          }
        }
      }
    },
    defaultVariants: {
      unstyled: process.env.TAMAGUI_HEADLESS === "1"
    }
  }),
  ToastItemTitle = styled(SizableText, {
    name: "ToastItemTitle",
    variants: {
      unstyled: {
        false: {
          fontWeight: "600",
          color: "$color",
          size: "$4"
        }
      }
    },
    defaultVariants: {
      unstyled: process.env.TAMAGUI_HEADLESS === "1"
    }
  }),
  ToastItemDescription = styled(SizableText, {
    name: "ToastItemDescription",
    variants: {
      unstyled: {
        false: {
          color: "$color11",
          size: "$2",
          marginTop: "$1"
        }
      }
    },
    defaultVariants: {
      unstyled: process.env.TAMAGUI_HEADLESS === "1"
    }
  }),
  ToastCloseButton = styled(XStack, {
    name: "ToastCloseButton",
    render: "button",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    variants: {
      unstyled: {
        false: {
          width: 20,
          height: 20,
          borderRadius: "$10",
          backgroundColor: "$color5",
          hoverStyle: {
            backgroundColor: "$color6"
          },
          pressStyle: {
            backgroundColor: "$color7"
          }
        }
      }
    },
    defaultVariants: {
      unstyled: process.env.TAMAGUI_HEADLESS === "1"
    }
  }),
  ToastActionButton = styled(XStack, {
    name: "ToastActionButton",
    render: "button",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    variants: {
      unstyled: {
        false: {
          borderRadius: "$2",
          paddingHorizontal: "$2",
          height: 24,
          backgroundColor: "$color5",
          hoverStyle: {
            backgroundColor: "$color6"
          },
          pressStyle: {
            backgroundColor: "$color7"
          }
        }
      },
      // primary action button style
      primary: {
        true: {
          backgroundColor: "$color12",
          hoverStyle: {
            backgroundColor: "$color11"
          },
          pressStyle: {
            backgroundColor: "$color10"
          }
        }
      }
    },
    defaultVariants: {
      unstyled: process.env.TAMAGUI_HEADLESS === "1"
    }
  }),
  DefaultCloseIcon = () => /* @__PURE__ */jsx(SizableText, {
    size: "$1",
    color: "$color11",
    children: "\u2715"
  }),
  DefaultSuccessIcon = () => /* @__PURE__ */jsx(SizableText, {
    size: "$5",
    color: "$green10",
    children: "\u2713"
  }),
  DefaultErrorIcon = () => /* @__PURE__ */jsx(SizableText, {
    size: "$5",
    color: "$red10",
    children: "\u2715"
  }),
  DefaultWarningIcon = () => /* @__PURE__ */jsx(SizableText, {
    size: "$5",
    color: "$yellow10",
    children: "\u26A0"
  }),
  DefaultInfoIcon = () => /* @__PURE__ */jsx(SizableText, {
    size: "$5",
    color: "$blue10",
    children: "\u2139"
  }),
  DefaultLoadingIcon = () => /* @__PURE__ */jsx(SizableText, {
    size: "$5",
    color: "$color11",
    children: "\u27F3"
  }),
  ToastItem = React.memo(function (props) {
    const {
        toast,
        index,
        expanded,
        interacting,
        position,
        visibleToasts,
        removeToast,
        heights,
        setHeights,
        duration,
        gap,
        swipeDirection,
        swipeThreshold,
        closeButton,
        icons,
        disableNative,
        burntOptions,
        notificationOptions
      } = props,
      [mounted, setMounted] = React.useState(!1),
      [removed, setRemoved] = React.useState(!1),
      [swipeOut, setSwipeOut] = React.useState(!1),
      toastRef = React.useRef(null),
      closeTimerRef = React.useRef(null),
      closeTimerStartRef = React.useRef(0),
      lastPauseTimeRef = React.useRef(0),
      remainingTimeRef = React.useRef(duration),
      isFront = index === 0,
      isVisible = index < visibleToasts,
      toastType = toast.type ?? "default",
      dismissible = toast.dismissible !== !1,
      heightIndex = React.useMemo(() => heights.findIndex(h => h.toastId === toast.id) || 0, [heights, toast.id]),
      toastsHeightBefore = React.useMemo(() => heights.reduce((prev, curr, reducerIndex) => reducerIndex >= heightIndex ? prev : prev + curr.height, 0), [heights, heightIndex]),
      offset = heightIndex * gap + toastsHeightBefore,
      [yPosition] = position.split("-"),
      isTop = yPosition === "top";
    React.useEffect(() => {
      if (!disableNative && !isWeb) {
        const titleText = typeof toast.title == "function" ? toast.title() : toast.title,
          descText = typeof toast.description == "function" ? toast.description() : toast.description;
        typeof titleText == "string" && createNativeToast(titleText, {
          message: typeof descText == "string" ? descText : void 0,
          duration,
          burntOptions,
          notificationOptions
        });
      }
    }, []), React.useEffect(() => {
      setMounted(!0);
    }, []), React.useEffect(() => {
      toast.delete && (setRemoved(!0), setTimeout(() => {
        removeToast(toast);
      }, TIME_BEFORE_UNMOUNT));
    }, [toast.delete, toast, removeToast]);
    const startTimer = React.useCallback(() => {
        duration === Number.POSITIVE_INFINITY || toastType === "loading" || (closeTimerStartRef.current = Date.now(), closeTimerRef.current = setTimeout(() => {
          toast.onAutoClose?.(toast), setRemoved(!0), setTimeout(() => {
            removeToast(toast);
          }, TIME_BEFORE_UNMOUNT);
        }, remainingTimeRef.current));
      }, [duration, toastType, toast, removeToast]),
      pauseTimer = useEvent(() => {
        if (closeTimerRef.current && clearTimeout(closeTimerRef.current), lastPauseTimeRef.current < closeTimerStartRef.current) {
          const elapsed = Date.now() - closeTimerStartRef.current;
          remainingTimeRef.current = Math.max(0, remainingTimeRef.current - elapsed);
        }
        lastPauseTimeRef.current = Date.now();
      }),
      resumeTimer = useEvent(() => {
        startTimer();
      });
    React.useEffect(() => (expanded || interacting ? pauseTimer() : startTimer(), () => {
      closeTimerRef.current && clearTimeout(closeTimerRef.current);
    }), [expanded, interacting, startTimer]), React.useEffect(() => {
      remainingTimeRef.current = duration;
    }, [duration]);
    const {
        dragState,
        gestureHandlers
      } = useDragGesture({
        direction: swipeDirection,
        threshold: swipeThreshold,
        disabled: !dismissible || toastType === "loading",
        onDragStart: pauseTimer,
        onDragEnd: dismissed => {
          dismissed && (setSwipeOut(!0), toast.onDismiss?.(toast), setRemoved(!0), setTimeout(() => {
            removeToast(toast);
          }, TIME_BEFORE_UNMOUNT));
        },
        onDragCancel: resumeTimer
      }),
      handleLayout = React.useCallback(event => {
        const {
          height
        } = event.nativeEvent.layout;
        setHeights(prev => prev.find(h => h.toastId === toast.id) ? prev.map(h => h.toastId === toast.id ? {
          ...h,
          height
        } : h) : [{
          toastId: toast.id,
          height,
          position
        }, ...prev]);
      }, [toast.id, position, setHeights]);
    React.useEffect(() => () => {
      setHeights(prev => prev.filter(h => h.toastId !== toast.id));
    }, [toast.id, setHeights]);
    const handleClose = React.useCallback(() => {
        dismissible && (toast.onDismiss?.(toast), setRemoved(!0), setTimeout(() => {
          removeToast(toast);
        }, TIME_BEFORE_UNMOUNT));
      }, [dismissible, toast, removeToast]),
      icon = toast.icon !== void 0 ? toast.icon : {
        default: null,
        success: icons?.success ?? /* @__PURE__ */jsx(DefaultSuccessIcon, {}),
        error: icons?.error ?? /* @__PURE__ */jsx(DefaultErrorIcon, {}),
        warning: icons?.warning ?? /* @__PURE__ */jsx(DefaultWarningIcon, {}),
        info: icons?.info ?? /* @__PURE__ */jsx(DefaultInfoIcon, {}),
        loading: icons?.loading ?? /* @__PURE__ */jsx(DefaultLoadingIcon, {})
      }[toastType],
      isHorizontalSwipe = swipeDirection === "left" || swipeDirection === "right" || swipeDirection === "horizontal",
      isVerticalSwipe = swipeDirection === "up" || swipeDirection === "down" || swipeDirection === "vertical",
      dragOffsetX = isHorizontalSwipe ? dragState.offsetX : 0,
      dragOffsetY = isVerticalSwipe ? dragState.offsetY : 0,
      stackScale = !expanded && !isFront ? 1 - index * 0.05 : 1,
      frontToastHeight = heights.length > 0 ? heights[0]?.height ?? 55 : 55,
      baseOffset = isTop ? offset : -offset,
      liftPerToast = 10,
      computedY = (expanded ? baseOffset : isFront ? 0 : isTop ? liftPerToast * index : -liftPerToast * index) + dragOffsetY,
      computedX = dragOffsetX,
      computedScale = stackScale;
    let computedOpacity = 1;
    index >= visibleToasts ? computedOpacity = 0 : !expanded && index === visibleToasts - 1 && (computedOpacity = 0.5);
    const computedZIndex = visibleToasts - index,
      computedHeight = !expanded && !isFront ? frontToastHeight : void 0,
      computedPointerEvents = index >= visibleToasts ? "none" : "auto";
    if (toast.jsx) return toast.jsx;
    const title = typeof toast.title == "function" ? toast.title() : toast.title,
      description = typeof toast.description == "function" ? toast.description() : toast.description,
      dataSet = {
        mounted: mounted ? "true" : "false",
        removed: removed ? "true" : "false",
        swipeOut: swipeOut ? "true" : "false",
        visible: isVisible ? "true" : "false",
        front: isFront ? "true" : "false",
        index: String(index),
        type: toastType,
        expanded: expanded ? "true" : "false"
      },
      gapFillerHeight = expanded ? gap + 1 : 0;
    return /* @__PURE__ */jsxs(ToastItemFrame, {
      ref: toastRef,
      role: "status",
      "aria-live": "polite",
      "aria-atomic": !0,
      tabIndex: 0,
      dataSet,
      "data-expanded": expanded ? "true" : "false",
      onLayout: handleLayout,
      transition: dragState.isDragging ? void 0 : "quick",
      y: computedY,
      x: computedX,
      scale: computedScale,
      opacity: computedOpacity,
      zIndex: computedZIndex,
      height: computedHeight,
      overflow: computedHeight ? "hidden" : void 0,
      pointerEvents: computedPointerEvents,
      top: isTop ? 0 : void 0,
      bottom: isTop ? void 0 : 0,
      ...(isWeb && !isFront && !expanded && {
        style: {
          transformOrigin: isTop ? "top center" : "bottom center"
        }
      }),
      enterStyle: {
        opacity: 0,
        y: isTop ? -10 : 10,
        scale: 0.95
      },
      exitStyle: {
        opacity: 0,
        // for swipe dismissal, continue in swipe direction with subtle movement
        x: isHorizontalSwipe && swipeOut ? swipeDirection === "left" ? -30 : 30 : 0,
        y: isVerticalSwipe && swipeOut ? swipeDirection === "up" ? -30 : 30 : isTop ? -10 : 10,
        scale: 0.95
      },
      ...gestureHandlers,
      ...(isWeb && {
        onKeyDown: event => {
          event.key === "Escape" && dismissible && handleClose();
        }
      }),
      children: [expanded && gapFillerHeight > 0 && /* @__PURE__ */jsx(View, {
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
      }), /* @__PURE__ */jsxs(XStack, {
        alignItems: "flex-start",
        gap: "$3",
        children: [icon && /* @__PURE__ */jsx(View, {
          flexShrink: 0,
          marginTop: "$0.5",
          children: icon
        }), /* @__PURE__ */jsxs(YStack, {
          flex: 1,
          gap: "$1",
          children: [title && /* @__PURE__ */jsx(ToastItemTitle, {
            children: title
          }), description && /* @__PURE__ */jsx(ToastItemDescription, {
            children: description
          })]
        }), closeButton && dismissible && /* @__PURE__ */jsx(ToastCloseButton, {
          onPress: handleClose,
          "aria-label": "Close toast",
          children: icons?.close ?? /* @__PURE__ */jsx(DefaultCloseIcon, {})
        })]
      }), (toast.action || toast.cancel) && /* @__PURE__ */jsxs(XStack, {
        marginTop: "$3",
        gap: "$2",
        justifyContent: "flex-end",
        children: [toast.cancel && /* @__PURE__ */jsx(ToastActionButton, {
          onPress: event => {
            toast.cancel?.onClick?.(event), handleClose();
          },
          children: /* @__PURE__ */jsx(SizableText, {
            size: "$2",
            children: toast.cancel.label
          })
        }), toast.action && /* @__PURE__ */jsx(ToastActionButton, {
          primary: !0,
          onPress: event => {
            toast.action?.onClick?.(event), event.defaultPrevented || handleClose();
          },
          children: /* @__PURE__ */jsx(SizableText, {
            size: "$2",
            fontWeight: "600",
            color: "$background",
            children: toast.action.label
          })
        })]
      })]
    });
  });
ToastItem.displayName = "ToastItem";
export { ToastItem };
//# sourceMappingURL=ToastItem.mjs.map
