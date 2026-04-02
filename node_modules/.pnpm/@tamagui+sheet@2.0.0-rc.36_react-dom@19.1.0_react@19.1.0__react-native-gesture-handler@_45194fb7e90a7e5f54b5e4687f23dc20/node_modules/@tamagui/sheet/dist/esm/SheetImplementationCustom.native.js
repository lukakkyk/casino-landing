import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ProvideAdaptContext, useAdaptContext } from "@tamagui/adapt";
import { AnimatePresence } from "@tamagui/animate-presence";
import { useComposedRefs } from "@tamagui/compose-refs";
import { isWeb, useIsomorphicLayoutEffect } from "@tamagui/constants";
import { LayoutMeasurementController, View as TamaguiView, useConfiguration, useDidFinishSSR, useEvent, useThemeName } from "@tamagui/core";
import { getSafeArea } from "@tamagui/native";
import { needsPortalRepropagation, Portal } from "@tamagui/portal";
import React, { useState } from "react";
import { Dimensions, PanResponder, View } from "react-native";
import { ParentSheetContext, SheetInsideSheetContext } from "./contexts.native.js";
import { GestureDetectorWrapper } from "./GestureDetectorWrapper.native.js";
import { GestureSheetProvider } from "./GestureSheetContext.native.js";
import { resisted } from "./helpers.native.js";
import { SheetProvider } from "./SheetContext.native.js";
import { useGestureHandlerPan } from "./useGestureHandlerPan.native.js";
import { useKeyboardControllerSheet } from "./useKeyboardControllerSheet.native.js";
import { useSheetOpenState } from "./useSheetOpenState.native.js";
import { useSheetProviderProps } from "./useSheetProviderProps.native.js";
var hiddenSize = 10000.1,
  _cachedSafeAreaTop;
function getSafeAreaTopInset() {
  return _cachedSafeAreaTop !== void 0 || (_cachedSafeAreaTop = getSafeArea().getInsets().top), _cachedSafeAreaTop;
}
var relativeDimensionTo = isWeb ? "window" : "screen",
  SheetImplementationCustom = /* @__PURE__ */React.forwardRef(function (props, forwardedRef) {
    var parentSheet = React.useContext(ParentSheetContext),
      {
        transition,
        transitionConfig: transitionConfigProp,
        modal = !1,
        zIndex = parentSheet.zIndex + 1,
        moveOnKeyboardChange = !1,
        unmountChildrenWhenHidden = !1,
        portalProps,
        containerComponent: ContainerComponent = React.Fragment,
        onAnimationComplete
      } = props,
      state = useSheetOpenState(props),
      [overlayComponent, setOverlayComponent] = React.useState(null),
      providerProps = useSheetProviderProps(props, state, {
        onOverlayComponent: setOverlayComponent
      }),
      {
        frameSize,
        setFrameSize,
        snapPoints,
        snapPointsMode,
        hasFit,
        position,
        setPosition,
        scrollBridge,
        screenSize,
        setMaxContentSize,
        maxSnapPoint
      } = providerProps,
      {
        open,
        controller,
        isHidden
      } = state,
      openRef = React.useRef(open);
    openRef.current = open;
    var sheetRef = React.useRef(void 0),
      ref = useComposedRefs(forwardedRef, sheetRef, providerProps.contentRef),
      {
        animationDriver
      } = useConfiguration();
    if (!animationDriver) throw new Error("Sheet requires an animation driver to be set");
    var transitionConfig = function () {
        var _animationDriver_animations;
        if (transitionConfigProp) return transitionConfigProp;
        var [animationProp, animationPropConfig] = transition ? Array.isArray(transition) ? transition : [transition] : [];
        return animationProp && !((_animationDriver_animations = animationDriver.animations) === null || _animationDriver_animations === void 0) && _animationDriver_animations[animationProp] ? {
          ...animationDriver.animations[animationProp],
          ...animationPropConfig
        } : null;
      }(),
      [isShowingInnerSheet, setIsShowingInnerSheet] = React.useState(!1),
      shouldHideParentSheet = !isWeb && modal && isShowingInnerSheet && needsPortalRepropagation(),
      sheetInsideSheet = React.useContext(SheetInsideSheetContext),
      onInnerSheet = React.useCallback(function (hasChild) {
        setIsShowingInnerSheet(hasChild);
      }, []),
      stableFrameSize = React.useRef(frameSize);
    React.useEffect(function () {
      open && frameSize && (stableFrameSize.current = frameSize);
    }, [open, frameSize]);
    var effectiveFrameSize = open ? frameSize : stableFrameSize.current || frameSize,
      positions = React.useMemo(function () {
        return snapPoints.map(function (point) {
          return getYPositions(snapPointsMode, point, screenSize, effectiveFrameSize);
        });
      }, [screenSize, effectiveFrameSize, snapPoints, snapPointsMode]),
      {
        keyboardHeight,
        isKeyboardVisible,
        dismissKeyboard,
        pauseKeyboardHandler,
        flushPendingHide
      } = useKeyboardControllerSheet({
        enabled: !isWeb && !!moveOnKeyboardChange
      }),
      [isDragging, setIsDragging_] = React.useState(!1),
      isDraggingRef = React.useRef(!1),
      setIsDragging = React.useCallback(function (val) {
        isDraggingRef.current = val, pauseKeyboardHandler.current = val, setIsDragging_(val), val || flushPendingHide();
      }, [pauseKeyboardHandler, flushPendingHide]),
      activePositionsRef = React.useRef(positions),
      activePositions = React.useMemo(function () {
        if (isDragging || isDraggingRef.current) return activePositionsRef.current;
        var result;
        if (!isKeyboardVisible || keyboardHeight <= 0) result = positions;else {
          var safeAreaTop = isWeb ? 0 : getSafeAreaTopInset();
          result = positions.map(function (p) {
            return screenSize && p >= screenSize ? p : Math.max(safeAreaTop, p - keyboardHeight);
          });
        }
        return activePositionsRef.current = result, result;
      }, [positions, isKeyboardVisible, keyboardHeight, screenSize, isDragging]),
      {
        useAnimatedNumber,
        useAnimatedNumberStyle,
        useAnimatedNumberReaction
      } = animationDriver,
      _animationDriver_View,
      AnimatedView = (_animationDriver_View = animationDriver.View) !== null && _animationDriver_View !== void 0 ? _animationDriver_View : TamaguiView;
    useIsomorphicLayoutEffect(function () {
      if (sheetInsideSheet && open) return sheetInsideSheet(!0), function () {
        sheetInsideSheet(!1);
      };
    }, [sheetInsideSheet, open]);
    var nextParentContext = React.useMemo(function () {
        return {
          zIndex
        };
      }, [zIndex]),
      isMounted = useDidFinishSSR(),
      startPosition = isMounted && screenSize ? screenSize : hiddenSize,
      animatedNumber = useAnimatedNumber(startPosition),
      at = React.useRef(startPosition),
      hasntMeasured = at.current === hiddenSize,
      [disableAnimation, setDisableAnimation] = useState(hasntMeasured),
      skipAdaptAnimation = React.useRef(!1);
    controller?.skipNextAnimation && (skipAdaptAnimation.current = !0);
    var hasScrollView = React.useRef(!1),
      opacityFallbackTimer = React.useRef(null);
    useAnimatedNumberReaction({
      value: animatedNumber,
      hostRef: sheetRef
    }, React.useCallback(function (value) {
      at.current = value, scrollBridge.paneY = value;
      var minY = activePositions[0],
        wasAtTop = scrollBridge.isAtTop,
        nowAtTop = value <= minY + 5;
      if (wasAtTop !== nowAtTop) if (scrollBridge.isAtTop = nowAtTop, nowAtTop) {
        var _scrollBridge_setScrollEnabled;
        if (scrollBridge.y > 0) {
          var _scrollBridge_forceScrollTo;
          (_scrollBridge_forceScrollTo = scrollBridge.forceScrollTo) === null || _scrollBridge_forceScrollTo === void 0 || _scrollBridge_forceScrollTo.call(scrollBridge, 0), scrollBridge.y = 0;
        }
        scrollBridge.scrollLockY = void 0, (_scrollBridge_setScrollEnabled = scrollBridge.setScrollEnabled) === null || _scrollBridge_setScrollEnabled === void 0 || _scrollBridge_setScrollEnabled.call(scrollBridge, !0);
      } else {
        var _scrollBridge_setScrollEnabled1;
        scrollBridge.scrollLockY = 0, (_scrollBridge_setScrollEnabled1 = scrollBridge.setScrollEnabled) === null || _scrollBridge_setScrollEnabled1 === void 0 || _scrollBridge_setScrollEnabled1.call(scrollBridge, !1);
      }
    }, [animationDriver, activePositions]));
    function stopSpring() {
      animatedNumber.stop(), scrollBridge.onFinishAnimate && (scrollBridge.onFinishAnimate(), scrollBridge.onFinishAnimate = void 0);
    }
    var animateTo = useEvent(function (position2, animationOverride) {
      if (frameSize !== 0) {
        var toValue = isHidden || position2 === -1 ? screenSize : activePositions[position2];
        if (at.current !== toValue) {
          at.current = toValue, stopSpring();
          var isOpenAnimation = position2 !== -1 && !isHidden;
          opacityFallbackTimer.current && (clearTimeout(opacityFallbackTimer.current), opacityFallbackTimer.current = null);
          var animationCompleteCallback = function () {
            opacityFallbackTimer.current && (clearTimeout(opacityFallbackTimer.current), opacityFallbackTimer.current = null), !isOpenAnimation && !openRef.current && setOpacity(0), onAnimationComplete?.({
              open: isOpenAnimation
            });
          };
          if (isOpenAnimation || (opacityFallbackTimer.current = setTimeout(function () {
            opacityFallbackTimer.current = null, openRef.current || setOpacity(0);
          }, 1e3)), skipAdaptAnimation.current) {
            skipAdaptAnimation.current = !1, animatedNumber.setValue(toValue, {
              type: "timing",
              duration: 0
            }, animationCompleteCallback);
            return;
          }
          animatedNumber.setValue(toValue, animationOverride || {
            type: "spring",
            ...transitionConfig
          }, animationCompleteCallback);
        }
      }
    });
    useIsomorphicLayoutEffect(function () {
      if (hasntMeasured && screenSize && frameSize) {
        at.current = screenSize, animatedNumber.setValue(screenSize, {
          type: "timing",
          duration: 0
        }, function () {
          setTimeout(function () {
            setDisableAnimation(!1);
          }, 10);
        });
        return;
      }
      if (!disableAnimation && !(!frameSize || !screenSize || isHidden || hasntMeasured && !open) && (animateTo(position), position === -1 && (scrollBridge.scrollLock = !1, scrollBridge.scrollStartY = -1), open && position >= 0)) {
        var isTopPosition = position === 0;
        if (scrollBridge.isAtTop = isTopPosition, isTopPosition) {
          var _scrollBridge_setScrollEnabled;
          scrollBridge.scrollLockY = void 0, (_scrollBridge_setScrollEnabled = scrollBridge.setScrollEnabled) === null || _scrollBridge_setScrollEnabled === void 0 || _scrollBridge_setScrollEnabled.call(scrollBridge, !0);
        } else {
          var _scrollBridge_setScrollEnabled1;
          scrollBridge.scrollLockY = 0, (_scrollBridge_setScrollEnabled1 = scrollBridge.setScrollEnabled) === null || _scrollBridge_setScrollEnabled1 === void 0 || _scrollBridge_setScrollEnabled1.call(scrollBridge, !1);
        }
      }
    }, [hasntMeasured, disableAnimation, isHidden, frameSize, screenSize, open, position]);
    var _props_disableDrag,
      disableDrag = (_props_disableDrag = props.disableDrag) !== null && _props_disableDrag !== void 0 ? _props_disableDrag : controller?.disableDrag,
      themeName = useThemeName(),
      [blockPan, setBlockPan] = React.useState(!1),
      panResponder = React.useMemo(function () {
        if (disableDrag || !frameSize || isShowingInnerSheet) return;
        var minY = positions[0];
        scrollBridge.paneMinY = minY;
        var startY = at.current;
        function setPanning(val) {
          setIsDragging(val);
        }
        var release = function (param) {
            var {
              vy
            } = param;
            if (scrollBridge.setParentDragging(!1), !scrollBridge.scrollLock) {
              isExternalDrag = !1, previouslyScrolling = !1, setPanning(!1);
              for (var currentPos = at.current, end = currentPos + frameSize * vy * 0.2, closestPoint = 0, dist = Number.POSITIVE_INFINITY, i = 0; i < positions.length; i++) {
                var position2 = positions[i],
                  curDist = end > position2 ? end - position2 : position2 - end;
                curDist < dist && (dist = curDist, closestPoint = i);
              }
              setPosition(closestPoint), animateTo(closestPoint);
            }
          },
          finish = function (_e, state2) {
            release({
              vy: state2.vy,
              dragAt: state2.dy
            });
          },
          previouslyScrolling = !1,
          onMoveShouldSet = function (e, param) {
            var {
              dy
            } = param;
            function getShouldSet() {
              if (e.target === providerProps.handleRef.current) return !0;
              if (scrollBridge.hasScrollableContent === !0) {
                if (scrollBridge.scrollLock) return !1;
                var isScrolled = scrollBridge.y !== 0,
                  isDraggingUp = dy < 0,
                  isNearTop = scrollBridge.paneY - 5 <= scrollBridge.paneMinY;
                if (isScrolled) return previouslyScrolling = !0, !1;
                if (isNearTop && hasScrollView.current && isDraggingUp) return !1;
              }
              return Math.abs(dy) > 10;
            }
            var granted = getShouldSet();
            return granted && scrollBridge.setParentDragging(!0), granted;
          },
          grant = function () {
            setPanning(!0), stopSpring(), startY = at.current;
          },
          isExternalDrag = !1;
        return scrollBridge.drag = function (dy) {
          isExternalDrag || (isExternalDrag = !0, grant());
          var to = dy + startY;
          animatedNumber.setValue(resisted(to, minY), {
            type: "direct"
          });
        }, scrollBridge.release = release, scrollBridge.snapToPosition = function (positionIndex) {
          isExternalDrag = !1, previouslyScrolling = !1, setPanning(!1), setPosition(positionIndex), animateTo(positionIndex);
        }, PanResponder.create({
          onMoveShouldSetPanResponder: onMoveShouldSet,
          onPanResponderGrant: grant,
          onPanResponderMove: function (_e, param) {
            var {
                dy
              } = param,
              toFull = dy + startY,
              to = resisted(toFull, minY),
              isAtTop = to <= minY;
            isAtTop ? scrollBridge.setParentDragging(!1) : scrollBridge.setParentDragging(!0), animatedNumber.setValue(to, {
              type: "direct"
            });
          },
          onPanResponderEnd: finish,
          onPanResponderTerminate: finish,
          onPanResponderRelease: finish
        });
      }, [disableDrag, isShowingInnerSheet, animateTo, frameSize, positions, setPosition]);
    React.useEffect(function () {
      isDragging || isHidden || !open || disableAnimation || !frameSize || !screenSize || animateTo(position, {
        type: "timing",
        duration: 250
      });
    }, [isKeyboardVisible, keyboardHeight]);
    var wasDragging = React.useRef(!1);
    React.useEffect(function () {
      if (isDragging) {
        wasDragging.current = !0;
        return;
      }
      wasDragging.current && (wasDragging.current = !1, !(!frameSize || !screenSize || isHidden || !open) && animateTo(position));
    }, [isDragging]), React.useEffect(function () {
      !open && isKeyboardVisible && dismissKeyboard();
    }, [open]);
    var {
        panGesture,
        panGestureRef,
        gestureHandlerEnabled
      } = useGestureHandlerPan({
        positions: activePositions,
        frameSize,
        setPosition,
        animateTo,
        stopSpring,
        scrollBridge,
        setIsDragging,
        getCurrentPosition: function () {
          return at.current;
        },
        resisted,
        disableDrag,
        isShowingInnerSheet,
        setAnimatedPosition: function (val) {
          at.current = val, animatedNumber.setValue(val, {
            type: "direct"
          });
        },
        pauseKeyboardHandler
      }),
      handleAnimationViewLayout = useEvent(function (e) {
        var _e_nativeEvent;
        if (!(!open && stableFrameSize.current !== 0)) {
          var layoutHeight = (_e_nativeEvent = e.nativeEvent) === null || _e_nativeEvent === void 0 ? void 0 : _e_nativeEvent.layout.height,
            next = modal ? Math.min(layoutHeight, Dimensions.get(relativeDimensionTo).height) : layoutHeight;
          next && setFrameSize(next);
        }
      }),
      handleMaxContentViewLayout = React.useCallback(function (e) {
        var _e_nativeEvent,
          next = Math.min((_e_nativeEvent = e.nativeEvent) === null || _e_nativeEvent === void 0 ? void 0 : _e_nativeEvent.layout.height, Dimensions.get(relativeDimensionTo).height);
        next && setMaxContentSize(next);
      }, []),
      getAnimatedNumberStyle = React.useCallback(function (val) {
        "worklet";

        var translateY = frameSize === 0 ? hiddenSize : val;
        return {
          transform: [{
            translateY
          }]
        };
      }, [frameSize]),
      animatedStyle = useAnimatedNumberStyle(animatedNumber, getAnimatedNumberStyle),
      [opacity, setOpacity] = React.useState(open ? 1 : 0);
    open && opacity === 0 && (setOpacity(1), opacityFallbackTimer.current && (clearTimeout(opacityFallbackTimer.current), opacityFallbackTimer.current = null));
    var forcedContentHeight = hasFit ? void 0 : snapPointsMode === "percent" ?
      // Use dvh for modal (viewport-relative), % for inline (container-relative)
      `${maxSnapPoint}${isWeb && modal ? "dvh" : "%"}` : maxSnapPoint,
      setHasScrollView = React.useCallback(function (val) {
        hasScrollView.current = val;
      }, []),
      contents = /* @__PURE__ */_jsx(LayoutMeasurementController, {
        disable: !open,
        children: /* @__PURE__ */_jsx(ParentSheetContext.Provider, {
          value: nextParentContext,
          children: /* @__PURE__ */_jsx(SheetProvider, {
            ...providerProps,
            setHasScrollView,
            children: /* @__PURE__ */_jsxs(GestureSheetProvider, {
              isDragging,
              blockPan,
              setBlockPan,
              panGesture,
              panGestureRef,
              children: [/* @__PURE__ */_jsx(AnimatePresence, {
                custom: {
                  open
                },
                children: shouldHideParentSheet || !open ? null : overlayComponent
              }), snapPointsMode !== "percent" && /* @__PURE__ */_jsx(View, {
                style: {
                  opacity: 0,
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  pointerEvents: "none"
                },
                onLayout: handleMaxContentViewLayout
              }), /* @__PURE__ */_jsx(AnimatedView, {
                ref,
                onLayout: handleAnimationViewLayout,
                // @ts-ignore for CSS driver this is necessary to attach the transition
                // also motion driver at least though i suspect all drivers?
                transition: isDragging || disableAnimation ? null : transition,
                // @ts-ignore
                disableClassName: !0,
                style: [{
                  position: "absolute",
                  zIndex,
                  width: "100%",
                  height: forcedContentHeight,
                  minHeight: forcedContentHeight,
                  opacity: shouldHideParentSheet ? 0 : opacity,
                  ...((shouldHideParentSheet || !open) && {
                    pointerEvents: "none"
                  })
                }, animatedStyle],
                children: (/* wrap children with plain RN View for panResponder - tamagui views no longer handle responder events on web */
                gestureHandlerEnabled && panGesture ? /* @__PURE__ */_jsx(GestureDetectorWrapper, {
                  gesture: panGesture,
                  style: {
                    flex: 1
                  },
                  children: props.children
                }) : /* @__PURE__ */_jsx(View, {
                  ...panResponder?.panHandlers,
                  style: {
                    flex: 1,
                    width: "100%",
                    height: "100%"
                  },
                  children: props.children
                }))
              })]
            })
          })
        })
      });
    if (needsPortalRepropagation()) {
      var adaptContext = useAdaptContext();
      contents = /* @__PURE__ */_jsx(ProvideAdaptContext, {
        ...adaptContext,
        children: (/* @ts-ignore */
        contents)
      });
    }
    var shouldMountChildren = unmountChildrenWhenHidden ? !!opacity : !0;
    if (modal) {
      var modalContents = /* @__PURE__ */_jsx(Portal, {
        stackZIndex: zIndex,
        ...portalProps,
        children: shouldMountChildren && /* @__PURE__ */_jsx(ContainerComponent, {
          children: contents
        })
      });
      return isWeb ? modalContents : /* @__PURE__ */_jsx(SheetInsideSheetContext.Provider, {
        value: onInnerSheet,
        children: modalContents
      });
    }
    return contents;
  });
function getYPositions(mode, point, screenSize, frameSize) {
  if (!screenSize || !frameSize) return 0;
  if (mode === "mixed") {
    if (typeof point == "number") return screenSize - Math.min(screenSize, Math.max(0, point));
    if (point === "fit") return screenSize - Math.min(screenSize, frameSize);
    if (point.endsWith("%")) {
      var pct = Math.min(100, Math.max(0, Number(point.slice(0, -1)))) / 100;
      return Number.isNaN(pct) ? (console.warn("Invalid snapPoint percentage string"), 0) : Math.round(screenSize - pct * screenSize);
    }
    return console.warn("Invalid snapPoint unknown value"), 0;
  }
  if (mode === "fit") return point === 0 ? screenSize : screenSize - Math.min(screenSize, frameSize);
  if (mode === "constant" && typeof point == "number") return screenSize - Math.min(screenSize, Math.max(0, point));
  var pct1 = Math.min(100, Math.max(0, Number(point))) / 100;
  return Number.isNaN(pct1) ? (console.warn("Invalid snapPoint percentage"), 0) : Math.round(screenSize - pct1 * screenSize);
}
export { SheetImplementationCustom };
//# sourceMappingURL=SheetImplementationCustom.native.js.map
