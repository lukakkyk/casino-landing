import React, { useCallback } from "react";

export function Image({
  source,
  contentFit = "cover",
  transition: _transition,
  style,
  onLoad,
  onError,
  placeholder: _placeholder,
  placeholderContentFit: _placeholderContentFit,
  cachePolicy: _cachePolicy,
  recyclingKey: _recyclingKey,
  ...rest
}) {
  const src =
    typeof source === "string"
      ? source
      : typeof source === "number"
        ? String(source)
        : source?.uri;

  const handleLoad = useCallback(() => {
    onLoad?.();
  }, [onLoad]);

  const handleError = useCallback(() => {
    onError?.();
  }, [onError]);

  return React.createElement("img", {
    src,
    alt: "",
    decoding: "async",
    draggable: false,
    onLoad: handleLoad,
    onError: handleError,
    style: {
      objectFit: contentFit,
      display: "block",
      ...style,
    },
    ...rest,
  });
}
