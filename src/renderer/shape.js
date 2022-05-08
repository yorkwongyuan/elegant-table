import { createSVGElement, mount, applyAttributes } from './utils';

/**
 *
 * @param {String} type 图形类型: line, rect等
 * @param {Object} context 上下文, 主要包含node, group等信息
 * @param {Object} attributes 属性
 * @returns {Element}
 */
export function shape(type, context, attributes) {
  const { group } = context;
  // 创建节点
  const element = createSVGElement(type);
  // 设置树形
  applyAttributes(element, attributes);
  // 挂载
  mount(group, element);
  // 返回节点
  return element;
}

// 线条元素
export function line(context, attributes) {
  return shape('line', context, attributes);
}

// 圆形
export function circle(context, attributes) {
  return shape('circle', context, attributes);
}

// 矩形
export function rect(context, attributes) {
  const {
    width, height, x, y,
  } = attributes;
  return shape('rect', context, {
    ...attributes,
    width: Math.abs(width),
    height: Math.abs(height),
    x: width > 0 ? x : width + x,
    y: height > 0 ? y : height + y,
  });
}

// 文本
export function text(context, attributes) {
  const { text, ...rest } = attributes;
  const el = shape('text', context, rest);
  el.textContent = text;
  return el;
}

// 路径
/**
 * 注意, 这里我们希望入参的格式为:
 * [
 *  ['M', 100, 100],
 *  ['L', 200, 200],
 *  ['L', 300, 300],
 *  ['Z']
 * ]
 * 转换为:
 * M 100 100 L 200 200 L 300 300 Z
 */
export function path(context, attributes) {
  const { d } = attributes;
  // 因此, 此时我们就要先将d这个
  return shape('path', context, { ...attributes, d: d.flat().join(' ') });
}

// 圆环
export function ring(context, attributes) {
  // r1 是内圆的半径，r2 是外圆的半径
  const {
    cx, cy, r1, r2, ...styles
  } = attributes;
  const { stroke, strokeWidth, fill } = styles;
  const defaultStrokeWidth = 1;
  const innerStroke = circle(context, {
    fill: 'transparent',
    stroke: stroke || fill,
    strokeWidth,
    cx,
    cy,
    r: r1,
  });
  const ring = circle(context, {
    ...styles,
    strokeWidth: r2 - r1 - (strokeWidth || defaultStrokeWidth),
    stroke: fill,
    fill: 'transparent',
    cx,
    cy,
    r: (r1 + r2) / 2,
  });
  const outerStroke = circle(context, {
    fill: 'transparent',
    stroke: stroke || fill,
    strokeWidth,
    cx,
    cy,
    r: r2,
  });
  return [innerStroke, ring, outerStroke];
}
