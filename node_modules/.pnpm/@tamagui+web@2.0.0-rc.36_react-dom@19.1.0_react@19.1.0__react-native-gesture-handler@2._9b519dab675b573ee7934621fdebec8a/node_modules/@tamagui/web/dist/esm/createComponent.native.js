import { jsx as _jsx } from "react/jsx-runtime";
import { composeRefs } from "@tamagui/compose-refs";
import { isClient, isServer, isWeb, useIsomorphicLayoutEffect } from "@tamagui/constants";
import { NativeMenuContext } from "@tamagui/native";
import { composeEventHandlers } from "@tamagui/helpers";
import { isEqualShallow } from "@tamagui/is-equal-shallow";
import React, { useMemo } from "react";
import { getConfig } from "./config.native.js";
import { isDevTools } from "./constants/isDevTools.native.js";
import { ComponentContext } from "./contexts/ComponentContext.native.js";
import { GroupContext } from "./contexts/GroupContext.native.js";
import { didGetVariableValue, setDidGetVariableValue } from "./createVariable.native.js";
import { defaultComponentStateMounted } from "./defaultComponentState.native.js";
import { useEvents, wrapWithGestureDetector } from "./eventHandling.native.js";
import { getDefaultProps } from "./helpers/getDefaultProps.native.js";
import { resolveAnimationDriver } from "./helpers/resolveAnimationDriver.native.js";
import { getSplitStyles, useSplitStyles } from "./helpers/getSplitStyles.native.js";
import { log } from "./helpers/log.native.js";
import { mergeComponentProps } from "./helpers/mergeProps.native.js";
import { mergeRenderElementProps } from "./helpers/mergeRenderElementProps.native.js";
import { objectIdentityKey } from "./helpers/objectIdentityKey.native.js";
import { usePointerEvents } from "./helpers/pointerEvents.native.js";
import { extractPseudoState, resolveEffectivePseudoTransition } from "./helpers/pseudoTransitions.native.js";
import { setElementProps } from "./helpers/setElementProps.native.js";
import { subscribeToContextGroup } from "./helpers/subscribeToContextGroup.native.js";
import { themeable } from "./helpers/themeable.native.js";
import { useComponentState } from "./hooks/useComponentState.native.js";
import { setMediaShouldUpdate, useMedia } from "./hooks/useMedia.native.js";
import { useThemeWithState } from "./hooks/useTheme.native.js";
import { hooks } from "./setupHooks.native.js";
import { Slot } from "./views/Slot.native.js";
import { getThemedChildren } from "./views/Theme.native.js";
function _type_of(obj) {
  "@swc/helpers - typeof";

  return obj && typeof Symbol < "u" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
var time,
  debugKeyListeners,
  startVisualizer,
  componentSetStates = /* @__PURE__ */new Set(),
  avoidReRenderKeys = /* @__PURE__ */new Set(["hover", "press", "pressIn", "group", "focus", "focusWithin", "media", "group"]);
if (0) var cancelPresses, cancelTouches;
var BaseText,
  BaseView,
  hasSetupBaseViews = !1,
  lastInteractionWasKeyboard = {
    value: !1
  },
  lastInteractionWasTouch = {
    value: !1
  };
isWeb && typeof document < "u" && (document.addEventListener("keydown", function () {
  lastInteractionWasKeyboard.value || (lastInteractionWasKeyboard.value = !0);
}), document.addEventListener("mousedown", function () {
  lastInteractionWasKeyboard.value && (lastInteractionWasKeyboard.value = !1);
}), document.addEventListener("mousemove", function () {
  lastInteractionWasKeyboard.value && (lastInteractionWasKeyboard.value = !1), lastInteractionWasTouch.value = !1;
}), document.addEventListener("touchstart", function () {
  lastInteractionWasTouch.value = !0;
}));
function createComponent(staticConfig) {
  var config = null,
    {
      Component,
      isText,
      isHOC
    } = staticConfig,
    component = /* @__PURE__ */React.forwardRef(function (propsIn, forwardedRef) {
      "use no memo";

      var _hooks_usePropsTransform;
      config = config || getConfig();
      var internalID = process.env.NODE_ENV === "development" ? React.useId() : "";
      if (process.env.NODE_ENV === "development" && startVisualizer && (startVisualizer(), startVisualizer = void 0), !hasSetupBaseViews) {
        var _hooks_getBaseViews;
        hasSetupBaseViews = !0;
        var baseViews = (_hooks_getBaseViews = hooks.getBaseViews) === null || _hooks_getBaseViews === void 0 ? void 0 : _hooks_getBaseViews.call(hooks);
        baseViews && (BaseText = baseViews.Text, BaseView = baseViews.View);
      }
      if (process.env.NODE_ENV === "test" && propsIn["data-test-renders"]) {
        var _propsIn_datatestrenders_current;
        propsIn["data-test-renders"].current = (_propsIn_datatestrenders_current = propsIn["data-test-renders"].current) !== null && _propsIn_datatestrenders_current !== void 0 ? _propsIn_datatestrenders_current : 0, propsIn["data-test-renders"].current += 1;
      }
      var {
          context,
          isReactNative
        } = staticConfig,
        debugProp = propsIn.debug,
        styledContextValue = context ? React.useContext(context) : void 0,
        overriddenContextProps = null,
        componentContext = React.useContext(ComponentContext),
        hasTextAncestor = !!(isWeb && isText && componentContext.inText),
        isInsideNativeMenu = React.useContext(NativeMenuContext);
      if (!process.env.TAMAGUI_IS_CORE_NODE && process.env.NODE_ENV === "development" && debugProp === "profile" && !time) {
        var timer = require("@tamagui/timer").timer();
        time = timer.start(), globalThis.time = time;
      }
      process.env.NODE_ENV === "development" && !time && globalThis.time && (time = globalThis.time), process.env.NODE_ENV === "development" && time && time`non-tamagui time (ignore)`;
      var props = propsIn,
        componentName = props.componentName || staticConfig.componentName,
        defaultProps = getDefaultProps(staticConfig, props.componentName),
        [nextProps, overrides] = mergeComponentProps(defaultProps, styledContextValue, propsIn);
      props = nextProps, overriddenContextProps = overrides, process.env.NODE_ENV === "development" && isClient && React.useEffect(function () {
        var node,
          overlay = null,
          remove = function () {
            if (overlay) try {
              var _overlay_parentNode;
              (_overlay_parentNode = overlay.parentNode) === null || _overlay_parentNode === void 0 || _overlay_parentNode.removeChild(overlay), overlay = null;
            } catch {}
          },
          debugVisualizerHandler = function () {
            var show = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1;
            if (node = stateRef.current.host, !!node) if (show) {
              overlay || (overlay = document.createElement("span"), overlay.style.inset = "0px", overlay.style.zIndex = "1000000", overlay.style.position = "absolute", overlay.style.borderColor = "red", overlay.style.borderWidth = "1px", overlay.style.borderStyle = "dotted");
              var dataAt = node.getAttribute("data-at") || "",
                dataIn = node.getAttribute("data-in") || "",
                tooltip = document.createElement("span");
              tooltip.style.position = "absolute", tooltip.style.top = "0px", tooltip.style.left = "0px", tooltip.style.padding = "3px", tooltip.style.background = "rgba(0,0,0,0.75)", tooltip.style.color = "rgba(255,255,255,1)", tooltip.style.fontSize = "12px", tooltip.style.lineHeight = "12px", tooltip.style.fontFamily = "monospace", tooltip.innerText = `${componentName || ""} ${dataAt} ${dataIn}`.trim(), overlay.appendChild(tooltip), node.appendChild(overlay);
            } else remove();
          };
        return debugKeyListeners = debugKeyListeners || /* @__PURE__ */new Set(), debugKeyListeners.add(debugVisualizerHandler), function () {
          remove(), debugKeyListeners?.delete(debugVisualizerHandler);
        };
      }, [componentName]);
      var groupContextParent = React.useContext(GroupContext),
        animationDriver = function () {
          if (props.animatedBy && config) {
            if (config.animationDrivers) {
              var _config_animationDrivers_props_animatedBy;
              return (_config_animationDrivers_props_animatedBy = config.animationDrivers[props.animatedBy]) !== null && _config_animationDrivers_props_animatedBy !== void 0 ? _config_animationDrivers_props_animatedBy : config.animations;
            }
            return props.animatedBy === "default" ? config.animations : null;
          }
          var _resolveAnimationDriver, _ref;
          return (_ref = (_resolveAnimationDriver = resolveAnimationDriver(componentContext.animationDriver)) !== null && _resolveAnimationDriver !== void 0 ? _resolveAnimationDriver : resolveAnimationDriver(config?.animations)) !== null && _ref !== void 0 ? _ref : null;
        }(),
        useAnimations = animationDriver?.useAnimations,
        componentState = useComponentState(props, animationDriver?.isStub ? null : animationDriver, staticConfig, config),
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
      hasAnimationProp && animationDriver?.avoidReRenders && useIsomorphicLayoutEffect(function () {
        var pendingState = stateRef.current.nextState;
        pendingState && (stateRef.current.nextState = void 0, componentState.setStateShallow(pendingState));
      });
      var allGroupContexts = useMemo(function () {
          var _stateRef_current_group_listeners, _stateRef_current_group;
          if (!groupName || props.passThrough) return groupContextParent;
          var listeners = /* @__PURE__ */new Set();
          return (_stateRef_current_group = stateRef.current.group) === null || _stateRef_current_group === void 0 || (_stateRef_current_group_listeners = _stateRef_current_group.listeners) === null || _stateRef_current_group_listeners === void 0 || _stateRef_current_group_listeners.clear(), stateRef.current.group = {
            listeners,
            emit(state2) {
              listeners.forEach(function (l) {
                return l(state2);
              });
            },
            subscribe(cb) {
              return listeners.add(cb), listeners.size === 1 && setStateShallow({
                hasDynGroupChildren: !0
              }), function () {
                listeners.delete(cb), listeners.size === 0 && setStateShallow({
                  hasDynGroupChildren: !1
                });
              };
            }
          }, {
            ...groupContextParent,
            [groupName]: {
              state: {
                pseudo: defaultComponentStateMounted
              },
              subscribe: function (listener) {
                var _stateRef_current_group2,
                  dispose = (_stateRef_current_group2 = stateRef.current.group) === null || _stateRef_current_group2 === void 0 ? void 0 : _stateRef_current_group2.subscribe(listener);
                return function () {
                  dispose?.();
                };
              }
            }
          };
        }, [stateRef, groupName, groupContextParent]),
        setStateShallow = componentState.setStateShallow;
      process.env.NODE_ENV === "development" && time && time`use-state`;
      var renderProp = props.render,
        isRenderString = !Component || typeof Component == "string",
        element = isWeb && isRenderString && renderProp || Component,
        BaseTextComponent = BaseText || element || "span",
        BaseViewComponent = BaseView || element || (hasTextAncestor ? "span" : "div"),
        BaseComponent = isText ? BaseTextComponent : BaseViewComponent,
        elementType = BaseComponent,
        isAnimatedCustomComponent = animationDriver && isAnimated && animationDriver.needsCustomComponent;
      isAnimatedCustomComponent && (elementType = animationDriver[isText ? "Text" : "View"] || elementType);
      var disableThemeProp = !1,
        disableTheme = disableThemeProp || isHOC;
      process.env.NODE_ENV === "development" && time && time`theme-props`;
      var themeStateProps = {
        componentName,
        disable: disableTheme,
        shallow: props.themeShallow,
        debug: debugProp,
        unstyled: props.unstyled
      };
      if ("theme" in props && (themeStateProps.name = props.theme), themeStateProps.needsUpdate = function () {
        return !!stateRef.current.isListeningToTheme;
      }, themeStateProps.deopt = willBeAnimated, process.env.NODE_ENV === "development" && debugProp && debugProp !== "profile") {
        var name = `${componentName || Component?.displayName || Component?.name || "[Unnamed Component]"}`,
          type = (hasEnterStyle ? "(hasEnter)" : " ") + (isAnimated ? "(animated)" : " ") + (isReactNative ? "(rnw)" : " ") + (noClass ? "(noClass)" : " ") + (state.press || state.pressIn ? "(PRESSED)" : " ") + (state.hover ? "(HOVERED)" : " ") + (state.focus ? "(FOCUSED)" : " ") + (state.focusWithin ? "(WITHIN FOCUSED)" : " ") + (presenceState?.isPresent === !1 ? "(EXIT)" : ""),
          dataIs = propsIn["data-is"] || "",
          banner = `<${name} /> ${internalID} ${dataIs ? ` ${dataIs}` : ""} ${type.trim()} (hydrated: ${isHydrated}) (unmounted: ${state.unmounted})`,
          ch = propsIn.children,
          childLog = typeof ch == "string" ? ch.length > 4 ? ch.slice(0, 4) + "..." : ch : "";
        childLog.length && (childLog = `(children: ${childLog})`), isWeb ? (console.info(`%c ${banner}`, "background: green; color: white;"), isServer ? log({
          noClass,
          isAnimated,
          isWeb,
          inputStyle
        }) : (console.groupEnd(), console.groupCollapsed(`${childLog} [inspect props, state, context \u{1F447}]`), log("props in:", propsIn), log("final props:", props, Object.keys(props)), log({
          state,
          staticConfig,
          elementType,
          themeStateProps
        }), log({
          context,
          overriddenContextProps,
          componentContext
        }), log({
          presence,
          isAnimated,
          isHOC,
          hasAnimationProp,
          useAnimations
        }), console.groupEnd())) : (console.info(`

------------------------------
${banner}
------------------------------
`), log("children:", props.children), log({
          overriddenContextProps,
          styledContextValue
        }), log({
          noClass,
          isAnimated,
          isWeb,
          inputStyle
        }));
      }
      process.env.NODE_ENV === "development" && time && time`pre-theme-media`;
      var [theme, themeState] = useThemeWithState(themeStateProps);
      process.env.NODE_ENV === "development" && time && time`theme`, elementType = element || elementType;
      var isStringElement = typeof elementType == "string",
        mediaState = useMedia(componentContext, debugProp);
      setDidGetVariableValue(!1), process.env.NODE_ENV === "development" && time && time`media`;
      var resolveValues =
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
      var splitStyles = useSplitStyles(props, staticConfig, theme, themeName, state, styleProps, null, componentContext, allGroupContexts, elementType, startedUnhydrated, debugProp, animationDriver),
        isPassthrough = !splitStyles,
        contextForOverride = staticConfig.context;
      if (splitStyles?.overriddenContextProps) {
        var _staticConfig_parentStaticConfig,
          contextForProps = staticConfig.context || ((_staticConfig_parentStaticConfig = staticConfig.parentStaticConfig) === null || _staticConfig_parentStaticConfig === void 0 ? void 0 : _staticConfig_parentStaticConfig.context);
        if (contextForProps) {
          for (var key in splitStyles.overriddenContextProps) overriddenContextProps = overriddenContextProps || {}, overriddenContextProps[key] = splitStyles.overriddenContextProps[key];
          staticConfig.context || (contextForOverride = contextForProps);
        }
      }
      var groupContext = groupName && allGroupContexts?.[groupName] || null;
      if (!isPassthrough && groupContext &&
      // avoids onLayout if we don't need it
      props.containerType !== "normal") {
        var groupState = groupContext?.state;
        if (groupState && groupState.layout === void 0) {
          var _splitStyles_style, _splitStyles_style1;
          (!((_splitStyles_style = splitStyles.style) === null || _splitStyles_style === void 0) && _splitStyles_style.width || !((_splitStyles_style1 = splitStyles.style) === null || _splitStyles_style1 === void 0) && _splitStyles_style1.height) && (groupState.layout = {
            width: fromPx(splitStyles.style.width),
            height: fromPx(splitStyles.style.height)
          });
        }
      }
      var hasEnterExitTransition = props.transition && _type_of(props.transition) === "object" && !Array.isArray(props.transition) && ("enter" in props.transition || "exit" in props.transition);
      if (!isPassthrough && (hasAnimationProp || groupName) && animationDriver?.avoidReRenders && !hasEnterExitTransition) {
        let updateGroupListeners2 = function () {
          var updatedState = stateRef.current.nextState;
          if (groupContext) {
            var {
              group,
              hasDynGroupChildren,
              unmounted,
              transition,
              ...childrenGroupState
            } = updatedState;
            notifyGroupSubscribers(groupContext, stateRef.current.group || null, childrenGroupState);
          }
        };
        var updateGroupListeners = updateGroupListeners2,
          ogSetStateShallow = setStateShallow;
        if (stateRef.current.updateStyleListener = function () {
          var useStyleListener = stateRef.current.useStyleListener;
          if (!useStyleListener) {
            var pendingState = stateRef.current.nextState;
            pendingState && (stateRef.current.nextState = void 0, ogSetStateShallow(pendingState));
            return;
          }
          var updatedState = stateRef.current.nextState || state,
            mediaState2 = stateRef.current.nextMedia,
            nextStyles = getSplitStyles(props, staticConfig, theme, themeName, updatedState, mediaState2 ? {
              ...styleProps,
              mediaState: mediaState2
            } : styleProps, null, componentContext, allGroupContexts, elementType, startedUnhydrated, debugProp, animationDriver),
            effectiveTransition2 = resolveEffectivePseudoTransition(stateRef.current.prevPseudoState, updatedState, nextStyles?.pseudoTransitions, props.transition);
          stateRef.current.prevPseudoState = extractPseudoState(updatedState), useStyleListener(nextStyles?.style || {}, effectiveTransition2);
        }, componentContext.mediaEmitListeners = componentContext.mediaEmitListeners || /* @__PURE__ */new Set(), !stateRef.current.mediaEmitCleanup) {
          var updateListener = function (next) {
            var _stateRef_current_updateStyleListener, _stateRef_current;
            stateRef.current.nextMedia = next, (_stateRef_current_updateStyleListener = (_stateRef_current = stateRef.current).updateStyleListener) === null || _stateRef_current_updateStyleListener === void 0 || _stateRef_current_updateStyleListener.call(_stateRef_current);
          };
          componentContext.mediaEmitListeners.add(updateListener), stateRef.current.mediaEmitCleanup = function () {
            var _componentContext_mediaEmitListeners;
            (_componentContext_mediaEmitListeners = componentContext.mediaEmitListeners) === null || _componentContext_mediaEmitListeners === void 0 || _componentContext_mediaEmitListeners.delete(updateListener);
          };
        }
        componentContext.mediaEmit = componentContext.mediaEmit || function (next) {
          var _iteratorNormalCompletion = !0,
            _didIteratorError = !1,
            _iteratorError = void 0;
          try {
            for (var _iterator = componentContext.mediaEmitListeners[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = !0) {
              var listener = _step.value;
              listener(next);
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
        }, stateRef.current.setStateShallow = function (nextOrGetNext) {
          var prev = stateRef.current.nextState || state,
            next = typeof nextOrGetNext == "function" ? nextOrGetNext(prev) : nextOrGetNext;
          if (!(next === prev || isEqualShallow(prev, next))) {
            var canAvoidReRender = Object.keys(next).every(function (key3) {
                return avoidReRenderKeys.has(key3);
              }),
              updatedState = {
                ...prev,
                ...next
              };
            if (stateRef.current.nextState = updatedState, canAvoidReRender) {
              var _stateRef_current_updateStyleListener, _stateRef_current;
              process.env.NODE_ENV === "development" && debugProp && debugProp !== "profile" && (console.groupCollapsed("[\u26A1\uFE0F] avoid setState", componentName, next, {
                updatedState,
                props
              }), console.info(stateRef.current.host), console.groupEnd()), updateGroupListeners2(), (_stateRef_current_updateStyleListener = (_stateRef_current = stateRef.current).updateStyleListener) === null || _stateRef_current_updateStyleListener === void 0 || _stateRef_current_updateStyleListener.call(_stateRef_current);
            } else process.env.NODE_ENV === "development" && debugProp && debugProp !== "profile" && console.info("[\u{1F40C}] re-render", {
              canAvoidReRender,
              next
            }), ogSetStateShallow(next);
          }
        }, setStateShallow = function (state2) {
          var _stateRef_current_setStateShallow, _stateRef_current;
          (_stateRef_current_setStateShallow = (_stateRef_current = stateRef.current).setStateShallow) === null || _stateRef_current_setStateShallow === void 0 || _stateRef_current_setStateShallow.call(_stateRef_current, state2);
        };
      }
      process.env.NODE_ENV === "development" && time && time`split-styles`, splitStyles && (props.group && props.untilMeasured === "hide" && !stateRef.current.hasMeasured && (splitStyles.style = splitStyles.style || {}, splitStyles.style.opacity = 0), splitStyles.dynamicThemeAccess != null && (stateRef.current.isListeningToTheme = splitStyles.dynamicThemeAccess));
      var hasRuntimeMediaKeys = splitStyles?.hasMedia && splitStyles.hasMedia !== !0,
        shouldListenForMedia = didGetVariableValue() || hasRuntimeMediaKeys || noClass && splitStyles?.hasMedia === !0,
        mediaListeningKeys = hasRuntimeMediaKeys ? splitStyles.hasMedia : null;
      process.env.NODE_ENV === "development" && debugProp === "verbose" && console.info("useMedia() createComponent", shouldListenForMedia, mediaListeningKeys), setMediaShouldUpdate(componentContext, shouldListenForMedia, mediaListeningKeys);
      var {
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
        } = viewPropsIn || {},
        viewProps = nonTamaguiProps;
      props.forceStyle && (viewProps.forceStyle = props.forceStyle), isHOC && (typeof _themeProp < "u" && (viewProps.theme = _themeProp), typeof passThrough < "u" && (viewProps.passThrough = passThrough));
      var animationStyles,
        shouldUseAnimation =
        // if it supports css vars we run it on server too to get matching initial style
        (inputStyle === "css" ? willBeAnimatedClient : willBeAnimated) && useAnimations && !isHOC,
        animatedRef;
      if (shouldUseAnimation) {
        var useStyleEmitter = animationDriver?.avoidReRenders ? function (listener) {
            stateRef.current.useStyleListener = listener;
          } : void 0,
          effectiveTransition = resolveEffectivePseudoTransition(stateRef.current.prevPseudoState, state, splitStyles?.pseudoTransitions, props.transition);
        splitStyles && (splitStyles.effectiveTransition = effectiveTransition), stateRef.current.prevPseudoState = extractPseudoState(state);
        var animations = useAnimations({
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
      props.containerType !== "normal" && (nonTamaguiProps.onLayout = composeEventHandlers(nonTamaguiProps.onLayout, function (e) {
        var _stateRef_current_group,
          layout = e.nativeEvent.layout;
        groupContext.state.layout = layout, (_stateRef_current_group = stateRef.current.group) === null || _stateRef_current_group === void 0 || _stateRef_current_group.emit({
          layout
        }), !stateRef.current.hasMeasured && props.untilMeasured === "hide" && setState(function (prev) {
          return {
            ...prev
          };
        }), stateRef.current.hasMeasured = !0;
      })), viewProps = ((_hooks_usePropsTransform = hooks.usePropsTransform) === null || _hooks_usePropsTransform === void 0 ? void 0 : _hooks_usePropsTransform.call(hooks, elementType, nonTamaguiProps, stateRef, stateRef.current.willHydrate)) || nonTamaguiProps, stateRef.current.composedRef || (stateRef.current.composedRef = composeRefs(function (x) {
        return stateRef.current.host = x;
      }, forwardedRef, setElementProps, animatedRef)), viewProps.ref = stateRef.current.composedRef, usePointerEvents(props, viewProps), process.env.NODE_ENV === "development" && !isReactNative && !isText && isWeb && !isHOC && React.Children.toArray(props.children).forEach(function (item) {
        typeof item == "string" && item !== `
` && console.error(`Unexpected text node: ${item}. A text node cannot be a child of a <${staticConfig.componentName || propsIn.tag || "View"}>.`, props);
      }), process.env.NODE_ENV === "development" && time && time`events-hooks`;
      var unPress = function () {
        setStateShallow({
          press: !1,
          pressIn: !1
        });
      };
      process.env.NODE_ENV === "development" && isWeb && useIsomorphicLayoutEffect(function () {
        if (debugProp === "verbose") {
          let cssStyleDeclarationToObject2 = function (style) {
            for (var styleObject = {}, i = 0; i < style.length; i++) {
              var prop = style[i];
              styleObject[prop] = style.getPropertyValue(prop);
            }
            return styleObject;
          };
          var cssStyleDeclarationToObject = cssStyleDeclarationToObject2,
            computed = stateRef.current.host ? cssStyleDeclarationToObject2(getComputedStyle(stateRef.current.host)) : {};
          console.groupCollapsed(`Rendered > (opacity: ${computed.opacity})`), console.warn(stateRef.current.host), console.warn(computed), console.groupEnd();
        }
      }), useIsomorphicLayoutEffect(function () {
        if (state.unmounted === !0 && hasEnterStyle) {
          setStateShallow({
            unmounted: "should-enter"
          });
          return;
        }
        if (state.unmounted) {
          if (inputStyle === "css") {
            var cancelled = !1;
            return requestAnimationFrame(function () {
              cancelled || requestAnimationFrame(function () {
                cancelled || setStateShallow({
                  unmounted: !1
                });
              });
            }), function () {
              cancelled = !0;
            };
          }
          setStateShallow({
            unmounted: !1
          });
        }
        return function () {
          var _stateRef_current_mediaEmitCleanup, _stateRef_current;
          componentSetStates.delete(setState), (_stateRef_current_mediaEmitCleanup = (_stateRef_current = stateRef.current).mediaEmitCleanup) === null || _stateRef_current_mediaEmitCleanup === void 0 || _stateRef_current_mediaEmitCleanup.call(_stateRef_current);
        };
      }, [state.unmounted, inputStyle]), useIsomorphicLayoutEffect(function () {
        if (!disabled && !(!pseudoGroups && !mediaGroups) && allGroupContexts) return subscribeToContextGroup({
          groupContext: allGroupContexts,
          setStateShallow,
          mediaGroups,
          pseudoGroups
        });
      }, [allGroupContexts, disabled, pseudoGroups ? objectIdentityKey(pseudoGroups) : 0, mediaGroups ? objectIdentityKey(mediaGroups) : 0]);
      var groupEmitter = stateRef.current.group;
      useIsomorphicLayoutEffect(function () {
        !groupContext || !groupEmitter || notifyGroupSubscribers(groupContext, groupEmitter, state);
      }, [groupContext, groupEmitter, state]);
      var runtimePressStyle = !disabled && noClass && pseudos?.pressStyle,
        runtimeFocusStyle = !disabled && noClass && pseudos?.focusStyle,
        runtimeFocusVisibleStyle = !disabled && noClass && pseudos?.focusVisibleStyle,
        attachFocus = !!(runtimePressStyle || runtimeFocusStyle || runtimeFocusVisibleStyle || onFocus || onBlur || componentContext.setParentFocusState),
        hasDynamicGroupChildren = !!(groupName && state.hasDynGroupChildren),
        attachPress = !!(hasDynamicGroupChildren || runtimePressStyle || onPress || onPressOut || onPressIn || onMouseDown || onMouseUp || onLongPress || onClick || pseudos?.focusVisibleStyle),
        runtimeHoverStyle = !disabled && noClass && pseudos?.hoverStyle,
        needsHoverState = !!(hasDynamicGroupChildren || runtimeHoverStyle),
        attachHover = isWeb && !!(hasDynamicGroupChildren || needsHoverState || onMouseEnter || onMouseLeave),
        shouldAttach = !disabled && !props.asChild && !!(attachFocus || attachPress || attachHover || runtimePressStyle || runtimeHoverStyle || runtimeFocusStyle),
        needsPressState = !!(hasDynamicGroupChildren || runtimePressStyle);
      process.env.NODE_ENV === "development" && time && time`events-setup`, process.env.NODE_ENV === "development" && debugProp === "verbose" && log("\u{1FAA9} events()", {
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
      var events = shouldAttach ? {
        onPressOut: attachPress ? function (e) {
          unPress(), onPressOut?.(e), onMouseUp?.(e);
        } : void 0,
        ...((attachHover || attachPress) && {
          onMouseEnter: function (e) {
            var next = {};
            needsHoverState && !lastInteractionWasTouch.value && (next.hover = !0), needsPressState && state.pressIn && (next.press = !0), setStateShallow(next), onHoverIn?.(e), onMouseEnter?.(e);
          },
          onMouseLeave: function (e) {
            var next = {};
            needsHoverState && (next.hover = !1), needsPressState && (next.press = !1, next.pressIn = !1), setStateShallow(next), onHoverOut?.(e), onMouseLeave?.(e);
          }
        }),
        onPressIn: attachPress ? function (e) {
          needsPressState && setStateShallow({
            press: !0,
            pressIn: !0
          }), onPressIn?.(e), onMouseDown?.(e), isWeb && componentSetStates.add(setState);
        } : void 0,
        onPress: attachPress ? function (e) {
          unPress(), isWeb && onClick?.(e), onPress?.(e);
        } : void 0,
        ...(attachPress && onLongPress && {
          onLongPress: function (e) {
            unPress(), onLongPress?.(e);
          }
        }),
        ...(attachFocus && {
          onFocus: function (e) {
            var next = {};
            componentContext.setParentFocusState && (componentContext.setParentFocusState({
              focusWithin: !0
            }), next.focusWithin = !0), pseudos?.focusVisibleStyle && lastInteractionWasKeyboard.value ? next.focusVisible = !0 : next.focus = !0, setStateShallow(next), onFocus?.(e);
          },
          onBlur: function (e) {
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
      if (events && !asChild) {
        var _viewProps_focusable;
        Object.assign(events, {
          cancelable: !viewProps.rejectResponderTermination,
          disabled,
          hitSlop: viewProps.hitSlop,
          delayLongPress: viewProps.delayLongPress,
          delayPressIn: viewProps.delayPressIn,
          delayPressOut: viewProps.delayPressOut,
          focusable: (_viewProps_focusable = viewProps.focusable) !== null && _viewProps_focusable !== void 0 ? _viewProps_focusable : !0,
          minPressDuration: 0
        });
      }
      process.env.NODE_ENV === "development" && time && time`events`, process.env.NODE_ENV === "development" && debugProp === "verbose" && log("events", {
        events,
        attachHover,
        attachPress
      });
      var pressGesture = useEvents(events, viewProps, stateRef, staticConfig, isHOC, isInsideNativeMenu);
      if (process.env.NODE_ENV === "development" && time && time`hooks`, asChild) if (elementType = Slot, 0) var webStyleEvents, passEvents;else Object.assign(viewProps, {
        onPress,
        onLongPress
      });
      process.env.NODE_ENV === "development" && time && time`spaced-as-child`;
      var content;
      if (isPassthrough) content = /* @__PURE__ */React.createElement(BaseComponent, {
        style: {
          display: "contents"
        }
      }, propsIn.children);else {
        hooks.useChildren && (content = hooks.useChildren(elementType, content || children, viewProps));
        var isRenderPropString = typeof renderProp == "string";
        if (renderProp && !isRenderPropString) {
          var out = getCustomRender(renderProp, content || children, viewProps, componentState);
          out && (viewProps = out.viewProps, elementType = out.elementType);
        }
        content || (isRenderPropString && viewProps.render, content = /* @__PURE__ */React.createElement(elementType, viewProps, content || children)), process.env.NODE_ENV === "development" && time && time`use-children`;
      }
      var isCompositeComponent = !isHOC && Component && typeof Component != "string";
      content = wrapWithGestureDetector(content, pressGesture, stateRef, isHOC, isCompositeComponent);
      var ResetPresence = animationDriver?.ResetPresence,
        needsReset = !!(
        // not when passing down to child
        !asChild &&
        // not when passThrough
        splitStyles &&
        // not when HOC
        !isHOC && ResetPresence && willBeAnimated && (hasEnterStyle || presenceState)),
        hasEverReset = stateRef.current.hasEverResetPresence;
      needsReset && !hasEverReset && (stateRef.current.hasEverResetPresence = !0);
      var renderReset = needsReset || hasEverReset;
      if (renderReset && ResetPresence && (content = /* @__PURE__ */_jsx(ResetPresence, {
        disabled: !needsReset,
        children: content
      })), process.env.NODE_ENV === "development" && time && time`create-element`, ("focusWithinStyle" in propsIn || pseudos?.focusWithinStyle) && (content = /* @__PURE__ */_jsx(ComponentContext.Provider, {
        ...componentContext,
        setParentFocusState: setStateShallow,
        children: content
      })), "group" in props && (content = /* @__PURE__ */_jsx(GroupContext.Provider, {
        value: allGroupContexts,
        children: content
      })), process.env.NODE_ENV === "development" && time && time`group-context`, content = disableTheme || !splitStyles ? content : getThemedChildren(themeState, content, themeStateProps, !1, stateRef), process.env.NODE_ENV === "development" && time && time`themed-children`, overriddenContextProps && contextForOverride) {
        var Provider = contextForOverride.Provider;
        for (var key1 in styledContextValue) key1 in overriddenContextProps || (overriddenContextProps[key1] = styledContextValue[key1]);
        content = /* @__PURE__ */_jsx(Provider, {
          __disableMergeDefaultValues: !0,
          ...overriddenContextProps,
          children: content
        });
      }
      if (process.env.NODE_ENV === "development" && time && time`context-override`, process.env.NODE_ENV === "development" && time && time`style-tags`, process.env.NODE_ENV === "development" && debugProp && debugProp !== "profile") {
        var element1 = typeof elementType == "string" ? elementType : "Component",
          title = `render <${element1} /> (${internalID}) with props`;
        if (!isWeb || !isClient) {
          log(title), log("state: ", state), isDevTools && log("viewProps", viewProps), log("final styles:");
          for (var key2 in splitStylesStyle) log(key2, splitStylesStyle[key2]);
        } else {
          console.groupCollapsed(title);
          try {
            log("viewProps", viewProps), log("children", content), typeof window < "u" && log({
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
      return process.env.NODE_ENV === "development" && time && (time`rest`, globalThis.willPrint || (globalThis.willPrint = !0, setTimeout(function () {
        delete globalThis.willPrint, time.print(), time = null;
      }, 50))), content;
    });
  function notifyGroupSubscribers(groupContext, groupEmitter, pseudo) {
    if (!(!groupContext || !groupEmitter)) {
      var nextState = {
        ...groupContext.state,
        pseudo
      };
      groupEmitter.emit(nextState), groupContext.state = nextState;
    }
  }
  staticConfig.componentName && (component.displayName = staticConfig.componentName);
  var res = component;
  res = /* @__PURE__ */React.memo(res), res.staticConfig = staticConfig;
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
    var skipForwardRef = typeof Component2 == "function" && Component2.length === 1,
      out = skipForwardRef ? Component2 : /* @__PURE__ */React.forwardRef(Component2),
      extendedConfig = extendStyledConfig(options?.staticConfig);
    return out = options?.disableTheme ? out : themeable(out, extendedConfig, !0), (extendedConfig.memo || process.env.TAMAGUI_MEMOIZE_STYLEABLE) && (out = /* @__PURE__ */React.memo(out)), out.staticConfig = extendedConfig, out.styleable = styleable, out;
  }
  return res.styleable = styleable, res;
}
var fromPx = function (val) {
    return typeof val == "number" ? val : typeof val == "string" ? +val.replace("px", "") : 0;
  },
  getCustomRender = function (renderProp, content, viewProps, state) {
    if (typeof renderProp == "function") {
      var out = renderProp(viewProps, state);
      renderProp = getRenderElementForPlatform(out);
    }
    if (renderProp && (typeof renderProp > "u" ? "undefined" : _type_of(renderProp)) === "object" && /* @__PURE__ */React.isValidElement(renderProp)) {
      var renderElement = getRenderElementForPlatform(renderProp);
      if (renderElement) {
        var elementProps = renderProp.props,
          mergedProps = elementProps ? mergeRenderElementProps(elementProps, viewProps, content) : viewProps;
        return {
          elementType: renderProp.type,
          viewProps: mergedProps
        };
      }
    }
  };
function getRenderElementForPlatform(potential) {
  if (!isHTMLElement(potential)) return potential;
}
function isHTMLElement(el) {
  return typeof el.type == "string" && el.type[0] === el.type[0].toLowerCase();
}
export { componentSetStates, createComponent };
//# sourceMappingURL=createComponent.native.js.map
