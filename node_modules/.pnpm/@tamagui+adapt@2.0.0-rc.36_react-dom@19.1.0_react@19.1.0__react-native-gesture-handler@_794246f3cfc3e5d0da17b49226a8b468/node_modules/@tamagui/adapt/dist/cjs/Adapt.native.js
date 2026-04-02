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
var Adapt_exports = {};
__export(Adapt_exports, {
  Adapt: () => Adapt,
  AdaptContents: () => AdaptContents,
  AdaptContext: () => AdaptContext,
  AdaptParent: () => AdaptParent,
  AdaptPortalContents: () => AdaptPortalContents,
  ProvideAdaptContext: () => ProvideAdaptContext,
  useAdaptContext: () => useAdaptContext,
  useAdaptIsActive: () => useAdaptIsActive
});
module.exports = __toCommonJS(Adapt_exports);
var import_jsx_runtime = require("react/jsx-runtime"),
  import_constants = require("@tamagui/constants"),
  import_core = require("@tamagui/core"),
  import_helpers = require("@tamagui/helpers"),
  import_native = require("@tamagui/native"),
  import_portal = require("@tamagui/portal"),
  import_z_index_stack = require("@tamagui/z-index-stack"),
  import_react = __toESM(require("react"), 1);
function createAdaptChildrenStore() {
  var children = null,
    listeners = /* @__PURE__ */new Set();
  return {
    set(c) {
      children = c;
      var _iteratorNormalCompletion = !0,
        _didIteratorError = !1,
        _iteratorError = void 0;
      try {
        for (var _iterator = listeners[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = !0) {
          var l = _step.value;
          l();
        }
      } catch (err) {
        _didIteratorError = !0, _iteratorError = err;
      } finally {
        try {
          !_iteratorNormalCompletion && _iterator.return != null && _iterator.return();
        } finally {
          if (_didIteratorError) throw _iteratorError;
        }
      }
    },
    get: function () {
      return children;
    },
    subscribe(callback) {
      return listeners.add(callback), function () {
        return listeners.delete(callback);
      };
    }
  };
}
var AdaptChildrenStoreContext = /* @__PURE__ */(0, import_react.createContext)(null),
  emptySubscribe = function () {
    return function () {};
  },
  emptyGet = function () {
    return null;
  };
function TeleportAdaptContents() {
  var store = (0, import_react.useContext)(AdaptChildrenStoreContext),
    _store_subscribe,
    _store_get,
    _store_get1,
    children = import_react.default.useSyncExternalStore((_store_subscribe = store?.subscribe) !== null && _store_subscribe !== void 0 ? _store_subscribe : emptySubscribe, (_store_get = store?.get) !== null && _store_get !== void 0 ? _store_get : emptyGet, (_store_get1 = store?.get) !== null && _store_get1 !== void 0 ? _store_get1 : emptyGet);
  return /* @__PURE__ */(0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, {
    children
  });
}
var AdaptContext = (0, import_core.createStyledContext)({
    Contents: null,
    scopeName: "",
    portalName: "",
    platform: null,
    setPlatform: function (x) {},
    when: null,
    setWhen: function () {}
  }),
  LastAdaptContextScope = /* @__PURE__ */(0, import_react.createContext)(""),
  ProvideAdaptContext = function (param) {
    var {
        children,
        ...context
      } = param,
      scope = context.scopeName || "",
      lastScope = (0, import_react.useContext)(LastAdaptContextScope);
    return /* @__PURE__ */(0, import_jsx_runtime.jsx)(LastAdaptContextScope.Provider, {
      value: lastScope || context.lastScope || "",
      children: /* @__PURE__ */(0, import_jsx_runtime.jsx)(AdaptContext.Provider, {
        scope,
        lastScope: lastScope || context.lastScope,
        ...context,
        children
      })
    });
  },
  useAdaptContext = function (scope) {
    var lastScope = (0, import_react.useContext)(LastAdaptContextScope),
      adaptScope = scope ?? lastScope;
    return AdaptContext.useStyledContext(adaptScope);
  },
  AdaptPortals = /* @__PURE__ */new Map(),
  AdaptParent = function (param) {
    var {
        children,
        Contents,
        scope,
        portal
      } = param,
      id = (0, import_react.useId)(),
      portalName = `AdaptPortal${scope}${id}`,
      childrenStoreRef = import_react.default.useRef(null);
    childrenStoreRef.current || (childrenStoreRef.current = createAdaptChildrenStore());
    var isTeleport = (0, import_native.getPortal)().state.type === "teleport",
      FinalContents = (0, import_react.useMemo)(function () {
        if (Contents) return Contents;
        if (isTeleport) return TeleportAdaptContents;
        if (AdaptPortals.has(portalName)) return AdaptPortals.get(portalName);
        var element = function () {
          return /* @__PURE__ */(0, import_jsx_runtime.jsx)(import_portal.PortalHost, {
            name: portalName,
            forwardProps: typeof portal == "boolean" ? void 0 : portal?.forwardProps
          }, id);
        };
        return AdaptPortals.set(portalName, element), element;
      }, [portalName, Contents, isTeleport]);
    (0, import_constants.useIsomorphicLayoutEffect)(function () {
      if (!isTeleport) return AdaptPortals.set(portalName, FinalContents), function () {
        AdaptPortals.delete(portalName);
      };
    }, [portalName, isTeleport]);
    var [when, setWhen] = import_react.default.useState(null),
      [platform, setPlatform] = import_react.default.useState(null);
    return /* @__PURE__ */(0, import_jsx_runtime.jsx)(AdaptChildrenStoreContext.Provider, {
      value: childrenStoreRef.current,
      children: /* @__PURE__ */(0, import_jsx_runtime.jsx)(LastAdaptContextScope.Provider, {
        value: scope,
        children: /* @__PURE__ */(0, import_jsx_runtime.jsx)(ProvideAdaptContext, {
          Contents: FinalContents,
          when,
          platform,
          setPlatform,
          setWhen,
          portalName,
          scopeName: scope,
          children
        })
      })
    });
  },
  AdaptContents = function (param) {
    var {
        scope,
        ...rest
      } = param,
      context = useAdaptContext(scope);
    if (!context?.Contents) throw new Error(process.env.NODE_ENV === "production" ? "tamagui.dev/docs/intro/errors#warning-002" : "You're rendering a Tamagui <Adapt /> component without nesting it inside a parent that is able to adapt.");
    return /* @__PURE__ */import_react.default.createElement(context.Contents, {
      ...rest,
      key: "stable"
    });
  };
AdaptContents.shouldForwardSpace = !0;
var Adapt = (0, import_helpers.withStaticProperties)(function (props) {
    var {
        platform,
        when,
        children,
        scope
      } = props,
      context = useAdaptContext(scope),
      enabled = useAdaptIsActiveGiven(props);
    (0, import_constants.useIsomorphicLayoutEffect)(function () {
      var _context_setWhen, _context_setPlatform;
      context == null || (_context_setWhen = context.setWhen) === null || _context_setWhen === void 0 || _context_setWhen.call(context, when || enabled), context == null || (_context_setPlatform = context.setPlatform) === null || _context_setPlatform === void 0 || _context_setPlatform.call(context, platform || null);
    }, [when, platform, enabled, context.setWhen, context.setPlatform]), (0, import_constants.useIsomorphicLayoutEffect)(function () {
      return function () {
        var _context_setWhen, _context_setPlatform;
        context == null || (_context_setWhen = context.setWhen) === null || _context_setWhen === void 0 || _context_setWhen.call(context, null), context == null || (_context_setPlatform = context.setPlatform) === null || _context_setPlatform === void 0 || _context_setPlatform.call(context, null);
      };
    }, []);
    var output;
    if (typeof children == "function") {
      var Component = context?.Contents;
      output = children(Component ? /* @__PURE__ */(0, import_jsx_runtime.jsx)(Component, {}) : null);
    } else output = children;
    return /* @__PURE__ */(0, import_jsx_runtime.jsx)(import_z_index_stack.StackZIndexContext, {
      children: enabled ? output : null
    });
  }, {
    Contents: AdaptContents
  }),
  AdaptPortalContents = function (props) {
    var isActive = useAdaptIsActive(props.scope),
      {
        portalName
      } = useAdaptContext(props.scope),
      childrenStore = (0, import_react.useContext)(AdaptChildrenStoreContext),
      isTeleport = !import_constants.isWeb && (0, import_native.getPortal)().state.type === "teleport";
    return isTeleport && childrenStore ? /* @__PURE__ */(0, import_jsx_runtime.jsx)(AdaptPortalTeleport, {
      isActive,
      store: childrenStore,
      children: props.children
    }) : /* @__PURE__ */(0, import_jsx_runtime.jsx)(import_portal.PortalItem, {
      passThrough: !isActive,
      hostName: portalName,
      children: props.children
    });
  };
function AdaptPortalTeleport(param) {
  var {
    isActive,
    store,
    children
  } = param;
  return (0, import_constants.useIsomorphicLayoutEffect)(function () {
    if (isActive) return store.set(children), function () {
      return store.set(null);
    };
  }), isActive ? null : /* @__PURE__ */(0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, {
    children
  });
}
var useAdaptIsActiveGiven = function (param) {
    var {
        when,
        platform
      } = param,
      media = (0, import_core.useMedia)();
    if (when == null && platform == null) return !1;
    if (when === !0) return !0;
    var enabled = !1;
    return platform === "touch" ? enabled = import_constants.isTouchable : platform === "native" ? enabled = !import_constants.isWeb : platform === "web" ? enabled = import_constants.isWeb : platform === "ios" ? enabled = import_constants.isIos : platform === "android" && (enabled = import_constants.isAndroid), platform && enabled == !1 ? !1 : (when && typeof when == "string" && (enabled = media[when]), enabled);
  },
  useAdaptIsActive = function (scope) {
    var props = useAdaptContext(scope);
    return useAdaptIsActiveGiven(props);
  };
//# sourceMappingURL=Adapt.native.js.map
