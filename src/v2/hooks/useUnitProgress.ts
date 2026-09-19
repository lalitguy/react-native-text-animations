import { useEffect } from 'react';
import { useSharedValue, withDelay, withRepeat } from 'react-native-reanimated';
import type { AnimationConfig, StaggerType, Transition } from '../types';
import { resolveDelay, resolveTransition } from '../utils';
import { defaultConfigs } from '../constant';

type useUnitProgressProps = {
  animation: AnimationConfig;
  transition: Transition;
  index: number;
  textLength: number;
  stagger: StaggerType;
  duration: number;
  delay: number;
};

const useUnitProgress = ({
  animation,
  transition,
  index,
  stagger,
  textLength,
  duration,
  delay,
}: useUnitProgressProps) => {
  const progress = useSharedValue(0);

  //calculate overall duration of animation considering the stagger gap and per letter duration.
  const staggerDelay = stagger.gap ?? defaultConfigs.staggerGap;

  const unitRepeatCount = animation?.repeat ?? 1;

  const repeatDuration = duration * (unitRepeatCount > 0 ? unitRepeatCount : 1);
  const unitDelay = resolveDelay(index, stagger, textLength) + delay;

  const cycleDuration =
    (textLength - 1) * staggerDelay + repeatDuration + delay;

  const cycleWait = cycleDuration - (unitDelay + repeatDuration);

  const isUnitReversed = animation.reverse;

  useEffect(() => {
    progress.value = withDelay(
      unitDelay,
      withRepeat(
        resolveTransition(duration, transition),
        animation.repeat ?? 1,
        isUnitReversed
      )
    );
  }, [
    progress,
    unitDelay,
    duration,
    transition,
    animation.repeat,
    cycleDuration,
    cycleWait,
    isUnitReversed,
  ]);

  return progress;
};

export { useUnitProgress };
