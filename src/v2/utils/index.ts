import { Easing } from 'react-native-reanimated';
import type { Transition } from '../types';

const resolveEasing = (t: Transition) => {
  'worklet';
  if (t.type === 'timing') {
    const easing = t.easing;
    if (typeof easing === 'string') {
      switch (easing) {
        case 'linear':
          return Easing.linear;
        case 'easeInOut':
          return Easing.inOut(Easing.quad);
        case 'easeIn':
          return Easing.in(Easing.quad);
        case 'easeOut':
          return Easing.out(Easing.quad);
        default:
          return Easing.linear;
      }
    }
    if (easing.type === 'bezier')
      return Easing.bezier(
        easing.curve[0],
        easing.curve[1],
        easing.curve[2],
        easing.curve[3]
      );
  }

  return Easing.linear;
};

export { resolveEasing };
