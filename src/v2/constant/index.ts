import { Easing, type EasingFunction } from 'react-native-reanimated';
import type { EasingName } from '../types';

const easingMap: Record<EasingName, EasingFunction> = {
  linear: Easing.linear,
  easeIn: Easing.in(Easing.quad),
  easeOut: Easing.out(Easing.quad),
  easeInOut: Easing.inOut(Easing.quad),
};

export { easingMap };
