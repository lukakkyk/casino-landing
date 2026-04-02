import { View, styled } from "@tamagui/web";
import { jsx } from "react/jsx-runtime";
const StyledImage = styled(View, {
    name: "Image",
    render: "img"
  }),
  Image = StyledImage.styleable((inProps, ref) => {
    const {
      // exclude native only props
      blurRadius,
      capInsets,
      defaultSource,
      fadeDuration,
      loadingIndicatorSource,
      onLoadEnd,
      onPartialLoad,
      progressiveRenderingEnabled,
      resizeMethod,
      tintColor,
      ...rest
    } = inProps;
    return /* @__PURE__ */jsx(StyledImage, {
      ref,
      ...rest
    });
  }, {
    staticConfig: {
      memo: !0
    }
  }),
  func = () => {};
Image.getSize = func;
Image.getSizeWithHeaders = func;
Image.prefetch = func;
Image.prefetchWithMetadata = func;
Image.abortPrefetch = func;
Image.queryCache = func;
export { Image };
//# sourceMappingURL=Image.mjs.map
