import { FlatList, View } from "react-native";
import { usePlayground } from "../context/Playground";
import Track from "./tracks/Track";
import TrackFooter from "./tracks/TrackFooter";
import BaseText from "./ui/BaseText";

const TrackControls = () => {
  const { state, addTrack, removeTrack, updateTrack } = usePlayground();
  return (
    <View className="flex-1 h-full ">
      <View className="flex-row gap-4 items-center mb-2">
        <BaseText className="font-hanken-bold text-lg">Tracks</BaseText>
        <BaseText className="text-muted text-sm">
          Each column maps a progress point (0 to 1) to the value this property
          has at that moment.
        </BaseText>
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
        contentContainerClassName="bg-surface px-8 py-6 rounded-2xl"
        keyExtractor={(item) => item.id}
        ListHeaderComponent={<TrackFooter addTrack={addTrack} />}
      />
    </View>
  );
};

export default TrackControls;
