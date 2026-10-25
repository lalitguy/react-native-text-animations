import Container from "@/example/components/Container";
import { useCallback, useState } from "react";
import { useFocusEffect } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import AnimatedText from "react-native-text-animations";

const HeartBeat = () => {
  const [animationKey, setAnimationKey] = useState(0);

  useFocusEffect(
    useCallback(() => {
      setAnimationKey((key) => key + 1);
    }, [])
  );

  return (
    <View style={styles.screen}>
      <Container>
        <Text style={styles.eyebrow}>A LITTLE RHYTHM</Text>
        <AnimatedText
          key={animationKey}
          text="Heart Beat"
          animation={{
            tracks: [
              {
                property: "scale",
                inputRange: [0, 0.13, 0.27, 0.42, 1],
                outputRange: [1, 1.13, 1, 1.08, 1],
              },
            ],
          }}
          textStyle={styles.title}
          wrapperStyle={styles.titleWrap}
          repeat={-1}
          duration={850}
          delay={180}
          stagger={{ by: "word", gap: 0 }}
          transition={{ type: "timing", easing: "easeInOut" }}
        />
        <View style={styles.pulseLine} />
        <Text style={styles.caption}>FEEL THE MOMENT</Text>
      </Container>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: "#171426" },
  eyebrow: {
    color: "#A89BBF",
    fontSize: 11,
    letterSpacing: 4,
    fontWeight: "700",
    marginBottom: 30,
  },
  titleWrap: {
    flexDirection: "column",
    alignItems: "center",
  },
  title: {
    color: "#FF789F",
    fontSize: 68,
    lineHeight: 76,
    fontWeight: "900",
    letterSpacing: -2,
    textAlign: "center",
  },
  pulseLine: {
    width: 76,
    height: 3,
    borderRadius: 4,
    backgroundColor: "#FF789F",
    marginTop: 34,
  },
  caption: {
    color: "#716982",
    fontSize: 10,
    letterSpacing: 3,
    fontWeight: "700",
    marginTop: 18,
  },
});

export default HeartBeat;
