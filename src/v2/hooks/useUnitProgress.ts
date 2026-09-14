import { useEffect } from 'react';
import { useSharedValue, withDelay, withRepeat } from 'react-native-reanimated';
import type { StaggerType, Transition } from '../types';
import { resolveDelay, resolveTransition } from '../utils';

type useUnitProgressProps = {
  repeat: number;
  transition: Transition;
  index: number;
  textLength: number;
  stagger: StaggerType;
  duration: number;
  delay: number;
};

const useUnitProgress = ({
  repeat,
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
      withRepeat(resolveTransition(duration, transition), repeat)
    );
  }, [progress, unitDelay, repeat, duration, transition]);

  return progress;
};

export { useUnitProgress };
