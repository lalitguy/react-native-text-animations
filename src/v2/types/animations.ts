/**
 * Ready-to-use entrance and exit animation presets.
 */
type Presets =
  /** Smoothly fades the element in from 0% to 100% opacity. */
  | 'fade-in'

  /** Smoothly fades the element out from 100% to 0% opacity. */
  | 'fade-out'

  /** Grows the element into view from a smaller starting scale while fading in. */
  | 'scale-in'

  /** Shrinks the element down until it disappears while fading out. */
  | 'scale-out';

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

type TrackConfig = {
  /**
   * The property of the element to animate.
   */
  property: AnimationProperty;
  /**
   * Starting value of the animation.
   * @example
   * 0,90,-45
   */
  from: number;
  /**
   * Ending value of the animation.
   * @example
   * 1,-90,45
   */
  to: number;
  /**
   * Progressive keypoints along the track timeline. Should be ascending in order.
   * @example [0, 0.3], [0.7, 1]
   */
  range: [number, number];
};

/** Custom animation with granular control over tracks and repetition. */
type AnimationConfig = {
  /**
   * Array of tracks to animate.
   */
  tracks: TrackConfig[];
  /**
   * Number of times to repeat the animation.
   * @example
   * number for count
   * -1 for infinite
   */
  repeat?: number;
  //overlay: unknown;
};

export type { AnimationConfig, Presets };
