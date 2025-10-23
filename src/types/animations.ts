import type { AnimatedTextProps, BaseAnimationHookProps } from '.';

// Fade Animation Types
interface FadeAnimations {
  offsetX?: number;
  offsetY?: number;
  fromOpacity?: number;
  toOpacity?: number;
}

interface FadeHookProps extends BaseAnimationHookProps, FadeAnimations {}

interface FadeTextProps
  extends Omit<AnimatedTextProps<FadeHookProps>, 'useAnimation'>,
    FadeAnimations {}

// Rotate Animation Types
interface RotateAnimations {
  offsetX?: number;
  offsetY?: number;
  initialOpacity?: number;
  rotateXStart?: number;
  rotateXEnd?: number;
  rotateYStart?: number;
  rotateYEnd?: number;
  rotateZStart?: number;
  rotateZEnd?: number;
}

interface RotateHookProps extends BaseAnimationHookProps, RotateAnimations {}

interface RotateTextProps
  extends Omit<AnimatedTextProps<RotateHookProps>, 'useAnimation'>,
    RotateAnimations {}

//Bounce Animation Types

type BounceType = number | { x?: number; y?: number };
interface SpringAnimations {
  offsetX?: number;
  offsetY?: number;
  scaleFrom?: number;
  scaleTo?: number;
  initialOpacity?: number;
  bounce?: BounceType;
}

interface SpringHookProps extends BaseAnimationHookProps, SpringAnimations {}

interface SpringTextProps
  extends Omit<AnimatedTextProps<SpringHookProps>, 'useAnimation'>,
    SpringAnimations {}

export type {
  FadeHookProps,
  FadeTextProps,
  RotateHookProps,
  RotateTextProps,
  SpringHookProps,
  SpringTextProps,
  BounceType,
};
