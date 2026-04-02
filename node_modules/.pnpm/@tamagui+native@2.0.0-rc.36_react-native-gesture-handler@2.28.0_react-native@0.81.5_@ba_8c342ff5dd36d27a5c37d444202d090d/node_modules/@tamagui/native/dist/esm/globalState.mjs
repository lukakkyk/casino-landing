function createGlobalState(key, defaultValue) {
  const GLOBAL_KEY = `__tamagui_${key}__`;
  function getGlobalState() {
    const g = globalThis;
    return g[GLOBAL_KEY] || (g[GLOBAL_KEY] = defaultValue), g[GLOBAL_KEY];
  }
  function setGlobalState(newState) {
    globalThis[GLOBAL_KEY] = newState;
  }
  return {
    get: getGlobalState,
    set: setGlobalState
  };
}
export { createGlobalState };
//# sourceMappingURL=globalState.mjs.map
