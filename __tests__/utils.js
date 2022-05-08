export function createDiv() {
  const div = document.createElement('div');
  document.body.appendChild(div);
  return div;
}

export function mount(parent, child) {
  if (parent && parent.appendChild) {
    parent.appendChild(child);
  }
}

/**
 * 获取节点上的属性的键值对
 * @param {Element} node
 * @param {Array} attributes
 * @return {Object}
 */
export function getAttributes(node, attributes) {
  return attributes.reduce((obj, key) => (obj[key] = node.getAttribute(key), obj), {});
}
