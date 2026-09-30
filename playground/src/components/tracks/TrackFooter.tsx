import { memo } from "react";
import { Pressable, View } from "react-native";
import BaseText from "../ui/BaseText";
import { generateUniqueId } from "@/playground/utils";
import type { AddTrack } from "@/playground/types";

type Props = {
  addTrack: AddTrack;
};
const TrackFooter = ({ addTrack }: Props) => {
  return (
    <View>
      <Pressable
        onPress={() =>
          addTrack({
            id: generateUniqueId(),
            inputRange: [0, 1],
            outputRange: [0, 1],
            property: "translateY",
          })
        }
      >
        <BaseText>Add Track</BaseText>
      </Pressable>
    </View>
  );
};

export default memo(TrackFooter);
