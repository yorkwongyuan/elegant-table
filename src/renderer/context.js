import { mount, createSVGElement } from './utils';

// 创建上下文
export function createContext(width, height) {
  // 创建svg标签
  const svg = createSVGElement('svg');
  svg.setAttribute('width', width);
  svg.setAttribute('height', height);
  svg.setAttribute('viewBox', `0 0 ${width} ${height}`);
  const g = createSVGElement('g');
  // 挂载
  mount(svg, g);
  return {
    node: svg,
    group: g,
  };
}
