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
var inner_exports = {};
__export(inner_exports, {
  inner: () => inner
});
module.exports = __toCommonJS(inner_exports);
var ReactDOM = __toESM(require("react-dom"), 1),
  import_react_dom = require("@floating-ui/react-dom");
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
        ...(await (0, import_react_dom.offset)(-item.offsetTop - floating.clientTop - rects.reference.height / 2 - item.offsetHeight / 2 - innerOffset).fn(state))
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