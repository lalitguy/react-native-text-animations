// import 'react-native-reanimated';
import { StyleSheet, Text, View } from 'react-native';

import { FadeText, RotateText, SpringText } from 'react-native-animated-text';
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>

      <FadeText text="Fade Animation is awesome!✨" />
      <RotateText text="Rotate Animation is Awesome!✨" />
      <SpringText
        text="Spring Animation is Awesome!✨"
        scaleFrom={0.5}
        initialOpacity={0}
        offsetX={0}
        offsetY={-10}
        duration={300}
        reanimateOnTextChange
        bounce={{ x: 1.5, y: 0.6 }}
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
