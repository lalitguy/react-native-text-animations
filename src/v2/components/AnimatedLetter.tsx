import { memo } from 'react';
import Animated from 'react-native-reanimated';
import type { AnimatedTextProps } from '../types';
import { useUnitProgress } from '../hooks/useUnitProgress';

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
    ...rest
  } = props;

  const unitAnimationDuration = duration / textLength;

  const progress = useUnitProgress({
    unitDuration: unitAnimationDuration,
    repeat: animation?.repeat ?? 1,
    delay: unitAnimationDuration * index,
  });

  console.log(progress);

  if (!character || rest) return null;

  return <Animated.Text>{character}</Animated.Text>;
};

export default memo(AnimatedLetter);
