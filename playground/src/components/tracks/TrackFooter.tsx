import type { AddTrack } from "@/playground/types";
import { generateUniqueId } from "@/playground/utils";
import { memo } from "react";
import BaseButton from "../ui/BaseButton";

type Props = {
  addTrack: AddTrack;
};
const TrackFooter = ({ addTrack }: Props) => {
  return (
    <BaseButton
      text="+ Add Track"
      onClick={() =>
        addTrack({
          id: generateUniqueId(),
          inputRange: [0, 1],
          outputRange: [0, 1],
          property: "translateY",
        })
      }
    />
  );
};

export default memo(TrackFooter);
