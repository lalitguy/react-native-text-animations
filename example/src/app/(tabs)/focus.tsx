import Container from "@/example/components/Container";
import { useCallback, useState } from "react";
import { useFocusEffect } from "expo-router";
import { StyleSheet, View } from "react-native";
import AnimatedText from "react-native-text-animations";

const Focus = () => {
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
          text="FOCUS."
          animation={{
            tracks: (index) => {
              if (index === 0) {
                return [
                  {
                    property: "rotateY",
                    inputRange: [0, 0.3, 1],
                    outputRange: [180, 0, 0],
                  },
                ];
              }

              if (index < 5) {
                return [
                  {
                    property: "color",
                    inputRange: [0, 0.4, 0.5, 0.6, 1],
                    outputRange: [
                      "#B8C9EE",
                      "#B8C9EE",
                      "#FFF1A8",
                      "#B8C9EE",
                      "#B8C9EE",
                    ],
                  },
                ];
              }

              return [
                {
                  property: "color",
                  inputRange: [0, 1],
                  outputRange: ["#FF8A70", "#FF8A70"],
                },
                {
                  property: "scale",
                  inputRange: [0, 0.8, 0.85, 0.93, 1],
                  outputRange: [0, 0, 1, 1.1, 1],
                },
                {
                  property: "opacity",
                  inputRange: [0, 0.8, 0.85, 1],
                  outputRange: [0, 0, 0.8, 1],
                },
              ];
            },
          }}
          textStyle={styles.letter}
          wrapperStyle={styles.word}
          stagger={{ by: "character", gap: 50 }}
          duration={1800}
          delay={10}
        />
      </Container>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: "#111827" },
  word: {
    width: "100%",
    paddingHorizontal: 10,
    flexDirection: "row",
    flexWrap: "nowrap",
    alignItems: "baseline",
    justifyContent: "center",
  },
  letter: {
    color: "#B8C9EE",
    fontSize: 58,
    fontWeight: "900",
    letterSpacing: 1,
  },
});

export default Focus;
