import { useEffect } from 'react';
import { useSharedValue, withDelay, withRepeat } from 'react-native-reanimated';
import type { Transition } from '../types';
import { resolveTransition } from '../utils';

type useUnitProgressProps = {
  unitDuration: number;
  delay: number;
  repeat: number;
  transition: Transition;
};

const useUnitProgress = ({
  unitDuration,
  delay,
  repeat,
  transition,
}: useUnitProgressProps) => {
  const progress = useSharedValue(0);

  useEffect(() => {
    progress.value = withRepeat(
      withDelay(delay, resolveTransition(unitDuration, transition)),
      repeat
    );
  }, [progress, delay, repeat, unitDuration, transition]);

  return progress;
};

export { useUnitProgress };
