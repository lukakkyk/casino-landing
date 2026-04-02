import * as React from "react";
var componentRoleToAriaRoleMap = /* @__PURE__ */new Map([["select", "listbox"], ["combobox", "listbox"], ["label", !1]]),
  idCounter = 0;
function useRole(context) {
  var props = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    _elements_domReference,
    {
      open,
      elements
    } = context,
    {
      enabled = !0,
      role = "dialog"
    } = props,
    defaultReferenceId = React.useId(),
    referenceId = ((_elements_domReference = elements.domReference) === null || _elements_domReference === void 0 ? void 0 : _elements_domReference.id) || defaultReferenceId,
    defaultFloatingId = React.useMemo(function () {
      return `floating-${idCounter++}`;
    }, []),
    floatingId = React.useMemo(function () {
      var _elements_floating;
      return ((_elements_floating = elements.floating) === null || _elements_floating === void 0 ? void 0 : _elements_floating.id) || defaultFloatingId;
    }, [elements.floating, defaultFloatingId]),
    _componentRoleToAriaRoleMap_get,
    ariaRole = (_componentRoleToAriaRoleMap_get = componentRoleToAriaRoleMap.get(role)) !== null && _componentRoleToAriaRoleMap_get !== void 0 ? _componentRoleToAriaRoleMap_get : role,
    reference = React.useMemo(function () {
      return ariaRole === "tooltip" || role === "label" ? {
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
      };
    }, [ariaRole, floatingId, open, referenceId, role]),
    floating = React.useMemo(function () {
      var floatingProps = {
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
    item = React.useCallback(function (param) {
      var {
          active,
          selected
        } = param,
        commonProps = {
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
  return React.useMemo(function () {
    return enabled ? {
      reference,
      floating,
      item
    } : {};
  }, [enabled, reference, floating, item]);
}
export { useRole };
//# sourceMappingURL=useRole.native.js.map
