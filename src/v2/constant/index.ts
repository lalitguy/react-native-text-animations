import { Easing, type EasingFunction } from 'react-native-reanimated';
import type { EasingName } from '../types';

const easingMap: Record<EasingName, EasingFunction> = {
  linear: Easing.linear,
  easeIn: Easing.in(Easing.quad),
  easeOut: Easing.out(Easing.quad),
  easeInOut: Easing.inOut(Easing.quad),
  bounceIn: Easing.in(Easing.bounce),
  bounceOut: Easing.out(Easing.bounce),
  bounceInOut: Easing.inOut(Easing.bounce),
  sinIn: Easing.in(Easing.sin),
  sinOut: Easing.out(Easing.sin),
  sinInOut: Easing.inOut(Easing.sin),
};

export { easingMap };
