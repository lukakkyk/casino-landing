function Unspaced(props) {
  return props.children;
}
Unspaced.isUnspaced = !0;
function isUnspaced(child) {
  const t = child?.type;
  return t?.isVisuallyHidden || t?.isUnspaced;
}
export { Unspaced, isUnspaced };
//# sourceMappingURL=Unspaced.mjs.map
