import * as React from "react";
const componentRoleToAriaRoleMap = /* @__PURE__ */new Map([["select", "listbox"], ["combobox", "listbox"], ["label", !1]]);
let idCounter = 0;
function useRole(context, props = {}) {
  const {
      open,
      elements
    } = context,
    {
      enabled = !0,
      role = "dialog"
    } = props,
    defaultReferenceId = React.useId(),
    referenceId = elements.domReference?.id || defaultReferenceId,
    defaultFloatingId = React.useMemo(() => `floating-${idCounter++}`, []),
    floatingId = React.useMemo(() => elements.floating?.id || defaultFloatingId, [elements.floating, defaultFloatingId]),
    ariaRole = componentRoleToAriaRoleMap.get(role) ?? role,
    reference = React.useMemo(() => ariaRole === "tooltip" || role === "label" ? {
      [`aria-${role === "label" ? "labelledby" : "describedby"}`]: open ? floatingId : void 0
    } : {
      "aria-expanded": open ? "true" : "false",
      "aria-haspopup": ariaRole === "alertdialog" ? "dialog" : ariaRole,
      "aria-controls": open ? floatingId : void 0,
      ...(ariaRole === "listbox" && {
        role: "combobox"
      }),
      ...(ariaRole === "menu" && {
        id: referenceId
      }),
      ...(role === "select" && {
        "aria-autocomplete": "none"
      }),
      ...(role === "combobox" && {
        "aria-autocomplete": "list"
      })
    }, [ariaRole, floatingId, open, referenceId, role]),
    floating = React.useMemo(() => {
      const floatingProps = {
        id: floatingId,
        ...(ariaRole && {
          role: ariaRole
        })
      };
      return ariaRole === "tooltip" || role === "label" ? floatingProps : {
        ...floatingProps,
        ...(ariaRole === "menu" && {
          "aria-labelledby": referenceId
        })
      };
    }, [ariaRole, floatingId, referenceId, role]),
    item = React.useCallback(({
      active,
      selected
    }) => {
      const commonProps = {
        role: "option",
        ...(active && {
          id: `${floatingId}-fui-option`
        })
      };
      switch (role) {
        case "select":
        case "combobox":
          return {
            ...commonProps,
            "aria-selected": selected
          };
      }
      return {};
    }, [floatingId, role]);
  return React.useMemo(() => enabled ? {
    reference,
    floating,
    item
  } : {}, [enabled, reference, floating, item]);
}
export { useRole };
//# sourceMappingURL=useRole.mjs.map
