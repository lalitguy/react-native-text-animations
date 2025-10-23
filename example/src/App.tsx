// import 'react-native-reanimated';
import { StyleSheet, Text, View } from 'react-native';

import { FadeText, RotateText } from 'react-native-animated-text';
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>

      <FadeText text="Fade Animation is awesome!✨" />
      <RotateText
        text="Rotate Animation is Awesome!✨"
        staggerDelay={50}
        delay={0}
        duration={300}
        offsetX={10}
        offsetY={10}
        reanimateOnTextChange
        initialOpacity={0.8}
        rotateXStart={0}
        rotateYStart={360}
        rotateZStart={0}
        rotateXEnd={0}
        rotateYEnd={0}
        rotateZEnd={0}
      />

      {/* <Animated.Text>njo</Animated.Text> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
