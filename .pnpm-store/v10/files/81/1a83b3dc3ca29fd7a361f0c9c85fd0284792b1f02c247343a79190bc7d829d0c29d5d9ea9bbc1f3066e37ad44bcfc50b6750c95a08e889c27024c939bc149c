import * as React from "react";
const DelayGroupContext = React.createContext({
  currentId: null,
  setCurrentId: () => {},
  delay: 0,
  timeoutMs: 0,
  initialDelay: 0
});
function useDelayGroupContext() {
  return React.useContext(DelayGroupContext);
}
function FloatingDelayGroup({
  children,
  delay,
  timeoutMs = 0
}) {
  const [currentId, setCurrentIdRaw] = React.useState(null),
    timeoutRef = React.useRef(void 0),
    setCurrentId = React.useCallback(id => {
      clearTimeout(timeoutRef.current), id == null && timeoutMs > 0 ? timeoutRef.current = setTimeout(() => {
        setCurrentIdRaw(null);
      }, timeoutMs) : setCurrentIdRaw(id);
    }, [timeoutMs]);
  React.useEffect(() => () => clearTimeout(timeoutRef.current), []);
  const value = React.useMemo(() => ({
    currentId,
    setCurrentId,
    delay,
    timeoutMs,
    initialDelay: delay
  }), [currentId, setCurrentId, delay, timeoutMs]);
  return React.createElement(DelayGroupContext.Provider, {
    value
  }, children);
}
function useDelayGroup(context, options = {}) {
  const {
      id
    } = options,
    groupContext = React.useContext(DelayGroupContext);
  return React.useEffect(() => {
    !context.open && groupContext.currentId === id && groupContext.setCurrentId(null);
  }, [context.open, id]), React.useEffect(() => {
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
  return typeof delay == "number" ? delay : delay?.close ?? 0;
}
export { FloatingDelayGroup, useDelayGroup, useDelayGroupContext };
//# sourceMappingURL=useDelayGroup.mjs.map
