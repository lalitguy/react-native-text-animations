import { useEffect } from 'react';
import {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import type { AnimationHook } from '../types';
import type { SpringHookProps } from '../types/animations';
import { getSpringConfig, resolveBounce } from '../utils';

const useSpringAnimation: AnimationHook<SpringHookProps> = ({
  index,
  delay = 0,
  duration = 300,
  offsetX = 0,
  offsetY = -10,
  scaleFrom = 0.5,
  scaleTo = 1,
  initialOpacity = 0,
  staggerDelay = 50,
  bounce = { x: 2, y: 0.5 },
}) => {
  const opacity = useSharedValue(initialOpacity);
  const translateY = useSharedValue(offsetY);
  const translateX = useSharedValue(offsetX);
  const scale = useSharedValue(scaleFrom);

  useEffect(() => {
    const { x: bounceX, y: bounceY } = resolveBounce(bounce);

    const springConfigX = getSpringConfig(bounceX);
    const springConfigY = getSpringConfig(bounceY);

    const delayTime = index * staggerDelay + delay;

    opacity.value = withDelay(delayTime, withTiming(1, { duration }));
    translateY.value = withDelay(delayTime, withSpring(0, springConfigY));
    translateX.value = withDelay(delayTime, withSpring(0, springConfigX));

    const springConfigScale = getSpringConfig((bounceX + bounceY) / 2);
    scale.value = withDelay(delayTime, withSpring(scaleTo, springConfigScale));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    delay,
    duration,
    index,
    staggerDelay,
    offsetX,
    offsetY,
    scaleFrom,
    scaleTo,
    initialOpacity,
    bounce,
  ]);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
      transform: [
        { translateY: translateY.value },
        { translateX: translateX.value },
        { scale: scale.value },
      ],
    };
  });

  return animatedStyles;
};

export default useSpringAnimation;
