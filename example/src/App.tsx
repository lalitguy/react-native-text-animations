// import 'react-native-reanimated';
import { StyleSheet, Text, View } from 'react-native';

import { FadeText } from 'react-native-animated-text';
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>

      <FadeText
        text="React Native Animated Text is awesome!✨"
        staggerDelay={50}
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
