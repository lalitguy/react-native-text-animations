import { View, Text, StyleSheet } from "react-native";

const TabIcon = ({ char }: { char: string }) => {
  return (
    <View>
      <Text style={styles.text}>{char}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 22,
    fontWeight: "600",
  },
});

export default TabIcon;
