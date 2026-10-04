import { View } from "react-native";
import Header from "../components/Header";
import StaggerControls from "../components/StaggerControls";
import AnimationTextInput from "../components/AnimationTextInput";
import TrackControls from "../components/TrackControls";
import Preview from "../components/Preview";
import CodePreview from "../components/CodePreview";
import PresetsPanel from "../components/PresetsPanel";
import CardSurface from "../components/ui/CardSurface";

const PlaygroundPage = () => {
  return (
    <View className="flex-1">
      <Header />
      <View className="flex-1 flex-col lg:flex-row justify-start gap-8 mx-2 md:mx-4 pb-4">
        <View className="flex:1 lg:flex-[1.2] flex-col gap-6 min-w-0">
          <CardSurface>
            <AnimationTextInput />
            <StaggerControls />
          </CardSurface>
          <TrackControls />
        </View>
        <Preview />
        <View className="min-w-0 flex-[0.8] flex-col gap-4">
          <CodePreview />
          <PresetsPanel />
        </View>
      </View>
    </View>
  );
};

export default PlaygroundPage;
