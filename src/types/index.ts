import type { StyleProp, TextStyle } from 'react-native';

interface AnimationTiming {
  duration?: number;
  delay?: number;
  offsetX?: number;
  offsetY?: number;
  staggerDelay?: number;
}

// Generic hook props: shared between all animations
interface BaseAnimationHookProps extends AnimationTiming {
  index: number;
}

// Generic animation hook signature
type AnimationHook<P extends BaseAnimationHookProps = BaseAnimationHookProps> =
  (props: P) => TextStyle;

// A generic AnimatedText component type that accepts any animation hook
interface AnimatedTextProps<
  P extends BaseAnimationHookProps = BaseAnimationHookProps,
> extends AnimationTiming {
  text: string;
  textStyle?: StyleProp<TextStyle>;
  useAnimation: AnimationHook<P>;
  staggerSeparator?: string;
  reanimateOnTextChange?: boolean;
}

// The letter inherits both animation hook props and text styles
interface AnimatedLetterProps<
  P extends BaseAnimationHookProps = BaseAnimationHookProps,
> extends AnimatedTextProps<P> {
  index: number;
  // include all P’s keys as optional (spread-like)
  extraProps?: P;
}

export type {
  AnimationHook,
  AnimatedLetterProps,
  AnimatedTextProps,
  BaseAnimationHookProps,
  AnimationTiming,
};
