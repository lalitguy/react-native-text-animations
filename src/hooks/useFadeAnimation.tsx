import { useEffect } from 'react';
import {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
} from 'react-native-reanimated';

const useFadeAnimation = ({ index }: { index: number }) => {
  const opacity = useSharedValue(0);
  const offset = useSharedValue(10);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
      transform: [{ translateY: offset.value }],
    };
  });

  useEffect(() => {
    opacity.value = withDelay(index * 50, withTiming(1));
    offset.value = withDelay(index * 50, withTiming(0));
  }, []);

  return animatedStyles;
};

export default useFadeAnimation;
