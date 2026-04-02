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
var Dismissable_exports = {};
__export(Dismissable_exports, {
  Dismissable: () => Dismissable,
  DismissableBranch: () => DismissableBranch,
  debugDismissableLayers: () => debugDismissableLayers,
  dispatchDiscreteCustomEvent: () => dispatchDiscreteCustomEvent,
  getDismissableLayerCount: () => getDismissableLayerCount,
  useDismissableLayersAbove: () => useDismissableLayersAbove,
  useHasDismissableLayers: () => useHasDismissableLayers,
  useIsInsideDismissable: () => useIsInsideDismissable
});
module.exports = __toCommonJS(Dismissable_exports);
var import_compose_refs = require("@tamagui/compose-refs"),
  import_core = require("@tamagui/core"),
  import_use_escape_keydown = require("@tamagui/use-escape-keydown"),
  import_use_event = require("@tamagui/use-event"),
  React = __toESM(require("react"), 1),
  ReactDOM = __toESM(require("react-dom"), 1),
  import_jsx_runtime = require("react/jsx-runtime");
function dispatchDiscreteCustomEvent(target, event) {
  target && ReactDOM.flushSync(() => target.dispatchEvent(event));
}
const DISMISSABLE_LAYER_NAME = "Dismissable",
  CONTEXT_UPDATE = "dismissable.update",
  POINTER_DOWN_OUTSIDE = "dismissable.pointerDownOutside",
  FOCUS_OUTSIDE = "dismissable.focusOutside";
let originalBodyPointerEvents;
const globalLayers = /* @__PURE__ */new Set(),
  layerChangeListeners = /* @__PURE__ */new Set();
let layersWithPointerEventsDisabledCount = 0;
function notifyLayerChange() {
  for (const listener of layerChangeListeners) listener();
}
function getDismissableLayerCount() {
  return globalLayers.size;
}
function debugDismissableLayers() {
  const layers = Array.from(globalLayers);
  return console.log("[Dismissable] Active layers:", layers.length, layers), layers;
}
function useHasDismissableLayers() {
  const [count, setCount] = React.useState(() => globalLayers.size);
  return React.useEffect(() => {
    setCount(globalLayers.size);
    const update = () => setCount(globalLayers.size);
    return layerChangeListeners.add(update), () => {
      layerChangeListeners.delete(update);
    };
  }, []), count > 0;
}
const DismissableContext = React.createContext({
  layers: /* @__PURE__ */new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */new Set(),
  branches: /* @__PURE__ */new Set()
});
function useIsInsideDismissable(ref) {
  const context = React.useContext(DismissableContext),
    [isInside, setIsInside] = React.useState(!1);
  return React.useEffect(() => {
    const check = () => {
      const el = ref.current;
      if (!el) {
        setIsInside(!1);
        return;
      }
      for (const layer of context.layers) if (layer.contains(el)) {
        setIsInside(!0);
        return;
      }
      setIsInside(!1);
    };
    return check(), document.addEventListener(CONTEXT_UPDATE, check), () => document.removeEventListener(CONTEXT_UPDATE, check);
  }, [context.layers, ref]), isInside;
}
function useDismissableLayersAbove(ref) {
  const context = React.useContext(DismissableContext),
    [count, setCount] = React.useState(0);
  return React.useEffect(() => {
    const check = () => {
      const el = ref.current;
      if (!el) {
        setCount(0);
        return;
      }
      let above = 0;
      for (const layer of context.layers) layer.contains(el) && above++;
      setCount(above);
    };
    return check(), document.addEventListener(CONTEXT_UPDATE, check), () => document.removeEventListener(CONTEXT_UPDATE, check);
  }, [context.layers, ref]), count;
}
const Dismissable = React.forwardRef((props, forwardedRef) => {
  const {
      disableOutsidePointerEvents = !1,
      forceUnmount,
      onEscapeKeyDown,
      onPointerDownOutside,
      onFocusOutside,
      onInteractOutside,
      onDismiss,
      asChild,
      children,
      branches: branchesProp,
      ...layerProps
    } = props,
    Comp = asChild ? import_core.Slot : import_core.View,
    context = React.useContext(DismissableContext),
    [node, setNode] = React.useState(null),
    [, force] = React.useState({}),
    composedRefs = (0, import_compose_refs.useComposedRefs)(forwardedRef, node2 => setNode(node2)),
    layers = Array.from(context.layers),
    [highestLayerWithOutsidePointerEventsDisabled] = [...context.layersWithOutsidePointerEventsDisabled].slice(-1),
    highestLayerWithOutsidePointerEventsDisabledIndex = layers.indexOf(highestLayerWithOutsidePointerEventsDisabled),
    index = node ? layers.indexOf(node) : -1,
    isBodyPointerEventsDisabled = context.layersWithOutsidePointerEventsDisabled.size > 0,
    isPointerEventsEnabled = index >= highestLayerWithOutsidePointerEventsDisabledIndex,
    pointerDownOutside = usePointerDownOutside(event => {
      const target = event.target,
        isPointerDownOnBranch = [...(branchesProp || context.branches)].some(branch => branch.contains(target));
      !isPointerEventsEnabled || isPointerDownOnBranch || (onPointerDownOutside?.(event), onInteractOutside?.(event), event.defaultPrevented || onDismiss?.());
    }),
    focusOutside = useFocusOutside(event => {
      const target = event.target;
      [...(branchesProp || context.branches)].some(branch => branch.contains(target)) || (onFocusOutside?.(event), onInteractOutside?.(event), event.defaultPrevented || onDismiss?.());
    }),
    forceUnmountRef = React.useRef(forceUnmount);
  return React.useEffect(() => {
    forceUnmountRef.current = forceUnmount;
  }, [forceUnmount]), (0, import_use_escape_keydown.useEscapeKeydown)(event => {
    if (forceUnmountRef.current) return;
    const currentLayers = Array.from(context.layers);
    (node ? currentLayers.indexOf(node) : -1) === currentLayers.length - 1 && (onEscapeKeyDown?.(event), !event.defaultPrevented && onDismiss && (event.preventDefault(), onDismiss()));
  }), React.useEffect(() => {
    if (node && !forceUnmount) return disableOutsidePointerEvents && (context.layersWithOutsidePointerEventsDisabled.size === 0 && (originalBodyPointerEvents = document.body.style.pointerEvents, document.body.style.pointerEvents = "none"), context.layersWithOutsidePointerEventsDisabled.add(node), layersWithPointerEventsDisabledCount++), context.layers.add(node), globalLayers.add(node), (disableOutsidePointerEvents || layersWithPointerEventsDisabledCount > 0) && dispatchUpdate(), notifyLayerChange(), () => {
      disableOutsidePointerEvents && context.layersWithOutsidePointerEventsDisabled.size === 1 && (document.body.style.pointerEvents = originalBodyPointerEvents);
    };
  }, [node, disableOutsidePointerEvents, forceUnmount, context]), React.useEffect(() => {
    if (!forceUnmount) return () => {
      if (!node) return;
      const hadPointerEventsDisabled = context.layersWithOutsidePointerEventsDisabled.has(node);
      context.layers.delete(node), context.layersWithOutsidePointerEventsDisabled.delete(node), globalLayers.delete(node), layersWithPointerEventsDisabledCount > 0 && dispatchUpdate(), notifyLayerChange(), hadPointerEventsDisabled && layersWithPointerEventsDisabledCount--;
    };
  }, [node, context, forceUnmount]), React.useEffect(() => {
    const handleUpdate = () => {
      layersWithPointerEventsDisabledCount > 0 && force({});
    };
    return document.addEventListener(CONTEXT_UPDATE, handleUpdate), () => document.removeEventListener(CONTEXT_UPDATE, handleUpdate);
  }, []), /* @__PURE__ */(0, import_jsx_runtime.jsx)(Comp, {
    ...layerProps,
    ref: composedRefs,
    ...(!asChild && {
      display: "contents"
    }),
    pointerEvents: isBodyPointerEventsDisabled ? isPointerEventsEnabled ? "auto" : "none" : void 0,
    onFocusCapture: (0, import_core.composeEventHandlers)(props.onFocusCapture, focusOutside.onFocusCapture),
    onBlurCapture: (0, import_core.composeEventHandlers)(props.onBlurCapture, focusOutside.onBlurCapture),
    onPointerDownCapture: (0, import_core.composeEventHandlers)(props.onPointerDownCapture, pointerDownOutside.onPointerDownCapture),
    children
  });
});
Dismissable.displayName = DISMISSABLE_LAYER_NAME;
const BRANCH_NAME = "DismissableBranch",
  DismissableBranch = React.forwardRef((props, forwardedRef) => {
    const {
        branches: branchesProp,
        ...rest
      } = props,
      context = React.useContext(DismissableContext),
      ref = React.useRef(null),
      composedRefs = (0, import_compose_refs.useComposedRefs)(forwardedRef, ref);
    return React.useEffect(() => {
      const node = ref.current;
      if (!(node instanceof HTMLElement)) return;
      const branches = branchesProp || context.branches;
      if (node && branches) return branches.add(node), () => {
        branches.delete(node);
      };
    }, [branchesProp, context.branches]), /* @__PURE__ */(0, import_jsx_runtime.jsx)(import_core.View, {
      asChild: "except-style",
      ...rest,
      ref: composedRefs
    });
  });
DismissableBranch.displayName = BRANCH_NAME;
function usePointerDownOutside(onPointerDownOutside) {
  const handlePointerDownOutside = (0, import_use_event.useEvent)(onPointerDownOutside),
    isPointerInsideReactTreeRef = React.useRef(!1),
    handleClickRef = React.useRef(() => {});
  return React.useEffect(() => {
    const handlePointerDown = event => {
        if (event.target && !isPointerInsideReactTreeRef.current) {
          let handleAndDispatchPointerDownOutsideEvent = function () {
            handleAndDispatchCustomEvent(POINTER_DOWN_OUTSIDE, handlePointerDownOutside, eventDetail, {
              discrete: !0
            });
          };
          const eventDetail = {
            originalEvent: event
          };
          event.pointerType === "touch" ? (document.removeEventListener("click", handleClickRef.current), handleClickRef.current = handleAndDispatchPointerDownOutsideEvent, document.addEventListener("click", handleClickRef.current, {
            once: !0
          })) : handleAndDispatchPointerDownOutsideEvent();
        }
        isPointerInsideReactTreeRef.current = !1;
      },
      timerId = setTimeout(() => {
        document.addEventListener("pointerdown", handlePointerDown);
      }, 0);
    return () => {
      window.clearTimeout(timerId), document.removeEventListener("pointerdown", handlePointerDown), document.removeEventListener("click", handleClickRef.current);
    };
  }, [handlePointerDownOutside]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => {
      isPointerInsideReactTreeRef.current = !0;
    }
  };
}
function useFocusOutside(onFocusOutside) {
  const handleFocusOutside = (0, import_use_event.useEvent)(onFocusOutside),
    isFocusInsideReactTreeRef = React.useRef(!1);
  return React.useEffect(() => {
    const handleFocus = event => {
      event.target && !isFocusInsideReactTreeRef.current && handleAndDispatchCustomEvent(FOCUS_OUTSIDE, handleFocusOutside, {
        originalEvent: event
      }, {
        discrete: !1
      });
    };
    return document.addEventListener("focusin", handleFocus), () => document.removeEventListener("focusin", handleFocus);
  }, [handleFocusOutside]), {
    onFocusCapture: () => {
      isFocusInsideReactTreeRef.current = !0;
    },
    onBlurCapture: () => {
      isFocusInsideReactTreeRef.current = !1;
    }
  };
}
function dispatchUpdate() {
  const event = new CustomEvent(CONTEXT_UPDATE);
  document.dispatchEvent(event);
}
function handleAndDispatchCustomEvent(name, handler, detail, {
  discrete
}) {
  const target = detail.originalEvent.target,
    event = new CustomEvent(name, {
      bubbles: !1,
      cancelable: !0,
      detail
    });
  handler && target.addEventListener(name, handler, {
    once: !0
  }), discrete ? dispatchDiscreteCustomEvent(target, event) : target.dispatchEvent(event);
}