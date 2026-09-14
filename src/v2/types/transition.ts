/**
 * Physics-based spring animation configuration.
 */
type SpringTransition = {
  /**
   * Identifies this transition as a physics-based spring animation.
   */
  type: 'spring';

  /**
   * Damping ratio of the spring.
   * - `1`: Critically damped (returns to rest without oscillating).
   * - `> 1`: Overdamped (returns to rest slowly without oscillating).
   * - `< 1`: Underdamped (oscillates past equilibrium).
   * @default 1
   */
  dampingRatio: number;
};

/**
 * Easing function name options
 */
type EasingName =
  /** Constant speed with zero acceleration or deceleration. */
  | 'linear'

  /** Slow start, accelerating steadily until completion. */
  | 'easeIn'
  /** Fast start, smoothly decelerating to a complete stop. */
  | 'easeOut'
  /** Slow start, accelerates in the middle, and decelerates at the end. */
  | 'easeInOut'

  /** Starts slowly, then bounces toward the end. */
  | 'bounceIn'

  /** Moves quickly toward the end, then bounces before settling. */
  | 'bounceOut'

  /** Bounces at both the beginning and the end of the animation. */
  | 'bounceInOut'

  /** Slow start following a sinusoidal curve. */
  | 'sinIn'

  /** Fast start, smoothly decelerating following a sinusoidal curve. */
  | 'sinOut'

  /** Smooth sinusoidal acceleration and deceleration. */
  | 'sinInOut';

/** Easing function controls for acceleration, deceleration, or custom cubic bezier curves. */
type EasingConfig =
  | EasingName
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
  easing: EasingConfig;
};

/**
 * Defines how the animation progresses.
 *
 * - `spring` — physics-based animation.
 * - `timing` — duration/easing-based animation.
 */
type Transition = TimingTransition | SpringTransition;

export type { EasingConfig, EasingName, Transition };
