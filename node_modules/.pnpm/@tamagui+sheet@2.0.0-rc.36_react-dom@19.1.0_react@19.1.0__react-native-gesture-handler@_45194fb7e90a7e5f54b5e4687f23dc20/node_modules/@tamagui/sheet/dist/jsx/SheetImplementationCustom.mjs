import { AnimatePresence } from "@tamagui/animate-presence";
import { useComposedRefs } from "@tamagui/compose-refs";
import { isWeb, useIsomorphicLayoutEffect } from "@tamagui/constants";
import { LayoutMeasurementController, View as TamaguiView, useConfiguration, useDidFinishSSR, useEvent, useThemeName } from "@tamagui/core";
import { getSafeArea } from "@tamagui/native";
import { needsPortalRepropagation, Portal } from "@tamagui/portal";
import React, { useState } from "react";
import { Dimensions, PanResponder, View } from "react-native-web";
import { ParentSheetContext, SheetInsideSheetContext } from "./contexts.mjs";
import { GestureDetectorWrapper } from "./GestureDetectorWrapper.mjs";
import { GestureSheetProvider } from "./GestureSheetContext.mjs";
import { resisted } from "./helpers.mjs";
import { SheetProvider } from "./SheetContext.mjs";
import { useGestureHandlerPan } from "./useGestureHandlerPan.mjs";
import { useKeyboardControllerSheet } from "./useKeyboardControllerSheet.mjs";
import { useSheetOpenState } from "./useSheetOpenState.mjs";
import { useSheetProviderProps } from "./useSheetProviderProps.mjs";
import { jsx, jsxs } from "react/jsx-runtime";
const hiddenSize = 10000.1;
let _cachedSafeAreaTop;
function getSafeAreaTopInset() {
  return _cachedSafeAreaTop !== void 0 || (_cachedSafeAreaTop = getSafeArea().getInsets().top), _cachedSafeAreaTop;
}
let sheetHiddenStyleSheet = null;
const relativeDimensionTo = isWeb ? "window" : "screen",
  SheetImplementationCustom = React.forwardRef(function (props, forwardedRef) {
    const parentSheet = React.useContext(ParentSheetContext),
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
    const sheetRef = React.useRef(void 0),
      ref = useComposedRefs(forwardedRef, sheetRef, providerProps.contentRef),
      {
        animationDriver
      } = useConfiguration();
    if (!animationDriver) throw new Error("Sheet requires an animation driver to be set");
    const transitionConfig = (() => {
        if (transitionConfigProp) return transitionConfigProp;
        const [animationProp, animationPropConfig] = transition ? Array.isArray(transition) ? transition : [transition] : [];
        return animationProp && animationDriver.animations?.[animationProp] ? {
          ...animationDriver.animations[animationProp],
          ...animationPropConfig
        } : null;
      })(),
      [isShowingInnerSheet, setIsShowingInnerSheet] = React.useState(!1),
      shouldHideParentSheet = !isWeb && modal && isShowingInnerSheet && needsPortalRepropagation(),
      sheetInsideSheet = React.useContext(SheetInsideSheetContext),
      onInnerSheet = React.useCallback(hasChild => {
        setIsShowingInnerSheet(hasChild);
      }, []),
      stableFrameSize = React.useRef(frameSize);
    React.useEffect(() => {
      open && frameSize && (stableFrameSize.current = frameSize);
    }, [open, frameSize]);
    const effectiveFrameSize = open ? frameSize : stableFrameSize.current || frameSize,
      positions = React.useMemo(() => snapPoints.map(point => getYPositions(snapPointsMode, point, screenSize, effectiveFrameSize)), [screenSize, effectiveFrameSize, snapPoints, snapPointsMode]),
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
      setIsDragging = React.useCallback(val => {
        isDraggingRef.current = val, pauseKeyboardHandler.current = val, setIsDragging_(val), val || flushPendingHide();
      }, [pauseKeyboardHandler, flushPendingHide]),
      activePositionsRef = React.useRef(positions),
      activePositions = React.useMemo(() => {
        if (isDragging || isDraggingRef.current) return activePositionsRef.current;
        let result;
        if (!isKeyboardVisible || keyboardHeight <= 0) result = positions;else {
          const safeAreaTop = isWeb ? 0 : getSafeAreaTopInset();
          result = positions.map(p => screenSize && p >= screenSize ? p : Math.max(safeAreaTop, p - keyboardHeight));
        }
        return activePositionsRef.current = result, result;
      }, [positions, isKeyboardVisible, keyboardHeight, screenSize, isDragging]),
      {
        useAnimatedNumber,
        useAnimatedNumberStyle,
        useAnimatedNumberReaction
      } = animationDriver,
      AnimatedView = animationDriver.View ?? TamaguiView;
    useIsomorphicLayoutEffect(() => {
      if (sheetInsideSheet && open) return sheetInsideSheet(!0), () => {
        sheetInsideSheet(!1);
      };
    }, [sheetInsideSheet, open]);
    const nextParentContext = React.useMemo(() => ({
        zIndex
      }), [zIndex]),
      startPosition = useDidFinishSSR() && screenSize ? screenSize : hiddenSize,
      animatedNumber = useAnimatedNumber(startPosition),
      at = React.useRef(startPosition),
      hasntMeasured = at.current === hiddenSize,
      [disableAnimation, setDisableAnimation] = useState(hasntMeasured),
      skipAdaptAnimation = React.useRef(!1);
    controller?.skipNextAnimation && (skipAdaptAnimation.current = !0);
    const hasScrollView = React.useRef(!1),
      opacityFallbackTimer = React.useRef(null);
    useAnimatedNumberReaction({
      value: animatedNumber,
      hostRef: sheetRef
    }, React.useCallback(value => {
      at.current = value, scrollBridge.paneY = value;
      const minY = activePositions[0],
        wasAtTop = scrollBridge.isAtTop,
        nowAtTop = value <= minY + 5;
      wasAtTop !== nowAtTop && (scrollBridge.isAtTop = nowAtTop, nowAtTop ? (scrollBridge.y > 0 && (scrollBridge.forceScrollTo?.(0), scrollBridge.y = 0), scrollBridge.scrollLockY = void 0, scrollBridge.setScrollEnabled?.(!0)) : (scrollBridge.scrollLockY = 0, scrollBridge.setScrollEnabled?.(!1)));
    }, [animationDriver, activePositions]));
    function stopSpring() {
      animatedNumber.stop(), scrollBridge.onFinishAnimate && (scrollBridge.onFinishAnimate(), scrollBridge.onFinishAnimate = void 0);
    }
    const animateTo = useEvent((position2, animationOverride) => {
      if (frameSize === 0) return;
      let toValue = isHidden || position2 === -1 ? screenSize : activePositions[position2];
      if (at.current === toValue) return;
      at.current = toValue, stopSpring();
      const isOpenAnimation = position2 !== -1 && !isHidden;
      opacityFallbackTimer.current && (clearTimeout(opacityFallbackTimer.current), opacityFallbackTimer.current = null);
      const animationCompleteCallback = () => {
        opacityFallbackTimer.current && (clearTimeout(opacityFallbackTimer.current), opacityFallbackTimer.current = null), !isOpenAnimation && !openRef.current && setOpacity(0), onAnimationComplete?.({
          open: isOpenAnimation
        });
      };
      if (isOpenAnimation || (opacityFallbackTimer.current = setTimeout(() => {
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
    });
    useIsomorphicLayoutEffect(() => {
      if (hasntMeasured && screenSize && frameSize) {
        at.current = screenSize, animatedNumber.setValue(screenSize, {
          type: "timing",
          duration: 0
        }, () => {
          setTimeout(() => {
            setDisableAnimation(!1);
          }, 10);
        });
        return;
      }
      if (!disableAnimation && !(!frameSize || !screenSize || isHidden || hasntMeasured && !open) && (animateTo(position), position === -1 && (scrollBridge.scrollLock = !1, scrollBridge.scrollStartY = -1), open && position >= 0)) {
        const isTopPosition = position === 0;
        scrollBridge.isAtTop = isTopPosition, isTopPosition ? (scrollBridge.scrollLockY = void 0, scrollBridge.setScrollEnabled?.(!0)) : (scrollBridge.scrollLockY = 0, scrollBridge.setScrollEnabled?.(!1));
      }
    }, [hasntMeasured, disableAnimation, isHidden, frameSize, screenSize, open, position]);
    const disableDrag = props.disableDrag ?? controller?.disableDrag,
      themeName = useThemeName(),
      [blockPan, setBlockPan] = React.useState(!1),
      panResponder = React.useMemo(() => {
        if (disableDrag || !frameSize || isShowingInnerSheet) return;
        const minY = positions[0];
        scrollBridge.paneMinY = minY;
        let startY = at.current;
        function setPanning(val) {
          setIsDragging(val), sheetHiddenStyleSheet || (sheetHiddenStyleSheet = document.createElement("style"), typeof document.head < "u" && document.head.appendChild(sheetHiddenStyleSheet)), val ? sheetHiddenStyleSheet.innerText = ":root * { user-select: none !important; -webkit-user-select: none !important; }" : sheetHiddenStyleSheet.innerText = "";
        }
        const release = ({
            vy
          }) => {
            if (scrollBridge.setParentDragging(!1), scrollBridge.scrollLock) return;
            isExternalDrag = !1, previouslyScrolling = !1, setPanning(!1);
            const end = at.current + frameSize * vy * 0.2;
            let closestPoint = 0,
              dist = Number.POSITIVE_INFINITY;
            for (let i = 0; i < positions.length; i++) {
              const position2 = positions[i],
                curDist = end > position2 ? end - position2 : position2 - end;
              curDist < dist && (dist = curDist, closestPoint = i);
            }
            setPosition(closestPoint), animateTo(closestPoint);
          },
          finish = (_e, state2) => {
            release({
              vy: state2.vy,
              dragAt: state2.dy
            });
          };
        let previouslyScrolling = !1;
        const onMoveShouldSet = (e, {
            dy
          }) => {
            function getShouldSet() {
              if (e.target === providerProps.handleRef.current) return !0;
              if (scrollBridge.hasScrollableContent === !0) {
                if (scrollBridge.scrollLock) return !1;
                const isScrolled = scrollBridge.y !== 0,
                  isDraggingUp = dy < 0,
                  isNearTop = scrollBridge.paneY - 5 <= scrollBridge.paneMinY;
                if (isScrolled) return previouslyScrolling = !0, !1;
                if (isNearTop && hasScrollView.current && isDraggingUp) return !1;
              }
              return Math.abs(dy) > 10;
            }
            const granted = getShouldSet();
            return granted && scrollBridge.setParentDragging(!0), granted;
          },
          grant = () => {
            setPanning(!0), stopSpring(), startY = at.current;
          };
        let isExternalDrag = !1;
        return scrollBridge.drag = dy => {
          isExternalDrag || (isExternalDrag = !0, grant());
          const to = dy + startY;
          animatedNumber.setValue(resisted(to, minY), {
            type: "direct"
          });
        }, scrollBridge.release = release, scrollBridge.snapToPosition = positionIndex => {
          isExternalDrag = !1, previouslyScrolling = !1, setPanning(!1), setPosition(positionIndex), animateTo(positionIndex);
        }, PanResponder.create({
          onMoveShouldSetPanResponder: onMoveShouldSet,
          onPanResponderGrant: grant,
          onPanResponderMove: (_e, {
            dy
          }) => {
            const toFull = dy + startY,
              to = resisted(toFull, minY);
            to <= minY ? scrollBridge.setParentDragging(!1) : scrollBridge.setParentDragging(!0), animatedNumber.setValue(to, {
              type: "direct"
            });
          },
          onPanResponderEnd: finish,
          onPanResponderTerminate: finish,
          onPanResponderRelease: finish
        });
      }, [disableDrag, isShowingInnerSheet, animateTo, frameSize, positions, setPosition]);
    React.useEffect(() => {
      isDragging || isHidden || !open || disableAnimation || !frameSize || !screenSize || animateTo(position, {
        type: "timing",
        duration: 250
      });
    }, [isKeyboardVisible, keyboardHeight]);
    const wasDragging = React.useRef(!1);
    React.useEffect(() => {
      if (isDragging) {
        wasDragging.current = !0;
        return;
      }
      wasDragging.current && (wasDragging.current = !1, !(!frameSize || !screenSize || isHidden || !open) && animateTo(position));
    }, [isDragging]), React.useEffect(() => {
      !open && isKeyboardVisible && dismissKeyboard();
    }, [open]);
    const {
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
        getCurrentPosition: () => at.current,
        resisted,
        disableDrag,
        isShowingInnerSheet,
        setAnimatedPosition: val => {
          at.current = val, animatedNumber.setValue(val, {
            type: "direct"
          });
        },
        pauseKeyboardHandler
      }),
      handleAnimationViewLayout = useEvent(e => {
        if (!open && stableFrameSize.current !== 0) return;
        const layoutHeight = e.nativeEvent?.layout.height,
          next = modal ? Math.min(layoutHeight, Dimensions.get(relativeDimensionTo).height) : layoutHeight;
        next && setFrameSize(next);
      }),
      handleMaxContentViewLayout = React.useCallback(e => {
        const next = Math.min(e.nativeEvent?.layout.height, Dimensions.get(relativeDimensionTo).height);
        next && setMaxContentSize(next);
      }, []),
      getAnimatedNumberStyle = React.useCallback(val => {
        "worklet";

        return {
          transform: [{
            translateY: frameSize === 0 ? hiddenSize : val
          }]
        };
      }, [frameSize]),
      animatedStyle = useAnimatedNumberStyle(animatedNumber, getAnimatedNumberStyle),
      [opacity, setOpacity] = React.useState(open ? 1 : 0);
    open && opacity === 0 && (setOpacity(1), opacityFallbackTimer.current && (clearTimeout(opacityFallbackTimer.current), opacityFallbackTimer.current = null));
    const forcedContentHeight = hasFit ? void 0 : snapPointsMode === "percent" ?
      // Use dvh for modal (viewport-relative), % for inline (container-relative)
      `${maxSnapPoint}${isWeb && modal ? "dvh" : "%"}` : maxSnapPoint,
      setHasScrollView = React.useCallback(val => {
        hasScrollView.current = val;
      }, []);
    let contents = /* @__PURE__ */jsx(LayoutMeasurementController, {
      disable: !open,
      children: /* @__PURE__ */jsx(ParentSheetContext.Provider, {
        value: nextParentContext,
        children: /* @__PURE__ */jsx(SheetProvider, {
          ...providerProps,
          setHasScrollView,
          children: /* @__PURE__ */jsxs(GestureSheetProvider, {
            isDragging,
            blockPan,
            setBlockPan,
            panGesture,
            panGestureRef,
            children: [/* @__PURE__ */jsx(AnimatePresence, {
              custom: {
                open
              },
              children: shouldHideParentSheet || !open ? null : overlayComponent
            }), snapPointsMode !== "percent" && /* @__PURE__ */jsx(View, {
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
            }), /* @__PURE__ */jsx(AnimatedView, {
              ref,
              onLayout: handleAnimationViewLayout,
              transition: isDragging || disableAnimation ? null : transition,
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
              children: gestureHandlerEnabled && panGesture ? /* @__PURE__ */jsx(GestureDetectorWrapper, {
                gesture: panGesture,
                style: {
                  flex: 1
                },
                children: props.children
              }) : /* @__PURE__ */jsx(View, {
                ...panResponder?.panHandlers,
                style: {
                  flex: 1,
                  width: "100%",
                  height: "100%"
                },
                children: props.children
              })
            })]
          })
        })
      })
    });
    const shouldMountChildren = unmountChildrenWhenHidden ? !!opacity : !0;
    if (modal) {
      const modalContents = /* @__PURE__ */jsx(Portal, {
        stackZIndex: zIndex,
        ...portalProps,
        children: shouldMountChildren && /* @__PURE__ */jsx(ContainerComponent, {
          children: contents
        })
      });
      return isWeb ? modalContents : /* @__PURE__ */jsx(SheetInsideSheetContext.Provider, {
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
      const pct2 = Math.min(100, Math.max(0, Number(point.slice(0, -1)))) / 100;
      return Number.isNaN(pct2) ? (console.warn("Invalid snapPoint percentage string"), 0) : Math.round(screenSize - pct2 * screenSize);
    }
    return console.warn("Invalid snapPoint unknown value"), 0;
  }
  if (mode === "fit") return point === 0 ? screenSize : screenSize - Math.min(screenSize, frameSize);
  if (mode === "constant" && typeof point == "number") return screenSize - Math.min(screenSize, Math.max(0, point));
  const pct = Math.min(100, Math.max(0, Number(point))) / 100;
  return Number.isNaN(pct) ? (console.warn("Invalid snapPoint percentage"), 0) : Math.round(screenSize - pct * screenSize);
}
export { SheetImplementationCustom };
//# sourceMappingURL=SheetImplementationCustom.mjs.map
