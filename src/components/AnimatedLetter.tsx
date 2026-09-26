import { memo } from 'react';
import Animated from 'react-native-reanimated';
import { defaultConfigs } from '../constant';
import { useUnitProgress } from '../hooks/useUnitProgress';
import type { AnimatedTextProps, GroupedTracksConfig } from '../types';
import { useTracksAnimation } from '../hooks';

interface AnimatedLetterProps extends Omit<AnimatedTextProps, 'wrapperStyle'> {
  index: number;
  textLength: number;
  groupedTracks: GroupedTracksConfig;
}

const AnimatedLetter = (props: AnimatedLetterProps) => {
  const {
    text: character,
    textLength,
    index,
    textStyle,
    transition = { type: 'timing', easing: 'easeInOut' },
    stagger = {
      by: 'character',
      gap: defaultConfigs.staggerGap,
      from: 'start',
    },
    duration = defaultConfigs.unitDuration,
    delay = 0,
    groupedTracks,
    repeat = 1,
    reverse = false,
  } = props;

  const progress = useUnitProgress({
    transition: transition,
    index,
    textLength,
    stagger,
    duration,
    delay,
    repeat,
    reverse,
  });

  const animatedStyle = useTracksAnimation({
    progress,
    groupedTracks,
  });

  if (!character) return null;

  return (
    <Animated.Text style={[textStyle, animatedStyle]}>
      {character}
    </Animated.Text>
  );
};

export default memo(AnimatedLetter);
