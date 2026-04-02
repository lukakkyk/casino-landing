import { composeRefs } from "@tamagui/compose-refs";
import { View } from "@tamagui/core";
import { ScrollView } from "@tamagui/scroll-view";
import { useControllableState } from "@tamagui/use-controllable-state";
import React, { useEffect, useRef, useState } from "react";
import { useGestureSheetContext } from "./GestureSheetContext.mjs";
import { getGestureHandlerState, isGestureHandlerEnabled } from "./gestureState.mjs";
import { useSheetContext } from "./SheetContext.mjs";
import { useSheetScrollViewGestures } from "./useSheetScrollViewGestures.mjs";
import { jsx } from "react/jsx-runtime";
const SHEET_SCROLL_VIEW_NAME = "SheetScrollView",
  SheetScrollView = React.forwardRef(({
    __scopeSheet,
    children,
    onScroll,
    scrollEnabled: scrollEnabledProp,
    ...props
  }, ref) => {
    const context = useSheetContext(SHEET_SCROLL_VIEW_NAME, __scopeSheet),
      gestureContext = useGestureSheetContext(),
      {
        scrollBridge,
        setHasScrollView
      } = context,
      [scrollEnabled] = useControllableState({
        prop: scrollEnabledProp,
        defaultProp: !0
      }),
      scrollRef = React.useRef(null),
      panGestureRef = gestureContext?.panGestureRef,
      {
        ScrollView: RNGHScrollView
      } = getGestureHandlerState(),
      useRNGHScrollView = isGestureHandlerEnabled() && RNGHScrollView && panGestureRef,
      currentScrollOffset = useRef(0),
      lockedScrollY = useRef(0),
      setScrollEnabled = (next, lockTo) => {
        if (next) lockedScrollY.current = currentScrollOffset.current, scrollBridge.scrollLockY = void 0;else {
          const lockY = lockTo ?? currentScrollOffset.current;
          lockedScrollY.current = lockY, scrollBridge.scrollLockY = lockY, scrollRef.current?.scrollTo?.({
            x: 0,
            y: lockY,
            animated: !1
          });
        }
      },
      forceScrollTo = y => {
        scrollRef.current?.scrollTo?.({
          x: 0,
          y,
          animated: !1
        });
      };
    useEffect(() => (setHasScrollView(!0), isGestureHandlerEnabled() && (scrollBridge.setScrollEnabled = setScrollEnabled, scrollBridge.forceScrollTo = forceScrollTo), () => {
      setHasScrollView(!1), scrollBridge.setScrollEnabled = void 0, scrollBridge.forceScrollTo = void 0;
    }), []);
    const [hasScrollableContent, setHasScrollableContent] = useState(!0),
      parentHeight = useRef(0),
      contentHeight = useRef(0),
      updateScrollable = () => {
        parentHeight.current && contentHeight.current && setHasScrollableContent(contentHeight.current > parentHeight.current);
      };
    useEffect(() => {
      scrollBridge.hasScrollableContent = hasScrollableContent;
    }, [hasScrollableContent]);
    const gestureProps = useSheetScrollViewGestures({
        scrollRef,
        scrollBridge,
        hasScrollableContent,
        scrollEnabled,
        setScrollEnabled
      }),
      contentWrapper = /* @__PURE__ */jsx(View, {
        onLayout: e => {
          const height = Math.floor(e.nativeEvent.layout.height);
          height !== contentHeight.current && (contentHeight.current = height, updateScrollable());
        },
        children
      });
    return useRNGHScrollView && RNGHScrollView && panGestureRef ? /* @__PURE__ */jsx(RNGHScrollView, {
      ref: composeRefs(scrollRef, ref),
      style: {
        flex: 1
      },
      scrollEventThrottle: 1,
      scrollEnabled,
      simultaneousHandlers: [panGestureRef],
      onLayout: e => {
        parentHeight.current = Math.ceil(e.nativeEvent.layout.height), updateScrollable();
      },
      onScroll: e => {
        const {
          y
        } = e.nativeEvent.contentOffset;
        if (currentScrollOffset.current = y, scrollBridge.scrollLockY !== void 0) {
          y !== scrollBridge.scrollLockY && scrollRef.current?.scrollTo?.({
            x: 0,
            y: scrollBridge.scrollLockY,
            animated: !1
          }), scrollBridge.y = scrollBridge.scrollLockY, onScroll?.({
            ...e,
            nativeEvent: {
              ...e.nativeEvent,
              contentOffset: {
                ...e.nativeEvent.contentOffset,
                y: scrollBridge.scrollLockY
              }
            }
          });
          return;
        }
        scrollBridge.y = y, y > 0 && (scrollBridge.scrollStartY = -1), onScroll?.(e);
      },
      contentContainerStyle: {
        minHeight: "100%"
      },
      bounces: !1,
      keyboardShouldPersistTaps: "always",
      keyboardDismissMode: "none",
      ...props,
      children: contentWrapper
    }) : /* @__PURE__ */jsx(ScrollView, {
      onLayout: e => {
        parentHeight.current = Math.ceil(e.nativeEvent.layout.height), updateScrollable();
      },
      ref: composeRefs(scrollRef, ref),
      flex: 1,
      scrollEventThrottle: 1,
      className: "_ovs-contain",
      scrollEnabled,
      onScroll: e => {
        const {
          y
        } = e.nativeEvent.contentOffset;
        scrollBridge.y = y, y > 0 && (scrollBridge.scrollStartY = -1), onScroll?.(e);
      },
      contentContainerStyle: {
        minHeight: "100%"
      },
      ...gestureProps,
      ...props,
      children: contentWrapper
    });
  });
export { SheetScrollView };
//# sourceMappingURL=SheetScrollView.mjs.map
