import {
  interpolate,
  useAnimatedStyle,
  type SharedValue,
  type TransformArrayItem,
} from 'react-native-reanimated';
import type { DefaultStyle } from 'react-native-reanimated/lib/typescript/hook/commonTypes';

import type { TrackConfig } from '../types';

type useTracksAnimationProps = {
  progress: SharedValue<number>;
  tracks: TrackConfig[];
};

const useTracksAnimation = ({ tracks, progress }: useTracksAnimationProps) => {
  return useAnimatedStyle(() => {
    const style: DefaultStyle = {};
    const transform: NonNullable<DefaultStyle['transform']>[number][] = [];

    tracks.forEach((track) => {
      const { property, inputRange, outputRange } = track;

      const trackTransition = interpolate(
        progress.value, //global linear progress
        inputRange,
        outputRange
      );

      if (property === 'opacity') {
        style.opacity = trackTransition;
        return;
      }
      if (
        property === 'scale' ||
        property === 'scaleX' ||
        property === 'scaleY' ||
        property === 'translateX' ||
        property === 'translateY'
      ) {
        transform.push({
          [property]: trackTransition,
        } as TransformArrayItem);
        return;
      }
      if (
        property === 'rotateX' ||
        property === 'rotateY' ||
        property === 'rotateZ'
      ) {
        transform.push({
          [property]: `${trackTransition}deg`,
        } as TransformArrayItem);
      }
    });

    return {
      ...style,
      ...(transform?.length ? { transform } : {}),
    } as DefaultStyle;
  });
};

export { useTracksAnimation };
