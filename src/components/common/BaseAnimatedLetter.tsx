import Animated from 'react-native-reanimated';
import type { BaseAnimationHookProps, AnimatedLetterProps } from '../../types';

const BaseAnimatedLetter = <P extends BaseAnimationHookProps>({
  text: char,
  useAnimation,
  textStyle,
  ...props
}: AnimatedLetterProps<P>) => {
  const animatedStyle = useAnimation({ ...(props as P) });
  return (
    <Animated.Text style={[textStyle, animatedStyle]}>{char}</Animated.Text>
  );
};
export default BaseAnimatedLetter;
