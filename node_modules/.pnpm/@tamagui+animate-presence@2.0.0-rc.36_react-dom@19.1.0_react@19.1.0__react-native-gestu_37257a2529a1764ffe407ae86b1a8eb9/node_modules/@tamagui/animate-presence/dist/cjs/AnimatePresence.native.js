"use strict";

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
var AnimatePresence_exports = {};
__export(AnimatePresence_exports, {
  AnimatePresence: () => AnimatePresence
});
module.exports = __toCommonJS(AnimatePresence_exports);
var import_jsx_runtime = require("react/jsx-runtime"),
  import_react = require("react"),
  import_use_constant = require("@tamagui/use-constant"),
  import_use_force_update = require("@tamagui/use-force-update"),
  import_react2 = require("react"),
  import_LayoutGroupContext = require("./LayoutGroupContext.native.js"),
  import_PresenceChild = require("./PresenceChild.native.js");
function _type_of(obj) {
  "@swc/helpers - typeof";

  return obj && typeof Symbol < "u" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
var getChildKey = function (child) {
  return child.key || function () {
    var ct = child.type,
      defaultName = ct.displayName || ct.name || "";
    return ct && (typeof ct > "u" ? "undefined" : _type_of(ct)) === "object" && "staticConfig" in ct && ct.staticConfig.componentName || defaultName;
  }();
};
function onlyElements(children) {
  var filtered = [];
  return import_react2.Children.forEach(children, function (child) {
    /* @__PURE__ */(0, import_react2.isValidElement)(child) && filtered.push(child);
  }), filtered;
}
var AnimatePresence = function (param) {
  var {
      children,
      enterVariant,
      exitVariant,
      enterExitVariant,
      initial = !0,
      onExitComplete,
      exitBeforeEnter,
      mode,
      presenceAffectsLayout = !0,
      custom,
      passThrough
    } = param,
    effectiveMode = mode ?? (exitBeforeEnter ? "wait" : "sync"),
    presentChildren = (0, import_react2.useMemo)(function () {
      return onlyElements(children);
    }, [children]),
    presentKeys = presentChildren.map(getChildKey),
    isInitialRender = (0, import_react2.useRef)(!0),
    frozenCustomRef = (0, import_react2.useRef)(/* @__PURE__ */new Map()),
    pendingPresentChildren = (0, import_react2.useRef)(presentChildren),
    exitComplete = (0, import_use_constant.useConstant)(function () {
      return /* @__PURE__ */new Map();
    }),
    [diffedChildren, setDiffedChildren] = (0, import_react2.useState)(presentChildren),
    [renderedChildren, setRenderedChildren] = (0, import_react2.useState)(presentChildren),
    _useContext_forceRender,
    forceRender = (_useContext_forceRender = (0, import_react2.useContext)(import_LayoutGroupContext.LayoutGroupContext).forceRender) !== null && _useContext_forceRender !== void 0 ? _useContext_forceRender : (0, import_use_force_update.useForceUpdate)();
  if (passThrough) return /* @__PURE__ */(0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, {
    children
  });
  if ((0, import_react.useInsertionEffect)(function () {
    isInitialRender.current = !1, pendingPresentChildren.current = presentChildren;
    for (var i2 = 0; i2 < renderedChildren.length; i2++) {
      var key2 = getChildKey(renderedChildren[i2]);
      presentKeys.includes(key2) ? (exitComplete.delete(key2), frozenCustomRef.current.delete(key2)) : exitComplete.get(key2) !== !0 && exitComplete.set(key2, !1);
    }
  }, [renderedChildren, presentKeys.length, presentKeys.join("-")]), presentChildren !== diffedChildren) {
    for (var nextChildren = [...presentChildren], i = 0; i < renderedChildren.length; i++) {
      var child = renderedChildren[i],
        key = getChildKey(child);
      presentKeys.includes(key) || (nextChildren.splice(i, 0, child), frozenCustomRef.current.has(key) || frozenCustomRef.current.set(key, custom));
    }
    var exitingChildren = renderedChildren.filter(function (child2) {
      return !presentKeys.includes(getChildKey(child2));
    });
    return effectiveMode === "wait" && exitingChildren.length && (nextChildren = exitingChildren), setRenderedChildren(onlyElements(nextChildren)), setDiffedChildren(presentChildren), null;
  }
  return /* @__PURE__ */(0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, {
    children: renderedChildren.map(function (child2) {
      var key2 = getChildKey(child2),
        isPresent = presentChildren === renderedChildren || presentKeys.includes(key2),
        onExit = function () {
          if (exitComplete.has(key2)) exitComplete.set(key2, !0);else return;
          var isEveryExitComplete = !0;
          exitComplete.forEach(function (isExitComplete) {
            isExitComplete || (isEveryExitComplete = !1);
          }), isEveryExitComplete && (forceRender?.(), setRenderedChildren(pendingPresentChildren.current), onExitComplete?.());
        },
        _frozenCustomRef_current_get;
      return /* @__PURE__ */(0, import_jsx_runtime.jsx)(import_PresenceChild.PresenceChild, {
        isPresent,
        initial: !isInitialRender.current || initial ? void 0 : !1,
        custom: isPresent ? custom : (_frozenCustomRef_current_get = frozenCustomRef.current.get(key2)) !== null && _frozenCustomRef_current_get !== void 0 ? _frozenCustomRef_current_get : custom,
        presenceAffectsLayout,
        enterExitVariant,
        enterVariant,
        exitVariant,
        onExitComplete: isPresent ? void 0 : onExit,
        children: child2
      }, key2);
    })
  });
};
AnimatePresence.displayName = "AnimatePresence";
//# sourceMappingURL=AnimatePresence.native.js.map
