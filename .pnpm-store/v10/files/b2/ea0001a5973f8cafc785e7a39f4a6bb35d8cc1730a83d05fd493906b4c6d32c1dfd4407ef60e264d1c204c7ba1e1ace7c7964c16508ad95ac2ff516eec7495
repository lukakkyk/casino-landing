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
const inner = props => ({
  name: "inner",
  options: props,
  async fn(state) {
    const {
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
      item = listRef.current?.[index ?? 0],
      scrollEl = scrollRef?.current || floating,
      clientTop = floating.clientTop || scrollEl.clientTop,
      floatingIsBordered = floating.clientTop !== 0,
      scrollElIsBordered = scrollEl.clientTop !== 0,
      floatingIsScrollEl = floating === scrollEl;
    if (!item || index == null) return onFallbackChange?.(!0), {};
    const nextArgs = {
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
      maxHeight = (scrollEl.scrollHeight > scrollEl.clientHeight ? v => v : Math.round)(Math.max(0, scrollEl.scrollHeight + (floatingIsBordered && floatingIsScrollEl || scrollElIsBordered ? clientTop * 2 : 0) - diffY - Math.max(0, overflow.bottom)));
    if (scrollEl.style.maxHeight = `${maxHeight}px`, scrollEl.scrollTop = diffY, onFallbackChange) {
      const shouldFallback = scrollEl.offsetHeight < item.offsetHeight * Math.min(minItemsVisible, listRef.current?.length ?? 0) - 1 || refOverflow.top >= -referenceOverflowThreshold || refOverflow.bottom >= -referenceOverflowThreshold;
      ReactDOM.flushSync(() => onFallbackChange(shouldFallback));
    }
    return overflowRef && (overflowRef.current = await platform.detectOverflow(getArgsWithCustomFloatingHeight({
      ...nextArgs,
      y: nextY
    }, scrollEl.offsetHeight + clientTop + floating.clientTop), detectOverflowOptions)), {
      y: nextY
    };
  }
});
export { inner };
//# sourceMappingURL=inner.mjs.map
