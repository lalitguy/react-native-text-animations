import AnimatedText from './components/AnimatedText';
import FadeText from './components/animations/FadeText';
import RotateText from './components/animations/RotateText';
import SpringText from './components/animations/SpringText';
import WaveText from './components/animations/WaveText';

import AnimateText from './v2/components/AnimatedText';

import type { AnimatedTextConfig } from './types/animations';

export default AnimatedText;

export type { AnimatedTextConfig };

export { FadeText, RotateText, SpringText, WaveText, AnimateText };
