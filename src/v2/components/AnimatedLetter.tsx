import { memo } from 'react';
import Animated from 'react-native-reanimated';
import { useTracksAnimation } from '../hooks';
import { useUnitProgress } from '../hooks/useUnitProgress';
import type { AnimatedTextProps } from '../types';

interface AnimatedLetterProps extends Omit<AnimatedTextProps, 'wrapperStyle'> {
  index: number;
  textLength: number;
}

const AnimatedLetter = (props: AnimatedLetterProps) => {
  const {
    text: character,
    textLength,
    index,
    animation,
    textStyle,
    transition = { type: 'timing', easing: 'easeInOut' },
    stagger = { by: 'character', gap: 100, from: 'start' },
    preset,
    duration = 1000,
    delay = 0,
  } = props;

  const tracks = preset ? [] : (animation?.tracks ?? []);

  const progress = useUnitProgress({
    repeat: animation?.repeat ?? 1,
    transition: transition,
    index,
    textLength,
    stagger,
    duration,
    delay,
  });

  const animatedStyle = useTracksAnimation({
    tracks,
    progress,
  });

  if (!character) return null;

  return (
    <Animated.Text style={[textStyle, animatedStyle]}>
      {character}
    </Animated.Text>
  );
};

export default memo(AnimatedLetter);
