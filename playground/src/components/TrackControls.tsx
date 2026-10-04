import { FlatList, View } from "react-native";
import { usePlayground } from "../context/Playground";
import Track from "./tracks/Track";
import TrackFooter from "./tracks/TrackFooter";
import BaseText from "./ui/BaseText";

const TrackControls = () => {
  const { state, addTrack, removeTrack, updateTrack } = usePlayground();
  return (
    <View className="flex-1 h-full">
      <View className="flex-row gap-4 items-center mb-2">
        <BaseText className="font-hanken-bold text-lg">Tracks</BaseText>
        <TrackFooter addTrack={addTrack} />
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
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default TrackControls;
