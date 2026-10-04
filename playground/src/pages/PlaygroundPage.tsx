import { ScrollView, useWindowDimensions, View } from "react-native";

import {
  Header,
  AnimationTextInput,
  CodePreview,
  PresetsPanel,
  Preview,
  StaggerControls,
  CardSurface,
  TrackControls,
  MobileActions,
} from "../components";
import { DESKTOP_MIN_WIDTH, TABLET_MIN_WIDTH } from "../constants";

const PlaygroundPage = () => {
  const { width } = useWindowDimensions();
  const isDesktop = width >= DESKTOP_MIN_WIDTH;
  const isTablet = width < DESKTOP_MIN_WIDTH && width >= TABLET_MIN_WIDTH;
  const isMobile = width < TABLET_MIN_WIDTH;
  return (
    <ScrollView>
      <Header />
      <View className="flex-1 flex-col lg:flex-row justify-start gap-8 mx-2 md:mx-4 pb-4">
        <View className="flex:1 lg:flex-[1.2] flex-col gap-6 min-w-0">
          <CardSurface>
            <AnimationTextInput />
            <StaggerControls />
          </CardSurface>
          <View
            className={`flex flex-1 gap-4 ${isTablet ? "flex-row-reverse" : "flex-col"}`}
          >
            {!isDesktop && <Preview />}
            {!isMobile && <TrackControls />}
          </View>
        </View>
        {isDesktop && <Preview />}
        {!isMobile ? (
          <ScrollView className="min-w-0 flex-[0.8] flex-col gap-4">
            <CodePreview />
            <PresetsPanel />
          </ScrollView>
        ) : (
          <MobileActions />
        )}
      </View>
    </ScrollView>
  );
};

export default PlaygroundPage;
