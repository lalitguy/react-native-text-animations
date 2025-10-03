import Animated from 'react-native-reanimated';

const BaseAnimatedLetter = ({
  text: char,
  index,
  useAnimation,
}: AnimatedLetterProps) => {
  const animatedStyle = useAnimation({ index });

  return <Animated.Text style={[animatedStyle]}>{char}</Animated.Text>;
};

export default BaseAnimatedLetter;
