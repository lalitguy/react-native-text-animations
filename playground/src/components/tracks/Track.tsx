import { animationOptions } from "@/playground/constants/animation-config";
import { memo, useCallback } from "react";
import { View } from "react-native";
import type {
  AnimationProperty,
  ColorAnimationProperty,
  ColorTrackPlayground,
  NumbericTrackPlayground,
  RemoveTrack,
  UpdateTrack,
} from "../../types";
import Dropdown from "../ui/Dropdown";

type Props = {
  track: NumbericTrackPlayground | ColorTrackPlayground;
  updateTrack: UpdateTrack;
  removeTrack: RemoveTrack;
};
const Track = ({ track, updateTrack }: Props) => {
  const handlePropertyChange = useCallback(
    (value: AnimationProperty | ColorAnimationProperty) => {
      if (value === "rotateX" || value === "rotateY" || value === "rotateZ") {
        updateTrack(track.id, {
          property: value,
          inputRange: [0, 1],
          outputRange: [-90, 0],
        });
      } else if (value === "color") {
        updateTrack(track.id, {
          property: value,
          inputRange: [0, 1],
          outputRange: ["#000000", "#00ff00"],
        });
      } else if (["translateX", "translateY"].includes(value)) {
        updateTrack(track.id, {
          property: value,
          inputRange: [0, 1],
          outputRange: [-20, 0],
        });
      } else {
        updateTrack(track.id, {
          property: value,
          inputRange: [0, 1],
          outputRange: [0, 1],
        });
      }
    },
    [track.id, updateTrack]
  );

  return (
    <View className="flex-row gap-4 mb-4">
      <Dropdown
        options={animationOptions}
        selectedValue={track.property}
        onValueChange={handlePropertyChange}
      />
    </View>
  );
};

export default memo(Track);
