import { memo } from 'react';
import Animated from 'react-native-reanimated';
import type { AnimatedTextProps } from '../types';

interface AnimatedLetterProps extends Omit<AnimatedTextProps, 'wrapperStyle'> {
  index: number;
}

const AnimatedLetter = (props: AnimatedLetterProps) => {
  const { text: character, ...rest } = props;

  if (!character || rest) return null;

  return <Animated.Text>{character}</Animated.Text>;
};

export default memo(AnimatedLetter);
