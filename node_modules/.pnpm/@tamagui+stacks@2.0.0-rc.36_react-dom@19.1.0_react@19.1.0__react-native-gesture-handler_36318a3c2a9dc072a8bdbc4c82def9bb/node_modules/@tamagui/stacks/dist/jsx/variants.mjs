import { getElevation } from "./getElevation.mjs";
const elevate = {
    true: (_, extras) => getElevation(extras.props.size, extras)
  },
  bordered = (val, {
    props
  }) => ({
    // TODO size it with size in '...size'
    borderWidth: typeof val == "number" ? val : 1,
    borderColor: "$borderColor"
  }),
  circularStyle = {
    borderRadius: 1e5,
    padding: 0
  },
  circular = {
    true: (_, {
      props,
      tokens
    }) => {
      if (!("size" in props)) return circularStyle;
      const size = typeof props.size == "number" ? props.size : tokens.size[props.size];
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
//# sourceMappingURL=variants.mjs.map
