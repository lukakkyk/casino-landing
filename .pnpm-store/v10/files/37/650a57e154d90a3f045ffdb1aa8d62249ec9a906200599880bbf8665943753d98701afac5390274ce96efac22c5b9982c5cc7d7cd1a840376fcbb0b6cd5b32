var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
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
var __toCommonJS = mod => __copyProps(__defProp({}, "__esModule", {
  value: !0
}), mod);
var SelectContent_exports = {};
__export(SelectContent_exports, {
  SelectContent: () => SelectContent
});
module.exports = __toCommonJS(SelectContent_exports);
var import_core = require("@tamagui/core"),
  import_dismissable = require("@tamagui/dismissable"),
  import_focus_scope = require("@tamagui/focus-scope"),
  import_portal = require("@tamagui/portal"),
  import_remove_scroll = require("@tamagui/remove-scroll"),
  import_react = require("react"),
  import_context = require("./context.cjs"),
  import_useSelectBreakpointActive = require("./useSelectBreakpointActive.cjs"),
  import_jsx_runtime = require("react/jsx-runtime");
const SelectContent = ({
  children,
  scope,
  ...focusScopeProps
}) => {
  const context = (0, import_context.useSelectContext)(scope),
    itemParentContext = (0, import_context.useSelectItemParentContext)(scope),
    zIndex = (0, import_react.useContext)(import_context.SelectZIndexContext),
    showSheet = (0, import_useSelectBreakpointActive.useShowSelectSheet)(context),
    contents = children;
  return itemParentContext.shouldRenderWebNative ? /* @__PURE__ */(0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, {
    children
  }) : showSheet ? context.open ? /* @__PURE__ */(0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, {
    children: contents
  }) : null : /* @__PURE__ */(0, import_jsx_runtime.jsx)(import_portal.Portal, {
    open: context.open,
    zIndex,
    stackZIndex: 1e5,
    children: /* @__PURE__ */(0, import_jsx_runtime.jsx)(import_remove_scroll.RemoveScroll, {
      enabled: context.open && !context.disablePreventBodyScroll,
      children: /* @__PURE__ */(0, import_jsx_runtime.jsx)(import_dismissable.Dismissable, {
        asChild: !0,
        forceUnmount: !context.open,
        onDismiss: () => itemParentContext.setOpen(!1),
        onFocusOutside: e => e.preventDefault(),
        onPointerDownOutside: e => e.preventDefault(),
        children: /* @__PURE__ */(0, import_jsx_runtime.jsx)(import_focus_scope.FocusScope, {
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
          children: import_core.isWeb ? /* @__PURE__ */(0, import_jsx_runtime.jsx)("div", {
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