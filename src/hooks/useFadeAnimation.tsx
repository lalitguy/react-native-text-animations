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
  opacity = 0,
  staggerDelay = 50,
}) => {
  const opacityValue = useSharedValue(opacity);
  const translateY = useSharedValue(offsetY);
  const translateX = useSharedValue(offsetX);

  useEffect(() => {
    opacityValue.value = withDelay(
      index * staggerDelay + delay,
      withTiming(1, { duration })
    );
    translateY.value = withDelay(
      index * staggerDelay + delay,
      withTiming(0, { duration })
    );
    translateX.value = withDelay(
      index * staggerDelay + delay,
      withTiming(0, { duration })
    );
  }, [delay, duration, index]);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      opacity: opacityValue.value,
      transform: [
        { translateY: translateY.value },
        { translateX: translateX.value },
      ],
    };
  });

  return animatedStyles;
};

export default useFadeAnimation;
