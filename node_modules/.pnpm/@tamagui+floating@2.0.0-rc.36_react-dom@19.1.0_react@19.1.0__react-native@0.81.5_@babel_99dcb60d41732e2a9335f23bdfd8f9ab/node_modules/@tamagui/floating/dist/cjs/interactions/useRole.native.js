"use strict";

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
var React = __toESM(require("react"), 1),
  componentRoleToAriaRoleMap = /* @__PURE__ */new Map([["select", "listbox"], ["combobox", "listbox"], ["label", !1]]),
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
//# sourceMappingURL=useRole.native.js.map
