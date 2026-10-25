import Container from "@/example/components/Container";
import { useCallback, useState } from "react";
import { StyleSheet, View } from "react-native";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import AnimatedText from "react-native-text-animations";
import { useFocusEffect } from "expo-router";

const REVEAL_DURATION = 700 + 6 * 110;

const Loading = () => {
  const progress = useSharedValue(0);
  const [trackWidth, setTrackWidth] = useState(0);
  const [animationKey, setAnimationKey] = useState(0);

  useFocusEffect(
    useCallback(() => {
      setAnimationKey((key) => key + 1);
      progress.value = 0;
      progress.value = withTiming(1, {
        duration: REVEAL_DURATION,
        easing: Easing.out(Easing.cubic),
      });
    }, [progress])
  );

  const progressStyle = useAnimatedStyle(
    () => ({
      width: trackWidth * 1 * progress.value,
    }),
    [trackWidth, progress]
  );

  return (
    <View style={styles.screen}>
      <Container>
        <AnimatedText
          key={animationKey}
          text="LOADING"
          animation={{
            tracks: [
              { property: "opacity", inputRange: [0, 1], outputRange: [0, 1] },
              {
                property: "translateY",
                inputRange: [0, 1],
                outputRange: [-44, 0],
              },
              {
                property: "rotateX",
                inputRange: [0, 1],
                outputRange: [-180, 0],
              },
            ],
          }}
          textStyle={styles.title}
          wrapperStyle={styles.titleWrap}
          stagger={{ by: "character", gap: 110 }}
          duration={700}
          transition={{ type: "timing", easing: "easeOut" }}
        />
        <View
          style={styles.track}
          onLayout={(event) => setTrackWidth(event.nativeEvent.layout.width)}
        >
          <Animated.View style={[styles.progress, progressStyle]} />
        </View>
      </Container>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: "#15192B" },
  titleWrap: {
    width: "100%",
    paddingHorizontal: 18,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    flexWrap: "nowrap",
  },
  title: {
    color: "#F8EAF0",
    fontSize: 42,
    fontWeight: "900",
    letterSpacing: 8,
  },
  track: {
    height: 3,
    width: "88%",
    backgroundColor: "#542D49",
    marginTop: 20,
    overflow: "hidden",
    borderRadius: 3,
  },
  progress: {
    height: 3,
    width: "68%",
    backgroundColor: "#FF8FB7",
    borderRadius: 3,
  },
});

export default Loading;
