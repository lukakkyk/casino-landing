export * from "./useNativeRef.native.js";
export * from "./types.native.js";
import { useNativeRef } from "./useNativeRef.native.js";
function getWebElement() {
  throw new Error("getWebElement is only available on web");
}
export { getWebElement, useNativeRef as useWebRef };
//# sourceMappingURL=index.native.js.map
