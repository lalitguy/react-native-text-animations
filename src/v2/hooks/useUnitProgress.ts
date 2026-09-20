import { useEffect } from 'react';
import { useSharedValue, withDelay, withRepeat } from 'react-native-reanimated';
import type { AnimationConfig, StaggerType, Transition } from '../types';
import { resolveDelay, resolveTransition } from '../utils';

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

  const unitDelay = resolveDelay(index, stagger, textLength) + delay;

  useEffect(() => {
    progress.value = withDelay(
      unitDelay,
      withRepeat(
        resolveTransition(duration, transition),
        animation.repeat ?? 1,
        animation.reverse
      )
    );
  }, [
    progress,
    unitDelay,
    duration,
    transition,
    animation.repeat,
    animation.reverse,
  ]);

  return progress;
};

export { useUnitProgress };
