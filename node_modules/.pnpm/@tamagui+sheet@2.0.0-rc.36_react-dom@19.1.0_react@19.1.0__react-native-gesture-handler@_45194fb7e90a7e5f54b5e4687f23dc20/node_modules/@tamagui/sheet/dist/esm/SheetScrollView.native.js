import { jsx as _jsx } from "react/jsx-runtime";
import { composeRefs } from "@tamagui/compose-refs";
import { View } from "@tamagui/core";
import { ScrollView } from "@tamagui/scroll-view";
import { useControllableState } from "@tamagui/use-controllable-state";
import React, { useEffect, useRef, useState } from "react";
import { useGestureSheetContext } from "./GestureSheetContext.native.js";
import { getGestureHandlerState, isGestureHandlerEnabled } from "./gestureState.native.js";
import { useSheetContext } from "./SheetContext.native.js";
import { useSheetScrollViewGestures } from "./useSheetScrollViewGestures.native.js";
var SHEET_SCROLL_VIEW_NAME = "SheetScrollView",
  SheetScrollView = /* @__PURE__ */React.forwardRef(function (param, ref) {
    var {
        __scopeSheet,
        children,
        onScroll,
        scrollEnabled: scrollEnabledProp,
        ...props
      } = param,
      context = useSheetContext(SHEET_SCROLL_VIEW_NAME, __scopeSheet),
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
      setScrollEnabled = function (next, lockTo) {
        if (next) lockedScrollY.current = currentScrollOffset.current, scrollBridge.scrollLockY = void 0;else {
          var _scrollRef_current_scrollTo,
            _scrollRef_current,
            lockY = lockTo ?? currentScrollOffset.current;
          lockedScrollY.current = lockY, scrollBridge.scrollLockY = lockY, (_scrollRef_current = scrollRef.current) === null || _scrollRef_current === void 0 || (_scrollRef_current_scrollTo = _scrollRef_current.scrollTo) === null || _scrollRef_current_scrollTo === void 0 || _scrollRef_current_scrollTo.call(_scrollRef_current, {
            x: 0,
            y: lockY,
            animated: !1
          });
        }
      },
      forceScrollTo = function (y) {
        var _scrollRef_current_scrollTo, _scrollRef_current;
        (_scrollRef_current = scrollRef.current) === null || _scrollRef_current === void 0 || (_scrollRef_current_scrollTo = _scrollRef_current.scrollTo) === null || _scrollRef_current_scrollTo === void 0 || _scrollRef_current_scrollTo.call(_scrollRef_current, {
          x: 0,
          y,
          animated: !1
        });
      };
    useEffect(function () {
      return setHasScrollView(!0), isGestureHandlerEnabled() && (scrollBridge.setScrollEnabled = setScrollEnabled, scrollBridge.forceScrollTo = forceScrollTo), function () {
        setHasScrollView(!1), scrollBridge.setScrollEnabled = void 0, scrollBridge.forceScrollTo = void 0;
      };
    }, []);
    var [hasScrollableContent, setHasScrollableContent] = useState(!0),
      parentHeight = useRef(0),
      contentHeight = useRef(0),
      updateScrollable = function () {
        parentHeight.current && contentHeight.current && setHasScrollableContent(contentHeight.current > parentHeight.current);
      };
    useEffect(function () {
      scrollBridge.hasScrollableContent = hasScrollableContent;
    }, [hasScrollableContent]);
    var gestureProps = useSheetScrollViewGestures({
        scrollRef,
        scrollBridge,
        hasScrollableContent,
        scrollEnabled,
        setScrollEnabled
      }),
      contentWrapper = /* @__PURE__ */_jsx(View, {
        onLayout: function (e) {
          var height = Math.floor(e.nativeEvent.layout.height);
          height !== contentHeight.current && (contentHeight.current = height, updateScrollable());
        },
        children
      });
    if (useRNGHScrollView && RNGHScrollView && panGestureRef) {
      var RNGHComponent = RNGHScrollView;
      return /* @__PURE__ */_jsx(RNGHComponent, {
        ref: composeRefs(scrollRef, ref),
        style: {
          flex: 1
        },
        scrollEventThrottle: 1,
        scrollEnabled,
        simultaneousHandlers: [panGestureRef],
        onLayout: function (e) {
          parentHeight.current = Math.ceil(e.nativeEvent.layout.height), updateScrollable();
        },
        onScroll: function (e) {
          var {
            y
          } = e.nativeEvent.contentOffset;
          if (currentScrollOffset.current = y, scrollBridge.scrollLockY !== void 0) {
            if (y !== scrollBridge.scrollLockY) {
              var _scrollRef_current_scrollTo, _scrollRef_current;
              (_scrollRef_current = scrollRef.current) === null || _scrollRef_current === void 0 || (_scrollRef_current_scrollTo = _scrollRef_current.scrollTo) === null || _scrollRef_current_scrollTo === void 0 || _scrollRef_current_scrollTo.call(_scrollRef_current, {
                x: 0,
                y: scrollBridge.scrollLockY,
                animated: !1
              });
            }
            scrollBridge.y = scrollBridge.scrollLockY, onScroll?.({
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
      });
    }
    return /* @__PURE__ */_jsx(ScrollView, {
      onLayout: function (e) {
        parentHeight.current = Math.ceil(e.nativeEvent.layout.height), updateScrollable();
      },
      ref: composeRefs(scrollRef, ref),
      flex: 1,
      scrollEventThrottle: 1,
      className: "_ovs-contain",
      scrollEnabled,
      onScroll: function (e) {
        var {
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
//# sourceMappingURL=SheetScrollView.native.js.map
