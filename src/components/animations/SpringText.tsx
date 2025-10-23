import React from 'react';
import useSpringAnimation from '../../hooks/useSpringAnimation';
import type { SpringTextProps } from '../../types/animations';
import BaseAnimatedText from '../common/BaseAnimatedText';

const SpringText: React.FC<SpringTextProps> = (props) => (
  <BaseAnimatedText {...props} useAnimation={useSpringAnimation} />
);

export default SpringText;
