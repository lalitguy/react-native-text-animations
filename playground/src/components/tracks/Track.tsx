import { animationOptions } from "@/playground/constants/animation-config";
import { memo, useCallback, useEffect, useState } from "react";
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
import { BaseText, InputField } from "../ui";

type Props = {
  track: NumbericTrackPlayground | ColorTrackPlayground;
  updateTrack: UpdateTrack;
  removeTrack: RemoveTrack;
};
const Track = ({ track, updateTrack }: Props) => {
  const [inputRanges, setInputRanges] = useState(track.inputRange);
  const [outputRanges, setOutputRanges] = useState(track.outputRange);

  useEffect(() => {
    setInputRanges(track.inputRange);
    setOutputRanges(track.outputRange);
  }, [track]);

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

  const handleInputChange = (
    type: "input" | "output",
    index: number,
    value: string
  ) => {
    if (type === "input") {
      setInputRanges((prev) => {
        const newRanges = [...prev];
        newRanges[index] = Number(value);
        return newRanges;
      });
    } else {
      setOutputRanges((prev) => {
        const newRanges = [...prev];
        newRanges[index] = value;
        return newRanges as number[] | string[];
      });
    }
  };

  return (
    <View className="flex:col md:flex-row gap-4 mb-4">
      <Dropdown
        options={animationOptions}
        selectedValue={track.property}
        onValueChange={handlePropertyChange}
      />
      <View className="gap-2 w-fit">
        <View className="flex-row items-center justify-end gap-2">
          <BaseText className="font-hanken-semibold text-sm">Progress</BaseText>
          <View className="flex-row gap-2">
            {inputRanges.map((range, index) => {
              return (
                <InputField
                  key={index}
                  wrapperClassName="justify-end"
                  className="w-7"
                  value={String(range)}
                  type={"number"}
                  step="0.1"
                  min={0}
                  max={1}
                  onChangeText={(value) =>
                    handleInputChange("input", index, value)
                  }
                />
              );
            })}
          </View>
        </View>
        <View className="flex-row justify-end items-center gap-2">
          <BaseText className="font-hanken-semibold text-sm">Value</BaseText>
          <View className="flex-row gap-2">
            {outputRanges.map((range, index) => {
              return (
                <InputField
                  key={index}
                  wrapperClassName="justify-end"
                  className="w-7"
                  value={String(range)}
                  type={track.property === "color" ? "color" : "number"}
                  innerWrapperClassName={
                    track.property === "color" ? "py-[4]!" : ""
                  }
                  onChangeText={(value) =>
                    handleInputChange("output", index, value)
                  }
                />
              );
            })}
          </View>
        </View>
      </View>
    </View>
  );
};

export default memo(Track);
