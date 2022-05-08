import { createRenderer } from '../../src/renderer/renderer';
import { createDiv, mount } from '../utils';

describe('test transform', () => {
  test('translate&rotate&scale', () => {
    const renderer = createRenderer(400, 400);
    renderer.save();
    renderer.rect({
      x: 100,
      y: 100,
      width: 100,
      height: 100,
      fill: 'red',
    });
    // 平移
    renderer.translate(0, 0);
    // 旋转
    renderer.rotate(60);
    // 伸缩
    renderer.scale(0.5, 1);
    // 挂载
    mount(createDiv(), renderer.node());

    // restore
    renderer.restore();
    renderer.circle({
      cx: 50,
      cy: 50,
      r: 30,
      fill: 'green',
    });
    renderer.translate(200, 200);
    renderer.rotate(-60);
    mount(createDiv(), renderer.node());
  });
});
