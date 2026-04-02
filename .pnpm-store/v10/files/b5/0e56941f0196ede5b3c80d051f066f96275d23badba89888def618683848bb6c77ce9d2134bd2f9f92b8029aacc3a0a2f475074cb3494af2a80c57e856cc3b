import * as React from "react";
var DelayGroupContext = React.createContext({
  currentId: null,
  setCurrentId: function () {},
  delay: 0,
  timeoutMs: 0,
  initialDelay: 0
});
function useDelayGroupContext() {
  return React.useContext(DelayGroupContext);
}
function FloatingDelayGroup(param) {
  var {
      children,
      delay,
      timeoutMs = 0
    } = param,
    [currentId, setCurrentIdRaw] = React.useState(null),
    timeoutRef = React.useRef(void 0),
    setCurrentId = React.useCallback(function (id) {
      clearTimeout(timeoutRef.current), id == null && timeoutMs > 0 ? timeoutRef.current = setTimeout(function () {
        setCurrentIdRaw(null);
      }, timeoutMs) : setCurrentIdRaw(id);
    }, [timeoutMs]);
  React.useEffect(function () {
    return function () {
      return clearTimeout(timeoutRef.current);
    };
  }, []);
  var value = React.useMemo(function () {
    return {
      currentId,
      setCurrentId,
      delay,
      timeoutMs,
      initialDelay: delay
    };
  }, [currentId, setCurrentId, delay, timeoutMs]);
  return React.createElement(DelayGroupContext.Provider, {
    value
  }, children);
}
function useDelayGroup(context) {
  var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    {
      id
    } = options,
    groupContext = React.useContext(DelayGroupContext);
  return React.useEffect(function () {
    !context.open && groupContext.currentId === id && groupContext.setCurrentId(null);
  }, [context.open, id]), React.useEffect(function () {
    groupContext.currentId != null && groupContext.currentId !== id && context.open && context.onOpenChange(!1);
  }, [groupContext.currentId, id, context.open]), groupContext.currentId != null ? {
    delay: {
      open: 1,
      close: getClose(groupContext.initialDelay)
    },
    currentId: groupContext.currentId
  } : {
    delay: groupContext.initialDelay,
    currentId: groupContext.currentId
  };
}
function getClose(delay) {
  if (typeof delay == "number") return delay;
  var _delay_close;
  return (_delay_close = delay?.close) !== null && _delay_close !== void 0 ? _delay_close : 0;
}
export { FloatingDelayGroup, useDelayGroup, useDelayGroupContext };
//# sourceMappingURL=useDelayGroup.native.js.map
