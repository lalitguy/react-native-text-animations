import {
  Easing,
  useSharedValue,
  withDelay,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';
import { useEffect } from 'react';

type useUnitProgressProps = {
  unitDuration: number;
  delay: number;
  repeat: number;
};

const useUnitProgress = ({
  unitDuration,
  delay,
  repeat,
}: useUnitProgressProps) => {
  const progress = useSharedValue(0);

  useEffect(() => {
    progress.value = withRepeat(
      withDelay(
        delay,
        withTiming(1, { duration: unitDuration, easing: Easing.linear })
      ),
      repeat
    );
  }, [progress, delay, repeat, unitDuration]);

  return progress;
};

export { useUnitProgress };
