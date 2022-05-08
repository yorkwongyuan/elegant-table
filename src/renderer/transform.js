import { applyTransform, createSVGElement, mount } from './utils';

// 给g元素增加transform属性
// params可能表示的是有两个参数的translate和scale; 也可能是只有一个参数的rotate
export function transform(type, context, ...params) {
  const { group } = context;
  applyTransform(group, `${type}(${params.join(', ')})`);
}

// 接下来, 就能实现坐标的变换了
// translate, rotate, scale

export function translate(context, tx, ty) {
  transform('translate', context, tx, ty);
}

export function rotate(context, deg) {
  transform('rotate', context, deg);
}

export function scale(context, sx, sy) {
  transform('scale', context, sx, sy);
}

// 保存和重置
// 所谓保存, 其实就是保证现有的图形或者说'成果'不再被修改, 而继续新的绘制

export function save(context) {
  const { group } = context;
  const newGroup = createSVGElement('g');
  mount(group, newGroup);
  context.group = newGroup;
}

export function restore(context) {
  const { group } = context;
  const { parentNode } = group;
  context.group = parentNode;
}
