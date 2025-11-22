import React, { memo } from 'react';
import useRotateAnimation from '../../hooks/useRotateAnimation';
import type { RotateTextProps } from '../../types/animations';
import BaseAnimatedText from '../common/BaseAnimatedText';

const RotateText: React.FC<RotateTextProps> = (props) => (
  <BaseAnimatedText {...props} useAnimation={useRotateAnimation} />
);

export default memo(RotateText);
