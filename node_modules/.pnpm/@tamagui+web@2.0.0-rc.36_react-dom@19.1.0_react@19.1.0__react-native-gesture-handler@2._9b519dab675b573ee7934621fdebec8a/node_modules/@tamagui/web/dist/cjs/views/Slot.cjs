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
var Slot_exports = {};
__export(Slot_exports, {
  Slot: () => Slot,
  Slottable: () => Slottable
});
module.exports = __toCommonJS(Slot_exports);
var import_compose_refs = require("@tamagui/compose-refs"),
  import_constants = require("@tamagui/constants"),
  import_react = require("react"),
  import_mergeSlotStyleProps = require("../helpers/mergeSlotStyleProps.cjs"),
  import_jsx_runtime = require("react/jsx-runtime");
const Slot = (0, import_react.memo)((0, import_react.forwardRef)(function (props, forwardedRef) {
    const {
      children,
      ...slotProps
    } = props;
    if ((0, import_react.isValidElement)(children)) {
      const mergedProps = mergeSlotProps(children, slotProps);
      return (0, import_react.cloneElement)(children, children.type.avoidForwardRef ? mergedProps : {
        ...mergedProps,
        ref: (0, import_compose_refs.composeRefs)(forwardedRef, children.props.ref)
      });
    }
    return import_react.Children.count(children) > 1 ? import_react.Children.only(null) : null;
  })),
  Slottable = ({
    children
  }) => /* @__PURE__ */(0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, {
    children
  });
Slottable.displayName = "Slottable";
const pressMap = import_constants.isWeb ? {
  onPress: "onClick",
  onPressOut: "onMouseUp",
  onPressIn: "onMouseDown"
} : {};
function mergeSlotProps(child, slotProps) {
  const childProps = child.props,
    isHTMLChild = typeof child.type == "string";
  if (isHTMLChild) for (const key in pressMap) key in slotProps && (slotProps[pressMap[key]] = slotProps[key], delete slotProps[key]);
  const merged = (0, import_mergeSlotStyleProps.mergeSlotStyleProps)(slotProps, childProps);
  if (isHTMLChild) for (const key in pressMap) key in merged && (merged[pressMap[key]] = merged[key], delete merged[key]);
  return merged;
}