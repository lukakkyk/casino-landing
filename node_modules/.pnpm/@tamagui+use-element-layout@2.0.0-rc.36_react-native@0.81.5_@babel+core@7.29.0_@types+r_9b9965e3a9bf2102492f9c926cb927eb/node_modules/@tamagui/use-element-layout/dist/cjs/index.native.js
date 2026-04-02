"use strict";

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
var import_jsx_runtime = require("react/jsx-runtime"),
  import_constants = require("@tamagui/constants"),
  import_react = require("react");
function _instanceof(left, right) {
  return right != null && typeof Symbol < "u" && right[Symbol.hasInstance] ? !!right[Symbol.hasInstance](left) : left instanceof right;
}
var LayoutHandlers = /* @__PURE__ */new WeakMap(),
  LayoutDisableKey = /* @__PURE__ */new WeakMap(),
  Nodes = /* @__PURE__ */new Set(),
  IntersectionState = /* @__PURE__ */new WeakMap(),
  usePretransformDimensions = function () {
    return globalThis.__TAMAGUI_ONLAYOUT_PRETRANSFORM === !0 || process.env.TAMAGUI_ONLAYOUT_PRETRANSFORM === "1";
  },
  _debugLayout;
function isDebugLayout() {
  return _debugLayout === void 0 && (_debugLayout = typeof window < "u" && new URLSearchParams(window.location.search).has("__tamaDebugLayout")), _debugLayout;
}
var DisableLayoutContextValues = {},
  DisableLayoutContextKey = /* @__PURE__ */(0, import_react.createContext)(""),
  ENABLE = !1,
  LayoutMeasurementController = function (param) {
    var {
        disable,
        children
      } = param,
      id = (0, import_react.useId)();
    return (0, import_constants.useIsomorphicLayoutEffect)(function () {
      DisableLayoutContextValues[id] = disable;
    }, [disable, id]), /* @__PURE__ */(0, import_jsx_runtime.jsx)(DisableLayoutContextKey.Provider, {
      value: id,
      children
    });
  },
  globalIntersectionObserver = null,
  strategy = "async";
function setOnLayoutStrategy(state) {
  strategy = state;
}
var NodeRectCache = /* @__PURE__ */new WeakMap(),
  avoidUpdates = !0,
  queuedUpdates = /* @__PURE__ */new Map();
function enable() {
  avoidUpdates && (avoidUpdates = !1, queuedUpdates && (queuedUpdates.forEach(function (cb) {
    return cb();
  }), queuedUpdates.clear()));
}
function startGlobalObservers() {
  !ENABLE || globalIntersectionObserver || (globalIntersectionObserver = new IntersectionObserver(function (entries) {
    for (var i = 0; i < entries.length; i++) {
      var entry = entries[i],
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
    return rectFetchObserver || (rectFetchObserver = new IntersectionObserver(function (entries) {
      lastCallbackDelay = Math.round(performance.now() - rectFetchStartTime);
      for (var i = 0; i < entries.length; i++) BoundingRects.set(entries[i].target, entries[i].boundingClientRect);
      process.env.NODE_ENV === "development" && isDebugLayout() && lastCallbackDelay > 50 && console.warn("[onLayout-io-delay]", lastCallbackDelay + "ms", entries.length, "entries"), rectFetchResolve && (rectFetchResolve(!0), rectFetchResolve = null);
    }, {
      threshold: 0
    }), rectFetchObserver);
  };
  var ensureRectFetchObserver2 = ensureRectFetchObserver,
    BoundingRects = /* @__PURE__ */new WeakMap(),
    rectFetchObserver = null,
    rectFetchResolve = null,
    rectFetchStartTime = 0,
    lastCallbackDelay = 0;
  async function updateLayoutIfChanged(node) {
    var onLayout = LayoutHandlers.get(node);
    if (typeof onLayout == "function") {
      var parentNode = node.parentElement;
      if (parentNode) {
        var nodeRect, parentRect;
        if (strategy === "async") {
          if (nodeRect = BoundingRects.get(node), parentRect = BoundingRects.get(parentNode), !nodeRect || !parentRect) return;
        } else nodeRect = node.getBoundingClientRect(), parentRect = parentNode.getBoundingClientRect();
        var cachedRect = NodeRectCache.get(node),
          cachedParentRect = NodeRectCache.get(parentNode),
          nodeChanged = !cachedRect || !rectsEqual(cachedRect, nodeRect),
          parentChanged = !cachedParentRect || !rectsEqual(cachedParentRect, parentRect);
        if (nodeChanged || parentChanged) {
          NodeRectCache.set(node, nodeRect), NodeRectCache.set(parentNode, parentRect);
          var event = getElementLayoutEvent(nodeRect, parentRect, node);
          process.env.NODE_ENV === "development" && isDebugLayout() && console.log("[useElementLayout] change", {
            tag: node.tagName,
            id: node.id || void 0,
            className: (node.className || "").slice(0, 60) || void 0,
            layout: event.nativeEvent.layout,
            first: !cachedRect
          }), avoidUpdates ? queuedUpdates.set(node, function () {
            return onLayout(event);
          }) : onLayout(event);
        }
      }
    }
  }
  var rAF = typeof requestAnimationFrame < "u" ? requestAnimationFrame : void 0,
    userSkipVal = process.env.TAMAGUI_LAYOUT_FRAME_SKIP,
    BASE_SKIP_FRAMES = userSkipVal ? +userSkipVal : 10,
    MAX_SKIP_FRAMES = 20,
    skipFrames = BASE_SKIP_FRAMES,
    frameCount = 0;
  async function layoutOnAnimationFrame() {
    if (frameCount++ % skipFrames !== 0) {
      rAF ? rAF(layoutOnAnimationFrame) : setTimeout(layoutOnAnimationFrame, 16);
      return;
    }
    if (frameCount >= Number.MAX_SAFE_INTEGER && (frameCount = 0), strategy !== "off") {
      var visibleNodes = [],
        parentsToObserve = /* @__PURE__ */new Set(),
        _iteratorNormalCompletion = !0,
        _didIteratorError = !1,
        _iteratorError = void 0;
      try {
        for (var _iterator = Nodes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = !0) {
          var node = _step.value,
            parentElement = node.parentElement;
          if (!_instanceof(parentElement, HTMLElement)) {
            cleanupNode(node);
            continue;
          }
          var disableKey = LayoutDisableKey.get(node);
          disableKey && DisableLayoutContextValues[disableKey] === !0 || IntersectionState.get(node) !== !1 && (visibleNodes.push(node), parentsToObserve.add(parentElement));
        }
      } catch (err) {
        _didIteratorError = !0, _iteratorError = err;
      } finally {
        try {
          !_iteratorNormalCompletion && _iterator.return != null && _iterator.return();
        } finally {
          if (_didIteratorError) throw _iteratorError;
        }
      }
      if (visibleNodes.length > 0) {
        var io = ensureRectFetchObserver();
        rectFetchStartTime = performance.now();
        for (var i = 0; i < visibleNodes.length; i++) io.observe(visibleNodes[i]);
        var _iteratorNormalCompletion1 = !0,
          _didIteratorError1 = !1,
          _iteratorError1 = void 0;
        try {
          for (var _iterator1 = parentsToObserve[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = !0) {
            var parent = _step1.value;
            io.observe(parent);
          }
        } catch (err) {
          _didIteratorError1 = !0, _iteratorError1 = err;
        } finally {
          try {
            !_iteratorNormalCompletion1 && _iterator1.return != null && _iterator1.return();
          } finally {
            if (_didIteratorError1) throw _iteratorError1;
          }
        }
        await new Promise(function (res) {
          rectFetchResolve = res;
        });
        for (var i1 = 0; i1 < visibleNodes.length; i1++) io.unobserve(visibleNodes[i1]);
        var _iteratorNormalCompletion2 = !0,
          _didIteratorError2 = !1,
          _iteratorError2 = void 0;
        try {
          for (var _iterator2 = parentsToObserve[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = !0) {
            var parent1 = _step2.value;
            io.unobserve(parent1);
          }
        } catch (err) {
          _didIteratorError2 = !0, _iteratorError2 = err;
        } finally {
          try {
            !_iteratorNormalCompletion2 && _iterator2.return != null && _iterator2.return();
          } finally {
            if (_didIteratorError2) throw _iteratorError2;
          }
        }
        lastCallbackDelay > 50 ? skipFrames = Math.min(skipFrames + 2, MAX_SKIP_FRAMES) : lastCallbackDelay < 20 && (skipFrames = Math.max(skipFrames - 1, BASE_SKIP_FRAMES));
        for (var i2 = 0; i2 < visibleNodes.length; i2++) updateLayoutIfChanged(visibleNodes[i2]);
      }
    }
    rAF ? rAF(layoutOnAnimationFrame) : setTimeout(layoutOnAnimationFrame, 16);
  }
  layoutOnAnimationFrame();
}
var getElementLayoutEvent = function (nodeRect, parentRect, node) {
    return {
      nativeEvent: {
        layout: getRelativeDimensions(nodeRect, parentRect, node),
        target: nodeRect
      },
      timeStamp: Date.now()
    };
  },
  getPreTransformDimensions = function (node) {
    return {
      width: node.offsetWidth,
      height: node.offsetHeight
    };
  },
  getRelativeDimensions = function (a, b, aNode) {
    var {
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
  return Nodes.add(node), LayoutHandlers.set(node, onChange), disableKey && LayoutDisableKey.set(node, disableKey), startGlobalObservers(), globalIntersectionObserver && (globalIntersectionObserver.observe(node), IntersectionState.set(node, !0)), function () {
    return cleanupNode(node);
  };
}
function cleanupNode(node) {
  Nodes.delete(node), LayoutHandlers.delete(node), LayoutDisableKey.delete(node), NodeRectCache.delete(node), IntersectionState.delete(node), globalIntersectionObserver && globalIntersectionObserver.unobserve(node);
}
var PrevHostNode = /* @__PURE__ */new WeakMap();
function useElementLayout(ref, onLayout) {
  var _ref_current,
    disableKey = (0, import_react.useContext)(DisableLayoutContextKey),
    node = ensureWebElement((_ref_current = ref.current) === null || _ref_current === void 0 ? void 0 : _ref_current.host);
  node && onLayout && (LayoutHandlers.set(node, onLayout), LayoutDisableKey.set(node, disableKey)), (0, import_constants.useIsomorphicLayoutEffect)(function () {
    var _ref_current2;
    if (onLayout) {
      var nextNode = ensureWebElement((_ref_current2 = ref.current) === null || _ref_current2 === void 0 ? void 0 : _ref_current2.host),
        prevNode = PrevHostNode.get(ref);
      if (nextNode !== prevNode && (prevNode && cleanupNode(prevNode), PrevHostNode.set(ref, nextNode), !!nextNode)) {
        Nodes.add(nextNode), startGlobalObservers(), globalIntersectionObserver && (globalIntersectionObserver.observe(nextNode), IntersectionState.set(nextNode, !0));
        var handler = LayoutHandlers.get(nextNode);
        if (typeof handler == "function") {
          var parentNode = nextNode.parentElement;
          if (parentNode) {
            var nodeRect = nextNode.getBoundingClientRect(),
              parentRect = parentNode.getBoundingClientRect();
            NodeRectCache.set(nextNode, nodeRect), NodeRectCache.set(parentNode, parentRect), handler(getElementLayoutEvent(nodeRect, parentRect, nextNode));
          }
        }
      }
    }
  }), (0, import_constants.useIsomorphicLayoutEffect)(function () {
    var _ref_current2;
    if (onLayout) {
      var node2 = (_ref_current2 = ref.current) === null || _ref_current2 === void 0 ? void 0 : _ref_current2.host;
      if (node2) {
        Nodes.add(node2), startGlobalObservers(), globalIntersectionObserver && (globalIntersectionObserver.observe(node2), IntersectionState.set(node2, !0)), process.env.NODE_ENV === "development" && isDebugLayout() && console.log("[useElementLayout] register", {
          tag: node2.tagName,
          id: node2.id || void 0,
          className: (node2.className || "").slice(0, 60) || void 0,
          totalNodes: Nodes.size
        });
        var parentNode = node2.parentNode;
        return parentNode && onLayout(getElementLayoutEvent(node2.getBoundingClientRect(), parentNode.getBoundingClientRect(), node2)), function () {
          cleanupNode(node2);
          var swappedNode = PrevHostNode.get(ref);
          swappedNode && swappedNode !== node2 && cleanupNode(swappedNode), PrevHostNode.delete(ref);
        };
      }
    }
  }, [ref, !!onLayout]);
}
function ensureWebElement(x) {
  if (!(typeof HTMLElement > "u")) return _instanceof(x, HTMLElement) ? x : void 0;
}
var getBoundingClientRectAsync = function (node) {
    return new Promise(function (res) {
      if (!node || node.nodeType !== 1) return res(!1);
      var io = new IntersectionObserver(function (entries) {
        return io.disconnect(), res(entries[0].boundingClientRect);
      }, {
        threshold: 0
      });
      io.observe(node);
    });
  },
  measureNode = async function (node, relativeTo) {
    var relativeNode = relativeTo || node?.parentElement;
    if (_instanceof(relativeNode, HTMLElement)) {
      var [nodeDim, relativeNodeDim] = await Promise.all([getBoundingClientRectAsync(node), getBoundingClientRectAsync(relativeNode)]);
      if (relativeNodeDim && nodeDim) return getRelativeDimensions(nodeDim, relativeNodeDim, node);
    }
    return null;
  },
  measure = async function (node, callback) {
    var out = await measureNode(node, _instanceof(node.parentNode, HTMLElement) ? node.parentNode : null);
    return out && callback?.(out.x, out.y, out.width, out.height, out.pageX, out.pageY), out;
  };
function createMeasure(node) {
  return function (callback) {
    return measure(node, callback);
  };
}
var measureInWindow = async function (node, callback) {
    var out = await measureNode(node, null);
    return out && callback?.(out.pageX, out.pageY, out.width, out.height), out;
  },
  createMeasureInWindow = function (node) {
    return function (callback) {
      return measureInWindow(node, callback);
    };
  },
  measureLayout = async function (node, relativeNode, callback) {
    var out = await measureNode(node, relativeNode);
    return out && callback?.(out.x, out.y, out.width, out.height, out.pageX, out.pageY), out;
  };
function createMeasureLayout(node) {
  return function (relativeTo, callback) {
    return measureLayout(node, relativeTo, callback);
  };
}
//# sourceMappingURL=index.native.js.map
