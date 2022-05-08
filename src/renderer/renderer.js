import { createContext } from './context';
import {
  line, circle, path, ring, rect, text,
} from './shape';
import {
  save, restore, scale, translate, rotate,
} from './transform';

export function createRenderer(width, height) {
  const context = createContext(width, height);
  return {
    line: (options) => line(context, options),
    circle: (options) => circle(context, options),
    path: (options) => path(context, options),
    ring: (options) => ring(context, options),
    rect: (options) => rect(context, options),
    text: (options) => text(context, options),
    save: () => save(context),
    restore: () => restore(context),
    translate: (...args) => translate(context, ...args),
    rotate: (...args) => rotate(context, ...args),
    scale: (...args) => scale(context, ...args),
    node: () => context.node,
    group: () => context.group,
  };
}
