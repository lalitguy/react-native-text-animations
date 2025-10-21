import useFadeAnimation from '../../hooks/useFadeAnimation';
import type { FadeTextProps } from '../../types/animations';
import BaseAnimatedText from '../common/BaseAnimatedText';

const FadeText: React.FC<FadeTextProps> = (props) => (
  <BaseAnimatedText {...props} useAnimation={useFadeAnimation} />
);

export default FadeText;
