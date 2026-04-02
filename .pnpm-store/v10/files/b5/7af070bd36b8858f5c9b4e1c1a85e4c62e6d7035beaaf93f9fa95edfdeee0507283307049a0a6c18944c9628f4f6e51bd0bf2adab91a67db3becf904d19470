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
var GorhomPortal_exports = {};
__export(GorhomPortal_exports, {
  ACTIONS: () => ACTIONS,
  INITIAL_STATE: () => INITIAL_STATE,
  PortalHost: () => PortalHost,
  PortalProvider: () => PortalProvider,
  usePortal: () => usePortal
});
module.exports = __toCommonJS(GorhomPortal_exports);
var import_jsx_runtime = require("react/jsx-runtime"),
  import_constants = require("@tamagui/constants"),
  import_native = require("@tamagui/native"),
  import_start_transition = require("@tamagui/start-transition"),
  import_react = __toESM(require("react"), 1),
  import_constants2 = require("./constants.native.js"),
  ACTIONS = /* @__PURE__ */function (ACTIONS2) {
    return ACTIONS2[ACTIONS2.REGISTER_HOST = 0] = "REGISTER_HOST", ACTIONS2[ACTIONS2.DEREGISTER_HOST = 1] = "DEREGISTER_HOST", ACTIONS2[ACTIONS2.ADD_UPDATE_PORTAL = 2] = "ADD_UPDATE_PORTAL", ACTIONS2[ACTIONS2.REMOVE_PORTAL = 3] = "REMOVE_PORTAL", ACTIONS2;
  }(ACTIONS || {}),
  INITIAL_STATE = {};
var registerHost = function (state, hostName) {
    return hostName in state || (state[hostName] = []), state;
  },
  deregisterHost = function (state, hostName) {
    return delete state[hostName], state;
  },
  addUpdatePortal = function (state, hostName, portalName, node) {
    hostName in state || (state = registerHost(state, hostName));
    var index = state[hostName].findIndex(function (item) {
      return item.name === portalName;
    });
    return index !== -1 ? state[hostName][index].node = node : state[hostName].push({
      name: portalName,
      node
    }), state;
  },
  removePortal = function (state, hostName, portalName) {
    if (!(hostName in state)) return process.env.NODE_ENV === "development" && console.info(`Failed to remove portal '${portalName}', '${hostName}' was not registered!`), state;
    var index = state[hostName].findIndex(function (item) {
      return item.name === portalName;
    });
    return index !== -1 && state[hostName].splice(index, 1), state;
  },
  reducer = function (state, action) {
    var {
      type
    } = action;
    switch (type) {
      case 0:
        return registerHost({
          ...state
        }, action.hostName);
      case 1:
        return deregisterHost({
          ...state
        }, action.hostName);
      case 2:
        return addUpdatePortal({
          ...state
        }, action.hostName, action.portalName, action.node);
      case 3:
        return removePortal({
          ...state
        }, action.hostName, action.portalName);
      default:
        return state;
    }
  },
  PortalStateContext = /* @__PURE__ */(0, import_react.createContext)(null),
  PortalDispatchContext = /* @__PURE__ */(0, import_react.createContext)(null),
  PortalProviderActiveContext = /* @__PURE__ */(0, import_react.createContext)(!1),
  usePortalState = function (hostName) {
    var state = (0, import_react.useContext)(PortalStateContext);
    if (state === null) throw new Error("'PortalStateContext' cannot be null, please add 'PortalProvider' to the root component.");
    return state[hostName] || [];
  },
  usePortal = function () {
    var hostName = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "root",
      dispatch = (0, import_react.useContext)(PortalDispatchContext);
    if (dispatch === null) throw new Error("'PortalDispatchContext' cannot be null, please add 'PortalProvider' to the root component.");
    var registerHost2 = (0, import_react.useCallback)(function () {
        dispatch({
          type: 0,
          hostName
        });
      }, []),
      deregisterHost2 = (0, import_react.useCallback)(function () {
        dispatch({
          type: 1,
          hostName
        });
      }, []),
      addUpdatePortal2 = (0, import_react.useCallback)(function (name, node) {
        dispatch({
          type: 2,
          hostName,
          portalName: name,
          node
        });
      }, []),
      removePortal2 = (0, import_react.useCallback)(function (name) {
        dispatch({
          type: 3,
          hostName,
          portalName: name
        });
      }, []);
    return {
      registerHost: registerHost2,
      deregisterHost: deregisterHost2,
      addPortal: addUpdatePortal2,
      updatePortal: addUpdatePortal2,
      removePortal: removePortal2
    };
  },
  PortalProviderComponent = function (param) {
    var {
        rootHostName = "root",
        shouldAddRootHost = !0,
        children
      } = param,
      isAlreadyInProvider = (0, import_react.useContext)(PortalProviderActiveContext);
    process.env.NODE_ENV === "development" && isAlreadyInProvider && shouldAddRootHost && console.warn("[tamagui] Nested PortalProvider with shouldAddRootHost detected. This causes hydration mismatches. TamaguiProvider from 'tamagui' already includes PortalProvider - remove the explicit PortalProvider wrapper or set shouldAddRootHost={false}.");
    var [state, dispatch] = (0, import_react.useReducer)(reducer, INITIAL_STATE),
      transitionDispatch = (0, import_react.useMemo)(function () {
        var next = function (value) {
          (0, import_start_transition.startTransition)(function () {
            dispatch(value);
          });
        };
        return next;
      }, [dispatch]),
      portalState = (0, import_native.getPortal)().state,
      content = /* @__PURE__ */(0, import_jsx_runtime.jsx)(PortalProviderActiveContext.Provider, {
        value: !0,
        children: /* @__PURE__ */(0, import_jsx_runtime.jsx)(PortalDispatchContext.Provider, {
          value: transitionDispatch,
          children: /* @__PURE__ */(0, import_jsx_runtime.jsxs)(PortalStateContext.Provider, {
            value: state,
            children: [children, shouldAddRootHost && /* @__PURE__ */(0, import_jsx_runtime.jsx)(PortalHost, {
              name: rootHostName
            })]
          })
        })
      });
    return portalState.type === "teleport" ? /* @__PURE__ */(0, import_jsx_runtime.jsx)(import_native.NativePortalProvider, {
      children: content
    }) : content;
  },
  PortalProvider = /* @__PURE__ */(0, import_react.memo)(PortalProviderComponent);
PortalProvider.displayName = "PortalProvider";
var defaultRenderer = function (children) {
    return /* @__PURE__ */(0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, {
      children
    });
  },
  PortalHost = /* @__PURE__ */(0, import_react.memo)(function (props) {
    var portalState = (0, import_native.getPortal)().state;
    return portalState.type === "teleport" ? /* @__PURE__ */(0, import_jsx_runtime.jsx)(import_native.NativePortalHost, {
      name: props.name
    }) : /* @__PURE__ */(0, import_jsx_runtime.jsx)(PortalHostNonNative, {
      ...props
    });
  });
function PortalHostNonNative(props) {
  var {
      name,
      forwardProps,
      render = defaultRenderer
    } = props,
    state = usePortalState(name),
    {
      registerHost: registerHost2,
      deregisterHost: deregisterHost2
    } = usePortal(props.name);
  return (0, import_constants.useIsomorphicLayoutEffect)(function () {
    return registerHost2(), function () {
      deregisterHost2();
    };
  }, []), render(forwardProps ? state.map(function (item) {
    var next = item.node,
      {
        children,
        ...restForwardProps
      } = forwardProps;
    return forwardProps ? import_react.default.Children.map(next, function (child) {
      return /* @__PURE__ */import_react.default.isValidElement(child) ? /* @__PURE__ */import_react.default.cloneElement(child, {
        key: child.key,
        ...restForwardProps
      }) : child;
    }) : next;
  }) : state.map(function (item) {
    return item.node;
  }));
}
//# sourceMappingURL=GorhomPortal.native.js.map
