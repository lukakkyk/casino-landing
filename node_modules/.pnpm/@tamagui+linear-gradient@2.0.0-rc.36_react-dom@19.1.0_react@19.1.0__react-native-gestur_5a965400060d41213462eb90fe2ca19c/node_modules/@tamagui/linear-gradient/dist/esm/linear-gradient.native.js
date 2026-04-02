import { jsx as _jsx } from "react/jsx-runtime";
import { getLinearGradient } from "@tamagui/native";
function LinearGradient(props) {
  var state = getLinearGradient().state;
  if (state.enabled && state.Component) {
    var ExpoLinearGradient = state.Component;
    return /* @__PURE__ */_jsx(ExpoLinearGradient, {
      ...props
    });
  }
  console.warn("Warning: Must call import '@tamagui/native/setup-expo-linear-gradient' at root");
}
export { LinearGradient };
//# sourceMappingURL=linear-gradient.native.js.map
