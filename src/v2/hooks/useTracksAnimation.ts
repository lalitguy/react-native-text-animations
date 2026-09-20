import {
  interpolate,
  interpolateColor,
  useAnimatedStyle,
  type SharedValue,
  type TransformArrayItem,
} from 'react-native-reanimated';

import type { TextStyle } from 'react-native';
import type { GroupedTracksConfig } from '../types';

type useTracksAnimationProps = {
  progress: SharedValue<number>;
  groupedTracks: GroupedTracksConfig;
};

const useTracksAnimation = ({
  groupedTracks,
  progress,
}: useTracksAnimationProps) => {
  return useAnimatedStyle(() => {
    const style: TextStyle = {};
    const transform: TransformArrayItem[] = [];

    const { colorTracks, opacityTracks, rotateTracks, transformTracks } =
      groupedTracks;

    for (const track of colorTracks) {
      const trackTransition = interpolateColor(
        progress.value,
        track.inputRange,
        track.outputRange
      );
      style.color = (trackTransition as unknown as string)?.trim();
    }

    for (const track of opacityTracks) {
      const trackTransition = interpolate(
        progress.value,
        track.inputRange,
        track.outputRange
      );
      style.opacity = trackTransition;
    }

    for (const track of rotateTracks) {
      const trackTransition = interpolate(
        progress.value,
        track.inputRange,
        track.outputRange
      );
      transform.push({
        [track.property]: `${trackTransition}deg`,
      } as TransformArrayItem);
    }

    for (const track of transformTracks) {
      const trackTransition = interpolate(
        progress.value,
        track.inputRange,
        track.outputRange
      );
      transform.push({
        [track.property]: trackTransition,
      } as TransformArrayItem);
    }

    return {
      ...style,
      ...(transform.length ? { transform } : {}),
    };
  });
};

export { useTracksAnimation };
