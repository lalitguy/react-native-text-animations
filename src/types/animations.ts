import type {
  AnimatedTextProps,
  AnimationOffsets,
  AnimationTiming,
  BaseAnimationHookProps,
} from '.';

// Fade Animation Types
interface FadeAnimations {
  fromOpacity?: number;
  toOpacity?: number;
}

interface FadeHookProps extends BaseAnimationHookProps, FadeAnimations {}

interface FadeTextProps
  extends Omit<AnimatedTextProps<FadeHookProps>, 'useAnimation'>,
    FadeAnimations {}

// Rotate Animation Types
interface RotateAnimations {
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
  scaleFrom?: number;
  scaleTo?: number;
  initialOpacity?: number;
  bounce?: BounceType;
}

interface SpringHookProps extends BaseAnimationHookProps, SpringAnimations {}

interface SpringTextProps
  extends Omit<AnimatedTextProps<SpringHookProps>, 'useAnimation'>,
    SpringAnimations {}

// Wave Animation Types
interface WaveAnimations {
  amplitude?: number;
  initialOpacity?: number;
  infinite?: boolean;
}

interface WaveHookProps extends WaveAnimations, AnimationTiming {
  index: number;
}

interface WaveTextProps
  extends Omit<AnimatedTextProps<WaveHookProps>, 'useAnimation'>,
    WaveAnimations {}
// Common AnimatedText Config Types

interface AnimatedTextConfig extends AnimationTiming, AnimationOffsets {
  fromOpacity?: number;
  toOpacity?: number;
  rotateFrom?: {
    x?: number;
    y?: number;
    z?: number;
  };
  rotateTo?: {
    x?: number;
    y?: number;
    z?: number;
  };
  scaleFrom?: number;
  scaleTo?: number;
  bounce?: BounceType;
}

interface TextAnimations {
  config?: AnimatedTextConfig;
}

interface AnimatedTextHookProps extends TextAnimations, AnimationTiming {
  index: number;
}

interface AnimatedTextConfigProps
  extends Omit<AnimatedTextProps<SpringHookProps>, 'useAnimation'>,
    TextAnimations {}

export type {
  AnimatedTextConfig,
  AnimatedTextConfigProps,
  AnimatedTextHookProps,
  BounceType,
  FadeHookProps,
  FadeTextProps,
  RotateHookProps,
  RotateTextProps,
  SpringHookProps,
  SpringTextProps,
  WaveHookProps,
  WaveTextProps,
};
