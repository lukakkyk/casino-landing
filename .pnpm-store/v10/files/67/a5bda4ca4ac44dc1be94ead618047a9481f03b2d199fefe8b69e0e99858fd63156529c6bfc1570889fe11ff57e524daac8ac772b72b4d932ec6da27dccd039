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
var SelectViewport_exports = {};
__export(SelectViewport_exports, {
  SelectViewport: () => SelectViewport,
  SelectViewportFrame: () => SelectViewportFrame
});
module.exports = __toCommonJS(SelectViewport_exports);
var import_adapt = require("@tamagui/adapt"),
  import_animate_presence = require("@tamagui/animate-presence"),
  import_compose_refs = require("@tamagui/compose-refs"),
  import_constants = require("@tamagui/constants"),
  import_core = require("@tamagui/core"),
  import_portal = require("@tamagui/portal"),
  import_stacks = require("@tamagui/stacks"),
  import_start_transition = require("@tamagui/start-transition"),
  React = __toESM(require("react"), 1),
  import_constants2 = require("./constants.cjs"),
  import_context = require("./context.cjs"),
  import_jsx_runtime = require("react/jsx-runtime");
const SelectViewportFrame = (0, import_core.styled)(import_stacks.YStack, {
    name: import_constants2.VIEWPORT_NAME,
    variants: {
      unstyled: {
        false: {
          size: "$2",
          backgroundColor: "$background",
          elevate: !0,
          bordered: !0,
          userSelect: "none",
          outlineWidth: 0
        }
      },
      size: {
        "...size": (val, {
          tokens
        }) => ({
          borderRadius: tokens.radius[val] ?? val
        })
      }
    },
    defaultVariants: {
      unstyled: process.env.TAMAGUI_HEADLESS === "1"
    }
  }),
  needsRepropagation = (0, import_portal.needsPortalRepropagation)(),
  SelectViewport = SelectViewportFrame.styleable(function (props, forwardedRef) {
    const {
        scope,
        children,
        disableScroll,
        ...viewportProps
      } = props,
      context = (0, import_context.useSelectContext)(scope),
      itemContext = (0, import_context.useSelectItemParentContext)(scope),
      isAdapted = (0, import_adapt.useAdaptIsActive)(context.adaptScope),
      [lazyMounted, setLazyMounted] = React.useState(!context.lazyMount);
    React.useEffect(() => {
      context.lazyMount && context.open && (lazyMounted || (0, import_start_transition.startTransition)(() => {
        setLazyMounted(!0);
      }));
    }, [context.lazyMount, context.open, lazyMounted]);
    const composedRefs = (0, import_compose_refs.useComposedRefs)(
    // @ts-ignore TODO react 19 type needs fix
    forwardedRef, context.floatingContext?.refs.setFloating);
    if ((0, import_constants.useIsomorphicLayoutEffect)(() => {
      context.update && context.update();
    }, [isAdapted]), (0, import_constants.useIsomorphicLayoutEffect)(() => {
      context.lazyMount && lazyMounted && context.open && context.update && context.update();
    }, [lazyMounted]), itemContext.shouldRenderWebNative) return /* @__PURE__ */(0, import_jsx_runtime.jsx)(import_stacks.YStack, {
      position: "relative",
      children
    });
    if (isAdapted || !import_constants.isWeb) {
      let content = children;
      return needsRepropagation && (content = /* @__PURE__ */(0, import_jsx_runtime.jsx)(import_context.ForwardSelectContext, {
        itemContext,
        context,
        children: content
      })), /* @__PURE__ */(0, import_jsx_runtime.jsx)(import_adapt.AdaptPortalContents, {
        scope: context.adaptScope,
        children: content
      });
    }
    if (!itemContext.interactions) return process.env.NODE_ENV === "development" && console.warn("No interactions provided to Select, potentially missing Adapt"), null;
    const {
      style,
      // remove this, it was set to "Select" always
      className,
      ...floatingProps
    } = itemContext.interactions.getFloatingProps();
    return /* @__PURE__ */(0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, {
      children: [!disableScroll && !props.unstyled && /* @__PURE__ */(0, import_jsx_runtime.jsx)("style", {
        dangerouslySetInnerHTML: {
          __html: selectViewportCSS
        }
      }), /* @__PURE__ */(0, import_jsx_runtime.jsx)(import_animate_presence.AnimatePresence, {
        children: context.open ? /* @__PURE__ */(0, import_jsx_runtime.jsx)(SelectViewportFrame, {
          size: itemContext.size,
          role: "presentation",
          ...viewportProps,
          ...style,
          ...floatingProps,
          ...(!props.unstyled && {
            overflowY: disableScroll ? void 0 : style.overflow ?? "auto"
          }),
          ref: composedRefs,
          children: lazyMounted ? children : null
        }, "select-viewport") : null
      }), !context.open && !(context.lazyMount && context.renderValue) && lazyMounted && /* @__PURE__ */(0, import_jsx_runtime.jsx)("div", {
        style: {
          display: "none"
        },
        children
      })]
    });
  }),
  selectViewportCSS = `
.is_SelectViewport {
  scrollbar-width: none;
  -webkit-overflow-scrolling: touch;
  overscroll-behavior: contain;
}

.is_SelectViewport::-webkit-scrollbar{
  display:none
}
`;