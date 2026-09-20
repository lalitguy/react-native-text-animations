/**
 * Ready-to-use entrance and exit animation presets.
 */
type Preset =
  /** Smoothly fades the text from transparent to fully visible. */
  | 'fade'

  /** Fades the text in while moving upward into its final position. */
  | 'fade-up'

  /** Fades the text in while moving downward into its final position. */
  | 'fade-down'

  /** Fades the text in while moving from the left into its final position. */
  | 'fade-left'

  /** Fades the text in while moving from the right into its final position. */
  | 'fade-right'

  /** Pops the text into view with a quick scale-up and subtle overshoot. */
  | 'pop'

  /** Bounces the text into place with a playful vertical motion. */
  | 'bounce'

  /** Moves each character in a flowing wave-like motion. */
  | 'wave'

  /** Reveals characters sequentially in a cascading staggered motion. */
  | 'cascade'

  /** Reveals the text progressively with a smooth entrance motion. */
  | 'reveal'

  /** Rotates each character into view with a 3D flip effect. */
  | 'flip'

  /** Swings each character into place with a rotational motion. */
  | 'swing'

  /** Distorts the text with an elastic, jelly-like scale effect. */
  | 'jelly'

  /** Applies a quick back-and-forth motion to create a shaking effect. */
  | 'shake'

  /** Gives the text a gentle, floating vertical motion. */
  | 'float'

  /** Shifts through bright colors to create a sparkling glitter-like effect. */
  | 'glitter'

  /** Animates the text color with a soft luminous glow effect. */
  | 'glow';

/**
 * Defines the property of the element to be animated.
 */
type AnimationProperty =
  /**
   * Opacity animation.
   */
  | 'opacity'
  /**
   * X-axis translation animation.
   */
  | 'translateX'
  /**
   * Y-axis translation animation.
   */
  | 'translateY'
  /**
   * Scale animation.
   */
  | 'scale'
  /**
   * X Scale animation.
   */
  | 'scaleX'
  /**
   * Y Scale animation.
   */
  | 'scaleY'
  /**
   * X-axis rotation animation.
   */
  | 'rotateX'
  /**
   * Y-axis rotation animation.
   */
  | 'rotateY'
  /**
   * Z-axis rotation animation.
   */
  | 'rotateZ';

/**
 * Color of the text
 */
type ColorAnimationConfig = 'color';

type CommonTrackConfig = {
  /**
   * Progress points within the animation timeline.
   * Each value should be between 0 and 1.
   * These points will be used to interpolate the output values.
   * @example
   * [0, 0.5, 1]
   */
  inputRange: number[];
};

interface NumericTrackConfig extends CommonTrackConfig {
  /**
   * The property of the element to animate.
   */
  property: AnimationProperty;

  /**
   * Values produced at each corresponding progress point.
   * @example
   * [0.2, 1, 0]
   */
  outputRange: number[];
}

interface ColorTrackConfig extends CommonTrackConfig {
  /**
   * The property of the element to animate.
   */
  property: ColorAnimationConfig;

  /**
   * Values produced at each corresponding progress point.
   * @example
   * ['#ff0000', '#0000ff']
   */
  outputRange: string[];
}

type TrackConfig = NumericTrackConfig | ColorTrackConfig;

/** Custom animation with granular control over tracks and repetition. */
type AnimationConfig = {
  /**
   * Array of tracks to animate.
   */
  tracks: TrackConfig[];

  /**
   * Number of times to repeat the animation of the unit.
   * @default 1
   * number for count
   * -1 or 0 for infinite
   */
  repeat?: number;

  /**
   * Reverse the animation of the unit.
   * @default false
   */
  reverse?: boolean;
};

type GroupedTracksConfig = {
  colorTracks: ColorTrackConfig[];
  opacityTracks: NumericTrackConfig[];
  transformTracks: NumericTrackConfig[];
  rotateTracks: NumericTrackConfig[];
};

export type {
  AnimationConfig,
  AnimationProperty,
  GroupedTracksConfig,
  Preset,
  TrackConfig,
  ColorTrackConfig,
  NumericTrackConfig,
};
