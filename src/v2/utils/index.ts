import { Easing } from 'react-native-reanimated';
import type { EasingConfig, Transition } from '../types';

const resolveEasing = (easing: EasingConfig) => {
  'worklet';
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
};

const resolveTransition = (t: Transition, globalProgress: number) => {
  'worklet';
  if (t.type === 'timing') {
    const easing = t.easing;
    const resolved = resolveEasing(easing);
    return resolved(globalProgress);
  }

  return Easing.linear(globalProgress);
};

export { resolveEasing, resolveTransition };
