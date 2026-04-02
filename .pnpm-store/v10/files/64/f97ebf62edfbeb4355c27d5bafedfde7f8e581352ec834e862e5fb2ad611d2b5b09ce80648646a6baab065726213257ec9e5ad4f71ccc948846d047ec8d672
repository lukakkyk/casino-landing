import { getElevation } from "./getElevation.native.js";
var elevate = {
    true: function (_, extras) {
      return getElevation(extras.props.size, extras);
    }
  },
  bordered = function (val, param) {
    var {
      props
    } = param;
    return {
      // TODO size it with size in '...size'
      borderWidth: typeof val == "number" ? val : 1,
      borderColor: "$borderColor"
    };
  },
  circularStyle = {
    borderRadius: 1e5,
    padding: 0
  },
  circular = {
    true: function (_, param) {
      var {
        props,
        tokens
      } = param;
      if (!("size" in props)) return circularStyle;
      var size = typeof props.size == "number" ? props.size : tokens.size[props.size];
      return {
        ...circularStyle,
        width: size,
        height: size,
        maxWidth: size,
        maxHeight: size,
        minWidth: size,
        minHeight: size
      };
    }
  };
export { bordered, circular, elevate };
//# sourceMappingURL=variants.native.js.map
