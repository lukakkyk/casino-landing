import { useMergeRefs } from "@tamagui/react-native-web-internals";
import * as React from "react";
import { View } from "../View/index.mjs";
import { jsx } from "react/jsx-runtime";
function normalizeScrollEvent(e) {
  return {
    nativeEvent: {
      contentOffset: {
        get x() {
          return e.target.scrollLeft;
        },
        get y() {
          return e.target.scrollTop;
        }
      },
      contentSize: {
        get height() {
          return e.target.scrollHeight;
        },
        get width() {
          return e.target.scrollWidth;
        }
      },
      layoutMeasurement: {
        get height() {
          return e.target.offsetHeight;
        },
        get width() {
          return e.target.offsetWidth;
        }
      }
    },
    timeStamp: Date.now()
  };
}
function shouldEmitScrollEvent(lastTick, eventThrottle) {
  const timeSinceLastTick = Date.now() - lastTick;
  return eventThrottle > 0 && timeSinceLastTick >= eventThrottle;
}
const ScrollViewBase = React.forwardRef((props, forwardedRef) => {
    const {
        onScroll,
        onTouchMove,
        onWheel,
        scrollEnabled = !0,
        scrollEventThrottle = 0,
        showsHorizontalScrollIndicator,
        showsVerticalScrollIndicator,
        style,
        // strip RN-only props that shouldn't reach the DOM
        onMomentumScrollBegin,
        onMomentumScrollEnd,
        onScrollBeginDrag,
        onScrollEndDrag,
        ...rest
      } = props,
      scrollState = React.useRef({
        isScrolling: !1,
        scrollLastTick: 0
      }),
      scrollTimeout = React.useRef(null),
      scrollRef = React.useRef(null);
    function createPreventableScrollHandler(handler) {
      return e => {
        scrollEnabled && handler && handler(e);
      };
    }
    function handleScroll(e) {
      e.stopPropagation(), e.target === scrollRef.current && (e.persist(), scrollTimeout.current != null && clearTimeout(scrollTimeout.current), scrollTimeout.current = setTimeout(() => {
        handleScrollEnd(e);
      }, 100), scrollState.current.isScrolling ? shouldEmitScrollEvent(scrollState.current.scrollLastTick, scrollEventThrottle) && handleScrollTick(e) : handleScrollStart(e));
    }
    function handleScrollStart(e) {
      scrollState.current.isScrolling = !0, handleScrollTick(e);
    }
    function handleScrollTick(e) {
      scrollState.current.scrollLastTick = Date.now(), onScroll && onScroll(normalizeScrollEvent(e));
    }
    function handleScrollEnd(e) {
      scrollState.current.isScrolling = !1, onScroll && onScroll(normalizeScrollEvent(e));
    }
    const hideHorizontalScrollbar = showsHorizontalScrollIndicator === !1,
      hideVerticalScrollbar = showsVerticalScrollIndicator === !1;
    return /* @__PURE__ */jsx(View, {
      ...rest,
      className: "_dsp_contents" + (hideHorizontalScrollbar ? " _hsb-x" : "") + (hideVerticalScrollbar ? " _hsb-y" : ""),
      onScroll: handleScroll,
      onTouchMove: createPreventableScrollHandler(onTouchMove),
      onWheel: createPreventableScrollHandler(onWheel),
      ref: useMergeRefs(scrollRef, forwardedRef),
      style: [style,
      // @ts-ignore
      !scrollEnabled && styles.scrollDisabled]
    });
  }),
  styles = {
    scrollDisabled: {
      overflowX: "hidden",
      overflowY: "hidden",
      touchAction: "none"
    }
  };
var ScrollViewBase_default = ScrollViewBase;
export { ScrollViewBase, ScrollViewBase_default as default };
//# sourceMappingURL=ScrollViewBase.mjs.map
