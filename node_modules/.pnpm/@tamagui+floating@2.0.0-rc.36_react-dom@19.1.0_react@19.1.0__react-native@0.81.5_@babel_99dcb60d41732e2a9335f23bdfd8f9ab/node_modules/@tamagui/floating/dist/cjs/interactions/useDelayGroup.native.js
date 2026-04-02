"use strict";

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
var React = __toESM(require("react"), 1),
  DelayGroupContext = React.createContext({
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
//# sourceMappingURL=useDelayGroup.native.js.map
