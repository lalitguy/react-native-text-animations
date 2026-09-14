import type { StyleProp, TextStyle, ViewStyle } from 'react-native';
import type { AnimationConfig, Presets } from './animations';
import type { Transition } from './transition';

type StaggerType = {
  /**
   * stagger text split based on character or word or no stagger
   */
  by?: 'character' | 'word' | 'none';
  /**
   * stagger from start , center or end
   */
  from?: 'start' | 'center' | 'end';
};

type CommonAnimatedTextProps = {
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
  animation?: never;
}

/**
 * Animated text using a custom animation with configurable transition and stagger.
 */
interface CustomMode extends CommonAnimatedTextProps {
  /** Not available when using a custom animation. */
  preset?: never;

  /** Custom animation with granular control over tracks and repetition. */
  animation: AnimationConfig;
}

/**
 * Animated text component props
 */
type AnimatedTextProps = PresetMode | CustomMode;

export type { AnimatedTextProps, StaggerType };
