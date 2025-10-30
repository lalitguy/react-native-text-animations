import Animated from 'react-native-reanimated';
import type { BaseAnimationHookProps, AnimatedLetterProps } from '../../types';

const BaseAnimatedLetter = <P extends BaseAnimationHookProps>({
  text: char,
  useAnimation,
  textStyle,
  className,
  ...props
}: AnimatedLetterProps<P>) => {
  const animatedStyle = useAnimation({ ...(props as P) });
  return (
    // @ts-expect-error - className is supported by NativeWind when installed
    <Animated.Text className={className} style={[textStyle, animatedStyle]}>
      {char}
    </Animated.Text>
  );
};
export default BaseAnimatedLetter;
