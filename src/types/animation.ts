import type { AnimatedTextProps, BaseAnimationHookProps } from '.';

interface FadeHookProps extends BaseAnimationHookProps {
  offset?: number;
}

interface FadeTextProps
  extends Omit<AnimatedTextProps<FadeHookProps>, 'useAnimation'> {
  offset?: number;
}
export type { FadeHookProps, FadeTextProps };
