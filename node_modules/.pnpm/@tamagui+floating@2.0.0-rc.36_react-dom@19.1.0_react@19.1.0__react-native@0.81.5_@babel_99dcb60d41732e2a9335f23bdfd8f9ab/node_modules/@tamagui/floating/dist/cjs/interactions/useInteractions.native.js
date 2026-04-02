"use strict";

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
var useInteractions_exports = {};
__export(useInteractions_exports, {
  useInteractions: () => useInteractions
});
module.exports = __toCommonJS(useInteractions_exports);
function _type_of(obj) {
  "@swc/helpers - typeof";

  return obj && typeof Symbol < "u" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function useInteractions(propsList) {
  var filtered = propsList.filter(Boolean),
    referenceFns = /* @__PURE__ */new Map(),
    floatingFns = /* @__PURE__ */new Map(),
    itemFns = /* @__PURE__ */new Map(),
    referenceStatic = {},
    floatingStatic = {},
    _iteratorNormalCompletion = !0,
    _didIteratorError = !1,
    _iteratorError = void 0;
  try {
    for (var _iterator = filtered[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = !0) {
      var props = _step.value;
      props.reference && collectProps(props.reference, referenceFns, referenceStatic), props.floating && collectProps(props.floating, floatingFns, floatingStatic), props.item && _type_of(props.item) === "object" && collectProps(props.item, itemFns, {});
    }
  } catch (err) {
    _didIteratorError = !0, _iteratorError = err;
  } finally {
    try {
      !_iteratorNormalCompletion && _iterator.return != null && _iterator.return();
    } finally {
      if (_didIteratorError) throw _iteratorError;
    }
  }
  return {
    getReferenceProps(userProps) {
      return buildProps(referenceFns, referenceStatic, userProps);
    },
    getFloatingProps(userProps) {
      return buildProps(floatingFns, floatingStatic, userProps);
    },
    getItemProps(userProps) {
      return buildProps(itemFns, {}, userProps);
    }
  };
}
function collectProps(props, fnMap, staticMap) {
  var _iteratorNormalCompletion = !0,
    _didIteratorError = !1,
    _iteratorError = void 0;
  try {
    for (var _iterator = Object.keys(props)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = !0) {
      var key = _step.value;
      if (typeof props[key] == "function") {
        var arr = fnMap.get(key);
        arr || (arr = [], fnMap.set(key, arr)), arr.push(props[key]);
      } else staticMap[key] = props[key];
    }
  } catch (err) {
    _didIteratorError = !0, _iteratorError = err;
  } finally {
    try {
      !_iteratorNormalCompletion && _iterator.return != null && _iterator.return();
    } finally {
      if (_didIteratorError) throw _iteratorError;
    }
  }
}
function buildProps(fnMap, staticProps, userProps) {
  var result = {
      ...staticProps
    },
    _iteratorNormalCompletion = !0,
    _didIteratorError = !1,
    _iteratorError = void 0;
  try {
    for (var _loop = function () {
        var [key, fns] = _step.value,
          hookHandler = function () {
            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
            var _iteratorNormalCompletion2 = !0,
              _didIteratorError2 = !1,
              _iteratorError2 = void 0;
            try {
              for (var _iterator2 = fns[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = !0) {
                var fn = _step2.value,
                  result2 = fn(...args);
                if (result2 !== void 0) return result2;
              }
            } catch (err) {
              _didIteratorError2 = !0, _iteratorError2 = err;
            } finally {
              try {
                !_iteratorNormalCompletion2 && _iterator2.return != null && _iterator2.return();
              } finally {
                if (_didIteratorError2) throw _iteratorError2;
              }
            }
          };
        result[key] = hookHandler;
      }, _iterator = fnMap[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = !0) _loop();
  } catch (err) {
    _didIteratorError = !0, _iteratorError = err;
  } finally {
    try {
      !_iteratorNormalCompletion && _iterator.return != null && _iterator.return();
    } finally {
      if (_didIteratorError) throw _iteratorError;
    }
  }
  if (userProps) {
    var _iteratorNormalCompletion1 = !0,
      _didIteratorError1 = !1,
      _iteratorError1 = void 0;
    try {
      for (var _loop1 = function () {
          var key = _step1.value;
          if (key === "style") result.style = {
            ...result.style,
            ...userProps.style
          };else if (typeof userProps[key] == "function" && result[key]) {
            var hookFn = result[key],
              userFn = userProps[key];
            result[key] = function () {
              for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
              userFn(...args), hookFn(...args);
            };
          } else result[key] = userProps[key];
        }, _iterator1 = Object.keys(userProps)[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = !0) _loop1();
    } catch (err) {
      _didIteratorError1 = !0, _iteratorError1 = err;
    } finally {
      try {
        !_iteratorNormalCompletion1 && _iterator1.return != null && _iterator1.return();
      } finally {
        if (_didIteratorError1) throw _iteratorError1;
      }
    }
  }
  return result;
}
//# sourceMappingURL=useInteractions.native.js.map
