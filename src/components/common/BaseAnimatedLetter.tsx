import Animated from 'react-native-reanimated';
import type { BaseAnimationHookProps, AnimatedLetterProps } from '../../types';
import type { ComponentProps } from 'react';

type AnimatedTextProps = ComponentProps<typeof Animated.Text> & {
  className?: string;
};

const AnimatedTextComponent =
  Animated.Text as React.ComponentType<AnimatedTextProps>;

const BaseAnimatedLetter = <P extends BaseAnimationHookProps>({
  text: char,
  useAnimation,
  textStyle,
  className,
  ...props
}: AnimatedLetterProps<P>) => {
  const animatedStyle = useAnimation({ ...(props as P) });
  return (
    <AnimatedTextComponent
      className={className}
      style={[textStyle, animatedStyle]}
    >
      {char}
    </AnimatedTextComponent>
  );
};
export default BaseAnimatedLetter;
