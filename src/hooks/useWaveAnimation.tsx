import { useEffect } from 'react';
import {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';
import type { AnimationHook } from '../types';
import type { WaveHookProps } from '../types/animations';

const useWaveAnimation: AnimationHook<WaveHookProps> = ({
  index,
  delay = 0,
  duration = 300,
  amplitude = 10,
  initialOpacity = 1,
  staggerDelay = 50,
  infinte = false,
}) => {
  const opacity = useSharedValue(initialOpacity);
  const translateY = useSharedValue(amplitude);

  useEffect(() => {
    const delayTime = index * staggerDelay + delay;
    opacity.value = withDelay(delayTime, withTiming(1, { duration }));
    translateY.value = withDelay(
      delayTime,
      withRepeat(
        withTiming(-amplitude, { duration }),
        infinte ? -1 : 2, // infinite loop
        true // reverse (up & down)
      )
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    delay,
    duration,
    index,
    staggerDelay,
    amplitude,
    initialOpacity,
    infinte,
  ]);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
      transform: [{ translateY: translateY.value }],
    };
  });

  return animatedStyles;
};

export default useWaveAnimation;
