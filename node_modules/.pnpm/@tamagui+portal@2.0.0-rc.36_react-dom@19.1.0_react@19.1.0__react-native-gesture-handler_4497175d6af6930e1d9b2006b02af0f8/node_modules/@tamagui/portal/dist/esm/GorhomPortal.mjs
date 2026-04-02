import { useIsomorphicLayoutEffect } from "@tamagui/constants";
import { getPortal, NativePortalProvider } from "@tamagui/native";
import { startTransition } from "@tamagui/start-transition";
import React, { createContext, memo, useCallback, useContext, useMemo, useReducer } from "react";
import { allPortalHosts, portalListeners } from "./constants.mjs";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
var ACTIONS = /* @__PURE__ */(ACTIONS2 => (ACTIONS2[ACTIONS2.REGISTER_HOST = 0] = "REGISTER_HOST", ACTIONS2[ACTIONS2.DEREGISTER_HOST = 1] = "DEREGISTER_HOST", ACTIONS2[ACTIONS2.ADD_UPDATE_PORTAL = 2] = "ADD_UPDATE_PORTAL", ACTIONS2[ACTIONS2.REMOVE_PORTAL = 3] = "REMOVE_PORTAL", ACTIONS2))(ACTIONS || {});
const INITIAL_STATE = {};
const registerHost = (state, hostName) => (hostName in state || (state[hostName] = []), state),
  deregisterHost = (state, hostName) => (delete state[hostName], state),
  addUpdatePortal = (state, hostName, portalName, node) => {
    hostName in state || (state = registerHost(state, hostName));
    const index = state[hostName].findIndex(item => item.name === portalName);
    return index !== -1 ? state[hostName][index].node = node : state[hostName].push({
      name: portalName,
      node
    }), state;
  },
  removePortal = (state, hostName, portalName) => {
    if (!(hostName in state)) return process.env.NODE_ENV === "development" && console.info(`Failed to remove portal '${portalName}', '${hostName}' was not registered!`), state;
    const index = state[hostName].findIndex(item => item.name === portalName);
    return index !== -1 && state[hostName].splice(index, 1), state;
  },
  reducer = (state, action) => {
    const {
      type
    } = action;
    switch (type) {
      case 0 /* REGISTER_HOST */:
        return registerHost({
          ...state
        }, action.hostName);
      case 1 /* DEREGISTER_HOST */:
        return deregisterHost({
          ...state
        }, action.hostName);
      case 2 /* ADD_UPDATE_PORTAL */:
        return addUpdatePortal({
          ...state
        }, action.hostName, action.portalName, action.node);
      case 3 /* REMOVE_PORTAL */:
        return removePortal({
          ...state
        }, action.hostName, action.portalName);
      default:
        return state;
    }
  },
  PortalStateContext = createContext(null),
  PortalDispatchContext = createContext(null),
  PortalProviderActiveContext = createContext(!1);
const usePortal = (hostName = "root") => {
    const dispatch = useContext(PortalDispatchContext);
    if (dispatch === null) throw new Error("'PortalDispatchContext' cannot be null, please add 'PortalProvider' to the root component.");
    const registerHost2 = useCallback(() => {
        dispatch({
          type: 0 /* REGISTER_HOST */,
          hostName
        });
      }, []),
      deregisterHost2 = useCallback(() => {
        dispatch({
          type: 1 /* DEREGISTER_HOST */,
          hostName
        });
      }, []),
      addUpdatePortal2 = useCallback((name, node) => {
        dispatch({
          type: 2 /* ADD_UPDATE_PORTAL */,
          hostName,
          portalName: name,
          node
        });
      }, []),
      removePortal2 = useCallback(name => {
        dispatch({
          type: 3 /* REMOVE_PORTAL */,
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
  PortalProviderComponent = ({
    rootHostName = "root",
    shouldAddRootHost = !0,
    children
  }) => {
    const isAlreadyInProvider = useContext(PortalProviderActiveContext);
    process.env.NODE_ENV === "development" && isAlreadyInProvider && shouldAddRootHost && console.warn("[tamagui] Nested PortalProvider with shouldAddRootHost detected. This causes hydration mismatches. TamaguiProvider from 'tamagui' already includes PortalProvider - remove the explicit PortalProvider wrapper or set shouldAddRootHost={false}.");
    const [state, dispatch] = useReducer(reducer, INITIAL_STATE),
      transitionDispatch = useMemo(() => value => {
        startTransition(() => {
          dispatch(value);
        });
      }, [dispatch]),
      portalState = getPortal().state,
      content = /* @__PURE__ */jsx(PortalProviderActiveContext.Provider, {
        value: !0,
        children: /* @__PURE__ */jsx(PortalDispatchContext.Provider, {
          value: transitionDispatch,
          children: /* @__PURE__ */jsxs(PortalStateContext.Provider, {
            value: state,
            children: [children, shouldAddRootHost && /* @__PURE__ */jsx(PortalHost, {
              name: rootHostName
            })]
          })
        })
      });
    return portalState.type === "teleport" ? /* @__PURE__ */jsx(NativePortalProvider, {
      children: content
    }) : content;
  },
  PortalProvider = memo(PortalProviderComponent);
PortalProvider.displayName = "PortalProvider";
const PortalHost = memo(function (props) {
  return /* @__PURE__ */jsx(PortalHostWeb, {
    ...props
  });
});
function PortalHostWeb(props) {
  return useIsomorphicLayoutEffect(() => () => {
    allPortalHosts.delete(props.name);
  }, [props.name]), /* @__PURE__ */jsx("div", {
    style: {
      display: "contents"
    },
    ref: node => {
      node && (allPortalHosts.set(props.name, node), portalListeners[props.name]?.forEach(x => x(node)));
    }
  });
}
export { ACTIONS, INITIAL_STATE, PortalHost, PortalProvider, usePortal };
//# sourceMappingURL=GorhomPortal.mjs.map
