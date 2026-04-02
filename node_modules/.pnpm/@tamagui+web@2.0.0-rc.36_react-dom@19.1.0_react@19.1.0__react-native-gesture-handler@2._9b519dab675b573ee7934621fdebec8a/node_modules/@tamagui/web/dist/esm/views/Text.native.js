import { stylePropsTextOnly, validStyles } from "@tamagui/helpers";
import { createComponent } from "../createComponent.native.js";
var ellipsisStyle = {
    numberOfLines: 1,
    lineBreakMode: "clip"
  },
  Text = createComponent({
    componentName: "Text",
    acceptsClassName: !0,
    isText: !0,
    defaultProps: {
      suppressHighlighting: !0
    },
    inlineWhenUnflattened: /* @__PURE__ */new Set(["fontFamily"]),
    variants: {
      ellipsis: {
        true: ellipsisStyle
      }
    },
    validStyles: {
      ...validStyles,
      ...stylePropsTextOnly
    }
  });
export { Text };
//# sourceMappingURL=Text.native.js.map
