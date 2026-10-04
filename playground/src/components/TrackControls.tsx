import { FlatList, View } from "react-native";
import { usePlayground } from "../context/Playground";
import { Track, TrackAddAction } from "./tracks/";
import BaseText from "./ui/BaseText";

const TrackControls = () => {
  const { state, addTrack, removeTrack, updateTrack } = usePlayground();

  return (
    <View className={`flex-1 min-h-[200] md:h-full`}>
      <View
        className={`flex-row gap-4 items-center mb-1 justify-between md:justify-start`}
      >
        <BaseText className="font-hanken-bold text-lg">Tracks</BaseText>
        <TrackAddAction addTrack={addTrack} />
      </View>
      <BaseText className="mb-2 text-muted text-sm">
        Each column maps a progress point (0 to 1) to the value this property
        has at that moment.
      </BaseText>
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
