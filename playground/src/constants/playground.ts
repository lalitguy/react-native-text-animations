import type { PlaygroundAnimatedText } from "../types";
import { defaultConfigs } from ".";

const initalPlayGround: PlaygroundAnimatedText = {
  text: "Sparkles✨",
  duration: defaultConfigs.unitDuration,
  preset: defaultConfigs.defaultPreset,
  stagger: {
    by: "character",
    from: "start",
    gap: defaultConfigs.staggerGap,
  },
};

export { initalPlayGround };
