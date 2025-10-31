import { StyleSheet } from 'react-native';
import Animated from 'react-native-reanimated';
import BaseAnimatedLetter from './BaseAnimatedLetter';
import type { BaseAnimationHookProps, AnimatedTextProps } from '../../types';
import type { ComponentProps } from 'react';

type AnimatedViewProps = ComponentProps<typeof Animated.View> & {
  className?: string;
};

const AnimatedView = Animated.Text as React.ComponentType<AnimatedViewProps>;

const BaseAnimatedText = <P extends BaseAnimationHookProps>({
  text,
  staggerSeparator = '',
  reanimateOnTextChange,
  wrapperClassName,
  wrapperStyle,
  ...props
}: AnimatedTextProps<P>) => {
  if (!text) return null;

  return (
    <AnimatedView
      className={wrapperClassName}
      style={[styles.textWrap, wrapperStyle]}
    >
      {text.length &&
        text.split(staggerSeparator).map((char, index) => {
          const key = `${char}-${index}${reanimateOnTextChange ? '-' + text : ''}`;
          return (
            <BaseAnimatedLetter
              key={key}
              text={char}
              index={index}
              {...props}
            />
          );
        })}
    </AnimatedView>
  );
};

const styles = StyleSheet.create({
  textWrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

export default BaseAnimatedText;
