import { View } from "react-native";
import { repeatConfig, replayIcon } from "../constants";
import { BaseButton, Dropdown } from "./ui";
import { usePlayground } from "../context/Playground";

type Props = {
  incrementor: () => void;
};

const PreviewControls = ({ incrementor }: Props) => {
  const { handleConfig } = usePlayground();

  return (
    <View className="w-full flex-row mb-2 md:mb-5 justify-around">
      <BaseButton
        className="rounded-4xl! w-12! h-12! p-0! flex items-center justify-center"
        icon={replayIcon}
        onClick={incrementor}
      />
      <Dropdown
        options={repeatConfig}
        onValueChange={(v) => handleConfig("repeat", v)}
      />
    </View>
  );
};

export default PreviewControls;
