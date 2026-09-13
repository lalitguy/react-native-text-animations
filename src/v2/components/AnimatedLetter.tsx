import { memo } from 'react';
import Animated from 'react-native-reanimated';
import type { AnimatedTextProps } from '../types';
import { useUnitProgress } from '../hooks/useUnitProgress';
import { useTracksAnimation } from '../hooks';

interface AnimatedLetterProps extends Omit<AnimatedTextProps, 'wrapperStyle'> {
  index: number;
  textLength: number;
}

const AnimatedLetter = (props: AnimatedLetterProps) => {
  const {
    text: character,
    duration,
    textLength,
    index,
    animation,
    textStyle,
    transition: globalTransition,
    ...rest
  } = props;

  const unitAnimationDuration = duration / textLength;

  const tracks = rest.preset ? [] : animation.tracks;

  const progress = useUnitProgress({
    unitDuration: unitAnimationDuration,
    repeat: animation?.repeat ?? 1,
    delay: unitAnimationDuration * index,
  });

  const animatedStyle = useTracksAnimation({
    tracks,
    progress,
    globalTransition,
  });

  if (!character) return null;

  return (
    <Animated.Text style={[textStyle, animatedStyle]}>
      {character}
    </Animated.Text>
  );
};

export default memo(AnimatedLetter);
