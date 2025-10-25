import React from 'react';

import useWaveAnimation from '../../hooks/useWaveAnimation';
import type { WaveTextProps } from '../../types/animations';
import BaseAnimatedText from '../common/BaseAnimatedText';

const WaveText: React.FC<WaveTextProps> = (props) => (
  <BaseAnimatedText {...props} useAnimation={useWaveAnimation} />
);

export default WaveText;
