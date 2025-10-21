import { useEffect } from 'react';
import {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
} from 'react-native-reanimated';
import type { AnimationHook } from '../types';
import type { FadeHookProps } from '../types/animations';

const useFadeAnimation: AnimationHook<FadeHookProps> = ({
  index,
  delay = 0,
  duration = 300,
  offsetX = 0,
  offsetY = 10,
  fromOpacity = 0,
  toOpacity = 1,
  staggerDelay = 50,
}) => {
  const opacity = useSharedValue(fromOpacity);
  const translateY = useSharedValue(offsetY);
  const translateX = useSharedValue(offsetX);

  useEffect(() => {
    opacity.value = withDelay(
      index * staggerDelay + delay,
      withTiming(toOpacity, { duration })
    );
    translateY.value = withDelay(
      index * staggerDelay + delay,
      withTiming(0, { duration })
    );
    translateX.value = withDelay(
      index * staggerDelay + delay,
      withTiming(0, { duration })
    );
  }, [
    delay,
    duration,
    index,
    staggerDelay,
    toOpacity,
    opacity,
    translateX,
    translateY,
  ]);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
      transform: [
        { translateY: translateY.value },
        { translateX: translateX.value },
      ],
    };
  });

  return animatedStyles;
};

export default useFadeAnimation;
