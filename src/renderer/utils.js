// 创建svg标签
export function createSVGElement(type) {
  return document.createElementNS('http://www.w3.org/2000/svg', type);
}

// 挂载方法
export function mount(parent, child) {
  if (parent && parent.appendChild) {
    parent.appendChild(child);
  }
}

// 设置节点的属性
export function applyAttributes(element, attributes) {
  for (const [key, value] of Object.entries(attributes)) {
    // 将驼峰改为'-'
    const kebabCaseKey = key.replace(/[A-Z]/g, (str) => `-${str.toLocaleLowerCase()}`);
    element.setAttribute(kebabCaseKey, value);
  }
}

// 设置transform类属性
export function applyTransform(element, transform) {
  const oldTransform = element.getAttribute('transform') || '';
  element.setAttribute('transform', `${oldTransform}${transform}`);
}
