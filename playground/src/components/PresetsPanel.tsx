import { Pressable, Text, View } from "react-native";
import { PRESETS } from "../constants";
import { usePlayground } from "../context/Playground";
import BaseText from "./ui/BaseText";

const PresetsConfiguration: { label: string; value: keyof typeof PRESETS }[] = [
  { label: "Fade", value: "fade" },
  { label: "Fade Up", value: "fade-up" },
  { label: "Fade Down", value: "fade-down" },
  { label: "Fade Left", value: "fade-left" },
  { label: "Fade Right", value: "fade-right" },
  { label: "Pop", value: "pop" },
  { label: "Bounce", value: "bounce" },
  { label: "Wave", value: "wave" },
  { label: "Cascade", value: "cascade" },
  { label: "Reveal", value: "reveal" },
  { label: "Flip", value: "flip" },
  { label: "Swing", value: "swing" },
  { label: "Jelly", value: "jelly" },
  { label: "Shake", value: "shake" },
  { label: "Float", value: "float" },
  { label: "Glitter", value: "glitter" },
  { label: "Glow", value: "glow" },
];

const PresetsPanel = () => {
  const { state, addPreset } = usePlayground();
  return (
    <View className="flex-1 bg-primary p-2">
      <Text className="text-lg font-hanken-bold mb-2 mt-2">Presets</Text>
      <View className="flex flex-row flex-wrap gap-4">
        {PresetsConfiguration.map(({ label, value }) => (
          <Pressable
            key={value}
            onPress={() => addPreset(value)}
            className={`px-6 py-2 border border-gray-300 rounded-lg justify-center items-center ${state.preset === value ? "bg-field" : ""}`}
          >
            <BaseText className="text-center">{label}</BaseText>
          </Pressable>
        ))}
      </View>
    </View>
  );
};

export default PresetsPanel;
