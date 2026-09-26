import type { PlaygroundAnimatedText } from "../types";
import { defaultConfigs } from ".";

const initalPlayGround: PlaygroundAnimatedText = {
  text: "Hello, World!",
  textStyle: {
    fontSize: 20,
  },
  duration: defaultConfigs.unitDuration,
  preset: defaultConfigs.defaultPreset,
  stagger: {
    by: "character",
    from: "start",
    gap: defaultConfigs.staggerGap,
  },
};

export { initalPlayGround };
