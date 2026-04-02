import { useEffect, useRef } from "react";
var canUseDOM = function () {
    return typeof window < "u" && !!window.document && !!window.document.createElement;
  },
  refCount = 0,
  savedScrollY = 0,
  previousStyles = null;
function isIOSSafari() {
  if (typeof navigator > "u") return !1;
  var ua = navigator.userAgent,
    isIOS = /iPad|iPhone|iPod/.test(ua) || navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1,
    isSafari = /^((?!chrome|android).)*safari/i.test(ua);
  return isIOS && isSafari;
}
var useDisableBodyScroll = function (enabled) {
  var wasEnabled = useRef(!1);
  useEffect(function () {
    if (canUseDOM()) {
      if (enabled && !wasEnabled.current) {
        if (wasEnabled.current = !0, ++refCount === 1) {
          var html = document.documentElement,
            body = document.body;
          savedScrollY = window.scrollY, previousStyles = {
            htmlOverflow: html.style.overflow,
            htmlScrollbarGutter: html.style.scrollbarGutter,
            bodyPosition: body.style.position,
            bodyTop: body.style.top,
            bodyWidth: body.style.width,
            bodyOverflow: body.style.overflow,
            bodyOverscrollBehavior: body.style.overscrollBehavior
          }, html.style.scrollbarGutter = "stable", html.style.overflow = "hidden", body.style.overscrollBehavior = "none", isIOSSafari() && (body.style.position = "fixed", body.style.top = `-${savedScrollY}px`, body.style.width = "100%", body.style.overflow = "hidden");
        }
      } else if (!enabled && wasEnabled.current && (wasEnabled.current = !1, --refCount === 0 && previousStyles)) {
        var html1 = document.documentElement,
          body1 = document.body;
        html1.style.overflow = previousStyles.htmlOverflow, html1.style.scrollbarGutter = previousStyles.htmlScrollbarGutter, body1.style.position = previousStyles.bodyPosition, body1.style.top = previousStyles.bodyTop, body1.style.width = previousStyles.bodyWidth, body1.style.overflow = previousStyles.bodyOverflow, body1.style.overscrollBehavior = previousStyles.bodyOverscrollBehavior, savedScrollY > 0 && window.scrollTo(0, savedScrollY), previousStyles = null, savedScrollY = 0;
      }
    }
  }, [enabled]), useEffect(function () {
    return function () {
      if (wasEnabled.current && (wasEnabled.current = !1, --refCount === 0 && previousStyles)) {
        var html = document.documentElement,
          body = document.body;
        html.style.overflow = previousStyles.htmlOverflow, html.style.scrollbarGutter = previousStyles.htmlScrollbarGutter, body.style.position = previousStyles.bodyPosition, body.style.top = previousStyles.bodyTop, body.style.width = previousStyles.bodyWidth, body.style.overflow = previousStyles.bodyOverflow, body.style.overscrollBehavior = previousStyles.bodyOverscrollBehavior, savedScrollY > 0 && window.scrollTo(0, savedScrollY), previousStyles = null, savedScrollY = 0;
      }
    };
  }, []);
};
export { useDisableBodyScroll };
//# sourceMappingURL=useDisableScroll.native.js.map
