import type { AddTrack } from "@/playground/types";
import { generateUniqueId } from "@/playground/utils";
import { memo } from "react";
import BaseButton from "../ui/BaseButton";

type Props = {
  addTrack: AddTrack;
};
const TrackAddAction = ({ addTrack }: Props) => {
  return (
    <BaseButton
      text="+ Add Track"
      className={"bg-primary py-0 md:bg-button md:py-2"}
      textClassName={"text-button font-hanken-bold md:text-action"}
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

export default memo(TrackAddAction);
