import { Easing, withSpring, withTiming } from 'react-native-reanimated';
import { easingMap } from '../constant';
import type { StaggerType, Transition } from '../types';

const resolveDelay = (
  unitDuration: number,
  index: number,
  stagger: StaggerType,
  textLength: number
) => {
  switch (stagger.from) {
    case 'center':
      const centralIndex = (textLength - 1) / 2;
      const diff = Math.abs(index - centralIndex);
      return diff <= 0.5 ? 0 : diff * unitDuration;
    case 'end':
      return (textLength - 1 - index) * unitDuration;
    case 'start':
    default:
      return unitDuration * index;
  }
};

const resolveTransition = (duration: number, transition: Transition) => {
  if (transition.type === 'timing') {
    if (typeof transition.easing === 'string') {
      return withTiming(1, {
        duration,
        easing: easingMap[transition.easing] ?? easingMap.easeInOut,
      });
    }
    const [x1, y1, x2, y2] = transition.easing.curve;
    return withTiming(1, { duration, easing: Easing.bezier(x1, y1, x2, y2) });
  }

  if (transition.type === 'spring') {
    return withSpring(1, { duration, dampingRatio: transition.dampingRatio });
  }
  return withTiming(1, { duration, easing: easingMap.easeInOut });
};

export { resolveDelay, resolveTransition };
