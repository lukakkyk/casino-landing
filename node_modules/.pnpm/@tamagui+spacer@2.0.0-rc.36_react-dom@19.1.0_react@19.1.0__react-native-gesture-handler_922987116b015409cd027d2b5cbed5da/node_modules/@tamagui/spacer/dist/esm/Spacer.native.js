import { styled, View } from "@tamagui/web";
var getSpacerSize = function (size, param) {
    var {
      tokens
    } = param;
    size = size === !0 ? "$true" : size;
    var _tokens_space_size,
      sizePx = (_tokens_space_size = tokens.space[size]) !== null && _tokens_space_size !== void 0 ? _tokens_space_size : size;
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
//# sourceMappingURL=Spacer.native.js.map
