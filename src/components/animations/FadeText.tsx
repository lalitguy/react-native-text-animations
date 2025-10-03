import useFadeAnimation from '../../hooks/useFadeAnimation';
import BaseAnimatedText from '../common/BaseAnimatedText';

const FadeText = ({ ...props }: FadeTextProps) => {
  return <BaseAnimatedText {...props} useAnimation={useFadeAnimation} />;
};

export default FadeText;
