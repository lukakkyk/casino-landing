import { createComponent } from "@tamagui/web";
import React from "react";
import { Spacer } from "./Spacer.mjs";
import { isUnspaced } from "./Unspaced.mjs";
import { jsx } from "react/jsx-runtime";
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
  const childrenList = areChildrenArray ? children : React.Children.toArray(children);
  if (childrenList.length <= 1 && !isZStack && !childrenList[0]?.type?.shouldForwardSpace) return children;
  const final = [];
  for (let [index, child] of childrenList.entries()) {
    const isEmpty = child == null || Array.isArray(child) && child.length === 0;
    if (!isEmpty && React.isValidElement(child) && child.type?.shouldForwardSpace && (child = React.cloneElement(child, {
      space,
      spaceFlex,
      separator,
      key: child.key
    })), isEmpty || !child || child.key && !isZStack ? final.push(child) : final.push(/* @__PURE__ */jsx(React.Fragment, {
      children: isZStack ? /* @__PURE__ */jsx(AbsoluteFill, {
        children: child
      }) : child
    }, `${index}0t`)), isUnspaced(child) && index === 0 || isZStack) continue;
    const next = childrenList[index + 1];
    next && !isEmpty && !isUnspaced(next) && (separator ? (hasSpace && final.push(createSpacer({
      key: `_${index}_00t`,
      direction,
      space,
      spaceFlex
    })), final.push(/* @__PURE__ */jsx(React.Fragment, {
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
  return /* @__PURE__ */jsx(Spacer, {
    size: space,
    direction,
    ...(typeof spaceFlex < "u" && {
      flex: spaceFlex === !0 ? 1 : spaceFlex === !1 ? 0 : spaceFlex
    })
  }, key);
}
const AbsoluteFill = createComponent({
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
//# sourceMappingURL=spacedChildren.mjs.map
