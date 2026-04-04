import { View } from 'react-native-web';

const Animated = { View };

export default Animated;

const noop = () => {};
const identity = (v) => v;
const noopAnimation = (value) => value;

export const useSharedValue = (init) => ({ value: init });
export const useAnimatedStyle = () => ({});
export const withTiming = noopAnimation;
export const withSpring = noopAnimation;
export const withDelay = (_delay, anim) => anim;
export const withRepeat = (anim) => anim;
export const withSequence = (...anims) => anims[0];
export const Easing = {
  linear: identity,
  ease: identity,
  in: () => identity,
  out: () => identity,
  inOut: () => identity,
};
