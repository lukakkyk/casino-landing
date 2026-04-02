import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useIsomorphicLayoutEffect } from "@tamagui/constants";
import { getPortal, NativePortalHost, NativePortalProvider } from "@tamagui/native";
import { startTransition } from "@tamagui/start-transition";
import React, { createContext, memo, useCallback, useContext, useMemo, useReducer } from "react";
import { allPortalHosts, portalListeners } from "./constants.native.js";
var ACTIONS = /* @__PURE__ */function (ACTIONS2) {
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
  PortalStateContext = /* @__PURE__ */createContext(null),
  PortalDispatchContext = /* @__PURE__ */createContext(null),
  PortalProviderActiveContext = /* @__PURE__ */createContext(!1),
  usePortalState = function (hostName) {
    var state = useContext(PortalStateContext);
    if (state === null) throw new Error("'PortalStateContext' cannot be null, please add 'PortalProvider' to the root component.");
    return state[hostName] || [];
  },
  usePortal = function () {
    var hostName = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "root",
      dispatch = useContext(PortalDispatchContext);
    if (dispatch === null) throw new Error("'PortalDispatchContext' cannot be null, please add 'PortalProvider' to the root component.");
    var registerHost2 = useCallback(function () {
        dispatch({
          type: 0,
          hostName
        });
      }, []),
      deregisterHost2 = useCallback(function () {
        dispatch({
          type: 1,
          hostName
        });
      }, []),
      addUpdatePortal2 = useCallback(function (name, node) {
        dispatch({
          type: 2,
          hostName,
          portalName: name,
          node
        });
      }, []),
      removePortal2 = useCallback(function (name) {
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
      isAlreadyInProvider = useContext(PortalProviderActiveContext);
    process.env.NODE_ENV === "development" && isAlreadyInProvider && shouldAddRootHost && console.warn("[tamagui] Nested PortalProvider with shouldAddRootHost detected. This causes hydration mismatches. TamaguiProvider from 'tamagui' already includes PortalProvider - remove the explicit PortalProvider wrapper or set shouldAddRootHost={false}.");
    var [state, dispatch] = useReducer(reducer, INITIAL_STATE),
      transitionDispatch = useMemo(function () {
        var next = function (value) {
          startTransition(function () {
            dispatch(value);
          });
        };
        return next;
      }, [dispatch]),
      portalState = getPortal().state,
      content = /* @__PURE__ */_jsx(PortalProviderActiveContext.Provider, {
        value: !0,
        children: /* @__PURE__ */_jsx(PortalDispatchContext.Provider, {
          value: transitionDispatch,
          children: /* @__PURE__ */_jsxs(PortalStateContext.Provider, {
            value: state,
            children: [children, shouldAddRootHost && /* @__PURE__ */_jsx(PortalHost, {
              name: rootHostName
            })]
          })
        })
      });
    return portalState.type === "teleport" ? /* @__PURE__ */_jsx(NativePortalProvider, {
      children: content
    }) : content;
  },
  PortalProvider = /* @__PURE__ */memo(PortalProviderComponent);
PortalProvider.displayName = "PortalProvider";
var defaultRenderer = function (children) {
    return /* @__PURE__ */_jsx(_Fragment, {
      children
    });
  },
  PortalHost = /* @__PURE__ */memo(function (props) {
    var portalState = getPortal().state;
    return portalState.type === "teleport" ? /* @__PURE__ */_jsx(NativePortalHost, {
      name: props.name
    }) : /* @__PURE__ */_jsx(PortalHostNonNative, {
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
  return useIsomorphicLayoutEffect(function () {
    return registerHost2(), function () {
      deregisterHost2();
    };
  }, []), render(forwardProps ? state.map(function (item) {
    var next = item.node,
      {
        children,
        ...restForwardProps
      } = forwardProps;
    return forwardProps ? React.Children.map(next, function (child) {
      return /* @__PURE__ */React.isValidElement(child) ? /* @__PURE__ */React.cloneElement(child, {
        key: child.key,
        ...restForwardProps
      }) : child;
    }) : next;
  }) : state.map(function (item) {
    return item.node;
  }));
}
export { ACTIONS, INITIAL_STATE, PortalHost, PortalProvider, usePortal };
//# sourceMappingURL=GorhomPortal.native.js.map
