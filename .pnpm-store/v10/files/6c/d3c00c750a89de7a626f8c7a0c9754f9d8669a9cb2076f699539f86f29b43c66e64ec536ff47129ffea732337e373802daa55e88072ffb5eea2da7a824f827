import { mergeIfNotShallowEqual } from "@tamagui/is-equal-shallow";
import { getMediaState } from "../hooks/useMedia.native.js";
var subscribeToContextGroup = function (props) {
    var {
      pseudoGroups,
      mediaGroups,
      groupContext
    } = props;
    if (pseudoGroups || mediaGroups) {
      process.env.NODE_ENV === "development" && !groupContext && console.debug("No context group found");
      var disposables = /* @__PURE__ */new Set();
      if (pseudoGroups) {
        var _iteratorNormalCompletion = !0,
          _didIteratorError = !1,
          _iteratorError = void 0;
        try {
          for (var _iterator = pseudoGroups[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = !0) {
            var name = _step.value;
            disposables.add(createGroupListener(name, props));
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
      if (mediaGroups) {
        var _iteratorNormalCompletion1 = !0,
          _didIteratorError1 = !1,
          _iteratorError1 = void 0;
        try {
          for (var _iterator1 = mediaGroups[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = !0) {
            var name1 = _step1.value;
            disposables.add(createGroupListener(name1, props));
          }
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
      return function () {
        disposables.forEach(function (d) {
          return d();
        });
      };
    }
  },
  createGroupListener = function (name, param) {
    var {
        setStateShallow,
        pseudoGroups,
        mediaGroups,
        groupContext
      } = param,
      parent = groupContext?.[name];
    if (!parent) return function () {};
    var dispose = parent.subscribe(function (param2) {
      var {
        layout,
        pseudo
      } = param2;
      setStateShallow(function (prev) {
        var _prev_group,
          didChange = !1,
          group = ((_prev_group = prev.group) === null || _prev_group === void 0 ? void 0 : _prev_group[name]) || {
            pseudo: {},
            media: {}
          };
        if (pseudo && pseudoGroups?.has(name)) {
          var _group;
          (_group = group).pseudo || (_group.pseudo = {});
          var next = mergeIfNotShallowEqual(group.pseudo, pseudo);
          next !== group.pseudo && (Object.assign(group.pseudo, pseudo), didChange = !0);
        } else if (layout && mediaGroups) {
          var _group1;
          (_group1 = group).media || (_group1.media = {});
          var mediaState = getMediaState(mediaGroups, layout),
            next1 = mergeIfNotShallowEqual(group.media, mediaState);
          next1 !== group.media && (Object.assign(group.media, next1), didChange = !0);
        }
        return didChange ? {
          group: {
            ...prev.group,
            [name]: group
          }
        } : prev;
      });
    });
    return function () {
      dispose(), setStateShallow({
        group: {}
      });
    };
  };
export { subscribeToContextGroup };
//# sourceMappingURL=subscribeToContextGroup.native.js.map
