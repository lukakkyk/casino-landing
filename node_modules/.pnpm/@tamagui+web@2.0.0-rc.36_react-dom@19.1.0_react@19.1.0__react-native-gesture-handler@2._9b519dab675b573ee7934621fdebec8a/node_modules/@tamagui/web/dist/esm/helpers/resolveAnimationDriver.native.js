function resolveAnimationDriver(driver) {
  var _driver_default;
  return driver ? typeof driver.useAnimations == "function" ? driver : "default" in driver && typeof ((_driver_default = driver.default) === null || _driver_default === void 0 ? void 0 : _driver_default.useAnimations) == "function" ? driver.default : null : null;
}
export { resolveAnimationDriver };
//# sourceMappingURL=resolveAnimationDriver.native.js.map
