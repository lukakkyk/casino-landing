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
var useDelayGroup_exports = {};
__export(useDelayGroup_exports, {
  FloatingDelayGroup: () => FloatingDelayGroup,
  useDelayGroup: () => useDelayGroup,
  useDelayGroupContext: () => useDelayGroupContext
});
module.exports = __toCommonJS(useDelayGroup_exports);
var React = __toESM(require("react"), 1);
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