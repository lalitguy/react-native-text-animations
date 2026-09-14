import { useEffect } from 'react';
import {
  useSharedValue,
  withDelay,
  withRepeat,
  withSequence,
  withTiming,
} from 'react-native-reanimated';
import type { StaggerType, Transition } from '../types';
import { resolveDelay, resolveTransition } from '../utils';

type useUnitProgressProps = {
  repeat: number;
  transition: Transition;
  index: number;
  textLength: number;
  stagger: StaggerType;
};

const useUnitProgress = ({
  repeat,
  transition,
  index,
  stagger,
  textLength,
}: useUnitProgressProps) => {
  const progress = useSharedValue(0);

  const overallDuration = transition.duration ?? 800;

  const unitDuration = overallDuration / textLength;

  const delay = resolveDelay(unitDuration, index, stagger, textLength);

  useEffect(() => {
    progress.value = withRepeat(
      withSequence(
        withDelay(delay, resolveTransition(unitDuration, transition)),
        withDelay(
          overallDuration - unitDuration * (index + 1),
          withTiming(0, { duration: 0 })
        )
      ),
      repeat
    );
  }, [
    progress,
    delay,
    repeat,
    unitDuration,
    transition,
    index,
    overallDuration,
  ]);

  return progress;
};

export { useUnitProgress };
