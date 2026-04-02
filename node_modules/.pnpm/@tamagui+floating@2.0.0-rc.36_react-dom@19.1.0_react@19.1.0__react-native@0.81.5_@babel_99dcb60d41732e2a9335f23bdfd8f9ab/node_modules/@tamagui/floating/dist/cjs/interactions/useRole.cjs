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
var useRole_exports = {};
__export(useRole_exports, {
  useRole: () => useRole
});
module.exports = __toCommonJS(useRole_exports);
var React = __toESM(require("react"), 1);
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