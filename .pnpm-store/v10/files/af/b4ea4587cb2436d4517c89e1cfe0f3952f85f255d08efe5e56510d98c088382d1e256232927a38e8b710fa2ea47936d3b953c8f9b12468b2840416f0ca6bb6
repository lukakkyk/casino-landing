import * as ReactDOM from "react-dom";
import { offset } from "@floating-ui/react-dom";
function getArgsWithCustomFloatingHeight(state, height) {
  return {
    ...state,
    rects: {
      ...state.rects,
      floating: {
        ...state.rects.floating,
        height
      }
    }
  };
}
var inner = function (props) {
  return {
    name: "inner",
    options: props,
    async fn(state) {
      var _listRef_current,
        {
          listRef,
          overflowRef,
          onFallbackChange,
          offset: innerOffset = 0,
          index = 0,
          minItemsVisible = 4,
          referenceOverflowThreshold = 0,
          scrollRef,
          padding = 0
        } = props,
        {
          rects,
          platform,
          elements: {
            floating
          }
        } = state,
        item = (_listRef_current = listRef.current) === null || _listRef_current === void 0 ? void 0 : _listRef_current[index ?? 0],
        scrollEl = scrollRef?.current || floating,
        clientTop = floating.clientTop || scrollEl.clientTop,
        floatingIsBordered = floating.clientTop !== 0,
        scrollElIsBordered = scrollEl.clientTop !== 0,
        floatingIsScrollEl = floating === scrollEl;
      if (!item || index == null) return onFallbackChange?.(!0), {};
      var nextArgs = {
          ...state,
          ...(await offset(-item.offsetTop - floating.clientTop - rects.reference.height / 2 - item.offsetHeight / 2 - innerOffset).fn(state))
        },
        detectOverflowOptions = {
          padding
        },
        overflow = await platform.detectOverflow(getArgsWithCustomFloatingHeight(nextArgs, scrollEl.scrollHeight + clientTop + floating.clientTop), detectOverflowOptions),
        refOverflow = await platform.detectOverflow(nextArgs, {
          ...detectOverflowOptions,
          elementContext: "reference"
        }),
        diffY = Math.max(0, overflow.top),
        nextY = nextArgs.y + diffY,
        isScrollable = scrollEl.scrollHeight > scrollEl.clientHeight,
        rounder = isScrollable ? function (v) {
          return v;
        } : Math.round,
        maxHeight = rounder(Math.max(0, scrollEl.scrollHeight + (floatingIsBordered && floatingIsScrollEl || scrollElIsBordered ? clientTop * 2 : 0) - diffY - Math.max(0, overflow.bottom)));
      if (scrollEl.style.maxHeight = `${maxHeight}px`, scrollEl.scrollTop = diffY, onFallbackChange) {
        var _listRef_current1,
          _listRef_current_length,
          shouldFallback = scrollEl.offsetHeight < item.offsetHeight * Math.min(minItemsVisible, (_listRef_current_length = (_listRef_current1 = listRef.current) === null || _listRef_current1 === void 0 ? void 0 : _listRef_current1.length) !== null && _listRef_current_length !== void 0 ? _listRef_current_length : 0) - 1 || refOverflow.top >= -referenceOverflowThreshold || refOverflow.bottom >= -referenceOverflowThreshold;
        ReactDOM.flushSync(function () {
          return onFallbackChange(shouldFallback);
        });
      }
      return overflowRef && (overflowRef.current = await platform.detectOverflow(getArgsWithCustomFloatingHeight({
        ...nextArgs,
        y: nextY
      }, scrollEl.offsetHeight + clientTop + floating.clientTop), detectOverflowOptions)), {
        y: nextY
      };
    }
  };
};
export { inner };
//# sourceMappingURL=inner.native.js.map
