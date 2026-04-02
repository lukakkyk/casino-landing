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
var import_web = require("@tamagui/web"),
  import_react = __toESM(require("react"), 1),
  import_Spacer = require("./Spacer.cjs"),
  import_Unspaced = require("./Unspaced.cjs"),
  import_jsx_runtime = require("react/jsx-runtime");
function spacedChildren(props) {
  const {
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
  const childrenList = areChildrenArray ? children : import_react.default.Children.toArray(children);
  if (childrenList.length <= 1 && !isZStack && !childrenList[0]?.type?.shouldForwardSpace) return children;
  const final = [];
  for (let [index, child] of childrenList.entries()) {
    const isEmpty = child == null || Array.isArray(child) && child.length === 0;
    if (!isEmpty && import_react.default.isValidElement(child) && child.type?.shouldForwardSpace && (child = import_react.default.cloneElement(child, {
      space,
      spaceFlex,
      separator,
      key: child.key
    })), isEmpty || !child || child.key && !isZStack ? final.push(child) : final.push(/* @__PURE__ */(0, import_jsx_runtime.jsx)(import_react.default.Fragment, {
      children: isZStack ? /* @__PURE__ */(0, import_jsx_runtime.jsx)(AbsoluteFill, {
        children: child
      }) : child
    }, `${index}0t`)), (0, import_Unspaced.isUnspaced)(child) && index === 0 || isZStack) continue;
    const next = childrenList[index + 1];
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
  return process.env.NODE_ENV === "development" && props.debug && console.info("  Spaced children", final, props), final;
}
function createSpacer({
  key,
  direction,
  space,
  spaceFlex
}) {
  return /* @__PURE__ */(0, import_jsx_runtime.jsx)(import_Spacer.Spacer, {
    size: space,
    direction,
    ...(typeof spaceFlex < "u" && {
      flex: spaceFlex === !0 ? 1 : spaceFlex === !1 ? 0 : spaceFlex
    })
  }, key);
}
const AbsoluteFill = (0, import_web.createComponent)({
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