import React from 'react';

const Svg = React.forwardRef(({ children, width, height, viewBox, fill, stroke, style, ...props }, ref) =>
  React.createElement('svg', { ref, width, height, viewBox, fill, stroke, style, xmlns: 'http://www.w3.org/2000/svg', ...props }, children)
);
Svg.displayName = 'Svg';

const Circle = (props) => React.createElement('circle', props);
const Ellipse = (props) => React.createElement('ellipse', props);
const G = ({ children, ...props }) => React.createElement('g', props, children);
const Text = ({ children, ...props }) => React.createElement('text', props, children);
const TSpan = ({ children, ...props }) => React.createElement('tspan', props, children);
const TextPath = ({ children, ...props }) => React.createElement('textPath', props, children);
const Path = (props) => React.createElement('path', props);
const Polygon = (props) => React.createElement('polygon', props);
const Polyline = (props) => React.createElement('polyline', props);
const Line = (props) => React.createElement('line', props);
const Rect = (props) => React.createElement('rect', props);
const Use = (props) => React.createElement('use', props);
const SvgImage = (props) => React.createElement('image', props);
const Symbol = ({ children, ...props }) => React.createElement('symbol', props, children);
const Defs = ({ children }) => React.createElement('defs', null, children);
const LinearGradient = ({ children, ...props }) => React.createElement('linearGradient', props, children);
const RadialGradient = ({ children, ...props }) => React.createElement('radialGradient', props, children);
const Stop = (props) => React.createElement('stop', props);
const ClipPath = ({ children, ...props }) => React.createElement('clipPath', props, children);
const Pattern = ({ children, ...props }) => React.createElement('pattern', props, children);
const Mask = ({ children, ...props }) => React.createElement('mask', props, children);
const Marker = ({ children, ...props }) => React.createElement('marker', props, children);
const ForeignObject = ({ children, ...props }) => React.createElement('foreignObject', props, children);

export {
  Svg,
  Circle,
  Ellipse,
  G,
  Text,
  TSpan,
  TextPath,
  Path,
  Polygon,
  Polyline,
  Line,
  Rect,
  Use,
  SvgImage as Image,
  Symbol,
  Defs,
  LinearGradient,
  RadialGradient,
  Stop,
  ClipPath,
  Pattern,
  Mask,
  Marker,
  ForeignObject,
};

export default Svg;
