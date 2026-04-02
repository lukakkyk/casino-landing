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
var createComponent_exports = {};
__export(createComponent_exports, {
  componentSetStates: () => componentSetStates,
  createComponent: () => createComponent
});
module.exports = __toCommonJS(createComponent_exports);
var import_compose_refs = require("@tamagui/compose-refs"),
  import_constants = require("@tamagui/constants"),
  import_native = require("@tamagui/native"),
  import_helpers = require("@tamagui/helpers"),
  import_is_equal_shallow = require("@tamagui/is-equal-shallow"),
  import_react = __toESM(require("react"), 1),
  import_config = require("./config.cjs"),
  import_isDevTools = require("./constants/isDevTools.cjs"),
  import_ComponentContext = require("./contexts/ComponentContext.cjs"),
  import_GroupContext = require("./contexts/GroupContext.cjs"),
  import_createVariable = require("./createVariable.cjs"),
  import_defaultComponentState = require("./defaultComponentState.cjs"),
  import_eventHandling = require("./eventHandling.cjs"),
  import_getDefaultProps = require("./helpers/getDefaultProps.cjs"),
  import_resolveAnimationDriver = require("./helpers/resolveAnimationDriver.cjs"),
  import_getSplitStyles = require("./helpers/getSplitStyles.cjs"),
  import_log = require("./helpers/log.cjs"),
  import_mergeProps = require("./helpers/mergeProps.cjs"),
  import_mergeRenderElementProps = require("./helpers/mergeRenderElementProps.cjs"),
  import_objectIdentityKey = require("./helpers/objectIdentityKey.cjs"),
  import_pointerEvents = require("./helpers/pointerEvents.cjs"),
  import_pseudoTransitions = require("./helpers/pseudoTransitions.cjs"),
  import_setElementProps = require("./helpers/setElementProps.cjs"),
  import_subscribeToContextGroup = require("./helpers/subscribeToContextGroup.cjs"),
  import_themeable = require("./helpers/themeable.cjs"),
  import_wrapStyleTags = require("./helpers/wrapStyleTags.cjs"),
  import_useComponentState = require("./hooks/useComponentState.cjs"),
  import_useMedia = require("./hooks/useMedia.cjs"),
  import_useTheme = require("./hooks/useTheme.cjs"),
  import_setupHooks = require("./setupHooks.cjs"),
  import_Slot = require("./views/Slot.cjs"),
  import_Theme = require("./views/Theme.cjs"),
  import_jsx_runtime = require("react/jsx-runtime");
let time, debugKeyListeners, startVisualizer;
const componentSetStates = /* @__PURE__ */new Set(),
  avoidReRenderKeys = /* @__PURE__ */new Set(["hover", "press", "pressIn", "group", "focus", "focusWithin", "media", "group"]);
if (typeof window < "u") {
  const cancelPresses = () => {
      componentSetStates.forEach(setState => setState(prev => prev.press || prev.pressIn ? {
        ...prev,
        press: !1,
        pressIn: !1
      } : prev)), componentSetStates.clear();
    },
    cancelTouches = () => {
      componentSetStates.forEach(setState => setState(prev => prev.press || prev.pressIn || prev.hover ? {
        ...prev,
        press: !1,
        pressIn: !1,
        hover: !1
      } : prev)), componentSetStates.clear();
    };
  addEventListener("mouseup", cancelPresses), addEventListener("touchend", cancelTouches), addEventListener("touchcancel", cancelTouches), process.env.NODE_ENV === "development" && (startVisualizer = () => {
    const devVisualizerConfig = import_config.devConfig?.visualizer;
    if (devVisualizerConfig && !globalThis.__tamaguiDevVisualizer) {
      let show = function (val) {
          clearTimeout(tm), isShowing = val, debugKeyListeners?.forEach(l => l(val)), !val && resizeListener && (window.removeEventListener("resize", resizeListener), resizeListener = null);
        },
        cancelShow = function () {
          clearTimeout(tm), resizeListener && (window.removeEventListener("resize", resizeListener), resizeListener = null);
        };
      globalThis.__tamaguiDevVisualizer = !0, debugKeyListeners = /* @__PURE__ */new Set();
      let tm,
        isShowing = !1,
        resizeListener = null;
      const options = {
        key: "Alt",
        delay: 800,
        ...(typeof devVisualizerConfig == "object" ? devVisualizerConfig : {})
      };
      window.addEventListener("blur", () => {
        show(!1);
      }), window.addEventListener("keydown", ({
        key,
        metaKey,
        defaultPrevented
      }) => {
        clearTimeout(tm), !defaultPrevented && (metaKey || key === options.key && (resizeListener || (resizeListener = () => cancelShow(), window.addEventListener("resize", resizeListener)), tm = setTimeout(() => {
          show(!0);
        }, options.delay)));
      }), window.addEventListener("keyup", ({
        defaultPrevented
      }) => {
        defaultPrevented || (cancelShow(), isShowing && show(!1));
      });
    }
  });
}
let BaseText, BaseView;
const lastInteractionWasKeyboard = {
    value: !1
  },
  lastInteractionWasTouch = {
    value: !1
  };
import_constants.isWeb && typeof document < "u" && (document.addEventListener("keydown", () => {
  lastInteractionWasKeyboard.value || (lastInteractionWasKeyboard.value = !0);
}), document.addEventListener("mousedown", () => {
  lastInteractionWasKeyboard.value && (lastInteractionWasKeyboard.value = !1);
}), document.addEventListener("mousemove", () => {
  lastInteractionWasKeyboard.value && (lastInteractionWasKeyboard.value = !1), lastInteractionWasTouch.value = !1;
}), document.addEventListener("touchstart", () => {
  lastInteractionWasTouch.value = !0;
}));
function createComponent(staticConfig) {
  let config = null;
  const {
      Component,
      isText,
      isHOC
    } = staticConfig,
    component = import_react.default.forwardRef((propsIn, forwardedRef) => {
      "use no memo";

      config = config || (0, import_config.getConfig)();
      const internalID = process.env.NODE_ENV === "development" ? import_react.default.useId() : "";
      process.env.NODE_ENV === "development" && startVisualizer && (startVisualizer(), startVisualizer = void 0), process.env.NODE_ENV === "test" && propsIn["data-test-renders"] && (propsIn["data-test-renders"].current = propsIn["data-test-renders"].current ?? 0, propsIn["data-test-renders"].current += 1);
      const {
          context,
          isReactNative
        } = staticConfig,
        debugProp = propsIn.debug,
        styledContextValue = context ? import_react.default.useContext(context) : void 0;
      let overriddenContextProps = null;
      const componentContext = import_react.default.useContext(import_ComponentContext.ComponentContext),
        hasTextAncestor = !!(import_constants.isWeb && isText && componentContext.inText),
        isInsideNativeMenu = !1;
      !process.env.TAMAGUI_IS_CORE_NODE && process.env.NODE_ENV === "development" && debugProp === "profile" && !time && (time = require("@tamagui/timer").timer().start(), globalThis.time = time), process.env.NODE_ENV === "development" && !time && globalThis.time && (time = globalThis.time), process.env.NODE_ENV === "development" && time && time`non-tamagui time (ignore)`;
      let props = propsIn;
      const componentName = props.componentName || staticConfig.componentName,
        defaultProps = (0, import_getDefaultProps.getDefaultProps)(staticConfig, props.componentName),
        [nextProps, overrides] = (0, import_mergeProps.mergeComponentProps)(defaultProps, styledContextValue, propsIn);
      props = nextProps, overriddenContextProps = overrides, process.env.NODE_ENV === "development" && import_constants.isClient && import_react.default.useEffect(() => {
        let node,
          overlay = null;
        const remove = () => {
            if (overlay) try {
              overlay.parentNode?.removeChild(overlay), overlay = null;
            } catch {}
          },
          debugVisualizerHandler = (show = !1) => {
            if (node = stateRef.current.host, !!node) if (show) {
              overlay || (overlay = document.createElement("span"), overlay.style.inset = "0px", overlay.style.zIndex = "1000000", overlay.style.position = "absolute", overlay.style.borderColor = "red", overlay.style.borderWidth = "1px", overlay.style.borderStyle = "dotted");
              const dataAt = node.getAttribute("data-at") || "",
                dataIn = node.getAttribute("data-in") || "",
                tooltip = document.createElement("span");
              tooltip.style.position = "absolute", tooltip.style.top = "0px", tooltip.style.left = "0px", tooltip.style.padding = "3px", tooltip.style.background = "rgba(0,0,0,0.75)", tooltip.style.color = "rgba(255,255,255,1)", tooltip.style.fontSize = "12px", tooltip.style.lineHeight = "12px", tooltip.style.fontFamily = "monospace", tooltip.innerText = `${componentName || ""} ${dataAt} ${dataIn}`.trim(), overlay.appendChild(tooltip), node.appendChild(overlay);
            } else remove();
          };
        return debugKeyListeners = debugKeyListeners || /* @__PURE__ */new Set(), debugKeyListeners.add(debugVisualizerHandler), () => {
          remove(), debugKeyListeners?.delete(debugVisualizerHandler);
        };
      }, [componentName]);
      const groupContextParent = import_react.default.useContext(import_GroupContext.GroupContext),
        animationDriver = props.animatedBy && config ? config.animationDrivers ? config.animationDrivers[props.animatedBy] ?? config.animations : props.animatedBy === "default" ? config.animations : null : (0, import_resolveAnimationDriver.resolveAnimationDriver)(componentContext.animationDriver) ?? (0, import_resolveAnimationDriver.resolveAnimationDriver)(config?.animations) ?? null,
        useAnimations = animationDriver?.useAnimations,
        componentState = (0, import_useComponentState.useComponentState)(props, animationDriver?.isStub ? null : animationDriver, staticConfig, config),
        {
          disabled,
          groupName,
          hasAnimationProp,
          hasEnterStyle,
          isAnimated,
          isExiting,
          isHydrated,
          presence,
          presenceState,
          setState,
          noClass,
          state,
          stateRef,
          inputStyle,
          outputStyle,
          willBeAnimated,
          willBeAnimatedClient,
          startedUnhydrated
        } = componentState;
      hasAnimationProp && animationDriver?.avoidReRenders && (0, import_constants.useIsomorphicLayoutEffect)(() => {
        const pendingState = stateRef.current.nextState;
        pendingState && (stateRef.current.nextState = void 0, componentState.setStateShallow(pendingState));
      });
      const allGroupContexts = (0, import_react.useMemo)(() => {
        if (!groupName || props.passThrough) return groupContextParent;
        const listeners = /* @__PURE__ */new Set();
        return stateRef.current.group?.listeners?.clear(), stateRef.current.group = {
          listeners,
          emit(state2) {
            listeners.forEach(l => l(state2));
          },
          subscribe(cb) {
            return listeners.add(cb), listeners.size === 1 && setStateShallow({
              hasDynGroupChildren: !0
            }), () => {
              listeners.delete(cb), listeners.size === 0 && setStateShallow({
                hasDynGroupChildren: !1
              });
            };
          }
        }, {
          ...groupContextParent,
          [groupName]: {
            state: {
              pseudo: import_defaultComponentState.defaultComponentStateMounted
            },
            subscribe: listener => {
              const dispose = stateRef.current.group?.subscribe(listener);
              return () => {
                dispose?.();
              };
            }
          }
        };
      }, [stateRef, groupName, groupContextParent]);
      let setStateShallow = componentState.setStateShallow;
      process.env.NODE_ENV === "development" && time && time`use-state`;
      const renderProp = props.render,
        element = import_constants.isWeb && (!Component || typeof Component == "string") && renderProp || Component,
        BaseComponent = isText ? BaseText || element || "span" : BaseView || element || (hasTextAncestor ? "span" : "div");
      let elementType = BaseComponent;
      animationDriver && isAnimated && animationDriver.needsCustomComponent && (elementType = animationDriver[isText ? "Text" : "View"] || elementType);
      const disableTheme = props["data-disable-theme"] || isHOC;
      process.env.NODE_ENV === "development" && time && time`theme-props`;
      const themeStateProps = {
        componentName,
        disable: disableTheme,
        shallow: props.themeShallow,
        debug: debugProp,
        unstyled: props.unstyled
      };
      if ("theme" in props && (themeStateProps.name = props.theme), themeStateProps.needsUpdate = () => !!stateRef.current.isListeningToTheme, process.env.NODE_ENV === "development" && debugProp && debugProp !== "profile") {
        const name = `${componentName || Component?.displayName || Component?.name || "[Unnamed Component]"}`,
          type = (hasEnterStyle ? "(hasEnter)" : " ") + (isAnimated ? "(animated)" : " ") + (isReactNative ? "(rnw)" : " ") + (noClass ? "(noClass)" : " ") + (state.press || state.pressIn ? "(PRESSED)" : " ") + (state.hover ? "(HOVERED)" : " ") + (state.focus ? "(FOCUSED)" : " ") + (state.focusWithin ? "(WITHIN FOCUSED)" : " ") + (presenceState?.isPresent === !1 ? "(EXIT)" : ""),
          dataIs = propsIn["data-is"] || "",
          banner = `<${name} /> ${internalID} ${dataIs ? ` ${dataIs}` : ""} ${type.trim()} (hydrated: ${isHydrated}) (unmounted: ${state.unmounted})`,
          ch = propsIn.children;
        let childLog = typeof ch == "string" ? ch.length > 4 ? ch.slice(0, 4) + "..." : ch : "";
        childLog.length && (childLog = `(children: ${childLog})`), import_constants.isWeb ? (console.info(`%c ${banner}`, "background: green; color: white;"), import_constants.isServer ? (0, import_log.log)({
          noClass,
          isAnimated,
          isWeb: import_constants.isWeb,
          inputStyle
        }) : (console.groupEnd(), console.groupCollapsed(`${childLog} [inspect props, state, context \u{1F447}]`), (0, import_log.log)("props in:", propsIn), (0, import_log.log)("final props:", props, Object.keys(props)), (0, import_log.log)({
          state,
          staticConfig,
          elementType,
          themeStateProps
        }), (0, import_log.log)({
          context,
          overriddenContextProps,
          componentContext
        }), (0, import_log.log)({
          presence,
          isAnimated,
          isHOC,
          hasAnimationProp,
          useAnimations
        }), console.groupEnd())) : (console.info(`

------------------------------
${banner}
------------------------------
`), (0, import_log.log)("children:", props.children), (0, import_log.log)({
          overriddenContextProps,
          styledContextValue
        }), (0, import_log.log)({
          noClass,
          isAnimated,
          isWeb: import_constants.isWeb,
          inputStyle
        }));
      }
      process.env.NODE_ENV === "development" && time && time`pre-theme-media`;
      const [theme, themeState] = (0, import_useTheme.useThemeWithState)(themeStateProps);
      process.env.NODE_ENV === "development" && time && time`theme`, elementType = element || elementType;
      const isStringElement = typeof elementType == "string",
        mediaState = (0, import_useMedia.useMedia)(componentContext, debugProp);
      (0, import_createVariable.setDidGetVariableValue)(!1), process.env.NODE_ENV === "development" && time && time`media`;
      const resolveValues =
        // if HOC + mounted + has animation prop, resolve as value so it passes non-variable to child
        isAnimated && inputStyle !== "css" || isHOC && state.unmounted == !1 && hasAnimationProp ? "value" : "auto",
        styleProps = {
          mediaState,
          noClass,
          resolveValues,
          isExiting,
          isAnimated,
          willBeAnimated,
          styledContext: styledContextValue
        },
        themeName = themeState?.name || "";
      process.env.NODE_ENV === "development" && time && time`split-styles-prepare`;
      const splitStyles = (0, import_getSplitStyles.useSplitStyles)(props, staticConfig, theme, themeName, state, styleProps, null, componentContext, allGroupContexts, elementType, startedUnhydrated, debugProp, animationDriver),
        isPassthrough = !splitStyles;
      let contextForOverride = staticConfig.context;
      if (splitStyles?.overriddenContextProps) {
        const contextForProps = staticConfig.context || staticConfig.parentStaticConfig?.context;
        if (contextForProps) {
          for (const key in splitStyles.overriddenContextProps) overriddenContextProps = overriddenContextProps || {}, overriddenContextProps[key] = splitStyles.overriddenContextProps[key];
          staticConfig.context || (contextForOverride = contextForProps);
        }
      }
      const groupContext = groupName && allGroupContexts?.[groupName] || null;
      if (!isPassthrough && groupContext &&
      // avoids onLayout if we don't need it
      props.containerType !== "normal") {
        const groupState = groupContext?.state;
        groupState && groupState.layout === void 0 && (splitStyles.style?.width || splitStyles.style?.height) && (groupState.layout = {
          width: fromPx(splitStyles.style.width),
          height: fromPx(splitStyles.style.height)
        });
      }
      const hasEnterExitTransition = props.transition && typeof props.transition == "object" && !Array.isArray(props.transition) && ("enter" in props.transition || "exit" in props.transition);
      if (!isPassthrough && (hasAnimationProp || groupName) && animationDriver?.avoidReRenders && !hasEnterExitTransition) {
        let updateGroupListeners = function () {
          const updatedState = stateRef.current.nextState;
          if (groupContext) {
            const {
              group,
              hasDynGroupChildren,
              unmounted,
              transition,
              ...childrenGroupState
            } = updatedState;
            notifyGroupSubscribers(groupContext, stateRef.current.group || null, childrenGroupState);
          }
        };
        const ogSetStateShallow = setStateShallow;
        if (stateRef.current.updateStyleListener = () => {
          const useStyleListener = stateRef.current.useStyleListener;
          if (!useStyleListener) {
            const pendingState = stateRef.current.nextState;
            pendingState && (stateRef.current.nextState = void 0, ogSetStateShallow(pendingState));
            return;
          }
          const updatedState = stateRef.current.nextState || state,
            mediaState2 = stateRef.current.nextMedia,
            nextStyles = (0, import_getSplitStyles.getSplitStyles)(props, staticConfig, theme, themeName, updatedState, mediaState2 ? {
              ...styleProps,
              mediaState: mediaState2
            } : styleProps, null, componentContext, allGroupContexts, elementType, startedUnhydrated, debugProp, animationDriver),
            effectiveTransition = (0, import_pseudoTransitions.resolveEffectivePseudoTransition)(stateRef.current.prevPseudoState, updatedState, nextStyles?.pseudoTransitions, props.transition);
          stateRef.current.prevPseudoState = (0, import_pseudoTransitions.extractPseudoState)(updatedState), useStyleListener(nextStyles?.style || {}, effectiveTransition);
        }, componentContext.mediaEmitListeners = componentContext.mediaEmitListeners || /* @__PURE__ */new Set(), !stateRef.current.mediaEmitCleanup) {
          const updateListener = next => {
            stateRef.current.nextMedia = next, stateRef.current.updateStyleListener?.();
          };
          componentContext.mediaEmitListeners.add(updateListener), stateRef.current.mediaEmitCleanup = () => {
            componentContext.mediaEmitListeners?.delete(updateListener);
          };
        }
        componentContext.mediaEmit = componentContext.mediaEmit || (next => {
          for (const listener of componentContext.mediaEmitListeners) listener(next);
        }), stateRef.current.setStateShallow = nextOrGetNext => {
          const prev = stateRef.current.nextState || state,
            next = typeof nextOrGetNext == "function" ? nextOrGetNext(prev) : nextOrGetNext;
          if (next === prev || (0, import_is_equal_shallow.isEqualShallow)(prev, next)) return;
          const canAvoidReRender = Object.keys(next).every(key => avoidReRenderKeys.has(key)),
            updatedState = {
              ...prev,
              ...next
            };
          stateRef.current.nextState = updatedState, canAvoidReRender ? (process.env.NODE_ENV === "development" && debugProp && debugProp !== "profile" && (console.groupCollapsed("[\u26A1\uFE0F] avoid setState", componentName, next, {
            updatedState,
            props
          }), console.info(stateRef.current.host), console.groupEnd()), updateGroupListeners(), stateRef.current.updateStyleListener?.()) : (process.env.NODE_ENV === "development" && debugProp && debugProp !== "profile" && console.info("[\u{1F40C}] re-render", {
            canAvoidReRender,
            next
          }), ogSetStateShallow(next));
        }, setStateShallow = state2 => {
          stateRef.current.setStateShallow?.(state2);
        };
      }
      process.env.NODE_ENV === "development" && time && time`split-styles`, splitStyles && (props.group && props.untilMeasured === "hide" && !stateRef.current.hasMeasured && (splitStyles.style = splitStyles.style || {}, splitStyles.style.opacity = 0), splitStyles.dynamicThemeAccess != null && (stateRef.current.isListeningToTheme = splitStyles.dynamicThemeAccess));
      const hasRuntimeMediaKeys = splitStyles?.hasMedia && splitStyles.hasMedia !== !0,
        shouldListenForMedia = (0, import_createVariable.didGetVariableValue)() || hasRuntimeMediaKeys || noClass && splitStyles?.hasMedia === !0,
        mediaListeningKeys = hasRuntimeMediaKeys ? splitStyles.hasMedia : null;
      process.env.NODE_ENV === "development" && debugProp === "verbose" && console.info("useMedia() createComponent", shouldListenForMedia, mediaListeningKeys), (0, import_useMedia.setMediaShouldUpdate)(componentContext, shouldListenForMedia, mediaListeningKeys);
      const {
          viewProps: viewPropsIn,
          pseudos,
          style: splitStylesStyle,
          classNames,
          pseudoGroups,
          mediaGroups
        } = splitStyles || {},
        propsWithAnimation = props,
        {
          asChild,
          children,
          themeShallow,
          spaceDirection: _spaceDirection,
          onPress,
          onLongPress,
          onPressIn,
          onPressOut,
          onHoverIn,
          onHoverOut,
          onMouseUp,
          onMouseDown,
          onMouseEnter,
          onMouseLeave,
          onFocus,
          onBlur,
          separator,
          // ignore from here on out
          passThrough,
          forceStyle: _forceStyle,
          // @ts-ignore  for next/link compat etc
          onClick,
          theme: _themeProp,
          ...nonTamaguiProps
        } = viewPropsIn || {};
      let viewProps = nonTamaguiProps;
      props.forceStyle && (viewProps.forceStyle = props.forceStyle), isHOC && (typeof _themeProp < "u" && (viewProps.theme = _themeProp), typeof passThrough < "u" && (viewProps.passThrough = passThrough));
      let animationStyles;
      const shouldUseAnimation =
      // if it supports css vars we run it on server too to get matching initial style
      (inputStyle === "css" ? willBeAnimatedClient : willBeAnimated) && useAnimations && !isHOC;
      let animatedRef;
      if (shouldUseAnimation) {
        const useStyleEmitter = animationDriver?.avoidReRenders ? listener => {
            stateRef.current.useStyleListener = listener;
          } : void 0,
          effectiveTransition = (0, import_pseudoTransitions.resolveEffectivePseudoTransition)(stateRef.current.prevPseudoState, state, splitStyles?.pseudoTransitions, props.transition);
        splitStyles && (splitStyles.effectiveTransition = effectiveTransition), stateRef.current.prevPseudoState = (0, import_pseudoTransitions.extractPseudoState)(state);
        const animations = useAnimations({
          props: propsWithAnimation,
          // clone style to prevent animation driver mutations from leaking to viewProps
          // during SSR/pre-hydration (CSS driver mutates style.transition in place)
          style: isHydrated ? splitStylesStyle || {} : {
            ...splitStylesStyle
          },
          // @ts-ignore
          styleState: splitStyles,
          useStyleEmitter,
          presence,
          componentState: state,
          styleProps,
          theme,
          themeName,
          pseudos: pseudos || null,
          staticConfig,
          stateRef
        });
        animations && (animations.ref && (animatedRef = animations.ref), isHydrated && animations && (animationStyles = animations.style, viewProps.style = animationStyles, animations.className && (viewProps.className = `${state.unmounted === "should-enter" ? "t_unmounted " : ""}${viewProps.className || ""} ${animations.className}`))), process.env.NODE_ENV === "development" && time && time`animations`;
      }
      process.env.NODE_ENV === "development" && props.untilMeasured && !props.group && console.warn(`You set the untilMeasured prop without setting group. This doesn't work, be sure to set untilMeasured on the parent that sets group, not the children that use the $group- prop.

If you meant to do this, you can disable this warning - either change untilMeasured and group at the same time, or do group={conditional ? 'name' : undefined}`), process.env.NODE_ENV === "development" && time && time`destructure`, !isPassthrough && groupContext &&
      // avoids onLayout if we don't need it
      props.containerType !== "normal" && (nonTamaguiProps.onLayout = (0, import_helpers.composeEventHandlers)(nonTamaguiProps.onLayout, e => {
        const layout = e.nativeEvent.layout;
        groupContext.state.layout = layout, stateRef.current.group?.emit({
          layout
        }), !stateRef.current.hasMeasured && props.untilMeasured === "hide" && setState(prev => ({
          ...prev
        })), stateRef.current.hasMeasured = !0;
      })), viewProps = import_setupHooks.hooks.usePropsTransform?.(elementType, nonTamaguiProps, stateRef, stateRef.current.willHydrate) || nonTamaguiProps, stateRef.current.composedRef || (stateRef.current.composedRef = (0, import_compose_refs.composeRefs)(x => stateRef.current.host = x, forwardedRef, import_setElementProps.setElementProps, animatedRef)), viewProps.ref = stateRef.current.composedRef, (0, import_pointerEvents.usePointerEvents)(props, viewProps), process.env.NODE_ENV === "development" && !isReactNative && !isText && import_constants.isWeb && !isHOC && import_react.default.Children.toArray(props.children).forEach(item => {
        typeof item == "string" && item !== `
` && console.error(`Unexpected text node: ${item}. A text node cannot be a child of a <${staticConfig.componentName || propsIn.tag || "View"}>.`, props);
      }), process.env.NODE_ENV === "development" && time && time`events-hooks`;
      const unPress = () => {
        setStateShallow({
          press: !1,
          pressIn: !1
        });
      };
      process.env.NODE_ENV === "development" && import_constants.isWeb && (0, import_constants.useIsomorphicLayoutEffect)(() => {
        if (debugProp === "verbose") {
          let cssStyleDeclarationToObject = function (style) {
            const styleObject = {};
            for (let i = 0; i < style.length; i++) {
              let prop = style[i];
              styleObject[prop] = style.getPropertyValue(prop);
            }
            return styleObject;
          };
          const computed = stateRef.current.host ? cssStyleDeclarationToObject(getComputedStyle(stateRef.current.host)) : {};
          console.groupCollapsed(`Rendered > (opacity: ${computed.opacity})`), console.warn(stateRef.current.host), console.warn(computed), console.groupEnd();
        }
      }), (0, import_constants.useIsomorphicLayoutEffect)(() => {
        if (state.unmounted === !0 && hasEnterStyle) {
          setStateShallow({
            unmounted: "should-enter"
          });
          return;
        }
        if (state.unmounted) {
          if (inputStyle === "css") {
            let cancelled = !1;
            return requestAnimationFrame(() => {
              cancelled || requestAnimationFrame(() => {
                cancelled || setStateShallow({
                  unmounted: !1
                });
              });
            }), () => {
              cancelled = !0;
            };
          }
          setStateShallow({
            unmounted: !1
          });
        }
        return () => {
          componentSetStates.delete(setState), stateRef.current.mediaEmitCleanup?.();
        };
      }, [state.unmounted, inputStyle]), (0, import_constants.useIsomorphicLayoutEffect)(() => {
        if (!disabled && !(!pseudoGroups && !mediaGroups) && allGroupContexts) return (0, import_subscribeToContextGroup.subscribeToContextGroup)({
          groupContext: allGroupContexts,
          setStateShallow,
          mediaGroups,
          pseudoGroups
        });
      }, [allGroupContexts, disabled, pseudoGroups ? (0, import_objectIdentityKey.objectIdentityKey)(pseudoGroups) : 0, mediaGroups ? (0, import_objectIdentityKey.objectIdentityKey)(mediaGroups) : 0]);
      const groupEmitter = stateRef.current.group;
      (0, import_constants.useIsomorphicLayoutEffect)(() => {
        !groupContext || !groupEmitter || notifyGroupSubscribers(groupContext, groupEmitter, state);
      }, [groupContext, groupEmitter, state]);
      const runtimePressStyle = !disabled && noClass && pseudos?.pressStyle,
        runtimeFocusStyle = !disabled && noClass && pseudos?.focusStyle,
        runtimeFocusVisibleStyle = !disabled && noClass && pseudos?.focusVisibleStyle,
        attachFocus = !!(runtimePressStyle || runtimeFocusStyle || runtimeFocusVisibleStyle || onFocus || onBlur || componentContext.setParentFocusState),
        hasDynamicGroupChildren = !!(groupName && state.hasDynGroupChildren),
        attachPress = !!(hasDynamicGroupChildren || runtimePressStyle || onPress || onPressOut || onPressIn || onMouseDown || onMouseUp || onLongPress || onClick || pseudos?.focusVisibleStyle),
        runtimeHoverStyle = !disabled && noClass && pseudos?.hoverStyle,
        needsHoverState = !!(hasDynamicGroupChildren || runtimeHoverStyle),
        attachHover = import_constants.isWeb && !!(hasDynamicGroupChildren || needsHoverState || onMouseEnter || onMouseLeave),
        shouldAttach = !disabled && !props.asChild && !!(attachFocus || attachPress || attachHover || runtimePressStyle || runtimeHoverStyle || runtimeFocusStyle),
        needsPressState = !!(hasDynamicGroupChildren || runtimePressStyle);
      process.env.NODE_ENV === "development" && time && time`events-setup`, process.env.NODE_ENV === "development" && debugProp === "verbose" && (0, import_log.log)("\u{1FAA9} events()", {
        runtimeFocusStyle,
        runtimePressStyle,
        runtimeHoverStyle,
        runtimeFocusVisibleStyle,
        attachPress,
        attachFocus,
        attachHover,
        shouldAttach,
        needsHoverState,
        pseudos
      });
      const events = shouldAttach ? {
        onPressOut: attachPress ? e => {
          unPress(), onPressOut?.(e), onMouseUp?.(e);
        } : void 0,
        ...((attachHover || attachPress) && {
          onMouseEnter: e => {
            const next = {};
            needsHoverState && !lastInteractionWasTouch.value && (next.hover = !0), needsPressState && state.pressIn && (next.press = !0), setStateShallow(next), onHoverIn?.(e), onMouseEnter?.(e);
          },
          onMouseLeave: e => {
            const next = {};
            needsHoverState && (next.hover = !1), needsPressState && (next.press = !1, next.pressIn = !1), setStateShallow(next), onHoverOut?.(e), onMouseLeave?.(e);
          }
        }),
        onPressIn: attachPress ? e => {
          needsPressState && setStateShallow({
            press: !0,
            pressIn: !0
          }), onPressIn?.(e), onMouseDown?.(e), import_constants.isWeb && componentSetStates.add(setState);
        } : void 0,
        onPress: attachPress ? e => {
          unPress(), import_constants.isWeb && onClick?.(e), onPress?.(e), onLongPress?.(e);
        } : void 0,
        ...(attachFocus && {
          onFocus: e => {
            const next = {};
            componentContext.setParentFocusState && (componentContext.setParentFocusState({
              focusWithin: !0
            }), next.focusWithin = !0), pseudos?.focusVisibleStyle && lastInteractionWasKeyboard.value ? next.focusVisible = !0 : next.focus = !0, setStateShallow(next), onFocus?.(e);
          },
          onBlur: e => {
            componentContext.setParentFocusState && componentContext.setParentFocusState({
              focusWithin: !1
            }), setStateShallow({
              focus: !1,
              focusVisible: !1,
              focusWithin: !1
            }), onBlur?.(e);
          }
        })
      } : null;
      events && !isReactNative && Object.assign(viewProps, (0, import_eventHandling.getWebEvents)(events)), process.env.NODE_ENV === "development" && time && time`events`, process.env.NODE_ENV === "development" && debugProp === "verbose" && (0, import_log.log)("events", {
        events,
        attachHover,
        attachPress
      });
      const pressGesture = null;
      if (process.env.NODE_ENV === "development" && time && time`hooks`, asChild) {
        elementType = import_Slot.Slot;
        {
          const passEvents = (0, import_eventHandling.getWebEvents)({
            onPress,
            onLongPress,
            onPressIn,
            onPressOut,
            onMouseUp,
            onMouseDown,
            onMouseEnter,
            onMouseLeave
          }, asChild === "web" || asChild === "except-style-web");
          Object.assign(viewProps, passEvents);
        }
      }
      process.env.NODE_ENV === "development" && time && time`spaced-as-child`;
      let content;
      if (isPassthrough) content = import_react.default.createElement(BaseComponent, {
        style: {
          display: "contents"
        }
      }, propsIn.children);else {
        import_setupHooks.hooks.useChildren && (content = import_setupHooks.hooks.useChildren(elementType, content || children, viewProps));
        const isRenderPropString = typeof renderProp == "string";
        if (renderProp && !isRenderPropString) {
          const out = getCustomRender(renderProp, content || children, viewProps, componentState);
          out && (viewProps = out.viewProps, elementType = out.elementType);
        }
        content || (isRenderPropString && viewProps.render, content = import_react.default.createElement(elementType, viewProps, content || children)), process.env.NODE_ENV === "development" && time && time`use-children`;
      }
      const ResetPresence = animationDriver?.ResetPresence,
        needsReset = !!(
        // not when passing down to child
        !asChild &&
        // not when passThrough
        splitStyles &&
        // not when HOC
        !isHOC && ResetPresence && willBeAnimated && (hasEnterStyle || presenceState)),
        hasEverReset = stateRef.current.hasEverResetPresence;
      if (needsReset && !hasEverReset && (stateRef.current.hasEverResetPresence = !0), (needsReset || hasEverReset) && ResetPresence && (content = /* @__PURE__ */(0, import_jsx_runtime.jsx)(ResetPresence, {
        disabled: !needsReset,
        children: content
      })), process.env.NODE_ENV === "development" && time && time`create-element`, ("focusWithinStyle" in propsIn || pseudos?.focusWithinStyle) && (content = /* @__PURE__ */(0, import_jsx_runtime.jsx)(import_ComponentContext.ComponentContext.Provider, {
        ...componentContext,
        setParentFocusState: setStateShallow,
        children: content
      })), "group" in props && (content = /* @__PURE__ */(0, import_jsx_runtime.jsx)(import_GroupContext.GroupContext.Provider, {
        value: allGroupContexts,
        children: content
      })), !asChild && isText && !hasTextAncestor && (content = /* @__PURE__ */(0, import_jsx_runtime.jsx)(import_ComponentContext.ComponentContext.Provider, {
        ...componentContext,
        inText: !0,
        children: content
      })), process.env.NODE_ENV === "development" && time && time`group-context`, content = disableTheme || !splitStyles ? content : (0, import_Theme.getThemedChildren)(themeState, content, themeStateProps, !1, stateRef), process.env.NODE_ENV === "development" && time && time`themed-children`, isReactNative && !asChild && (content = /* @__PURE__ */(0, import_jsx_runtime.jsx)("span", {
        className: "_dsp_contents",
        ...(!isPassthrough && isHydrated && events && (0, import_eventHandling.getWebEvents)(events)),
        children: content
      })), overriddenContextProps && contextForOverride) {
        const Provider = contextForOverride.Provider;
        for (const key in styledContextValue) key in overriddenContextProps || (overriddenContextProps[key] = styledContextValue[key]);
        content = /* @__PURE__ */(0, import_jsx_runtime.jsx)(Provider, {
          __disableMergeDefaultValues: !0,
          ...overriddenContextProps,
          children: content
        });
      }
      if (process.env.NODE_ENV === "development" && time && time`context-override`, startedUnhydrated && splitStyles && (content = /* @__PURE__ */(0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, {
        children: [content, isHydrated ? null : (0, import_wrapStyleTags.getStyleTags)(Object.values(splitStyles.rulesToInsert))]
      })), process.env.NODE_ENV === "development" && time && time`style-tags`, process.env.NODE_ENV === "development" && debugProp && debugProp !== "profile") {
        const title = `render <${typeof elementType == "string" ? elementType : "Component"} /> (${internalID}) with props`;
        if (!import_constants.isWeb || !import_constants.isClient) {
          (0, import_log.log)(title), (0, import_log.log)("state: ", state), import_isDevTools.isDevTools && (0, import_log.log)("viewProps", viewProps), (0, import_log.log)("final styles:");
          for (const key in splitStylesStyle) (0, import_log.log)(key, splitStylesStyle[key]);
        } else {
          console.groupCollapsed(title);
          try {
            (0, import_log.log)("viewProps", viewProps), (0, import_log.log)("children", content), typeof window < "u" && (0, import_log.log)({
              propsIn,
              props,
              attachPress,
              animationStyles,
              classNames,
              content,
              elementType,
              events,
              isAnimated,
              hasRuntimeMediaKeys,
              isStringElement,
              mediaListeningKeys,
              pseudos,
              shouldAttach,
              noClass,
              shouldListenForMedia,
              splitStyles,
              splitStylesStyle,
              state,
              stateRef,
              staticConfig,
              styleProps,
              themeState,
              viewProps,
              willBeAnimated,
              startedUnhydrated
            });
          } catch {} finally {
            console.groupEnd();
          }
        }
      }
      return process.env.NODE_ENV === "development" && time && (time`rest`, globalThis.willPrint || (globalThis.willPrint = !0, setTimeout(() => {
        delete globalThis.willPrint, time.print(), time = null;
      }, 50))), content;
    });
  function notifyGroupSubscribers(groupContext, groupEmitter, pseudo) {
    if (!groupContext || !groupEmitter) return;
    const nextState = {
      ...groupContext.state,
      pseudo
    };
    groupEmitter.emit(nextState), groupContext.state = nextState;
  }
  staticConfig.componentName && (component.displayName = staticConfig.componentName);
  let res = component;
  res = import_react.default.memo(res), res.staticConfig = staticConfig;
  function extendStyledConfig(extended) {
    return {
      ...staticConfig,
      ...extended,
      neverFlatten: !0,
      isHOC: !0,
      isStyledHOC: !1
    };
  }
  function styleable(Component2, options) {
    let out = typeof Component2 == "function" && Component2.length === 1 ? Component2 : import_react.default.forwardRef(Component2);
    const extendedConfig = extendStyledConfig(options?.staticConfig);
    return out = options?.disableTheme ? out : (0, import_themeable.themeable)(out, extendedConfig, !0), (extendedConfig.memo || process.env.TAMAGUI_MEMOIZE_STYLEABLE) && (out = import_react.default.memo(out)), out.staticConfig = extendedConfig, out.styleable = styleable, out;
  }
  return res.styleable = styleable, res;
}
const fromPx = val => typeof val == "number" ? val : typeof val == "string" ? +val.replace("px", "") : 0,
  getCustomRender = (renderProp, content, viewProps, state) => {
    if (typeof renderProp == "function") {
      const out = renderProp(viewProps, state);
      renderProp = out;
    }
    if (renderProp && typeof renderProp == "object" && import_react.default.isValidElement(renderProp) && renderProp) {
      const elementProps = renderProp.props,
        mergedProps = elementProps ? (0, import_mergeRenderElementProps.mergeRenderElementProps)(elementProps, viewProps, content) : viewProps;
      return {
        elementType: renderProp.type,
        viewProps: mergedProps
      };
    }
  };