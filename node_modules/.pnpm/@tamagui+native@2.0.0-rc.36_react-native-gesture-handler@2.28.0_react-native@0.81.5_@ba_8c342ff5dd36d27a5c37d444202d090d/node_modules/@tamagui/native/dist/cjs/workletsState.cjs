var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
    for (var name in all) __defProp(target, name, {
      get: all[name],
      enumerable: !0
    });
  },
  __copyProps = (to, from, except, desc) => {
    if (from && typeof from == "object" || typeof from == "function") for (let key of __getOwnPropNames(from)) !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, {
      get: () => from[key],
      enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
    });
    return to;
  };
var __toCommonJS = mod => __copyProps(__defProp({}, "__esModule", {
  value: !0
}), mod);
var workletsState_exports = {};
__export(workletsState_exports, {
  getWorklets: () => getWorklets
});
module.exports = __toCommonJS(workletsState_exports);
var import_globalState = require("./globalState.cjs");
const state = (0, import_globalState.createGlobalState)("worklets", {
  enabled: !1,
  Worklets: null,
  useRunOnJS: null,
  useWorklet: null,
  createWorkletContextValue: null
});
function getWorklets() {
  return {
    get isEnabled() {
      return state.get().enabled;
    },
    get state() {
      return state.get();
    },
    set(updates) {
      Object.assign(state.get(), updates);
    }
  };
}