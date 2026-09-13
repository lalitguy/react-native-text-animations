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
export type Transition = SpringTransition | TimingTransition;
