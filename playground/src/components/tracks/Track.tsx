import z from "zod";

import { addIcon, removeIcon } from "@/playground/constants";
import { animationOptions } from "@/playground/constants/animation-config";
import { memo, useCallback, useMemo, useState } from "react";
import { View } from "react-native";
import type {
  AnimationProperty,
  ColorAnimationProperty,
  ColorTrackPlayground,
  NumbericTrackPlayground,
  RemoveTrack,
  UpdateTrack,
} from "../../types";
import { BaseButton, BaseText, InputField } from "../ui";
import Dropdown from "../ui/Dropdown";

type Props = {
  track: NumbericTrackPlayground | ColorTrackPlayground;
  updateTrack: UpdateTrack;
  removeTrack: RemoveTrack;
};

const inputRangeValidation = z.number().min(0).max(1, "Max 1");

type TrackSyncPayload = {
  id?: string;
  property?: AnimationProperty | ColorAnimationProperty;
  inputRange?: number[];
  outputRange?: number[] | string[];
};

const Track = ({ track, updateTrack, removeTrack }: Props) => {
  const [property, setProperty] = useState<
    AnimationProperty | ColorAnimationProperty
  >(track.property);
  const [inputRanges, setInputRanges] = useState(track.inputRange);
  const [outputRanges, setOutputRanges] = useState(track.outputRange);
  const [inputError, setInputError] = useState<Record<number, string>>({});
  const [outputError, setOutputError] = useState<Record<number, string>>({});

  const selectedProperty = useMemo(() => {
    return animationOptions.find((opt) => opt.value === property);
  }, [property]);

  const syncToPlayground = useCallback(
    (payload: TrackSyncPayload) => {
      const { id = track.id, ...rest } = payload;

      updateTrack(
        id,
        rest as Partial<NumbericTrackPlayground> | Partial<ColorTrackPlayground>
      );
    },
    [track.id, updateTrack]
  );

  const handlePropertyChange = useCallback(
    (value: AnimationProperty | ColorAnimationProperty) => {
      const propertyConfig = animationOptions.find(
        (opt) => opt.value === value
      );
      if (!propertyConfig) return;

      setProperty(value);
      setInputRanges([0, 1]);
      setOutputRanges(propertyConfig.defaultOutput);

      syncToPlayground({
        property: value,
        inputRange: [0, 1],
        outputRange: propertyConfig.defaultOutput,
      });
    },
    [syncToPlayground]
  );

  const handleInputChange = useCallback(
    (index: number, value: string) => {
      if (!selectedProperty) return;

      if (isNaN(Number(value))) return;

      const valid = inputRangeValidation.safeParse(Number(value));

      setInputRanges((prev) => {
        const newRanges = [...prev];
        newRanges[index] = Number(value);
        if (valid.success) {
          syncToPlayground({ inputRange: newRanges });
        }
        return newRanges;
      });
      if (valid.error) {
        const error = z.treeifyError(valid.error);
        setInputError((prev) => ({
          ...prev,
          [index]: error.errors[0] ?? "Enter a valid number",
        }));
      } else {
        setInputError((prev) => {
          const errors = { ...prev };
          delete errors[index];
          return errors;
        });
      }
    },
    [selectedProperty, syncToPlayground]
  );

  const handleOutputChange = useCallback(
    (index: number, value: string) => {
      if (!selectedProperty) return;

      const toCheckValue =
        selectedProperty.value === "color" ? value : Number(value);

      const valid = selectedProperty.schema.safeParse(toCheckValue);

      setOutputRanges((prev) => {
        const newRanges = [...prev];
        newRanges[index] =
          selectedProperty.value === "color" ? value : Number(value);
        if (valid.success) {
          syncToPlayground({
            outputRange: newRanges as number[] | string[],
          });
        }
        return newRanges as number[] | string[];
      });

      if (!valid.success) {
        const error = valid.error?.issues?.map((issue) => issue.message);
        setOutputError((prev) => ({
          ...prev,
          [index]: error?.[0] ?? "Enter a valid number",
        }));
      } else {
        setOutputError((prev) => {
          const errors = { ...prev };
          delete errors[index];
          return errors;
        });
      }
    },
    [selectedProperty, syncToPlayground]
  );

  const handleRemoveTrack = useCallback(() => {
    removeTrack(track.id);
  }, [removeTrack, track.id]);

  const addRanges = useCallback(() => {
    const lastInputRange = inputRanges.at(-1);
    const lastOutputRange = outputRanges.at(-1);
    const lastSecondInputRange = inputRanges.at(-2);
    if (
      lastInputRange === undefined ||
      lastOutputRange === undefined ||
      lastSecondInputRange === undefined
    )
      return;

    const ranges = {
      inputRange: [
        ...inputRanges.slice(0, -1),
        Number(((lastSecondInputRange + lastInputRange) / 2).toFixed(1)),
        lastInputRange,
      ],
      outputRange: [
        ...outputRanges.slice(0, -1),
        selectedProperty?.defaultOutput.at(-1),
        lastOutputRange,
      ],
    };

    setInputRanges(ranges.inputRange);
    setOutputRanges(ranges.outputRange as number[] | string[]);

    syncToPlayground({
      inputRange: ranges.inputRange,
      outputRange: ranges.outputRange as number[] | string[],
    });
  }, [inputRanges, outputRanges, selectedProperty, syncToPlayground]);

  return (
    <View className="flex:col md:flex-row gap-4 mb-4">
      <Dropdown
        options={animationOptions}
        selectedValue={property}
        onValueChange={handlePropertyChange}
        className="items-start"
      />
      <View className="gap-2 w-fit">
        <View className="flex-row items-start justify-end gap-2">
          <BaseText className="font-hanken-semibold text-sm mt-2.5">
            Progress
          </BaseText>
          <View className="flex-row gap-2 items-start">
            {inputRanges.map((range, index) => {
              return (
                <InputField
                  key={`${track.id}-input-${index}`}
                  wrapperClassName="justify-end"
                  className="w-7"
                  value={String(range)}
                  type={"number"}
                  step="0.1"
                  min={0}
                  max={1}
                  onChangeText={(value) => handleInputChange(index, value)}
                  error={inputError[index]}
                />
              );
            })}
          </View>
        </View>
        <View className="flex-row justify-end items-start gap-2">
          <BaseText className="font-hanken-semibold text-sm mt-2.5">
            Value
          </BaseText>
          <View className="flex-row gap-2 items-start">
            {outputRanges.map((range, index) => {
              return (
                <View>
                  <InputField
                    key={`${track.id}-output-${index}`}
                    wrapperClassName="justify-end"
                    className="w-7"
                    value={range}
                    type={property === "color" ? "color" : "number"}
                    innerWrapperClassName={
                      property === "color" ? "py-[4]!" : ""
                    }
                    onChangeText={(value) => handleOutputChange(index, value)}
                    error={outputError[index]}
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
      <View className="flex-col gap-2">
        <BaseButton
          icon={addIcon}
          className="flex shrink h-10 w-10 justify-center items-center bg-transparent border-2 rounded-full px-2!"
          onClick={addRanges}
        />
        <BaseButton
          icon={removeIcon}
          className="flex shrink h-10 w-10 justify-center items-center bg-transparent border-2 rounded-full px-2!"
          onClick={handleRemoveTrack}
        />
      </View>
    </View>
  );
};

export default memo(Track);
