import Container from "@/example/components/Container";
import { useCallback, useState } from "react";
import { useFocusEffect } from "expo-router";
import { StyleSheet, View } from "react-native";
import AnimatedText from "react-native-text-animations";

const Swipes = () => {
  const [animationKey, setAnimationKey] = useState(0);

  useFocusEffect(
    useCallback(() => {
      setAnimationKey((key) => key + 1);
    }, [])
  );

  return (
    <View style={styles.screen}>
      <Container>
        <AnimatedText
          key={animationKey}
          text="Should feel like nothing else"
          animation={{
            tracks: (index) => [
              { property: "opacity", inputRange: [0, 1], outputRange: [0, 1] },
              {
                property: "translateX",
                inputRange: [0, 1],
                outputRange: [index % 2 === 0 ? -52 : 52, 0],
              },
              {
                property: "translateY",
                inputRange: [0, 1],
                outputRange: [24, 0],
              },
              {
                property: "color",
                inputRange: [0, 1],
                outputRange: ["#F0EEE8", index === 4 ? "#FF8A70" : "#F0EEE8"],
              },
            ],
          }}
          textStyle={styles.word}
          wrapperStyle={styles.copy}
          stagger={{ by: "word", gap: 150 }}
          duration={650}
          transition={{ type: "timing", easing: "easeOut" }}
        />
      </Container>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: "#102A2A" },
  copy: {
    width: "100%",
    paddingHorizontal: 32,
    flexDirection: "column",
    alignItems: "flex-start",
  },
  word: {
    color: "#F0EEE8",
    fontSize: 46,
    lineHeight: 55,
    fontWeight: "800",
    letterSpacing: -1.4,
  },
});

export default Swipes;
