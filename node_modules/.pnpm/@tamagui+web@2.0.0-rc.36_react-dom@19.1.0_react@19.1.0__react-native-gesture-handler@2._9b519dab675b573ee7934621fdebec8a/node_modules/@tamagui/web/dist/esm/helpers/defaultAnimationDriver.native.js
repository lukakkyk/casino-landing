var noAnimationDriver = function (method) {
    console.warn(`No animation driver configured. To use ${method}, you must pass \`animations\` to createTamagui. See: https://tamagui.dev/docs/core/animations`);
  },
  createEmptyAnimationDriver = function () {
    return {
      isReactNative: !1,
      inputStyle: "css",
      outputStyle: "css",
      isStub: !0,
      animations: {},
      useAnimations: function () {
        return noAnimationDriver("animations");
      },
      usePresence: function () {
        return noAnimationDriver("usePresence");
      },
      ResetPresence: function () {
        return noAnimationDriver("ResetPresence");
      },
      useAnimatedNumber: function () {
        return noAnimationDriver("useAnimatedNumber");
      },
      useAnimatedNumberStyle: function () {
        return noAnimationDriver("useAnimatedNumberStyle");
      },
      useAnimatedNumbersStyle: function () {
        return noAnimationDriver("useAnimatedNumbersStyle");
      },
      useAnimatedNumberReaction: function () {
        return noAnimationDriver("useAnimatedNumberReaction");
      }
    };
  },
  defaultAnimationDriver = createEmptyAnimationDriver();
export { defaultAnimationDriver };
//# sourceMappingURL=defaultAnimationDriver.native.js.map
