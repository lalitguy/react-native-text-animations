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

function getSpringConfig(bounceFactor: number) {
  // Clamp bounceFactor to avoid unrealistic behavior
  const b = Math.max(0, Math.min(bounceFactor, 1.5));

  // Use easing-like scaling for smoother feel
  const stiffness = 120 + Math.pow(b, 1.4) * 280; // 120–400
  const damping = 22 - Math.pow(b, 0.9) * 10; // 22–12
  const mass = 1;
  const velocity = 0;

  return { stiffness, damping, mass, velocity };
}

const resolveBounce = (bounce?: number | { x?: number; y?: number }) => {
  // Default neutral bounce
  const defaultBounce = 1;

  // Case 1: user passed a single number → use for both axes
  if (typeof bounce === 'number') {
    return { x: bounce, y: bounce };
  }

  // Case 2: user passed an object → merge defaults
  return {
    x: bounce?.x ?? defaultBounce,
    y: bounce?.y ?? defaultBounce,
  };
};

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

    // Then compute spring configs
    const springConfigX = getSpringConfig(bounceX);
    const springConfigY = getSpringConfig(bounceY);

    const delayTime = index * staggerDelay + delay;

    opacity.value = withDelay(delayTime, withTiming(1, { duration }));
    translateY.value = withDelay(delayTime, withSpring(0, springConfigY));
    translateX.value = withDelay(delayTime, withSpring(0, springConfigX));

    const springConfigScale = getSpringConfig((bounceX + bounceY) / 2);
    scale.value = withDelay(delayTime, withSpring(scaleTo, springConfigScale));
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
