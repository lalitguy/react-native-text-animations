import React from 'react';
import useAnimatedText from '../hooks/useAnimatedText';
import type { AnimatedTextConfigProps } from '../types/animations';
import BaseAnimatedText from './common/BaseAnimatedText';

const AnimatedText: React.FC<AnimatedTextConfigProps> = (props) => (
  <BaseAnimatedText {...props} useAnimation={useAnimatedText} />
);

export default AnimatedText;
