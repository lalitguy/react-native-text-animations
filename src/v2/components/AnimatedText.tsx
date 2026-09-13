import { memo, useMemo } from 'react';
import Animated from 'react-native-reanimated';
import type { AnimatedTextProps } from '../types';
import AnimatedLetter from './AnimatedLetter';

const AnimatedText = (props: AnimatedTextProps) => {
  const {
    text,
    wrapperStyle,
    stagger = { by: 'character', delay: 0, from: 'start' },
    ...rest
  } = props;

  const animateArray = useMemo(() => {
    if (stagger.by === 'none') return [text];
    return stagger.by === 'character' ? text.split('') : text.split(' ');
  }, [stagger.by, text]);

  if (!text) return null;

  return (
    <Animated.View style={wrapperStyle}>
      {animateArray.map((char, idx) => {
        const key = `animate-${stagger.by}-${text}-${idx}`;
        return (
          <AnimatedLetter
            key={key}
            text={char}
            index={idx}
            stagger={stagger}
            {...rest}
          />
        );
      })}
    </Animated.View>
  );
};

export default memo(AnimatedText);
