import { styled, View } from "@tamagui/web";
const getSpacerSize = (size, {
    tokens
  }) => {
    size = size === !0 ? "$true" : size;
    const sizePx = tokens.space[size] ?? size;
    return {
      width: sizePx,
      height: sizePx,
      minWidth: sizePx,
      minHeight: sizePx
    };
  },
  Spacer = styled(View, {
    name: "Spacer",
    pointerEvents: "none",
    render: "span",
    variants: {
      size: {
        "...size": getSpacerSize,
        "...": getSpacerSize
      },
      direction: {
        horizontal: {
          height: 0,
          minHeight: 0
        },
        vertical: {
          width: 0,
          minWidth: 0
        },
        both: {}
      }
    },
    defaultVariants: {
      // @ts-ignore
      size: !0
    }
  });
export { Spacer };
//# sourceMappingURL=Spacer.mjs.map
