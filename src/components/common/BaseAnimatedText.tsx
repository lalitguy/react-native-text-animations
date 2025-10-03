import { StyleSheet, View } from 'react-native';
import BaseAnimatedLetter from './BaseAnimatedLetter';

const BaseAnimatedText = ({ text, ...props }: AnimatedTextProps) => {
  if (!text) return null;

  return (
    <View style={[styles.textWrap]}>
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
    </View>
  );
};

const styles = StyleSheet.create({
  textWrap: {
    flexDirection: 'row',
  },
});

export default BaseAnimatedText;
