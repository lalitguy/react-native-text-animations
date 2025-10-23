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

export type { FadeHookProps, FadeTextProps, RotateHookProps, RotateTextProps };
