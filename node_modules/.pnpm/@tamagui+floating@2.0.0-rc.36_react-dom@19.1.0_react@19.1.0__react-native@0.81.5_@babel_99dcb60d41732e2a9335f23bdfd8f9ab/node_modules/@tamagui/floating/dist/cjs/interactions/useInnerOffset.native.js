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
var useInnerOffset_exports = {};
__export(useInnerOffset_exports, {
  useInnerOffset: () => useInnerOffset
});
module.exports = __toCommonJS(useInnerOffset_exports);
var React = __toESM(require("react"), 1),
  ReactDOM = __toESM(require("react-dom"), 1),
  import_use_event = require("@tamagui/use-event");
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
    onChange = (0, import_use_event.useEvent)(unstable_onChange),
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
//# sourceMappingURL=useInnerOffset.native.js.map
