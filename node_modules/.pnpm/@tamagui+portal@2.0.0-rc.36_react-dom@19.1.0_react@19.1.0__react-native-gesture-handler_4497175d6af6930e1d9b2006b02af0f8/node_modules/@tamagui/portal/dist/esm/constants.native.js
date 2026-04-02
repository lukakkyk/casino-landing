import { isAndroid, isIos, isWeb } from "@tamagui/constants";
import { getPortal } from "@tamagui/native";
var isTeleportEnabled = function () {
    var state = getPortal().state;
    return state.enabled && state.type === "teleport";
  },
  needsPortalRepropagation = function () {
    return isWeb || isTeleportEnabled() ? !1 : isAndroid || isIos;
  },
  allPortalHosts = /* @__PURE__ */new Map(),
  portalListeners = {};
export { allPortalHosts, isTeleportEnabled, needsPortalRepropagation, portalListeners };
//# sourceMappingURL=constants.native.js.map
