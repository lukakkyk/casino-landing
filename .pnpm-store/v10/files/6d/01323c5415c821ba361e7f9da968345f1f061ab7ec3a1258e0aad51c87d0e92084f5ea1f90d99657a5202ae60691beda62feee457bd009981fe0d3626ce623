import { clearTimeoutIfSet, contains, getTarget } from "./utils.mjs";
function isPointInPolygon(point, polygon) {
  const [x, y] = point;
  let isInside2 = !1;
  const length = polygon.length;
  for (let i = 0, j = length - 1; i < length; j = i++) {
    const [xi, yi] = polygon[i] || [0, 0],
      [xj, yj] = polygon[j] || [0, 0];
    yi >= y != yj >= y && x <= (xj - xi) * (y - yi) / (yj - yi) + xi && (isInside2 = !isInside2);
  }
  return isInside2;
}
function isInside(point, rect) {
  return point[0] >= rect.x && point[0] <= rect.x + rect.width && point[1] >= rect.y && point[1] <= rect.y + rect.height;
}
let debugSvg = null;
function debugDrawPolygon(polygon, trough, cursor, anchor) {
  if (debugSvg || (debugSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg"), debugSvg.id = "__safe-polygon-debug", Object.assign(debugSvg.style, {
    position: "fixed",
    inset: "0",
    width: "100vw",
    height: "100vh",
    pointerEvents: "none",
    zIndex: "999999"
  }), document.body.appendChild(debugSvg)), debugSvg.innerHTML = "", trough.length) {
    const troughEl = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
    troughEl.setAttribute("points", trough.map(p => p.join(",")).join(" ")), troughEl.setAttribute("fill", "rgba(0,100,255,0.15)"), troughEl.setAttribute("stroke", "rgba(0,100,255,0.6)"), troughEl.setAttribute("stroke-width", "1"), debugSvg.appendChild(troughEl);
  }
  if (polygon.length) {
    const polyEl = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
    polyEl.setAttribute("points", polygon.map(p => p.join(",")).join(" ")), polyEl.setAttribute("fill", "rgba(255,50,50,0.2)"), polyEl.setAttribute("stroke", "rgba(255,50,50,0.8)"), polyEl.setAttribute("stroke-width", "1.5"), debugSvg.appendChild(polyEl);
  }
  const anchorCircle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  anchorCircle.setAttribute("cx", String(anchor[0])), anchorCircle.setAttribute("cy", String(anchor[1])), anchorCircle.setAttribute("r", "5"), anchorCircle.setAttribute("fill", "lime"), anchorCircle.setAttribute("stroke", "darkgreen"), anchorCircle.setAttribute("stroke-width", "1.5"), debugSvg.appendChild(anchorCircle);
  const cursorCircle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  cursorCircle.setAttribute("cx", String(cursor[0])), cursorCircle.setAttribute("cy", String(cursor[1])), cursorCircle.setAttribute("r", "4"), cursorCircle.setAttribute("fill", "yellow"), cursorCircle.setAttribute("stroke", "orange"), cursorCircle.setAttribute("stroke-width", "1.5"), debugSvg.appendChild(cursorCircle);
}
function debugClear() {
  debugSvg && (debugSvg.remove(), debugSvg = null);
}
function safePolygon(options = {}) {
  const {
      buffer = 0.5,
      blockPointerEvents = !1,
      requireIntent = !0,
      __debug = !1
    } = options,
    timeoutRef = {
      current: -1
    };
  let hasLanded = !1,
    lastX = null,
    lastY = null,
    lastCursorTime = typeof performance < "u" ? performance.now() : 0;
  function getCursorSpeed(x, y) {
    const currentTime = performance.now(),
      elapsedTime = currentTime - lastCursorTime;
    if (lastX === null || lastY === null || elapsedTime === 0) return lastX = x, lastY = y, lastCursorTime = currentTime, null;
    const deltaX = x - lastX,
      deltaY = y - lastY,
      speed = Math.sqrt(deltaX * deltaX + deltaY * deltaY) / elapsedTime;
    return lastX = x, lastY = y, lastCursorTime = currentTime, speed;
  }
  const fn = ({
    x,
    y,
    placement,
    elements,
    onClose
  }) => (hasLanded = !1, lastX = null, lastY = null, function (event) {
    function close() {
      clearTimeoutIfSet(timeoutRef), onClose();
    }
    clearTimeoutIfSet(timeoutRef);
    const domReference = elements.domReference ?? elements.reference;
    if (!domReference || !elements.floating || placement == null || x == null || y == null) return;
    const {
        clientX,
        clientY
      } = event,
      clientPoint = [clientX, clientY],
      target = getTarget(event),
      isLeave = event.type === "mouseleave",
      isOverFloatingEl = contains(elements.floating, target),
      isOverReferenceEl = contains(domReference, target),
      refRect = domReference.getBoundingClientRect(),
      rect = elements.floating.getBoundingClientRect(),
      side = placement.split("-")[0],
      cursorLeaveFromRight = x > rect.right - rect.width / 2,
      cursorLeaveFromBottom = y > rect.bottom - rect.height / 2,
      isOverReferenceRect = isInside(clientPoint, refRect),
      isFloatingWider = rect.width > refRect.width,
      isFloatingTaller = rect.height > refRect.height,
      left = (isFloatingWider ? refRect : rect).left,
      right = (isFloatingWider ? refRect : rect).right,
      top = (isFloatingTaller ? refRect : rect).top,
      bottom = (isFloatingTaller ? refRect : rect).bottom;
    if (isOverFloatingEl && (hasLanded = !0, !isLeave)) return;
    if (isOverReferenceEl && (hasLanded = !1), isOverReferenceEl && !isLeave) {
      hasLanded = !0;
      return;
    }
    if (!isOverReferenceEl && isOverReferenceRect && !isLeave || isLeave && event.relatedTarget && contains(elements.floating, event.relatedTarget)) return;
    if (side === "top" && y >= refRect.bottom - 1 || side === "bottom" && y <= refRect.top + 1 || side === "left" && x >= refRect.right - 1 || side === "right" && x <= refRect.left + 1) return close();
    let rectPoly = [];
    switch (side) {
      case "top":
        rectPoly = [[left, refRect.top + 1], [left, rect.bottom - 1], [right, rect.bottom - 1], [right, refRect.top + 1]];
        break;
      case "bottom":
        rectPoly = [[left, rect.top + 1], [left, refRect.bottom - 1], [right, refRect.bottom - 1], [right, rect.top + 1]];
        break;
      case "left":
        rectPoly = [[rect.right - 1, bottom], [rect.right - 1, top], [refRect.left + 1, top], [refRect.left + 1, bottom]];
        break;
      case "right":
        rectPoly = [[refRect.right - 1, bottom], [refRect.right - 1, top], [rect.left + 1, top], [rect.left + 1, bottom]];
        break;
    }
    function getPolygon([x2, y2]) {
      switch (side) {
        case "top":
          {
            const cursorPointOne = [isFloatingWider ? x2 + buffer / 2 : cursorLeaveFromRight ? x2 + buffer * 4 : x2 - buffer * 4, y2 + buffer + 1],
              cursorPointTwo = [isFloatingWider ? x2 - buffer / 2 : cursorLeaveFromRight ? x2 + buffer * 4 : x2 - buffer * 4, y2 + buffer + 1],
              commonPoints = [[rect.left, cursorLeaveFromRight || isFloatingWider ? rect.bottom - buffer : rect.top], [rect.right, cursorLeaveFromRight ? isFloatingWider ? rect.bottom - buffer : rect.top : rect.bottom - buffer]];
            return [cursorPointOne, cursorPointTwo, ...commonPoints];
          }
        case "bottom":
          {
            const cursorPointOne = [isFloatingWider ? x2 + buffer / 2 : cursorLeaveFromRight ? x2 + buffer * 4 : x2 - buffer * 4, y2 - buffer],
              cursorPointTwo = [isFloatingWider ? x2 - buffer / 2 : cursorLeaveFromRight ? x2 + buffer * 4 : x2 - buffer * 4, y2 - buffer],
              commonPoints = [[rect.left, cursorLeaveFromRight || isFloatingWider ? rect.top + buffer : rect.bottom], [rect.right, cursorLeaveFromRight ? isFloatingWider ? rect.top + buffer : rect.bottom : rect.top + buffer]];
            return [cursorPointOne, cursorPointTwo, ...commonPoints];
          }
        case "left":
          {
            const cursorPointOne = [x2 + buffer + 1, isFloatingTaller ? y2 + buffer / 2 : cursorLeaveFromBottom ? y2 + buffer * 4 : y2 - buffer * 4],
              cursorPointTwo = [x2 + buffer + 1, isFloatingTaller ? y2 - buffer / 2 : cursorLeaveFromBottom ? y2 + buffer * 4 : y2 - buffer * 4];
            return [...[[cursorLeaveFromBottom || isFloatingTaller ? rect.right - buffer : rect.left, rect.top], [cursorLeaveFromBottom ? isFloatingTaller ? rect.right - buffer : rect.left : rect.right - buffer, rect.bottom]], cursorPointOne, cursorPointTwo];
          }
        case "right":
          {
            const cursorPointOne = [x2 - buffer, isFloatingTaller ? y2 + buffer / 2 : cursorLeaveFromBottom ? y2 + buffer * 4 : y2 - buffer * 4],
              cursorPointTwo = [x2 - buffer, isFloatingTaller ? y2 - buffer / 2 : cursorLeaveFromBottom ? y2 + buffer * 4 : y2 - buffer * 4],
              commonPoints = [[cursorLeaveFromBottom || isFloatingTaller ? rect.left + buffer : rect.right, rect.top], [cursorLeaveFromBottom ? isFloatingTaller ? rect.left + buffer : rect.right : rect.left + buffer, rect.bottom]];
            return [cursorPointOne, cursorPointTwo, ...commonPoints];
          }
      }
    }
    const poly = getPolygon([x, y]);
    if (__debug && debugDrawPolygon(poly, rectPoly, clientPoint, [x, y]), !isPointInPolygon([clientX, clientY], rectPoly)) {
      if (hasLanded && !isOverReferenceRect) return __debug && debugClear(), close();
      if (!isPointInPolygon([clientX, clientY], poly)) {
        if (!isLeave && requireIntent) {
          const cursorSpeed = getCursorSpeed(clientX, clientY);
          if (cursorSpeed !== null && cursorSpeed < 0.1) return __debug && debugClear(), close();
        }
        __debug && debugClear(), close();
      }
    }
  });
  return fn.__options = {
    blockPointerEvents
  }, fn;
}
export { safePolygon };
//# sourceMappingURL=safePolygon.mjs.map
