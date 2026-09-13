import {
  interpolate,
  useAnimatedStyle,
  type SharedValue,
  type TransformArrayItem,
} from 'react-native-reanimated';
import type { TextStyle } from 'react-native';
import type { DefaultStyle } from 'react-native-reanimated/lib/typescript/hook/commonTypes';

import type { TrackConfig, Transition } from '../types';
import { resolveTransition } from '../utils';

type useTracksAnimationProps = {
  progress: SharedValue<number>;
  tracks: TrackConfig[];
  globalTransition?: Transition;
};

const useTracksAnimation = ({
  tracks,
  progress,
  globalTransition = { type: 'timing', easing: 'linear' },
}: useTracksAnimationProps) => {
  return useAnimatedStyle(() => {
    const style: DefaultStyle = {};
    const transform: NonNullable<TextStyle['transform']>[number][] = [];

    tracks.forEach((track) => {
      const {
        property,
        inputRange,
        outputRange,
        transition = globalTransition,
      } = track;

      const trackTransition = interpolate(
        progress.value, //global linear progress
        inputRange,
        outputRange
      );

      //resolve local transition for the track
      const animationValue = resolveTransition(transition, trackTransition);

      if (property === 'opacity') {
        style.opacity = animationValue;
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
          [property]: animationValue,
        } as TransformArrayItem);
        return;
      }
      if (
        property === 'rotateX' ||
        property === 'rotateY' ||
        property === 'rotateZ'
      ) {
        transform.push({
          [property]: `${animationValue}deg`,
        } as TransformArrayItem);
      }
    });

    return style;
  });
};

export { useTracksAnimation };
