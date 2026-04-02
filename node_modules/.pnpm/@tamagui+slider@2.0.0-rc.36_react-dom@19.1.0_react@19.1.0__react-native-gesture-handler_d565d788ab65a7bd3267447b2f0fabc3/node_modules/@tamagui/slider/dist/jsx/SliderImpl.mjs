import { isWeb } from "@tamagui/constants";
import { getVariableValue, styled } from "@tamagui/core";
import { getSize } from "@tamagui/get-token";
import { YStack } from "@tamagui/stacks";
import * as React from "react";
import { View } from "react-native-web";
import { ARROW_KEYS, PAGE_KEYS, useSliderContext } from "./constants.mjs";
import { jsx } from "react/jsx-runtime";
const SliderFrame = styled(YStack, {
    position: "relative",
    variants: {
      orientation: {
        horizontal: {},
        vertical: {}
      },
      size: (val, extras) => {
        if (!val) return;
        const orientation = extras.props.orientation,
          size = Math.round(getVariableValue(getSize(val)) / 6);
        return orientation === "horizontal" ? {
          height: size,
          borderRadius: size,
          justifyContent: "center"
        } : {
          width: size,
          borderRadius: size,
          alignItems: "center"
        };
      }
    }
  }),
  SliderImpl = React.forwardRef((props, forwardedRef) => {
    const {
        __scopeSlider,
        onSlideStart,
        onSlideMove,
        onSlideEnd,
        onHomeKeyDown,
        onEndKeyDown,
        onStepKeyDown,
        children,
        ...sliderProps
      } = props,
      context = useSliderContext(__scopeSlider),
      handleResponderGrant = React.useCallback(event => {
        props.onResponderGrant?.(event);
        const target = event.target,
          thumbIndex = context.thumbs.get(target),
          isStartingOnThumb = thumbIndex !== void 0;
        isWeb && target instanceof HTMLElement && context.thumbs.has(target) && target.focus(), !isWeb && isStartingOnThumb && (context.valueIndexToChangeRef.current = thumbIndex), onSlideStart(event, isStartingOnThumb ? "thumb" : "track");
      }, [context, onSlideStart, props.onResponderGrant]),
      handleResponderMove = React.useCallback(event => {
        props.onResponderMove?.(event), event.stopPropagation(), onSlideMove(event);
      }, [onSlideMove, props.onResponderMove]),
      handleResponderRelease = React.useCallback(event => {
        props.onResponderRelease?.(event), onSlideEnd(event);
      }, [onSlideEnd, props.onResponderRelease]);
    return (
      // wrap with plain RN View for responder events - tamagui views no longer handle responder events on web
      /* @__PURE__ */
      jsx(SliderFrame, {
        size: "$4",
        ref: forwardedRef,
        ...sliderProps,
        "data-orientation": sliderProps.orientation,
        ...(isWeb && {
          onKeyDown: event => {
            event.key === "Home" ? (onHomeKeyDown(event), event.preventDefault()) : event.key === "End" ? (onEndKeyDown(event), event.preventDefault()) : PAGE_KEYS.concat(ARROW_KEYS).includes(event.key) && (onStepKeyDown(event), event.preventDefault());
          }
        }),
        children: /* @__PURE__ */jsx(View, {
          onMoveShouldSetResponderCapture: () => !0,
          onMoveShouldSetResponder: () => !0,
          onStartShouldSetResponder: () => !0,
          onResponderTerminationRequest: () => !1,
          onResponderGrant: handleResponderGrant,
          onResponderMove: handleResponderMove,
          onResponderRelease: handleResponderRelease,
          style: {
            inset: 0,
            position: "absolute"
          },
          children
        })
      })
    );
  });
export { SliderFrame, SliderImpl };
//# sourceMappingURL=SliderImpl.mjs.map
