import useRotateAnimation from '../../hooks/useRotateAnimation';
import type { RotateTextProps } from '../../types/animations';
import BaseAnimatedText from '../common/BaseAnimatedText';

const RotateText: React.FC<RotateTextProps> = (props) => (
  <BaseAnimatedText {...props} useAnimation={useRotateAnimation} />
);

export default RotateText;
