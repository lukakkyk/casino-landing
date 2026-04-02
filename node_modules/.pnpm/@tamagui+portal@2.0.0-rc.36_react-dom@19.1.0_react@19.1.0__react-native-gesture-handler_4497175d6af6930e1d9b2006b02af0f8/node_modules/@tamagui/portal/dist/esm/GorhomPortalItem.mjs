import { useIsomorphicLayoutEffect } from "@tamagui/constants";
import { TamaguiRoot, useThemeName } from "@tamagui/web";
import { useState } from "react";
import { createPortal } from "react-dom";
import { allPortalHosts, portalListeners } from "./constants.mjs";
import { jsx } from "react/jsx-runtime";
const GorhomPortalItem = props => {
  const theme = useThemeName();
  process.env.NODE_ENV === "development" && !props.hostName && !props.passThrough && console.warn("No hostName");
  const cur = allPortalHosts.get(props.hostName || ""),
    [node, setNode] = useState(cur);
  if (useIsomorphicLayoutEffect(() => {
    if (!props.hostName) return;
    const listener = newNode => {
      setNode(newNode);
    };
    portalListeners[props.hostName] ||= /* @__PURE__ */new Set(), portalListeners[props.hostName].add(listener);
    const existingHost = allPortalHosts.get(props.hostName);
    return existingHost && existingHost !== node && setNode(existingHost), () => {
      portalListeners[props.hostName]?.delete(listener);
    };
  }, [props.hostName]), useIsomorphicLayoutEffect(() => {
    cur && cur !== node && setNode(cur);
  }, [cur, node]), props.passThrough) return props.children;
  const actualNode = node?.isConnected ? node : null;
  return actualNode ? createPortal(/* @__PURE__ */jsx(TamaguiRoot, {
    theme,
    children: props.children
  }), actualNode) : null;
};
export { GorhomPortalItem };
//# sourceMappingURL=GorhomPortalItem.mjs.map
