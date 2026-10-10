import { View } from "react-native";
import type { StaggerType } from "../types";
import { defaultConfigs } from "../constants";
import { usePlayground } from "../context/Playground";
import Dropdown from "./ui/Dropdown";
import InputField from "./ui/InputField";

const staggerByOptions: {
  label: string;
  value: NonNullable<StaggerType["by"]>;
}[] = [
  { label: "Character", value: "character" },
  { label: "Word", value: "word" },
  { label: "None", value: "none" },
];

const staggerFromOptions: {
  label: string;
  value: NonNullable<StaggerType["from"]>;
}[] = [
  { label: "Start", value: "start" },
  { label: "End", value: "end" },
  { label: "Center", value: "center" },
];

const StaggerControls = () => {
  const { state, updateStagger } = usePlayground();
  const {
    stagger = {
      by: "character",
      from: "start",
      gap: defaultConfigs.staggerGap,
    },
  } = state;

  return (
    <View className="mt-3 flex-row gap-8 flex-wrap gap-y-2">
      <Dropdown
        label="Stagger By:"
        options={staggerByOptions}
        selectedValue={stagger.by}
        onValueChange={(v) => updateStagger("by", v)}
      />
      <Dropdown
        label="From:"
        options={staggerFromOptions}
        selectedValue={stagger.from}
        onValueChange={(v) => updateStagger("from", v)}
      />
      <InputField
        label="Gap:"
        value={stagger.gap?.toString()}
        onChangeText={(v) => updateStagger("gap", v ? Number(v) : 0)}
        type="number"
        className="w-10"
        subtext={"ms"}
      />
    </View>
  );
};

export default StaggerControls;
