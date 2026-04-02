function resolveAnimationDriver(driver) {
  return driver ? typeof driver.useAnimations == "function" ? driver : "default" in driver && typeof driver.default?.useAnimations == "function" ? driver.default : null : null;
}
export { resolveAnimationDriver };
//# sourceMappingURL=resolveAnimationDriver.mjs.map
