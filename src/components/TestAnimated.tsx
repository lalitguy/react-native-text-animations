import { useEffect } from 'react';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
const TestAnimated = ({ text }: { text?: string }) => {
  const opacity = useSharedValue(0);
  const style = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
    };
  });
  useEffect(() => {
    opacity.value = withTiming(1, { duration: 1000 });
  });
  return <Animated.Text style={style}>{text}</Animated.Text>;
};
export default TestAnimated;
