import { createDiv, mount, getAttributes } from '../utils';
import { shape } from '../../src/renderer/shape';
import { createRenderer } from '../../src/renderer';

describe('shapes', () => {
  test('create a circle element with the attributes', () => {
    const renderer = createRenderer(100, 100);
    const context = { group: renderer.group() };
    // ==== circle ====
    const circle = shape('circle', context, {
      cx: '50',
      cy: '50',
      r: '40',
      fill: 'red',
      stroke: 'yellow',
      strokeWidth: 5,
    });
    // 挂载
    mount(createDiv(), renderer.node());
    // 判断节点类型
    expect(circle.tagName).toBe('circle');
    // 判断g节点
    expect(circle.parentNode).toBe(context.group);
    // 测试属性的值是否符合预期
    expect(getAttributes(circle, ['cx', 'cy', 'r', 'fill', 'stroke', 'stroke-width'])).toEqual({
      cx: '50',
      cy: '50',
      r: '40',
      fill: 'red',
      stroke: 'yellow',
      'stroke-width': '5',
    });
  });

  // ==== rect ====
  test('create a rect element with attributes', () => {
    const renderer = createRenderer(100, 100);
    const rect = renderer.rect({
      x: 50,
      y: 50,
      width: 50,
      height: 50,
      fill: 'green',
    });
    const context = { group: renderer.group() };
    // 挂载
    mount(createDiv(), renderer.node());
    // 判断节点类型
    expect(rect.tagName).toBe('rect');
    // 判断g节点
    expect(rect.parentNode).toBe(context.group);
    // 将输入的属性值和实际元素上的属性做对比
    expect(getAttributes(rect, ['x', 'y', 'width', 'height', 'fill'])).toEqual({
      x: '50',
      y: '50',
      width: '50',
      height: '50',
      fill: 'green',
    });
  });

  // ==== line ====
  test('create line element with attributes', () => {
    const renderer = createRenderer(100, 100);
    const line = renderer.line({
      x1: 0,
      y1: 0,
      x2: 100,
      y2: 100,
      stroke: 'black',
    });
    const context = { group: renderer.group() };
    expect(line.tagName).toBe('line');
    expect(line.parentNode).toBe(context.group);
    mount(createDiv(), renderer.node());
  });

  // ==== path ====
  test('create a path element with attributes', () => {
    const renderer = createRenderer(100, 100);
    const context = { group: renderer.group() };
    const path = renderer.path({
      d: [['M', '0', '0'], ['L', '90', '10'], ['L', '10', '70'], ['Z']],
      stroke: 'red',
      fill: 'green',
    });
    expect(path.tagName).toBe('path');
    expect(path.parentNode).toBe(context.group);
    mount(createDiv(), renderer.node());
  });

  // ==== text ====
  test('create a text element with attributes', () => {
    const renderer = createRenderer(100, 100);
    const context = { group: renderer.group() };
    const text = renderer.text({
      text: 'hello world',
      x: 20,
      y: 30,
      fill: 'red',
    });
    expect(text.tagName).toBe('text');
    expect(text.parentNode).toBe(context.group);
    mount(createDiv(), renderer.node());
  });
});
