import { View } from "react-native";
import Header from "../components/Header";
import StaggerControls from "../components/StaggerControls";
import AnimationTextInput from "../components/AnimationTextInput";
import TrackControls from "../components/TrackControls";
import Preview from "../components/Preview";
import CodePreview from "../components/CodePreview";

const PlaygroundPage = () => {
  return (
    <View className="flex-1 px-4 bg-primary">
      <Header />
      <View className="flex-row justify-between items-center">
        <StaggerControls />
        <AnimationTextInput />
      </View>
      <View className="flex-1 flex-row justify-between">
        <TrackControls />
        <View className="flex-1 flex-row justify-between">
          <Preview />
          <CodePreview />
        </View>
      </View>
    </View>
  );
};

export default PlaygroundPage;
