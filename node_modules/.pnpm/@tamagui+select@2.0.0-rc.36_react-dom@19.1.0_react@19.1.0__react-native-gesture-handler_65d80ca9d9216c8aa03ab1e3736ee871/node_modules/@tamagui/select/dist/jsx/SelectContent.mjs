import { isWeb } from "@tamagui/core";
import { Dismissable } from "@tamagui/dismissable";
import { FocusScope } from "@tamagui/focus-scope";
import { Portal } from "@tamagui/portal";
import { RemoveScroll } from "@tamagui/remove-scroll";
import { useContext } from "react";
import { SelectZIndexContext, useSelectContext, useSelectItemParentContext } from "./context.mjs";
import { useShowSelectSheet } from "./useSelectBreakpointActive.mjs";
import { Fragment, jsx } from "react/jsx-runtime";
const SelectContent = ({
  children,
  scope,
  ...focusScopeProps
}) => {
  const context = useSelectContext(scope),
    itemParentContext = useSelectItemParentContext(scope),
    zIndex = useContext(SelectZIndexContext),
    showSheet = useShowSelectSheet(context),
    contents = children;
  return itemParentContext.shouldRenderWebNative ? /* @__PURE__ */jsx(Fragment, {
    children
  }) : showSheet ? context.open ? /* @__PURE__ */jsx(Fragment, {
    children: contents
  }) : null : /* @__PURE__ */jsx(Portal, {
    open: context.open,
    zIndex,
    stackZIndex: 1e5,
    children: /* @__PURE__ */jsx(RemoveScroll, {
      enabled: context.open && !context.disablePreventBodyScroll,
      children: /* @__PURE__ */jsx(Dismissable, {
        asChild: !0,
        forceUnmount: !context.open,
        onDismiss: () => itemParentContext.setOpen(!1),
        onFocusOutside: e => e.preventDefault(),
        onPointerDownOutside: e => e.preventDefault(),
        children: /* @__PURE__ */jsx(FocusScope, {
          ...focusScopeProps,
          enabled: !!context.open,
          trapped: !0,
          onMountAutoFocus: e => {
            e.preventDefault();
          },
          onUnmountAutoFocus: e => {
            e.preventDefault();
            const trigger = context.floatingContext?.refs?.reference?.current;
            trigger instanceof HTMLElement && trigger.focus();
          },
          children: isWeb ? /* @__PURE__ */jsx("div", {
            style: {
              display: "contents"
            },
            children: contents
          }) : contents
        })
      })
    })
  });
};
export { SelectContent };
//# sourceMappingURL=SelectContent.mjs.map
