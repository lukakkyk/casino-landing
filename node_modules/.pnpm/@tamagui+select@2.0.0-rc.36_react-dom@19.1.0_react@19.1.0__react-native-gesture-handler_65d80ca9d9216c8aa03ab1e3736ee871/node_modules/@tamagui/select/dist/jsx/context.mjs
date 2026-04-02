import { createStyledContext } from "@tamagui/core";
import { getPortal } from "@tamagui/native";
import { createContext } from "react";
import { jsx } from "react/jsx-runtime";
const SelectZIndexContext = createContext(void 0),
  {
    Provider: SelectProvider,
    useStyledContext: useSelectContext
  } = createStyledContext(null, "Select"),
  {
    Provider: SelectItemParentProvider,
    useStyledContext: useSelectItemParentContext
  } = createStyledContext(null, "SelectItem"),
  ForwardSelectContext = ({
    context,
    itemContext,
    children
  }) => getPortal().state.type === "teleport" ? children : /* @__PURE__ */jsx(SelectProvider, {
    isInSheet: !0,
    scope: context.scopeName,
    ...context,
    children: /* @__PURE__ */jsx(SelectItemParentProvider, {
      scope: context.scopeName,
      ...itemContext,
      children
    })
  });
export { ForwardSelectContext, SelectItemParentProvider, SelectProvider, SelectZIndexContext, useSelectContext, useSelectItemParentContext };
//# sourceMappingURL=context.mjs.map
