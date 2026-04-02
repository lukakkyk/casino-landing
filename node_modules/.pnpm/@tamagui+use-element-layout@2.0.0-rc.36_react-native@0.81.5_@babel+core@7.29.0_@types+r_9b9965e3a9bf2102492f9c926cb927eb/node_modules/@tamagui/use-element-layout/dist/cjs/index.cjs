var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
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
var __toCommonJS = mod => __copyProps(__defProp({}, "__esModule", {
  value: !0
}), mod);
var index_exports = {};
__export(index_exports, {
  LayoutMeasurementController: () => LayoutMeasurementController,
  createMeasure: () => createMeasure,
  createMeasureInWindow: () => createMeasureInWindow,
  createMeasureLayout: () => createMeasureLayout,
  enable: () => enable,
  getBoundingClientRectAsync: () => getBoundingClientRectAsync,
  getElementLayoutEvent: () => getElementLayoutEvent,
  measure: () => measure,
  measureInWindow: () => measureInWindow,
  measureLayout: () => measureLayout,
  measureNode: () => measureNode,
  registerLayoutNode: () => registerLayoutNode,
  setOnLayoutStrategy: () => setOnLayoutStrategy,
  useElementLayout: () => useElementLayout
});
module.exports = __toCommonJS(index_exports);
var import_constants = require("@tamagui/constants"),
  import_react = require("react"),
  import_jsx_runtime = require("react/jsx-runtime");
const LayoutHandlers = /* @__PURE__ */new WeakMap(),
  LayoutDisableKey = /* @__PURE__ */new WeakMap(),
  Nodes = /* @__PURE__ */new Set(),
  IntersectionState = /* @__PURE__ */new WeakMap(),
  usePretransformDimensions = () => globalThis.__TAMAGUI_ONLAYOUT_PRETRANSFORM === !0 || process.env.TAMAGUI_ONLAYOUT_PRETRANSFORM === "1";
let _debugLayout;
function isDebugLayout() {
  return _debugLayout === void 0 && (_debugLayout = typeof window < "u" && new URLSearchParams(window.location.search).has("__tamaDebugLayout")), _debugLayout;
}
const DisableLayoutContextValues = {},
  DisableLayoutContextKey = (0, import_react.createContext)(""),
  ENABLE = typeof IntersectionObserver < "u",
  LayoutMeasurementController = ({
    disable,
    children
  }) => {
    const id = (0, import_react.useId)();
    return (0, import_constants.useIsomorphicLayoutEffect)(() => {
      DisableLayoutContextValues[id] = disable;
    }, [disable, id]), /* @__PURE__ */(0, import_jsx_runtime.jsx)(DisableLayoutContextKey.Provider, {
      value: id,
      children
    });
  };
let globalIntersectionObserver = null,
  strategy = "async";
function setOnLayoutStrategy(state) {
  strategy = state;
}
const NodeRectCache = /* @__PURE__ */new WeakMap();
let avoidUpdates = !0;
const queuedUpdates = /* @__PURE__ */new Map();
function enable() {
  avoidUpdates && (avoidUpdates = !1, queuedUpdates && (queuedUpdates.forEach(cb => cb()), queuedUpdates.clear()));
}
function startGlobalObservers() {
  !ENABLE || globalIntersectionObserver || (globalIntersectionObserver = new IntersectionObserver(entries => {
    for (let i = 0; i < entries.length; i++) {
      const entry = entries[i],
        node = entry.target;
      IntersectionState.get(node) !== entry.isIntersecting && IntersectionState.set(node, entry.isIntersecting);
    }
  }, {
    threshold: 0
  }));
}
function rectsEqual(a, b) {
  return a.x === b.x && a.y === b.y && a.width === b.width && a.height === b.height;
}
if (ENABLE) {
  let ensureRectFetchObserver = function () {
    return rectFetchObserver || (rectFetchObserver = new IntersectionObserver(entries => {
      lastCallbackDelay = Math.round(performance.now() - rectFetchStartTime);
      for (let i = 0; i < entries.length; i++) BoundingRects.set(entries[i].target, entries[i].boundingClientRect);
      process.env.NODE_ENV === "development" && isDebugLayout() && lastCallbackDelay > 50 && console.warn("[onLayout-io-delay]", lastCallbackDelay + "ms", entries.length, "entries"), rectFetchResolve && (rectFetchResolve(!0), rectFetchResolve = null);
    }, {
      threshold: 0
    }), rectFetchObserver);
  };
  const BoundingRects = /* @__PURE__ */new WeakMap();
  let rectFetchObserver = null,
    rectFetchResolve = null,
    rectFetchStartTime = 0,
    lastCallbackDelay = 0;
  async function updateLayoutIfChanged(node) {
    const onLayout = LayoutHandlers.get(node);
    if (typeof onLayout != "function") return;
    const parentNode = node.parentElement;
    if (!parentNode) return;
    let nodeRect, parentRect;
    if (strategy === "async") {
      if (nodeRect = BoundingRects.get(node), parentRect = BoundingRects.get(parentNode), !nodeRect || !parentRect) return;
    } else nodeRect = node.getBoundingClientRect(), parentRect = parentNode.getBoundingClientRect();
    const cachedRect = NodeRectCache.get(node),
      cachedParentRect = NodeRectCache.get(parentNode),
      nodeChanged = !cachedRect || !rectsEqual(cachedRect, nodeRect),
      parentChanged = !cachedParentRect || !rectsEqual(cachedParentRect, parentRect);
    if (nodeChanged || parentChanged) {
      NodeRectCache.set(node, nodeRect), NodeRectCache.set(parentNode, parentRect);
      const event = getElementLayoutEvent(nodeRect, parentRect, node);
      process.env.NODE_ENV === "development" && isDebugLayout() && console.log("[useElementLayout] change", {
        tag: node.tagName,
        id: node.id || void 0,
        className: (node.className || "").slice(0, 60) || void 0,
        layout: event.nativeEvent.layout,
        first: !cachedRect
      }), avoidUpdates ? queuedUpdates.set(node, () => onLayout(event)) : onLayout(event);
    }
  }
  const rAF = typeof requestAnimationFrame < "u" ? requestAnimationFrame : void 0,
    userSkipVal = process.env.TAMAGUI_LAYOUT_FRAME_SKIP,
    BASE_SKIP_FRAMES = userSkipVal ? +userSkipVal : 10,
    MAX_SKIP_FRAMES = 20;
  let skipFrames = BASE_SKIP_FRAMES,
    frameCount = 0;
  async function layoutOnAnimationFrame() {
    if (frameCount++ % skipFrames !== 0) {
      rAF ? rAF(layoutOnAnimationFrame) : setTimeout(layoutOnAnimationFrame, 16);
      return;
    }
    if (frameCount >= Number.MAX_SAFE_INTEGER && (frameCount = 0), strategy !== "off") {
      const visibleNodes = [],
        parentsToObserve = /* @__PURE__ */new Set();
      for (const node of Nodes) {
        const parentElement = node.parentElement;
        if (!(parentElement instanceof HTMLElement)) {
          cleanupNode(node);
          continue;
        }
        const disableKey = LayoutDisableKey.get(node);
        disableKey && DisableLayoutContextValues[disableKey] === !0 || IntersectionState.get(node) !== !1 && (visibleNodes.push(node), parentsToObserve.add(parentElement));
      }
      if (visibleNodes.length > 0) {
        const io = ensureRectFetchObserver();
        rectFetchStartTime = performance.now();
        for (let i = 0; i < visibleNodes.length; i++) io.observe(visibleNodes[i]);
        for (const parent of parentsToObserve) io.observe(parent);
        await new Promise(res => {
          rectFetchResolve = res;
        });
        for (let i = 0; i < visibleNodes.length; i++) io.unobserve(visibleNodes[i]);
        for (const parent of parentsToObserve) io.unobserve(parent);
        lastCallbackDelay > 50 ? skipFrames = Math.min(skipFrames + 2, MAX_SKIP_FRAMES) : lastCallbackDelay < 20 && (skipFrames = Math.max(skipFrames - 1, BASE_SKIP_FRAMES));
        for (let i = 0; i < visibleNodes.length; i++) updateLayoutIfChanged(visibleNodes[i]);
      }
    }
    rAF ? rAF(layoutOnAnimationFrame) : setTimeout(layoutOnAnimationFrame, 16);
  }
  layoutOnAnimationFrame();
}
const getElementLayoutEvent = (nodeRect, parentRect, node) => ({
    nativeEvent: {
      layout: getRelativeDimensions(nodeRect, parentRect, node),
      target: nodeRect
    },
    timeStamp: Date.now()
  }),
  getPreTransformDimensions = node => ({
    width: node.offsetWidth,
    height: node.offsetHeight
  }),
  getRelativeDimensions = (a, b, aNode) => {
    const {
        left,
        top
      } = a,
      x = left - b.left,
      y = top - b.top,
      {
        width,
        height
      } = usePretransformDimensions() && aNode ? getPreTransformDimensions(aNode) : {
        width: a.width,
        height: a.height
      };
    return {
      x,
      y,
      width,
      height,
      pageX: a.left,
      pageY: a.top
    };
  };
function registerLayoutNode(node, onChange, disableKey) {
  return Nodes.add(node), LayoutHandlers.set(node, onChange), disableKey && LayoutDisableKey.set(node, disableKey), startGlobalObservers(), globalIntersectionObserver && (globalIntersectionObserver.observe(node), IntersectionState.set(node, !0)), () => cleanupNode(node);
}
function cleanupNode(node) {
  Nodes.delete(node), LayoutHandlers.delete(node), LayoutDisableKey.delete(node), NodeRectCache.delete(node), IntersectionState.delete(node), globalIntersectionObserver && globalIntersectionObserver.unobserve(node);
}
const PrevHostNode = /* @__PURE__ */new WeakMap();
function useElementLayout(ref, onLayout) {
  const disableKey = (0, import_react.useContext)(DisableLayoutContextKey),
    node = ensureWebElement(ref.current?.host);
  node && onLayout && (LayoutHandlers.set(node, onLayout), LayoutDisableKey.set(node, disableKey)), (0, import_constants.useIsomorphicLayoutEffect)(() => {
    if (!onLayout) return;
    const nextNode = ensureWebElement(ref.current?.host),
      prevNode = PrevHostNode.get(ref);
    if (nextNode === prevNode || (prevNode && cleanupNode(prevNode), PrevHostNode.set(ref, nextNode), !nextNode)) return;
    Nodes.add(nextNode), startGlobalObservers(), globalIntersectionObserver && (globalIntersectionObserver.observe(nextNode), IntersectionState.set(nextNode, !0));
    const handler = LayoutHandlers.get(nextNode);
    if (typeof handler != "function") return;
    const parentNode = nextNode.parentElement;
    if (!parentNode) return;
    const nodeRect = nextNode.getBoundingClientRect(),
      parentRect = parentNode.getBoundingClientRect();
    NodeRectCache.set(nextNode, nodeRect), NodeRectCache.set(parentNode, parentRect), handler(getElementLayoutEvent(nodeRect, parentRect, nextNode));
  }), (0, import_constants.useIsomorphicLayoutEffect)(() => {
    if (!onLayout) return;
    const node2 = ref.current?.host;
    if (!node2) return;
    Nodes.add(node2), startGlobalObservers(), globalIntersectionObserver && (globalIntersectionObserver.observe(node2), IntersectionState.set(node2, !0)), process.env.NODE_ENV === "development" && isDebugLayout() && console.log("[useElementLayout] register", {
      tag: node2.tagName,
      id: node2.id || void 0,
      className: (node2.className || "").slice(0, 60) || void 0,
      totalNodes: Nodes.size
    });
    const parentNode = node2.parentNode;
    return parentNode && onLayout(getElementLayoutEvent(node2.getBoundingClientRect(), parentNode.getBoundingClientRect(), node2)), () => {
      cleanupNode(node2);
      const swappedNode = PrevHostNode.get(ref);
      swappedNode && swappedNode !== node2 && cleanupNode(swappedNode), PrevHostNode.delete(ref);
    };
  }, [ref, !!onLayout]);
}
function ensureWebElement(x) {
  if (!(typeof HTMLElement > "u")) return x instanceof HTMLElement ? x : void 0;
}
const getBoundingClientRectAsync = node => new Promise(res => {
    if (!node || node.nodeType !== 1) return res(!1);
    const io = new IntersectionObserver(entries => (io.disconnect(), res(entries[0].boundingClientRect)), {
      threshold: 0
    });
    io.observe(node);
  }),
  measureNode = async (node, relativeTo) => {
    const relativeNode = relativeTo || node?.parentElement;
    if (relativeNode instanceof HTMLElement) {
      const [nodeDim, relativeNodeDim] = await Promise.all([getBoundingClientRectAsync(node), getBoundingClientRectAsync(relativeNode)]);
      if (relativeNodeDim && nodeDim) return getRelativeDimensions(nodeDim, relativeNodeDim, node);
    }
    return null;
  },
  measure = async (node, callback) => {
    const out = await measureNode(node, node.parentNode instanceof HTMLElement ? node.parentNode : null);
    return out && callback?.(out.x, out.y, out.width, out.height, out.pageX, out.pageY), out;
  };
function createMeasure(node) {
  return callback => measure(node, callback);
}
const measureInWindow = async (node, callback) => {
    const out = await measureNode(node, null);
    return out && callback?.(out.pageX, out.pageY, out.width, out.height), out;
  },
  createMeasureInWindow = node => callback => measureInWindow(node, callback),
  measureLayout = async (node, relativeNode, callback) => {
    const out = await measureNode(node, relativeNode);
    return out && callback?.(out.x, out.y, out.width, out.height, out.pageX, out.pageY), out;
  };
function createMeasureLayout(node) {
  return (relativeTo, callback) => measureLayout(node, relativeTo, callback);
}