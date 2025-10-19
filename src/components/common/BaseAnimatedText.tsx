import { StyleSheet } from 'react-native';
import Animated from 'react-native-reanimated';
import BaseAnimatedLetter from './BaseAnimatedLetter';
import type { BaseAnimationHookProps, AnimatedTextProps } from '../../types';

const BaseAnimatedText = <P extends BaseAnimationHookProps>({
  text,
  ...props
}: AnimatedTextProps<P>) => {
  if (!text) return null;

  return (
    <Animated.View style={[styles.textWrap]}>
      {text.length &&
        text.split('').map((char, index) => {
          return (
            <BaseAnimatedLetter
              key={`${char}-${index}`}
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
