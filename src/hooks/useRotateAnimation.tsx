import { useEffect } from 'react';
import {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
} from 'react-native-reanimated';
import type { AnimationHook } from '../types';
import type { RotateHookProps } from '../types/animations';

const useRotateAnimation: AnimationHook<RotateHookProps> = (props) => {
  const {
    index,
    initialOpacity = 0.8,
    staggerDelay = 50,
    delay = 0,
    duration = 300,
    offsetX = 10,
    offsetY = 10,
    rotateXStart = 0,
    rotateXEnd = 0,
    rotateYStart = 360,
    rotateYEnd = 0,
    rotateZStart = 0,
    rotateZEnd = 0,
  } = props;

  const opacity = useSharedValue(initialOpacity);
  const translateY = useSharedValue(offsetY);
  const translateX = useSharedValue(offsetX);
  const rotateX = useSharedValue(rotateXStart);
  const rotateY = useSharedValue(rotateYStart);
  const rotateZ = useSharedValue(rotateZStart);

  useEffect(() => {
    const delayTime = index * staggerDelay + delay;
    opacity.value = withDelay(delayTime, withTiming(1, { duration }));
    translateY.value = withDelay(delayTime, withTiming(0, { duration }));
    translateX.value = withDelay(delayTime, withTiming(0, { duration }));
    rotateX.value = withDelay(delayTime, withTiming(rotateXEnd, { duration }));
    rotateY.value = withDelay(delayTime, withTiming(rotateYEnd, { duration }));
    rotateZ.value = withDelay(delayTime, withTiming(rotateZEnd, { duration }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    delay,
    duration,
    index,
    staggerDelay,
    rotateXEnd,
    rotateYEnd,
    rotateZEnd,
    initialOpacity,
    offsetX,
    offsetY,
    rotateXStart,
    rotateYStart,
    rotateZStart,
  ]);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
      transform: [
        { translateY: translateY.value },
        { translateX: translateX.value },
        { rotateX: `${rotateX.value}deg` },
        { rotateY: `${rotateY.value}deg` },
        { rotateZ: `${rotateZ.value}deg` },
      ],
    };
  });

  return animatedStyles;
};

export default useRotateAnimation;
