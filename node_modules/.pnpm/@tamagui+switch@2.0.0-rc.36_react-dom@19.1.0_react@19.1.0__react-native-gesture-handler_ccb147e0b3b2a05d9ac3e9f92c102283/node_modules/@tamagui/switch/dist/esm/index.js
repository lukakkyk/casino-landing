import { createSwitch } from "./createSwitch.mjs";
import { SwitchFrame, SwitchThumb } from "./Switch.mjs";
export * from "./createSwitch.mjs";
export * from "./StyledContext.mjs";
export * from "./Switch.mjs";
export * from "./types.mjs";
import { useSwitchNative } from "./useSwitchNative.mjs";
const Switch = createSwitch({
  Frame: SwitchFrame,
  Thumb: SwitchThumb
});
export { Switch, useSwitchNative };
//# sourceMappingURL=index.js.map
