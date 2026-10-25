import { Easing, withSpring, withTiming } from "react-native-reanimated";
import { defaultConfigs, easingMap } from "../constant";
import type {
  AnimationConfig,
  ColorTrackConfig,
  GroupedTracksConfig,
  NumericTrackConfig,
  StaggerType,
  Transition,
} from "../types";

const resolveDelay = (
  index: number,
  stagger: StaggerType,
  textLength: number
) => {
  const gap = stagger.gap ?? defaultConfigs.staggerGap;
  switch (stagger.from) {
    case "center":
      const centralIndex = (textLength - 1) / 2;
      const diff = Math.abs(index - centralIndex);
      return diff <= 0.5 ? 0 : diff * gap;
    case "end":
      return (textLength - 1 - index) * gap;
    case "start":
    default:
      return gap * index;
  }
};

const groupTracks = (
  prop: AnimationConfig,
  index: number
): GroupedTracksConfig => {
  const { tracks } = prop;
  const colorTracks: ColorTrackConfig[] = [];
  const opacityTracks: NumericTrackConfig[] = [];
  const transformTracks: NumericTrackConfig[] = [];
  const rotateTracks: NumericTrackConfig[] = [];

  const tracksArray = Array.isArray(tracks) ? tracks : tracks(index);

  tracksArray.forEach((track) => {
    const { property } = track;

    switch (property) {
      case "color":
        colorTracks.push(track);
        break;
      case "opacity":
        opacityTracks.push(track);
        break;
      case "scale":
      case "scaleX":
      case "scaleY":
      case "translateX":
      case "translateY":
        transformTracks.push(track);
        break;
      case "rotateX":
      case "rotateY":
      case "rotateZ":
        rotateTracks.push(track);
        break;
    }
  });

  return {
    colorTracks,
    opacityTracks,
    transformTracks,
    rotateTracks,
  };
};

const resolveTransition = (duration: number, transition: Transition) => {
  if (transition.type === "timing") {
    if (typeof transition.easing === "string") {
      return withTiming(1, {
        duration,
        easing: easingMap[transition.easing] ?? easingMap.easeInOut,
      });
    }
    const [x1, y1, x2, y2] = transition.easing.curve;
    return withTiming(1, { duration, easing: Easing.bezier(x1, y1, x2, y2) });
  }

  if (transition.type === "spring") {
    return withSpring(1, { duration, dampingRatio: transition.dampingRatio });
  }
  return withTiming(1, { duration, easing: easingMap.easeInOut });
};

export { groupTracks, resolveDelay, resolveTransition };
