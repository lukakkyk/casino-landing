import { InteractionManager } from "@tamagui/react-native-web-internals";
import TouchHistoryMath from "../TouchHistoryMath/index.mjs";
const currentCentroidXOfTouchesChangedAfter = TouchHistoryMath.currentCentroidXOfTouchesChangedAfter,
  currentCentroidYOfTouchesChangedAfter = TouchHistoryMath.currentCentroidYOfTouchesChangedAfter,
  previousCentroidXOfTouchesChangedAfter = TouchHistoryMath.previousCentroidXOfTouchesChangedAfter,
  previousCentroidYOfTouchesChangedAfter = TouchHistoryMath.previousCentroidYOfTouchesChangedAfter,
  currentCentroidX = TouchHistoryMath.currentCentroidX,
  currentCentroidY = TouchHistoryMath.currentCentroidY,
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
            return interactionState.handle || (interactionState.handle = InteractionManager.createInteractionHandle()), interactionState.timeout && clearInteractionTimeout(interactionState), interactionState.shouldCancelClick = !0, gestureState.x0 = currentCentroidX(event.touchHistory), gestureState.y0 = currentCentroidY(event.touchHistory), gestureState.dx = 0, gestureState.dy = 0, config.onPanResponderGrant && config.onPanResponderGrant(event, gestureState), config.onShouldBlockNativeResponder == null ? !0 : config.onShouldBlockNativeResponder(event, gestureState);
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
  interactionState.handle && (InteractionManager.clearInteractionHandle(interactionState.handle), interactionState.handle = null), callback && callback(event, gestureState);
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
export { PanResponder, PanResponder_default as default };
//# sourceMappingURL=index.mjs.map
