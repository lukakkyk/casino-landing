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
var Popper_exports = {};
__export(Popper_exports, {
  Popper: () => Popper,
  PopperAnchor: () => PopperAnchor,
  PopperArrow: () => PopperArrow,
  PopperArrowFrame: () => PopperArrowFrame,
  PopperContent: () => PopperContent,
  PopperContentFrame: () => PopperContentFrame,
  PopperContextFast: () => PopperContextFast,
  PopperContextSlow: () => PopperContextSlow,
  PopperPositionContext: () => PopperPositionContext,
  PopperProvider: () => PopperProvider,
  PopperProviderFast: () => PopperProviderFast,
  PopperProviderSlow: () => PopperProviderSlow,
  setupPopper: () => setupPopper,
  usePopperContext: () => usePopperContext,
  usePopperContextSlow: () => usePopperContextSlow
});
module.exports = __toCommonJS(Popper_exports);
var import_jsx_runtime = require("react/jsx-runtime"),
  import_react_dom = require("react-dom"),
  import_compose_refs = require("@tamagui/compose-refs"),
  import_constants = require("@tamagui/constants"),
  import_core = require("@tamagui/core"),
  import_floating = require("@tamagui/floating"),
  import_floating2 = require("@tamagui/floating"),
  import_get_token = require("@tamagui/get-token"),
  import_stacks = require("@tamagui/stacks"),
  import_start_transition = require("@tamagui/start-transition"),
  React = __toESM(require("react"), 1),
  import_react_native = require("react-native");
function _instanceof(left, right) {
  return right != null && typeof Symbol < "u" && right[Symbol.hasInstance] ? !!right[Symbol.hasInstance](left) : left instanceof right;
}
function _type_of(obj) {
  "@swc/helpers - typeof";

  return obj && typeof Symbol < "u" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
var PopperContextFast = (0, import_core.createStyledContext)(
  // since we always provide this we can avoid setting here
  {}, "Popper__"),
  PopperPositionContext = import_core.createStyledContext,
  {
    useStyledContext: usePopperContext,
    Provider: PopperProviderFast
  } = PopperContextFast,
  PopperContextSlow = (0, import_core.createStyledContext)(
  // since we always provide this we can avoid setting here
  {}, "PopperSlow__"),
  {
    useStyledContext: usePopperContextSlow,
    Provider: PopperProviderSlow
  } = PopperContextSlow,
  PopperProvider = function (param) {
    var {
        scope,
        children,
        ...context
      } = param,
      fns = React.useRef(context);
    fns.current = context;
    var [slowContext] = React.useState(function () {
      return {
        refs: context.refs,
        triggerElements: context.triggerElements,
        update() {
          for (var _len = arguments.length, a = new Array(_len), _key = 0; _key < _len; _key++) a[_key] = arguments[_key];
          fns.current.update(...a);
        },
        getReferenceProps(p) {
          var _fns_current_getReferenceProps, _fns_current;
          return (_fns_current_getReferenceProps = (_fns_current = fns.current).getReferenceProps) === null || _fns_current_getReferenceProps === void 0 ? void 0 : _fns_current_getReferenceProps.call(_fns_current, p);
        },
        onHoverReference(e) {
          var _fns_current_onHoverReference, _fns_current;
          (_fns_current_onHoverReference = (_fns_current = fns.current).onHoverReference) === null || _fns_current_onHoverReference === void 0 || _fns_current_onHoverReference.call(_fns_current, e);
        },
        onLeaveReference() {
          var _fns_current_onLeaveReference, _fns_current;
          (_fns_current_onLeaveReference = (_fns_current = fns.current).onLeaveReference) === null || _fns_current_onLeaveReference === void 0 || _fns_current_onLeaveReference.call(_fns_current);
        }
      };
    });
    return /* @__PURE__ */(0, import_jsx_runtime.jsx)(PopperProviderFast, {
      scope,
      ...context,
      children: /* @__PURE__ */(0, import_jsx_runtime.jsx)(PopperProviderSlow, {
        scope,
        ...slowContext,
        children
      })
    });
  },
  checkFloating = {
    name: "checkFloating",
    fn(data) {
      return {
        data: {
          hasFloating: !!data.rects.floating.width
        }
      };
    }
  },
  setupOptions = {};
function setupPopper(options) {
  Object.assign(setupOptions, options);
}
function tamaguiAutoUpdate(reference, floating, update) {
  update();
  var rafId = requestAnimationFrame(function () {
      update(), rafId = 0;
    }),
    cleanups = [function () {
      rafId && cancelAnimationFrame(rafId);
    }];
  _instanceof(reference, HTMLElement) && cleanups.push((0, import_core.registerLayoutNode)(reference, update));
  var refAncestors = _instanceof(reference, Element) ? (0, import_floating2.getOverflowAncestors)(reference) : [],
    ancestors = [...refAncestors, ...(0, import_floating2.getOverflowAncestors)(floating)],
    uniqueAncestors = [...new Set(ancestors)],
    _iteratorNormalCompletion = !0,
    _didIteratorError = !1,
    _iteratorError = void 0;
  try {
    for (var _iterator = uniqueAncestors[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = !0) {
      var ancestor = _step.value;
      ancestor.addEventListener("scroll", update, {
        passive: !0
      });
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
  return window.addEventListener("resize", update), cleanups.push(function () {
    var _iteratorNormalCompletion2 = !0,
      _didIteratorError2 = !1,
      _iteratorError2 = void 0;
    try {
      for (var _iterator2 = uniqueAncestors[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = !0) {
        var ancestor2 = _step2.value;
        ancestor2.removeEventListener("scroll", update);
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
    window.removeEventListener("resize", update);
  }), function () {
    return cleanups.forEach(function (fn) {
      return fn();
    });
  };
}
function Popper(props) {
  var {
      children,
      size,
      strategy = "absolute",
      placement = "bottom",
      stayInFrame,
      allowFlip,
      offset,
      disableRTL,
      resize,
      passThrough,
      open,
      scope
    } = props,
    [arrowEl, setArrow] = React.useState(null),
    [arrowSize, setArrowSize] = React.useState(0),
    offsetOptions = offset ?? arrowSize,
    floatingStyle = React.useRef({}),
    isOpen = passThrough ? !1 : open ?? !0,
    middlewareRef = React.useRef([]);
  isOpen && (middlewareRef.current = [
  // order matters: offset first, then flip, then shift, then arrow
  typeof offsetOptions < "u" ? (0, import_floating2.offset)(offsetOptions) : null, allowFlip ? (0, import_floating2.flip)(typeof allowFlip == "boolean" ? {} : allowFlip) : null,
  // NOTE: shift's axis terminology is reversed vs flip/offset:
  // for top/bottom placements: mainAxis = horizontal, crossAxis = vertical
  // for left/right placements: mainAxis = vertical, crossAxis = horizontal
  // default to horizontal shift only (mainAxis: true, crossAxis: false)
  stayInFrame ? (0, import_floating2.shift)({
    padding: 10,
    mainAxis: !0,
    crossAxis: !1,
    ...((typeof stayInFrame > "u" ? "undefined" : _type_of(stayInFrame)) === "object" ? stayInFrame : null)
  }) : null, arrowEl ? (0, import_floating2.arrow)({
    element: arrowEl
  }) : null, checkFloating, null, null, null].filter(Boolean));
  var floating = (0, import_floating2.useFloating)({
      open: isOpen,
      strategy,
      placement,
      sameScrollView: !1,
      // this only takes effect on native
      whileElementsMounted: isOpen ? tamaguiAutoUpdate : void 0,
      platform: disableRTL ?? setupOptions.disableRTL ? {
        ...import_floating2.platform,
        isRTL(element) {
          return !1;
        }
      } : import_floating2.platform,
      middleware: middlewareRef.current
    }),
    {
      middlewareData
    } = floating,
    dimensions = (0, import_react_native.useWindowDimensions)(),
    [keyboardOpen, setKeyboardOpen] = React.useState(!1);
  React.useEffect(function () {
    var showSubscription = import_react_native.Keyboard.addListener("keyboardDidShow", function () {
        (0, import_start_transition.startTransition)(function () {
          setKeyboardOpen(!0);
        });
      }),
      hideSubscription = import_react_native.Keyboard.addListener("keyboardDidHide", function () {
        (0, import_start_transition.startTransition)(function () {
          setKeyboardOpen(!1);
        });
      });
    return function () {
      showSubscription.remove(), hideSubscription.remove();
    };
  }, []), (0, import_constants.useIsomorphicLayoutEffect)(function () {
    passThrough || floating.update();
  }, [passThrough, dimensions, keyboardOpen]);
  var popperContext = React.useMemo(function () {
    var _middlewareData_checkFloating;
    return {
      size,
      arrowRef: setArrow,
      arrowStyle: middlewareData.arrow,
      onArrowSize: setArrowSize,
      hasFloating: (_middlewareData_checkFloating = middlewareData.checkFloating) === null || _middlewareData_checkFloating === void 0 ? void 0 : _middlewareData_checkFloating.hasFloating,
      transformOrigin: middlewareData.transformOrigin,
      open: !!open,
      ...floating
    };
  }, [open, size, floating, JSON.stringify(middlewareData.arrow || null), JSON.stringify(middlewareData.transformOrigin || null)]);
  return /* @__PURE__ */(0, import_jsx_runtime.jsx)(PopperProvider, {
    scope,
    ...popperContext,
    children: (
    /* reset FloatingOverrideContext so it doesn't leak into nested Poppers —
    each Popper consumes the override for its own useFloating, children
    should not inherit it (e.g. a Menu inside a Tooltip's tree) */
    /* @__PURE__ */
    (0, import_jsx_runtime.jsx)(import_floating.FloatingOverrideContext.Provider, {
      value: null,
      children
    }))
  });
}
var PopperAnchor = import_stacks.YStack.styleable(function (props, forwardedRef) {
    var {
        virtualRef,
        scope,
        ...rest
      } = props,
      context = usePopperContextSlow(scope),
      {
        getReferenceProps,
        refs,
        update
      } = context,
      ref = React.useRef(null),
      triggerId = React.useId();
    React.useEffect(function () {
      if (!(!scope || !context.triggerElements || !ref.current) && _instanceof(ref.current, Element)) {
        var el = ref.current;
        return context.triggerElements.add(triggerId, el), function () {
          var _context_triggerElements;
          (_context_triggerElements = context.triggerElements) === null || _context_triggerElements === void 0 || _context_triggerElements.delete(triggerId);
        };
      }
    }, [scope, triggerId, context.triggerElements]), React.useEffect(function () {
      virtualRef && (refs.setReference(virtualRef.current), update());
    }, [virtualRef]);
    var refProps = getReferenceProps?.({
        ...rest,
        ref
      }) || null,
      safeSetReference = React.useCallback(function (node) {
        (0, import_start_transition.startTransition)(function () {
          refs.setReference(node);
        });
      },
      // it was refs.setRefernce but its stable and refs is undefined on server
      [refs]),
      shouldHandleInHover = import_constants.isWeb && scope,
      composedRefs = (0, import_compose_refs.useComposedRefs)(forwardedRef, ref,
      // web handles this onMouseEnter below so it can support multiple targets + hovering
      shouldHandleInHover ? void 0 : safeSetReference);
    return /* @__PURE__ */(0, import_jsx_runtime.jsx)(import_core.View, {
      ...rest,
      ...refProps,
      ref: composedRefs,
      ...(shouldHandleInHover && {
        // scoped poppers with multiple triggers: set the reference on
        // mouseEnter so floating-ui positions relative to the hovered
        // trigger, not the last one rendered.
        //
        // flushSync is critical here: without it, setReference batches
        // with React's async state updates and the arrow/content position
        // computes against the OLD reference element. this causes the
        // arrow to flash at x=0 (top-left) during trigger switches.
        // flushSync forces synchronous commit so update() below reads
        // the correct reference element immediately.
        onMouseEnter: function (e) {
          var _e_currentTarget,
            el = (_e_currentTarget = e.currentTarget) !== null && _e_currentTarget !== void 0 ? _e_currentTarget : ref.current;
          if (_instanceof(el, HTMLElement)) {
            var _refProps_onPointerEnter, _context_onHoverReference;
            if ((0, import_react_dom.flushSync)(function () {
              return refs.setReference(el);
            }), update(), !refProps) return;
            (_refProps_onPointerEnter = refProps.onPointerEnter) === null || _refProps_onPointerEnter === void 0 || _refProps_onPointerEnter.call(refProps, e), (_context_onHoverReference = context.onHoverReference) === null || _context_onHoverReference === void 0 || _context_onHoverReference.call(context, e.nativeEvent);
          }
        },
        onMouseLeave: function (e) {
          var _context_onLeaveReference, _refProps_onMouseLeave;
          (_context_onLeaveReference = context.onLeaveReference) === null || _context_onLeaveReference === void 0 || _context_onLeaveReference.call(context), refProps == null || (_refProps_onMouseLeave = refProps.onMouseLeave) === null || _refProps_onMouseLeave === void 0 || _refProps_onMouseLeave.call(refProps, e);
        }
      })
    });
  }),
  PopperContentFrame = (0, import_core.styled)(import_stacks.YStack, {
    name: "PopperContent",
    variants: {
      unstyled: {
        true: {}
      },
      size: {
        "...size": function (val, param) {
          var {
            tokens
          } = param;
          return {
            padding: tokens.space[val],
            borderRadius: tokens.radius[val]
          };
        }
      }
    }
  }),
  PopperContent = /* @__PURE__ */React.forwardRef(function (props, forwardedRef) {
    var {
        scope,
        animatePosition,
        enableAnimationForPositionChange,
        children,
        passThrough,
        unstyled,
        ...rest
      } = props,
      animatePos = animatePosition ?? enableAnimationForPositionChange,
      context = usePopperContext(scope),
      {
        strategy,
        placement,
        refs,
        x,
        y,
        getFloatingProps,
        size,
        isPositioned,
        transformOrigin,
        update
      } = context,
      updateRef = React.useRef(update);
    updateRef.current = update;
    var lastNodeRef = React.useRef(null),
      safeSetFloating = React.useCallback(function (node) {
        var isNewNode = node !== lastNodeRef.current;
        if (node && (lastNodeRef.current = node, refs.setFloating(node), !isNewNode)) {
          var _updateRef_current;
          (_updateRef_current = updateRef.current) === null || _updateRef_current === void 0 || _updateRef_current.call(updateRef);
        }
      },
      // null calls are blocked: cycling nulls are transient, genuine unmount
      // is handled by the useEffect cleanup below
      [refs.setFloating]);
    React.useEffect(function () {
      return function () {
        var ourNode = lastNodeRef.current;
        ourNode && refs.floating.current === ourNode && refs.setFloating(null), lastNodeRef.current = null;
      };
    }, []);
    var contentRefs = (0, import_compose_refs.useComposedRefs)(safeSetFloating, forwardedRef),
      [needsMeasure, setNeedsMeasure] = React.useState(animatePos);
    (0, import_constants.useIsomorphicLayoutEffect)(function () {
      needsMeasure && x && y && setNeedsMeasure(!1);
    }, [needsMeasure, animatePos, x, y]);
    var hasBeenPositioned = React.useRef(!1),
      lastGoodPosition = React.useRef({
        x: 0,
        y: 0
      });
    (x !== 0 || y !== 0) && (lastGoodPosition.current = {
      x,
      y
    }, isPositioned && (hasBeenPositioned.current = !0));
    var brieflyZero = hasBeenPositioned.current && x === 0 && y === 0,
      effectiveX = brieflyZero ? lastGoodPosition.current.x : x,
      effectiveY = brieflyZero ? lastGoodPosition.current.y : y,
      hide = !hasBeenPositioned.current && effectiveX === 0 && effectiveY === 0,
      disableAnimationProp =
      // if they want to animate also when re-positioning allow it
      animatePos === "even-when-repositioning" ? needsMeasure : !hasBeenPositioned.current && !isPositioned || needsMeasure,
      [disableAnimation, setDisableAnimation] = React.useState(disableAnimationProp);
    React.useEffect(function () {
      setDisableAnimation(disableAnimationProp);
    }, [disableAnimationProp]);
    var positionProps = hide ? {} :
      // omit x/y when hiding - prevents motion driver from animating from origin
      {
        x: effectiveX || 0,
        y: effectiveY || 0
      },
      frameProps = {
        ref: contentRefs,
        ...positionProps,
        top: 0,
        left: 0,
        position: strategy,
        opacity: hide ? 0 : 1,
        ...(animatePos && {
          transition: rest.transition,
          // animateOnly: [] turns off transitions while keeping styles applied,
          // letting the element move to its position silently before animations start
          animateOnly: disableAnimation ? [] : rest.animateOnly,
          animatePresence: !1
        })
      },
      {
        style,
        ...floatingProps
      } = getFloatingProps ? getFloatingProps(frameProps) : frameProps,
      transformOriginStyle = import_constants.isWeb && transformOrigin ? {
        transformOrigin: `${transformOrigin.x} ${transformOrigin.y}`
      } : void 0;
    return /* @__PURE__ */(0, import_jsx_runtime.jsx)(import_core.LayoutMeasurementController, {
      disable: !context.open,
      children: /* @__PURE__ */(0, import_jsx_runtime.jsx)(import_core.View, {
        passThrough,
        ref: contentRefs,
        direction: rest.direction,
        ...(passThrough ? null : floatingProps),
        ...(!passThrough && animatePos && {
          "data-popper-animate-position": "true"
        }),
        children: /* @__PURE__ */(0, import_jsx_runtime.jsx)(PopperContentFrame, {
          passThrough,
          unstyled,
          ...(!passThrough && {
            "data-placement": placement,
            "data-strategy": strategy,
            size,
            ...style,
            ...transformOriginStyle,
            ...rest
          }),
          children
        }, "popper-content-frame")
      })
    });
  }),
  PopperArrowFrame = (0, import_core.styled)(import_stacks.YStack, {
    name: "PopperArrow",
    variants: {
      unstyled: {
        false: {
          borderColor: "$borderColor",
          backgroundColor: "$background",
          position: "relative"
        }
      }
    },
    defaultVariants: {
      unstyled: process.env.TAMAGUI_HEADLESS === "1"
    }
  }),
  PopperArrowOuterFrame = (0, import_core.styled)(import_stacks.YStack, {
    name: "PopperArrowOuter",
    variants: {
      unstyled: {
        false: {
          position: "absolute",
          zIndex: 1e6,
          pointerEvents: "none",
          overflow: "hidden",
          alignItems: "center",
          justifyContent: "center"
        }
      }
    },
    defaultVariants: {
      unstyled: process.env.TAMAGUI_HEADLESS === "1"
    }
  }),
  opposites = {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right"
  },
  PopperArrow = /* @__PURE__ */React.forwardRef(function (propsIn, forwardedRef) {
    var _context_arrowStyle,
      _context_arrowStyle1,
      {
        scope,
        animatePosition,
        transition,
        ...rest
      } = propsIn,
      {
        offset,
        size: sizeProp,
        borderWidth = 0,
        ...arrowProps
      } = rest,
      context = usePopperContext(scope),
      sizeVal = typeof sizeProp == "number" ? sizeProp : (0, import_core.getVariableValue)((0, import_get_token.getSpace)(sizeProp ?? context.size, {
        shift: -2,
        bounds: [2]
      })),
      size = Math.max(0, +sizeVal),
      {
        placement
      } = context,
      refs = (0, import_compose_refs.useComposedRefs)(context.arrowRef, forwardedRef),
      x = ((_context_arrowStyle = context.arrowStyle) === null || _context_arrowStyle === void 0 ? void 0 : _context_arrowStyle.x) || 0,
      y = ((_context_arrowStyle1 = context.arrowStyle) === null || _context_arrowStyle1 === void 0 ? void 0 : _context_arrowStyle1.y) || 0,
      arrowPositioned = context.arrowStyle != null,
      primaryPlacement = placement ? placement.split("-")[0] : "top",
      arrowStyle = {
        x,
        y,
        width: size,
        height: size
      },
      innerArrowStyle = {},
      isVertical = primaryPlacement === "bottom" || primaryPlacement === "top";
    if (primaryPlacement) {
      arrowStyle[isVertical ? "width" : "height"] = size * 2;
      var oppSide = opposites[primaryPlacement];
      oppSide && (arrowStyle[oppSide] = -size, innerArrowStyle[oppSide] = size / 2), (oppSide === "top" || oppSide === "bottom") && (arrowStyle.left = 0), (oppSide === "left" || oppSide === "right") && (arrowStyle.top = 0), (0, import_constants.useIsomorphicLayoutEffect)(function () {
        var _context_onArrowSize;
        (_context_onArrowSize = context.onArrowSize) === null || _context_onArrowSize === void 0 || _context_onArrowSize.call(context, size);
      }, [size, context.onArrowSize]);
    }
    return /* @__PURE__ */(0, import_jsx_runtime.jsx)(PopperArrowOuterFrame, {
      ref: refs,
      ...arrowStyle,
      ...(!arrowPositioned && {
        opacity: 0
      }),
      ...(animatePosition && {
        transition,
        animateOnly: ["transform"],
        animatePresence: !1
      }),
      children: /* @__PURE__ */(0, import_jsx_runtime.jsx)(PopperArrowFrame, {
        width: size,
        height: size,
        ...arrowProps,
        ...innerArrowStyle,
        rotate: "45deg",
        ...(primaryPlacement === "bottom" && {
          borderLeftWidth: borderWidth,
          borderTopWidth: borderWidth
        }),
        ...(primaryPlacement === "top" && {
          borderBottomWidth: borderWidth,
          borderRightWidth: borderWidth
        }),
        ...(primaryPlacement === "right" && {
          borderLeftWidth: borderWidth,
          borderBottomWidth: borderWidth
        }),
        ...(primaryPlacement === "left" && {
          borderTopWidth: borderWidth,
          borderRightWidth: borderWidth
        })
      })
    });
  });
//# sourceMappingURL=Popper.native.js.map
