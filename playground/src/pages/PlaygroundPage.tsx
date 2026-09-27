import { View, Text, StyleSheet } from "react-native";
import { theme } from "../constants";

const PlaygroundPage = () => {
  return (
    <View style={styles.container}>
      <Text>PlaygroundPage</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.primary,
  },
});

export default PlaygroundPage;
