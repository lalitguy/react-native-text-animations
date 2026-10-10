import { View } from "react-native";
import { useState, Activity } from "react";
import { BaseButton } from "./ui";
import TrackControls from "./TrackControls";
import PresetsPanel from "./PresetsPanel";
import CodePreview from "./CodePreview";

type ActionType = "tracks" | "presets" | "code";

const actions: { label: string; value: ActionType }[] = [
  { label: "Tracks", value: "tracks" },
  { label: "Presets", value: "presets" },
  { label: "Code", value: "code" },
];

const MobileActions = () => {
  const [activeTab, setActiveTab] = useState<ActionType>("tracks");
  return (
    <View>
      <View className="flex flex-row items-center gap-2">
        {actions.map(({ label, value }) => (
          <BaseButton
            key={value}
            className={`flex-1 mb-1 ${activeTab === value ? "bg-button" : "bg-primary"}`}
            text={label}
            textClassName={activeTab === value ? "text-action" : "text-text"}
            onClick={() => setActiveTab(value)}
          />
        ))}
      </View>
      <View className="w-full h-[1] bg-button mb-3" />
      <Activity mode={activeTab === "tracks" ? "visible" : "hidden"}>
        <TrackControls />
      </Activity>
      <Activity mode={activeTab === "presets" ? "visible" : "hidden"}>
        <PresetsPanel />
      </Activity>
      <Activity mode={activeTab === "code" ? "visible" : "hidden"}>
        <CodePreview />
      </Activity>
    </View>
  );
};

export default MobileActions;
