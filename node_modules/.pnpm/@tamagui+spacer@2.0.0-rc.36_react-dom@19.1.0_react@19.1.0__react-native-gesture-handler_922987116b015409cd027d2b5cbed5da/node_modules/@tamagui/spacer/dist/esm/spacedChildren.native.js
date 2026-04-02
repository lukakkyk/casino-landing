import { jsx as _jsx } from "react/jsx-runtime";
import { createComponent } from "@tamagui/web";
import React from "react";
import { Spacer } from "./Spacer.native.js";
import { isUnspaced } from "./Unspaced.native.js";
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
  var childrenList = areChildrenArray ? children : React.Children.toArray(children),
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
      if (!isEmpty && /* @__PURE__ */React.isValidElement(child) && !((_child_type = child.type) === null || _child_type === void 0) && _child_type.shouldForwardSpace && (child = /* @__PURE__ */React.cloneElement(child, {
        space,
        spaceFlex,
        separator,
        key: child.key
      })), isEmpty || !child || child.key && !isZStack ? final.push(child) : final.push(/* @__PURE__ */_jsx(React.Fragment, {
        children: isZStack ? /* @__PURE__ */_jsx(AbsoluteFill, {
          children: child
        }) : child
      }, `${index}0t`)), !(isUnspaced(child) && index === 0) && !isZStack) {
        var next = childrenList[index + 1];
        next && !isEmpty && !isUnspaced(next) && (separator ? (hasSpace && final.push(createSpacer({
          key: `_${index}_00t`,
          direction,
          space,
          spaceFlex
        })), final.push(/* @__PURE__ */_jsx(React.Fragment, {
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
  return /* @__PURE__ */_jsx(Spacer, {
    // @ts-ignore
    size: space,
    // @ts-ignore
    direction,
    ...(typeof spaceFlex < "u" && {
      flex: spaceFlex === !0 ? 1 : spaceFlex === !1 ? 0 : spaceFlex
    })
  }, key);
}
var AbsoluteFill = createComponent({
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
export { spacedChildren };
//# sourceMappingURL=spacedChildren.native.js.map
