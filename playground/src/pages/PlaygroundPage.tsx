import { View } from "react-native";
import Header from "../components/Header";
import StaggerControls from "../components/StaggerControls";
import AnimationTextInput from "../components/AnimationTextInput";
import TrackControls from "../components/TrackControls";
import Preview from "../components/Preview";
import CodePreview from "../components/CodePreview";
import PresetsPanel from "../components/PresetsPanel";

const PlaygroundPage = () => {
  return (
    <View className="flex-1 px-4 bg-primary">
      <Header />
      <View className="flex-row justify-start gap-8">
        <View className="flex-col gap-6">
          <View className="bg-surface px-8 py-6 rounded-2xl">
            <AnimationTextInput />
            <StaggerControls />
          </View>
          <TrackControls />
        </View>
        <Preview />
        <View className="flex-1">
          <CodePreview />
          <PresetsPanel />
        </View>
      </View>
    </View>
  );
};

export default PlaygroundPage;
