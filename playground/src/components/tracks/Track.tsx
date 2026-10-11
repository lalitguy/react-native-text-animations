import { animationOptions } from "@/playground/constants/animation-config";
import { memo, useCallback, useState } from "react";
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
  const [property, setProperty] = useState<
    AnimationProperty | ColorAnimationProperty
  >(track.property);
  const [inputRanges, setInputRanges] = useState(track.inputRange);
  const [outputRanges, setOutputRanges] = useState(track.outputRange);

  const handlePropertyChange = useCallback(
    (value: AnimationProperty | ColorAnimationProperty) => {
      const propertyConfig = animationOptions.find(
        (opt) => opt.value === value
      );

      if (!propertyConfig) return;

      setProperty(value);
      setInputRanges([0, 1]);
      setOutputRanges(propertyConfig.defaultOutput);

      if (value === "color") {
        updateTrack(track.id, {
          property: value,
          inputRange: [0, 1],
          outputRange: propertyConfig.defaultOutput as string[],
        });
      } else {
        updateTrack(track.id, {
          property: value,
          inputRange: [0, 1],
          outputRange: propertyConfig.defaultOutput as number[],
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
        selectedValue={property}
        onValueChange={handlePropertyChange}
        className="items-start"
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
                <View>
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
                  {["rotateX", "rotateY", "rotateZ"].includes(
                    track.property
                  ) ? (
                    <BaseText className="text-muted text-[10px] text-right font-hanken-italic opacity-80">
                      deg
                    </BaseText>
                  ) : undefined}
                </View>
              );
            })}
          </View>
        </View>
      </View>
    </View>
  );
};

export default memo(Track);
