import type { StyleProp, TextStyle, ViewStyle } from 'react-native';

interface AnimationOffsets {
  offsetX?: number;
  offsetY?: number;
}
interface AnimationTiming {
  duration?: number;
  delay?: number;
  staggerDelay?: number;
}

// Generic hook props: shared between all animations
interface BaseAnimationHookProps extends AnimationTiming, AnimationOffsets {
  index: number;
}

// Generic animation hook signature
type AnimationHook<P extends BaseAnimationHookProps = BaseAnimationHookProps> =
  (props: P) => TextStyle;

// A generic AnimatedText component type that accepts any animation hook
interface AnimatedTextProps<
  P extends BaseAnimationHookProps = BaseAnimationHookProps,
> extends AnimationTiming,
    AnimationOffsets {
  text: string;
  useAnimation: AnimationHook<P>;
  staggerSeparator?: string;
  reanimateOnTextChange?: boolean;
  textStyle?: StyleProp<TextStyle>;
  className?: string;
  wrapperClassName?: string;
  wrapperStyle?: StyleProp<ViewStyle>;
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
  AnimationOffsets,
};
