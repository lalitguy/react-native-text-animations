import { type SharedValue } from 'react-native-reanimated';
import type { TrackConfig } from '../types';

type useTracksAnimationProps = {
  progress: SharedValue<number>;
  tracks: TrackConfig[];
};

const useTracksAnimation = ({}: useTracksAnimationProps) => {
  return;
};

export { useTracksAnimation };
