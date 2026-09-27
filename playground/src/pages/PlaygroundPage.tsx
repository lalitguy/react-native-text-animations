import { View } from "react-native";
import Header from "../components/Header";
import StaggerControls from "../components/StaggerControls";

const PlaygroundPage = () => {
  return (
    <View className="flex-1 bg-primary">
      <Header />
      <StaggerControls />
    </View>
  );
};

export default PlaygroundPage;
