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
var PanResponder_exports = {};
__export(PanResponder_exports, {
  PanResponder: () => PanResponder,
  default: () => PanResponder_default
});
module.exports = __toCommonJS(PanResponder_exports);
var import_react_native_web_internals = require("@tamagui/react-native-web-internals"),
  import_TouchHistoryMath = __toESM(require("../TouchHistoryMath/index.cjs"), 1);
const currentCentroidXOfTouchesChangedAfter = import_TouchHistoryMath.default.currentCentroidXOfTouchesChangedAfter,
  currentCentroidYOfTouchesChangedAfter = import_TouchHistoryMath.default.currentCentroidYOfTouchesChangedAfter,
  previousCentroidXOfTouchesChangedAfter = import_TouchHistoryMath.default.previousCentroidXOfTouchesChangedAfter,
  previousCentroidYOfTouchesChangedAfter = import_TouchHistoryMath.default.previousCentroidYOfTouchesChangedAfter,
  currentCentroidX = import_TouchHistoryMath.default.currentCentroidX,
  currentCentroidY = import_TouchHistoryMath.default.currentCentroidY,
  PanResponder = {
    _initializeGestureState(gestureState) {
      gestureState.moveX = 0, gestureState.moveY = 0, gestureState.x0 = 0, gestureState.y0 = 0, gestureState.dx = 0, gestureState.dy = 0, gestureState.vx = 0, gestureState.vy = 0, gestureState.numberActiveTouches = 0, gestureState._accountsForMovesUpTo = 0;
    },
    _updateGestureStateOnMove(gestureState, touchHistory) {
      gestureState.numberActiveTouches = touchHistory.numberActiveTouches, gestureState.moveX = currentCentroidXOfTouchesChangedAfter(touchHistory, gestureState._accountsForMovesUpTo), gestureState.moveY = currentCentroidYOfTouchesChangedAfter(touchHistory, gestureState._accountsForMovesUpTo);
      const movedAfter = gestureState._accountsForMovesUpTo,
        prevX = previousCentroidXOfTouchesChangedAfter(touchHistory, movedAfter),
        x = currentCentroidXOfTouchesChangedAfter(touchHistory, movedAfter),
        prevY = previousCentroidYOfTouchesChangedAfter(touchHistory, movedAfter),
        y = currentCentroidYOfTouchesChangedAfter(touchHistory, movedAfter),
        nextDX = gestureState.dx + (x - prevX),
        nextDY = gestureState.dy + (y - prevY),
        dt = touchHistory.mostRecentTimeStamp - gestureState._accountsForMovesUpTo;
      gestureState.vx = (nextDX - gestureState.dx) / dt, gestureState.vy = (nextDY - gestureState.dy) / dt, gestureState.dx = nextDX, gestureState.dy = nextDY, gestureState._accountsForMovesUpTo = touchHistory.mostRecentTimeStamp;
    },
    create(config) {
      const interactionState = {
          handle: null,
          shouldCancelClick: !1,
          timeout: null
        },
        gestureState = {
          stateID: Math.random(),
          moveX: 0,
          moveY: 0,
          x0: 0,
          y0: 0,
          dx: 0,
          dy: 0,
          vx: 0,
          vy: 0,
          numberActiveTouches: 0,
          _accountsForMovesUpTo: 0
        };
      return {
        panHandlers: {
          onStartShouldSetResponder(event) {
            return config.onStartShouldSetPanResponder == null ? !1 : config.onStartShouldSetPanResponder(event, gestureState);
          },
          onMoveShouldSetResponder(event) {
            return config.onMoveShouldSetPanResponder == null ? !1 : config.onMoveShouldSetPanResponder(event, gestureState);
          },
          onStartShouldSetResponderCapture(event) {
            return event.nativeEvent.touches.length === 1 && PanResponder._initializeGestureState(gestureState), gestureState.numberActiveTouches = event.touchHistory.numberActiveTouches, config.onStartShouldSetPanResponderCapture != null ? config.onStartShouldSetPanResponderCapture(event, gestureState) : !1;
          },
          onMoveShouldSetResponderCapture(event) {
            const touchHistory = event.touchHistory;
            return gestureState._accountsForMovesUpTo === touchHistory.mostRecentTimeStamp ? !1 : (PanResponder._updateGestureStateOnMove(gestureState, touchHistory), config.onMoveShouldSetPanResponderCapture ? config.onMoveShouldSetPanResponderCapture(event, gestureState) : !1);
          },
          onResponderGrant(event) {
            return interactionState.handle || (interactionState.handle = import_react_native_web_internals.InteractionManager.createInteractionHandle()), interactionState.timeout && clearInteractionTimeout(interactionState), interactionState.shouldCancelClick = !0, gestureState.x0 = currentCentroidX(event.touchHistory), gestureState.y0 = currentCentroidY(event.touchHistory), gestureState.dx = 0, gestureState.dy = 0, config.onPanResponderGrant && config.onPanResponderGrant(event, gestureState), config.onShouldBlockNativeResponder == null ? !0 : config.onShouldBlockNativeResponder(event, gestureState);
          },
          onResponderReject(event) {
            clearInteractionHandle(interactionState, config.onPanResponderReject, event, gestureState);
          },
          onResponderRelease(event) {
            clearInteractionHandle(interactionState, config.onPanResponderRelease, event, gestureState), setInteractionTimeout(interactionState), PanResponder._initializeGestureState(gestureState);
          },
          onResponderStart(event) {
            const touchHistory = event.touchHistory;
            gestureState.numberActiveTouches = touchHistory.numberActiveTouches, config.onPanResponderStart && config.onPanResponderStart(event, gestureState);
          },
          onResponderMove(event) {
            const touchHistory = event.touchHistory;
            gestureState._accountsForMovesUpTo !== touchHistory.mostRecentTimeStamp && (PanResponder._updateGestureStateOnMove(gestureState, touchHistory), config.onPanResponderMove && config.onPanResponderMove(event, gestureState));
          },
          onResponderEnd(event) {
            const touchHistory = event.touchHistory;
            gestureState.numberActiveTouches = touchHistory.numberActiveTouches, clearInteractionHandle(interactionState, config.onPanResponderEnd, event, gestureState);
          },
          onResponderTerminate(event) {
            clearInteractionHandle(interactionState, config.onPanResponderTerminate, event, gestureState), setInteractionTimeout(interactionState), PanResponder._initializeGestureState(gestureState);
          },
          onResponderTerminationRequest(event) {
            return config.onPanResponderTerminationRequest == null ? !0 : config.onPanResponderTerminationRequest(event, gestureState);
          },
          onClickCapture: event => {
            interactionState.shouldCancelClick === !0 && (event.stopPropagation(), event.preventDefault());
          }
        },
        getInteractionHandle() {
          return interactionState.handle;
        }
      };
    }
  };
function clearInteractionHandle(interactionState, callback, event, gestureState) {
  interactionState.handle && (import_react_native_web_internals.InteractionManager.clearInteractionHandle(interactionState.handle), interactionState.handle = null), callback && callback(event, gestureState);
}
function clearInteractionTimeout(interactionState) {
  clearTimeout(interactionState.timeout);
}
function setInteractionTimeout(interactionState) {
  interactionState.timeout = setTimeout(() => {
    interactionState.shouldCancelClick = !1;
  }, 250);
}
var PanResponder_default = PanResponder;