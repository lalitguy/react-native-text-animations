import { useEffect } from 'react';
import { useSharedValue, withDelay, withRepeat } from 'react-native-reanimated';
import type { StaggerType, Transition } from '../types';
import { resolveDelay, resolveTransition } from '../utils';

type useUnitProgressProps = {
  transition: Transition;
  index: number;
  textLength: number;
  stagger: StaggerType;
  duration: number;
  delay: number;
  repeat: number;
  reverse: boolean;
};

const useUnitProgress = ({
  transition,
  index,
  stagger,
  textLength,
  duration,
  delay,
  repeat,
  reverse,
}: useUnitProgressProps) => {
  const progress = useSharedValue(0);

  const unitDelay = resolveDelay(index, stagger, textLength) + delay;

  useEffect(() => {
    progress.value = withDelay(
      unitDelay,
      withRepeat(resolveTransition(duration, transition), repeat, reverse)
    );
  }, [progress, unitDelay, duration, transition, repeat, reverse]);

  return progress;
};

export { useUnitProgress };
