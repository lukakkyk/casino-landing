import { getPortal } from "./portalState.mjs";
import { Fragment, jsx } from "react/jsx-runtime";
function NativePortal({
  hostName = "root",
  children
}) {
  if (getPortal().state.type !== "teleport") return null;
  const {
    Portal
  } = globalThis.__tamagui_teleport;
  return /* @__PURE__ */jsx(Portal, {
    hostName,
    children
  });
}
function NativePortalHost({
  name
}) {
  if (getPortal().state.type !== "teleport") return null;
  const {
    PortalHost
  } = globalThis.__tamagui_teleport;
  return /* @__PURE__ */jsx(PortalHost, {
    name
  });
}
function NativePortalProvider({
  children
}) {
  if (getPortal().state.type !== "teleport") return /* @__PURE__ */jsx(Fragment, {
    children
  });
  const {
    PortalProvider
  } = globalThis.__tamagui_teleport;
  return /* @__PURE__ */jsx(PortalProvider, {
    children
  });
}
export { NativePortal, NativePortalHost, NativePortalProvider };
//# sourceMappingURL=components.mjs.map
