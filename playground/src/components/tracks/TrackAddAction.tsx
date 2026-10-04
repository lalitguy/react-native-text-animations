import type { AddTrack } from "@/playground/types";
import { generateUniqueId } from "@/playground/utils";
import { memo } from "react";
import BaseButton from "../ui/BaseButton";
import { useWindowDimensions } from "react-native";
import { TABLET_MIN_WIDTH } from "@/playground/constants";

type Props = {
  addTrack: AddTrack;
};
const TrackAddAction = ({ addTrack }: Props) => {
  const { width } = useWindowDimensions();
  const isMobile = width < TABLET_MIN_WIDTH;

  return (
    <BaseButton
      text="+ Add Track"
      className={isMobile ? "bg-primary" : ""}
      textClassName={isMobile ? "text-button font-hanken-bold" : ""}
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
