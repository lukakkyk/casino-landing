import { isWeb } from "@tamagui/constants";
import { useConfiguration, useEvent, View as TamaguiView } from "@tamagui/core";
import * as React from "react";
const SPRING_CONFIG = {
    type: "spring",
    damping: 30,
    stiffness: 400,
    mass: 0.5
  },
  EXIT_DISTANCE = 200;
function animateSpring(element, fromX, fromY, toX, toY, config, onComplete) {
  const {
    damping = 30,
    stiffness = 400,
    mass = 0.5,
    initialVelocityX = 0,
    initialVelocityY = 0,
    fadeOut = !1
  } = config;
  let x = fromX,
    y = fromY,
    velocityX = initialVelocityX,
    velocityY = initialVelocityY,
    animationId = null;
  const targetX = toX,
    targetY = toY,
    totalDistance = Math.sqrt((toX - fromX) ** 2 + (toY - fromY) ** 2) || 1;
  function step() {
    const forceX = -stiffness * (x - targetX),
      forceY = -stiffness * (y - targetY),
      dampingForceX = -damping * velocityX,
      dampingForceY = -damping * velocityY,
      accelerationX = (forceX + dampingForceX) / mass,
      accelerationY = (forceY + dampingForceY) / mass;
    if (velocityX += accelerationX * 0.016, velocityY += accelerationY * 0.016, x += velocityX * 0.016, y += velocityY * 0.016, element.style.transform = `translate3d(${x}px, ${y}px, 0)`, fadeOut) {
      const distanceTraveled = Math.sqrt((x - fromX) ** 2 + (y - fromY) ** 2),
        progress = Math.min(distanceTraveled / totalDistance, 1);
      element.style.opacity = String(1 - progress);
    }
    const distanceX = Math.abs(x - targetX),
      distanceY = Math.abs(y - targetY),
      speed = Math.sqrt(velocityX * velocityX + velocityY * velocityY);
    if (distanceX < 0.5 && distanceY < 0.5 && speed < 0.5) {
      element.style.transform = `translate3d(${targetX}px, ${targetY}px, 0)`, fadeOut && (element.style.opacity = "0"), onComplete?.();
      return;
    }
    animationId = requestAnimationFrame(step);
  }
  return animationId = requestAnimationFrame(step), () => {
    animationId && cancelAnimationFrame(animationId);
  };
}
function useToastAnimations(options = {}) {
  const {
      onExitComplete,
      reducedMotion,
      swipeAxis = "horizontal"
    } = options,
    {
      animationDriver
    } = useConfiguration();
  if (!animationDriver) throw new Error("Toast requires an animation driver to be set in TamaguiProvider");
  const {
      useAnimatedNumber,
      useAnimatedNumberStyle,
      useAnimatedNumbersStyle
    } = animationDriver,
    AnimatedView = animationDriver.View ?? TamaguiView,
    dragRef = React.useRef(null),
    cancelAnimationRef = React.useRef(null),
    currentOffsetRef = React.useRef({
      x: 0,
      y: 0
    }),
    useDirectDom = isWeb,
    translateX = useAnimatedNumber(0),
    translateY = useAnimatedNumber(0),
    animatedStyleMulti = useAnimatedNumbersStyle ? useAnimatedNumbersStyle([translateX, translateY], (x, y) => {
      "worklet";

      return {
        transform: [{
          translateX: x
        }, {
          translateY: y
        }]
      };
    }) : null,
    animatedStyleFallback = useAnimatedNumberStyle(swipeAxis === "vertical" ? translateY : translateX, primary => {
      "worklet";

      const secondary = swipeAxis === "vertical" ? translateX.getValue() : translateY.getValue();
      return swipeAxis === "vertical" ? {
        transform: [{
          translateX: secondary
        }, {
          translateY: primary
        }]
      } : {
        transform: [{
          translateX: primary
        }, {
          translateY: secondary
        }]
      };
    }),
    animatedStyle = animatedStyleMulti ?? animatedStyleFallback,
    setDragOffset = useEvent((x, y) => {
      cancelAnimationRef.current?.(), cancelAnimationRef.current = null, currentOffsetRef.current = {
        x,
        y
      }, useDirectDom && dragRef.current ? (dragRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`, dragRef.current.style.opacity = "1") : (translateX.setValue(x, {
        type: "direct"
      }), translateY.setValue(y, {
        type: "direct"
      }));
    }),
    springBack = useEvent(onComplete => {
      if (cancelAnimationRef.current?.(), reducedMotion) {
        useDirectDom && dragRef.current ? dragRef.current.style.transform = "translate3d(0px, 0px, 0)" : (translateX.setValue(0, {
          type: "direct"
        }), translateY.setValue(0, {
          type: "direct"
        })), currentOffsetRef.current = {
          x: 0,
          y: 0
        }, onComplete?.();
        return;
      }
      if (useDirectDom && dragRef.current) {
        const {
          x,
          y
        } = currentOffsetRef.current;
        cancelAnimationRef.current = animateSpring(dragRef.current, x, y, 0, 0, SPRING_CONFIG, () => {
          currentOffsetRef.current = {
            x: 0,
            y: 0
          }, onComplete?.();
        });
      } else translateX.setValue(0, SPRING_CONFIG), translateY.setValue(0, SPRING_CONFIG, onComplete);
    }),
    animateOut = useEvent((direction, velocity, onComplete) => {
      cancelAnimationRef.current?.();
      const {
        x: curX,
        y: curY
      } = currentOffsetRef.current;
      let exitX = direction === "left" ? -EXIT_DISTANCE : direction === "right" ? EXIT_DISTANCE : 0,
        exitY = direction === "up" ? -EXIT_DISTANCE : direction === "down" ? EXIT_DISTANCE : 0;
      if (direction === "left" && curX < exitX ? exitX = curX - 50 : direction === "right" && curX > exitX && (exitX = curX + 50), direction === "up" && curY < exitY ? exitY = curY - 50 : direction === "down" && curY > exitY && (exitY = curY + 50), reducedMotion) {
        useDirectDom && dragRef.current ? dragRef.current.style.transform = `translate3d(${exitX}px, ${exitY}px, 0)` : (translateX.setValue(exitX, {
          type: "direct"
        }), translateY.setValue(exitY, {
          type: "direct"
        })), onComplete?.(), onExitComplete?.();
        return;
      }
      const velocityScale = (velocity ?? 0) * 500,
        initialVelocityX = direction === "left" ? -velocityScale : direction === "right" ? velocityScale : 0,
        initialVelocityY = direction === "up" ? -velocityScale : direction === "down" ? velocityScale : 0,
        exitConfig = {
          damping: 25,
          stiffness: 350,
          mass: 0.4,
          initialVelocityX,
          initialVelocityY,
          fadeOut: !0
        };
      if (useDirectDom && dragRef.current) {
        const {
          x,
          y
        } = currentOffsetRef.current;
        cancelAnimationRef.current = animateSpring(dragRef.current, x, y, exitX, exitY, exitConfig, () => {
          onComplete?.(), onExitComplete?.();
        });
      } else {
        const springConfig = {
          type: "spring",
          damping: 25,
          stiffness: 350,
          mass: 0.4
        };
        translateX.setValue(exitX, springConfig), translateY.setValue(exitY, springConfig, () => {
          onComplete?.(), onExitComplete?.();
        });
      }
    }),
    stop = useEvent(() => {
      cancelAnimationRef.current?.(), translateX.stop(), translateY.stop();
    });
  return React.useEffect(() => () => {
    cancelAnimationRef.current?.();
  }, []), {
    setDragOffset,
    springBack,
    animateOut,
    stop,
    animatedStyle,
    AnimatedView,
    dragRef
  };
}
export { useToastAnimations };
//# sourceMappingURL=useToastAnimations.mjs.map
