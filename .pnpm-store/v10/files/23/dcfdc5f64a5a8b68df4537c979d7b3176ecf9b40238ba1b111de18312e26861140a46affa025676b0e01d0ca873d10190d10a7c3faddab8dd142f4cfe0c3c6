import { AnimatePresence } from "@tamagui/animate-presence";
import { isWeb } from "@tamagui/constants";
import { Theme, View, styled, useThemeName } from "@tamagui/core";
import { Portal } from "@tamagui/portal";
import * as React from "react";
import { ToastItem } from "./ToastItem.mjs";
import { ToastState } from "./ToastState.mjs";
import { jsx } from "react/jsx-runtime";
const VISIBLE_TOASTS_AMOUNT = 4,
  VIEWPORT_OFFSET = 16,
  TOAST_GAP = 14,
  TOAST_LIFETIME = 4e3,
  TOAST_WIDTH = 356,
  ToasterFrame = styled(View, {
    name: "Toaster",
    variants: {
      unstyled: {
        false: {
          position: "fixed",
          zIndex: 1e5,
          pointerEvents: "box-none",
          maxWidth: "100%",
          // need min-height to contain absolutely positioned toasts
          // toasts will overflow upward/downward from their anchor position
          minHeight: 1
        }
      }
    },
    defaultVariants: {
      unstyled: process.env.TAMAGUI_HEADLESS === "1"
    }
  }),
  Toaster = React.forwardRef(function (props, _ref) {
    const {
        position = "bottom-right",
        width = TOAST_WIDTH,
        expand = !1,
        visibleToasts = VISIBLE_TOASTS_AMOUNT,
        gap = TOAST_GAP,
        duration = TOAST_LIFETIME,
        offset = VIEWPORT_OFFSET,
        hotkey = ["altKey", "KeyT"],
        swipeDirection = "right",
        swipeThreshold = 50,
        closeButton = !1,
        theme: themeProp,
        icons,
        toastOptions,
        containerAriaLabel = "Notifications",
        disableNative = !1,
        burntOptions,
        notificationOptions,
        className,
        style
      } = props,
      [toasts, setToasts] = React.useState([]),
      [heights, setHeights] = React.useState([]),
      [expanded, setExpanded] = React.useState(!1),
      [interacting, setInteracting] = React.useState(!1),
      listRef = React.useRef(null),
      lastFocusedElementRef = React.useRef(null),
      isFocusWithinRef = React.useRef(!1);
    React.useEffect(() => ToastState.subscribe(toast => {
      if (toast.dismiss) {
        setToasts(toasts2 => toasts2.map(t => t.id === toast.id ? {
          ...t,
          delete: !0
        } : t));
        return;
      }
      setToasts(toasts2 => {
        const indexOfExistingToast = toasts2.findIndex(t => t.id === toast.id);
        return indexOfExistingToast !== -1 ? [...toasts2.slice(0, indexOfExistingToast), {
          ...toasts2[indexOfExistingToast],
          ...toast
        }, ...toasts2.slice(indexOfExistingToast + 1)] : [toast, ...toasts2];
      });
    }), []), React.useEffect(() => {
      toasts.length <= 1 && setExpanded(!1);
    }, [toasts.length]), React.useEffect(() => {
      if (!isWeb) return;
      const handleKeyDown = event => {
        hotkey.length > 0 && hotkey.every(key => event[key] || event.code === key) && (setExpanded(!0), listRef.current?.focus()), event.code === "Escape" && (document.activeElement === listRef.current || listRef.current?.contains(document.activeElement)) && setExpanded(!1);
      };
      return document.addEventListener("keydown", handleKeyDown), () => document.removeEventListener("keydown", handleKeyDown);
    }, [hotkey]), React.useEffect(() => {
      if (!(!isWeb || !listRef.current)) return () => {
        lastFocusedElementRef.current && (lastFocusedElementRef.current.focus({
          preventScroll: !0
        }), lastFocusedElementRef.current = null, isFocusWithinRef.current = !1);
      };
    }, []);
    const removeToast = React.useCallback(toastToRemove => {
        setToasts(toasts2 => (toasts2.find(toast => toast.id === toastToRemove.id)?.delete || ToastState.dismiss(toastToRemove.id), toasts2.filter(({
          id
        }) => id !== toastToRemove.id)));
      }, []),
      [yPosition, xPosition] = position.split("-"),
      offsetStyles = React.useMemo(() => {
        const styles = {},
          defaultOffset = typeof offset == "number" ? offset : VIEWPORT_OFFSET,
          offsetObj = typeof offset == "object" ? offset : {
            top: defaultOffset,
            right: defaultOffset,
            bottom: defaultOffset,
            left: defaultOffset
          };
        return yPosition === "top" ? styles.top = offsetObj.top ?? defaultOffset : styles.bottom = offsetObj.bottom ?? defaultOffset, xPosition === "left" ? styles.left = offsetObj.left ?? defaultOffset : xPosition === "right" ? styles.right = offsetObj.right ?? defaultOffset : (styles.left = "50%", styles.transform = "translateX(-50%)"), styles;
      }, [offset, yPosition, xPosition]),
      currentTheme = useThemeName(),
      resolvedTheme = themeProp === "system" || !themeProp ? currentTheme?.includes("dark") ? "dark" : "light" : themeProp,
      hotkeyLabel = hotkey.join("+").replace(/Key/g, "").replace(/Digit/g, "");
    if (toasts.length === 0) return null;
    const content = /* @__PURE__ */jsx(ToasterFrame, {
      ref: listRef,
      width,
      "aria-label": `${containerAriaLabel} ${hotkeyLabel}`,
      tabIndex: -1,
      "aria-live": "polite",
      "aria-relevant": "additions text",
      "aria-atomic": !1,
      style: {
        ...offsetStyles,
        ...style
      },
      className,
      "data-y-position": yPosition,
      "data-x-position": xPosition,
      onMouseEnter: () => setExpanded(!0),
      onMouseMove: () => setExpanded(!0),
      onMouseLeave: () => {
        interacting || setExpanded(!1);
      },
      onPointerDown: () => setInteracting(!0),
      onPointerUp: () => setInteracting(!1),
      ...(isWeb && {
        onBlur: event => {
          isFocusWithinRef.current && !event.currentTarget.contains(event.relatedTarget) && (isFocusWithinRef.current = !1, lastFocusedElementRef.current && (lastFocusedElementRef.current.focus({
            preventScroll: !0
          }), lastFocusedElementRef.current = null));
        },
        onFocus: event => {
          isFocusWithinRef.current || (isFocusWithinRef.current = !0, lastFocusedElementRef.current = event.relatedTarget);
        }
      }),
      children: /* @__PURE__ */jsx(AnimatePresence, {
        children: toasts.map((toast, index) => {
          const isVisible = index < visibleToasts,
            isFront = index === 0;
          return /* @__PURE__ */jsx(ToastItem, {
            toast,
            index,
            expanded: expanded || expand,
            interacting,
            position,
            visibleToasts,
            removeToast,
            heights,
            setHeights,
            duration: toast.duration ?? toastOptions?.duration ?? duration,
            gap,
            swipeDirection,
            swipeThreshold,
            closeButton: toast.closeButton ?? closeButton,
            icons,
            disableNative,
            burntOptions,
            notificationOptions
          }, toast.id);
        })
      })
    });
    return isWeb ? /* @__PURE__ */jsx(Portal, {
      children: /* @__PURE__ */jsx(Theme, {
        name: resolvedTheme,
        children: content
      })
    }) : /* @__PURE__ */jsx(Theme, {
      name: resolvedTheme,
      children: content
    });
  });
Toaster.displayName = "Toaster";
export { Toaster };
//# sourceMappingURL=Toaster.mjs.map
