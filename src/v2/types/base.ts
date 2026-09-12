import type { StyleProp, TextStyle, ViewStyle } from 'react-native';
import type { AnimationConfig, Presets } from './animations';

type StaggerType = {
  /**
   * stagger text split based on character or word or no stagger
   */
  by?: 'character' | 'word' | 'none';
  /**
   * delay between each character or word
   */
  delay?: number;
  /**
   * stagger from start , center or end
   */
  from?: 'start' | 'center' | 'end';
};

/**
 * Physics-based spring animation configuration.
 */
type SpringTransition = {
  /**
   * Identifies this transition as a physics-based spring animation.
   */
  type: 'spring';

  /**
   * Controls how quickly the spring settles. Higher values settle faster.
   */
  damping: number;

  /**
   * Controls the perceived weight of the animation. Higher values feel heavier.
   */
  mass: number;

  /**
   * Controls the spring's responsiveness and bounce. Higher values feel snappier.
   */
  stiffness: number;
};

/** Easing function controls for acceleration, deceleration, or custom cubic bezier curves. */
export type Easing =
  /** Constant speed with zero acceleration or deceleration. */
  | 'linear'
  /** Slow start, accelerating steadily until completion. */
  | 'easeIn'
  /** Fast start, smoothly decelerating to a complete stop. */
  | 'easeOut'
  /** Slow start, accelerates in the middle, and decelerates at the end. */
  | 'easeInOut'
  /** Custom motion curve defined by four cubic-bezier control points `[x1, y1, x2, y2]`. */
  | {
      /** Specifies custom cubic-bezier timing. */
      type: 'bezier';
      /** Four control points defining the curve trajectory `[x1, y1, x2, y2]`. */
      curve: [number, number, number, number];
    };

type TimingTransition = {
  /**
   * timing animation transition
   */
  type: 'timing';
  /**
   * easing function controls for acceleration, deceleration, or custom cubic bezier curves.
   */
  easing: Easing;
};

/**
 * Defines how the animation progresses.
 *
 * - `spring` — physics-based animation.
 * - `timing` — duration/easing-based animation.
 */
type Transition = SpringTransition | TimingTransition;

type CommonAnimatedTextProps = {
  /**
   * Duration of the animation in milliseconds
   */
  duration?: number;
  /**
   * text to be animated.
   */
  text: string;
  /**
   * Style for the text
   */
  textStyle?: StyleProp<TextStyle>;
  /**
   * Style for the text wrapping container
   */
  wrapperStyle?: StyleProp<ViewStyle>;
  /**
   * Stagger animation configuration
   */
  stagger?: StaggerType;
  /**
   * Transition animation configuration
   */
  transition?: Transition;
};

/**
 * Animated text using a built-in preset with configurable transition and stagger.
 */
interface PresetMode extends CommonAnimatedTextProps {
  /** Built-in animation preset to apply. */
  preset: Presets;

  /** Not available when using a preset. */
  animation: never;
}

/**
 * Animated text using a custom animation with configurable transition and stagger.
 */
interface CustomMode extends CommonAnimatedTextProps {
  /** Not available when using a custom animation. */
  preset: never;

  /** Custom animation with granular control over tracks and repetition. */
  animation: AnimationConfig;
}

/**
 * Animated text component props
 */
export type AnimatedTextProps = PresetMode | CustomMode;
