import type { AnimatedTextProps, BaseAnimationHookProps } from '.';

// Fade Animation Types
interface FadeAnimations {
  offsetX?: number;
  offsetY?: number;
  opacity?: number;
  staggerDelay?: number;
}
interface FadeHookProps extends BaseAnimationHookProps, FadeAnimations {}

interface FadeTextProps
  extends Omit<AnimatedTextProps<FadeHookProps>, 'useAnimation'>,
    FadeAnimations {}

export type { FadeHookProps, FadeTextProps };
