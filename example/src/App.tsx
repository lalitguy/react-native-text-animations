// import 'react-native-reanimated';
import { StyleSheet, View } from 'react-native';

import AnimatedText from 'react-native-animated-text';
export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text>Open up App.tsx to start working on your app!</Text>

      <FadeText text="Fade Animation is awesome!✨" />
      <RotateText text="Rotate Animation is Awesome!✨" />
      <SpringText text="Spring Animation is Awesome!✨" /> */}

      <AnimatedText
        text="Animated Text is Awesome!✨"
        reanimateOnTextChange
        textStyle={{ fontSize: 24 }}
        config={{
          fromOpacity: 0.5,
          delay: 200,
          toOpacity: 1.2,
          duration: 300,
          offsetX: 0,
          offsetY: 0,
          staggerDelay: 50,
          scaleFrom: 0.8,
          scaleTo: 1,
          rotateTo: {
            y: 360,
          },
        }}
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
