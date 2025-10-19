import { useEffect } from 'react';
import {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
} from 'react-native-reanimated';
import type { AnimationHook } from '../types';
import type { FadeHookProps } from '../types/animation';

const useFadeAnimation: AnimationHook<FadeHookProps> = ({
  index,
  delay = 0,
  duration = 300,
  offset = 10,
}) => {
  const opacity = useSharedValue(0);
  const translateY = useSharedValue(offset);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
      transform: [{ translateY: translateY.value }],
    };
  });

  useEffect(() => {
    opacity.value = withDelay(index * 50 + delay, withTiming(1, { duration }));
    translateY.value = withDelay(
      index * 50 + delay,
      withTiming(0, { duration })
    );
  }, [delay, duration, index]);

  return animatedStyles;
};

export default useFadeAnimation;
