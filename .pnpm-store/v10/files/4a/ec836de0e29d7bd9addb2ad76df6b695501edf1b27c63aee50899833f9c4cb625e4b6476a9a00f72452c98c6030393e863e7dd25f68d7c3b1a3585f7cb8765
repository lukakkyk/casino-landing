import { jsx as _jsx } from "react/jsx-runtime";
import { isWeb } from "@tamagui/constants";
import { getVariableValue, styled } from "@tamagui/core";
import { getSize } from "@tamagui/get-token";
import { YStack } from "@tamagui/stacks";
import * as React from "react";
import { View } from "react-native";
import { ARROW_KEYS, PAGE_KEYS, useSliderContext } from "./constants.native.js";
function _instanceof(left, right) {
  return right != null && typeof Symbol < "u" && right[Symbol.hasInstance] ? !!right[Symbol.hasInstance](left) : left instanceof right;
}
var SliderFrame = styled(YStack, {
    position: "relative",
    variants: {
      orientation: {
        horizontal: {},
        vertical: {}
      },
      size: function (val, extras) {
        if (val) {
          var orientation = extras.props.orientation,
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
    }
  }),
  SliderImpl = /* @__PURE__ */React.forwardRef(function (props, forwardedRef) {
    var {
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
      handleResponderGrant = React.useCallback(function (event) {
        var _props_onResponderGrant;
        (_props_onResponderGrant = props.onResponderGrant) === null || _props_onResponderGrant === void 0 || _props_onResponderGrant.call(props, event);
        var target = event.target,
          thumbIndex = context.thumbs.get(target),
          isStartingOnThumb = thumbIndex !== void 0;
        isWeb && _instanceof(target, HTMLElement) && context.thumbs.has(target) && target.focus(), !isWeb && isStartingOnThumb && (context.valueIndexToChangeRef.current = thumbIndex), onSlideStart(event, isStartingOnThumb ? "thumb" : "track");
      }, [context, onSlideStart, props.onResponderGrant]),
      handleResponderMove = React.useCallback(function (event) {
        var _props_onResponderMove;
        (_props_onResponderMove = props.onResponderMove) === null || _props_onResponderMove === void 0 || _props_onResponderMove.call(props, event), event.stopPropagation(), onSlideMove(event);
      }, [onSlideMove, props.onResponderMove]),
      handleResponderRelease = React.useCallback(function (event) {
        var _props_onResponderRelease;
        (_props_onResponderRelease = props.onResponderRelease) === null || _props_onResponderRelease === void 0 || _props_onResponderRelease.call(props, event), onSlideEnd(event);
      }, [onSlideEnd, props.onResponderRelease]);
    return (
      // wrap with plain RN View for responder events - tamagui views no longer handle responder events on web
      /* @__PURE__ */
      _jsx(SliderFrame, {
        size: "$4",
        ref: forwardedRef,
        ...sliderProps,
        "data-orientation": sliderProps.orientation,
        ...(isWeb && {
          onKeyDown: function (event) {
            event.key === "Home" ? (onHomeKeyDown(event), event.preventDefault()) : event.key === "End" ? (onEndKeyDown(event), event.preventDefault()) : PAGE_KEYS.concat(ARROW_KEYS).includes(event.key) && (onStepKeyDown(event), event.preventDefault());
          }
        }),
        children: /* @__PURE__ */_jsx(View, {
          onMoveShouldSetResponderCapture: function () {
            return !0;
          },
          onMoveShouldSetResponder: function () {
            return !0;
          },
          onStartShouldSetResponder: function () {
            return !0;
          },
          onResponderTerminationRequest: function () {
            return !1;
          },
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
//# sourceMappingURL=SliderImpl.native.js.map
