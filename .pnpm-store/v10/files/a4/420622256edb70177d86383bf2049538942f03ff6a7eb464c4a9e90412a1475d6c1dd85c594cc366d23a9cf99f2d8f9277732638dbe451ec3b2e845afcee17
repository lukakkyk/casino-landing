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
var spacedChildren_exports = {};
__export(spacedChildren_exports, {
  spacedChildren: () => spacedChildren
});
module.exports = __toCommonJS(spacedChildren_exports);
var import_jsx_runtime = require("react/jsx-runtime"),
  import_web = require("@tamagui/web"),
  import_react = __toESM(require("react"), 1),
  import_Spacer = require("./Spacer.native.js"),
  import_Unspaced = require("./Unspaced.native.js");
function spacedChildren(props) {
  var _childrenList__type,
    _childrenList_,
    {
      isZStack,
      children,
      space,
      direction,
      spaceFlex,
      separator,
      ensureKeys
    } = props,
    hasSpace = !!(space || spaceFlex),
    hasSeparator = separator != null,
    areChildrenArray = Array.isArray(children);
  if (!ensureKeys && !(hasSpace || hasSeparator || isZStack)) return children;
  var childrenList = areChildrenArray ? children : import_react.default.Children.toArray(children),
    len = childrenList.length;
  if (len <= 1 && !isZStack && !(!((_childrenList_ = childrenList[0]) === null || _childrenList_ === void 0 || (_childrenList__type = _childrenList_.type) === null || _childrenList__type === void 0) && _childrenList__type.shouldForwardSpace)) return children;
  var final = [],
    _iteratorNormalCompletion = !0,
    _didIteratorError = !1,
    _iteratorError = void 0;
  try {
    for (var _iterator = childrenList.entries()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = !0) {
      var [index, child] = _step.value,
        _child_type,
        isEmpty = child == null || Array.isArray(child) && child.length === 0;
      if (!isEmpty && /* @__PURE__ */import_react.default.isValidElement(child) && !((_child_type = child.type) === null || _child_type === void 0) && _child_type.shouldForwardSpace && (child = /* @__PURE__ */import_react.default.cloneElement(child, {
        space,
        spaceFlex,
        separator,
        key: child.key
      })), isEmpty || !child || child.key && !isZStack ? final.push(child) : final.push(/* @__PURE__ */(0, import_jsx_runtime.jsx)(import_react.default.Fragment, {
        children: isZStack ? /* @__PURE__ */(0, import_jsx_runtime.jsx)(AbsoluteFill, {
          children: child
        }) : child
      }, `${index}0t`)), !((0, import_Unspaced.isUnspaced)(child) && index === 0) && !isZStack) {
        var next = childrenList[index + 1];
        next && !isEmpty && !(0, import_Unspaced.isUnspaced)(next) && (separator ? (hasSpace && final.push(createSpacer({
          key: `_${index}_00t`,
          direction,
          space,
          spaceFlex
        })), final.push(/* @__PURE__ */(0, import_jsx_runtime.jsx)(import_react.default.Fragment, {
          children: separator
        }, `${index}03t`)), hasSpace && final.push(createSpacer({
          key: `_${index}01t`,
          direction,
          space,
          spaceFlex
        }))) : final.push(createSpacer({
          key: `_${index}02t`,
          direction,
          space,
          spaceFlex
        })));
      }
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
  return process.env.NODE_ENV === "development" && props.debug && console.info("  Spaced children", final, props), final;
}
function createSpacer(param) {
  var {
    key,
    direction,
    space,
    spaceFlex
  } = param;
  return /* @__PURE__ */(0, import_jsx_runtime.jsx)(import_Spacer.Spacer, {
    // @ts-ignore
    size: space,
    // @ts-ignore
    direction,
    ...(typeof spaceFlex < "u" && {
      flex: spaceFlex === !0 ? 1 : spaceFlex === !1 ? 0 : spaceFlex
    })
  }, key);
}
var AbsoluteFill = (0, import_web.createComponent)({
  defaultProps: {
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    pointerEvents: "box-none"
  }
});
//# sourceMappingURL=spacedChildren.native.js.map
