// import 'react-native-reanimated';
import { StyleSheet, Text, View } from 'react-native';
import Animated from 'react-native-reanimated';

import FadeText, { a } from 'react-native-animated-text';
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <FadeText text="React Native Animated Text is awesome!" />

      <Animated.Text>{a}</Animated.Text>
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
