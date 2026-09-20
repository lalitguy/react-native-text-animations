import { memo, useMemo } from 'react';
import { StyleSheet } from 'react-native';
import Animated from 'react-native-reanimated';
import type { AnimatedTextProps } from '../types';
import { groupTracks } from '../utils';
import AnimatedLetter from './AnimatedLetter';

const AnimatedText = (props: AnimatedTextProps) => {
  const {
    text,
    wrapperStyle,
    stagger = { by: 'character', from: 'start' },
    preset,
    animation,
    ...rest
  } = props;

  const animateArray = useMemo(() => {
    if (stagger.by === 'none') return [text];
    return stagger.by === 'character' ? text.split('') : text.split(/(?<=\s)/);
  }, [stagger.by, text]);

  const groupedTracks = useMemo(() => {
    const tracks = preset ? [] : (animation?.tracks ?? []);

    return groupTracks(tracks);
  }, [animation?.tracks, preset]);

  if (!text) return null;

  return (
    <Animated.View style={[styles.textWrap, wrapperStyle]}>
      {animateArray.map((char, idx) => {
        const key = `animate-${stagger.by}-${text}-${idx}`;
        return (
          <AnimatedLetter
            key={key}
            text={char}
            index={idx}
            textLength={animateArray.length}
            stagger={stagger}
            groupedTracks={groupedTracks}
            {...rest}
          />
        );
      })}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  textWrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

export default memo(AnimatedText);
