import {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
} from 'react-native-reanimated';
import type { AnimationHook } from '../types';
import type { AnimatedTextHookProps } from '../types/animations';
import { useEffect } from 'react';

const useAnimatedText: AnimationHook<AnimatedTextHookProps> = ({
  index,
  config = {},
}) => {
  const {
    fromOpacity = 0,
    toOpacity = 1,
    delay = 0,
    staggerDelay = 50,
    duration = 300,
    offsetX = 0,
    offsetY = 10,
  } = config;

  const opacity = useSharedValue(fromOpacity);
  const translateY = useSharedValue(offsetY);
  const translateX = useSharedValue(offsetX);

  useEffect(() => {
    const delayTime = index * staggerDelay + delay;
    opacity.value = withDelay(delayTime, withTiming(toOpacity, { duration }));
    translateY.value = withDelay(delayTime, withTiming(0, { duration }));
    translateX.value = withDelay(delayTime, withTiming(0, { duration }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    fromOpacity,
    toOpacity,
    delay,
    staggerDelay,
    duration,
    offsetX,
    offsetY,
    index,
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

export default useAnimatedText;
