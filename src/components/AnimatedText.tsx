import { memo, useMemo } from "react";
import { StyleSheet } from "react-native";
import Animated from "react-native-reanimated";
import { defaultConfigs, PRESETS } from "../constant";
import type { AnimatedTextProps } from "../types";
import { groupTracks } from "../utils";
import AnimatedUnit from "./AnimatedUnit";

const AnimatedText = (props: AnimatedTextProps) => {
  const {
    text,
    wrapperStyle,
    stagger = { by: "character", from: "start" },
    preset,
    animation,
    ...rest
  } = props;

  const animateArray = useMemo(() => {
    if (stagger.by === "none") return [text];
    return stagger.by === "character" ? text.split("") : text.split(/(?<=\s)/);
  }, [stagger.by, text]);

  const resolvedAnimation = useMemo(() => {
    const animationConfig = !animation
      ? PRESETS[preset || defaultConfigs.defaultPreset]
      : animation;

    return animationConfig;
  }, [preset, animation]);

  if (!text) return null;

  return (
    <Animated.View style={[styles.textWrap, wrapperStyle]}>
      {animateArray.map((char, idx) => {
        const key = `animate-${preset ?? "custom"}-${idx}`;

        const groupedTracks = groupTracks(resolvedAnimation, idx);
        return (
          <AnimatedUnit
            key={key}
            text={char}
            index={idx}
            textLength={animateArray.length}
            stagger={stagger}
            groupedTracks={groupedTracks}
            {...rest}
          />
        );
      })}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  textWrap: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
});

export default memo(AnimatedText);
