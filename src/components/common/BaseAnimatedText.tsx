import { StyleSheet } from 'react-native';
import Animated from 'react-native-reanimated';
import BaseAnimatedLetter from './BaseAnimatedLetter';
import type { BaseAnimationHookProps, AnimatedTextProps } from '../../types';
import type { ComponentProps } from 'react';
import React from 'react';

type AnimatedViewProps = ComponentProps<typeof Animated.View> & {
  className?: string;
};

const AnimatedView = React.forwardRef<
  React.ComponentRef<typeof Animated.View>,
  AnimatedViewProps
>((props, ref) => <Animated.View ref={ref} {...props} />);

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
