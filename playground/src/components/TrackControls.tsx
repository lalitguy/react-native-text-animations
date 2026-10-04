import { FlatList, useWindowDimensions, View } from "react-native";
import { usePlayground } from "../context/Playground";
import { Track, TrackAddAction } from "./tracks/";
import BaseText from "./ui/BaseText";
import { TABLET_MIN_WIDTH } from "../constants";

const TrackControls = () => {
  const { state, addTrack, removeTrack, updateTrack } = usePlayground();
  const { width } = useWindowDimensions();

  const isMobile = width < TABLET_MIN_WIDTH;

  return (
    <View className={`flex-1 ${isMobile ? "min-h-[200]" : "h-full"}`}>
      <View
        className={`flex-row gap-4 items-center mb-2 ${isMobile ? "justify-between" : ""}`}
      >
        <BaseText className="font-hanken-bold text-lg">Tracks</BaseText>
        <TrackAddAction addTrack={addTrack} />
      </View>
      <FlatList
        data={state?.animation?.tracks || []}
        renderItem={({ item }) => (
          <Track
            track={item}
            removeTrack={removeTrack}
            updateTrack={updateTrack}
          />
        )}
        contentContainerClassName="bg-surface flex-1 p-2 md:p-3 lg:p-4 rounded-md md:rounded-lg lg:rounded-xl"
        ListEmptyComponent={
          <View className="flex-1 justify-center items-center">
            <BaseText>No tracks Added</BaseText>
          </View>
        }
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default TrackControls;
