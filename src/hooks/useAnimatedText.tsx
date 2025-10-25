import {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import type { AnimationHook } from '../types';
import type { AnimatedTextHookProps } from '../types/animations';
import { useEffect } from 'react';
import { getSpringConfig, resolveBounce } from '../utils';

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
    rotateFrom = { x: 0, y: 0, z: 0 },
    rotateTo = { x: 0, y: 0, z: 0 },
    scaleFrom = 1,
    scaleTo = 1,
    bounce = { x: 0, y: 0 },
  } = config;

  const opacity = useSharedValue(fromOpacity);
  const translateY = useSharedValue(offsetY);
  const translateX = useSharedValue(offsetX);
  const rotateX = useSharedValue(rotateFrom?.x ?? 0);
  const rotateY = useSharedValue(rotateFrom?.y ?? 0);
  const rotateZ = useSharedValue(rotateFrom?.z ?? 0);
  const scale = useSharedValue(scaleFrom);

  useEffect(() => {
    const delayTime = index * staggerDelay + delay;
    const { x: bounceX, y: bounceY } = resolveBounce(bounce);

    opacity.value = withDelay(delayTime, withTiming(toOpacity, { duration }));
    translateY.value = withDelay(delayTime, withTiming(0, { duration }));
    translateX.value = withDelay(delayTime, withTiming(0, { duration }));

    rotateX.value = withDelay(
      delayTime,
      withTiming(rotateTo.x ?? 0, { duration })
    );
    rotateY.value = withDelay(
      delayTime,
      withTiming(rotateTo.y ?? 0, { duration })
    );
    rotateZ.value = withDelay(
      delayTime,
      withTiming(rotateTo.z ?? 0, { duration })
    );

    const springConfigScale = getSpringConfig((bounceX + bounceY) / 2);
    scale.value = withDelay(delayTime, withSpring(scaleTo, springConfigScale));
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
        {
          rotateX: `${rotateX.value}deg`,
        },
        {
          rotateY: `${rotateY.value}deg`,
        },
        {
          rotateZ: `${rotateZ.value}deg`,
        },
        { scale: scale.value },
      ],
    };
  });

  return animatedStyles;
};

export default useAnimatedText;
