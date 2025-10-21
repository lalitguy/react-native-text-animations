import { StyleSheet } from 'react-native';
import Animated from 'react-native-reanimated';
import BaseAnimatedLetter from './BaseAnimatedLetter';
import type { BaseAnimationHookProps, AnimatedTextProps } from '../../types';

const BaseAnimatedText = <P extends BaseAnimationHookProps>({
  text,
  staggerSeparator,
  reanimateOnTextChange,
  ...props
}: AnimatedTextProps<P>) => {
  if (!text) return null;

  return (
    <Animated.View style={[styles.textWrap]}>
      {text.length &&
        text.split(staggerSeparator ?? '').map((char, index) => {
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
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  textWrap: {
    flexDirection: 'row',
  },
});

export default BaseAnimatedText;
