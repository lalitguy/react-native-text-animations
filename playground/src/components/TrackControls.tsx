import { FlatList, View } from "react-native";
import { usePlayground } from "../context/Playground";
import Track from "./tracks/Track";
import TrackFooter from "./tracks/TrackFooter";

const TrackControls = () => {
  const { state, addTrack, removeTrack, updateTrack } = usePlayground();
  return (
    <View className="w-1/4 h-full ">
      <FlatList
        data={state?.animation?.tracks || []}
        renderItem={({ item }) => (
          <Track
            track={item}
            removeTrack={removeTrack}
            updateTrack={updateTrack}
          />
        )}
        keyExtractor={(item) => item.id}
        ListFooterComponent={<TrackFooter addTrack={addTrack} />}
      />
    </View>
  );
};

export default TrackControls;
