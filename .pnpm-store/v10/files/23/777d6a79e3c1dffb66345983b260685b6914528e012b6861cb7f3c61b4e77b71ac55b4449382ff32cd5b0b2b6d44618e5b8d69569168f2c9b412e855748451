import * as React from "react";
import * as ReactDOM from "react-dom";
import { useEvent } from "@tamagui/use-event";
function useInnerOffset(context, props) {
  var {
      open,
      elements
    } = context,
    {
      enabled = !0,
      overflowRef,
      scrollRef,
      onChange: unstable_onChange
    } = props,
    onChange = useEvent(unstable_onChange),
    controlledScrollingRef = React.useRef(!1),
    prevScrollTopRef = React.useRef(null),
    initialOverflowRef = React.useRef(null);
  React.useEffect(function () {
    if (!enabled) return;
    function onWheel(e) {
      if (!(e.ctrlKey || !el || overflowRef.current == null)) {
        var dY = e.deltaY,
          isAtTop = overflowRef.current.top >= -0.5,
          isAtBottom = overflowRef.current.bottom >= -0.5,
          remainingScroll = el.scrollHeight - el.clientHeight,
          sign = dY < 0 ? -1 : 1,
          method = dY < 0 ? "max" : "min";
        el.scrollHeight <= el.clientHeight || (!isAtTop && dY > 0 || !isAtBottom && dY < 0 ? (e.preventDefault(), ReactDOM.flushSync(function () {
          onChange(function (d) {
            return d + Math[method](dY, remainingScroll * sign);
          });
        })) : /firefox/i.test(navigator.userAgent) && (el.scrollTop += dY));
      }
    }
    var el = scrollRef?.current || elements.floating;
    if (open && el) return el.addEventListener("wheel", onWheel), requestAnimationFrame(function () {
      prevScrollTopRef.current = el.scrollTop, overflowRef.current != null && (initialOverflowRef.current = {
        ...overflowRef.current
      });
    }), function () {
      prevScrollTopRef.current = null, initialOverflowRef.current = null, el.removeEventListener("wheel", onWheel);
    };
  }, [enabled, open, elements.floating, overflowRef, scrollRef, onChange]);
  var floating = React.useMemo(function () {
    return {
      onKeyDown() {
        controlledScrollingRef.current = !0;
      },
      onWheel() {
        controlledScrollingRef.current = !1;
      },
      onPointerMove() {
        controlledScrollingRef.current = !1;
      },
      onScroll() {
        var el = scrollRef?.current || elements.floating;
        if (!(!overflowRef.current || !el || !controlledScrollingRef.current)) {
          if (prevScrollTopRef.current !== null) {
            var scrollDiff = el.scrollTop - prevScrollTopRef.current;
            (overflowRef.current.bottom < -0.5 && scrollDiff < -1 || overflowRef.current.top < -0.5 && scrollDiff > 1) && ReactDOM.flushSync(function () {
              return onChange(function (d) {
                return d + scrollDiff;
              });
            });
          }
          requestAnimationFrame(function () {
            prevScrollTopRef.current = el.scrollTop;
          });
        }
      }
    };
  }, [elements.floating, onChange, overflowRef, scrollRef]);
  return React.useMemo(function () {
    return enabled ? {
      floating
    } : {};
  }, [enabled, floating]);
}
export { useInnerOffset };
//# sourceMappingURL=useInnerOffset.native.js.map
