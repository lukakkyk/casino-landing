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
var useToastAnimations_exports = {};
__export(useToastAnimations_exports, {
  useToastAnimations: () => useToastAnimations
});
module.exports = __toCommonJS(useToastAnimations_exports);
var import_constants = require("@tamagui/constants"),
  import_core = require("@tamagui/core"),
  React = __toESM(require("react"), 1);
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
    } = (0, import_core.useConfiguration)();
  if (!animationDriver) throw new Error("Toast requires an animation driver to be set in TamaguiProvider");
  const {
      useAnimatedNumber,
      useAnimatedNumberStyle,
      useAnimatedNumbersStyle
    } = animationDriver,
    AnimatedView = animationDriver.View ?? import_core.View,
    dragRef = React.useRef(null),
    cancelAnimationRef = React.useRef(null),
    currentOffsetRef = React.useRef({
      x: 0,
      y: 0
    }),
    useDirectDom = import_constants.isWeb,
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
    setDragOffset = (0, import_core.useEvent)((x, y) => {
      cancelAnimationRef.current?.(), cancelAnimationRef.current = null, currentOffsetRef.current = {
        x,
        y
      }, useDirectDom && dragRef.current ? (dragRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`, dragRef.current.style.opacity = "1") : (translateX.setValue(x, {
        type: "direct"
      }), translateY.setValue(y, {
        type: "direct"
      }));
    }),
    springBack = (0, import_core.useEvent)(onComplete => {
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
    animateOut = (0, import_core.useEvent)((direction, velocity, onComplete) => {
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
    stop = (0, import_core.useEvent)(() => {
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