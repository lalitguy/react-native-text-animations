import Animated from 'react-native-reanimated';
import type { AnimatedLetterProps, BaseAnimationHookProps } from '../../types';

import React, { type ComponentProps } from 'react';

type AnimatedTextProps = ComponentProps<typeof Animated.Text> & {
  className?: string;
};

const AnimatedText = React.forwardRef<
  React.ComponentRef<typeof Animated.Text>,
  AnimatedTextProps
>((props, ref) => <Animated.Text ref={ref} {...props} />);

const BaseAnimatedLetter = <P extends BaseAnimationHookProps>({
  text: char,
  useAnimation,
  textStyle,
  className,
  ...props
}: AnimatedLetterProps<P>) => {
  const animatedStyle = useAnimation({ ...(props as P) });
  return (
    <AnimatedText className={className} style={[textStyle, animatedStyle]}>
      {char}
    </AnimatedText>
  );
};
export default BaseAnimatedLetter;
