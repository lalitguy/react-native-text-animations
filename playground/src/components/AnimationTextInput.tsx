import { usePlayground } from "../context/Playground";
import InputField from "./ui/InputField";

const AnimationTextInput = () => {
  const { state, handleConfig } = usePlayground();
  return (
    <InputField
      value={state.text}
      onChangeText={(text) => {
        handleConfig("text", text);
      }}
      label="Text"
      placeholder="Enter your text here"
      className="bg-field w-96"
      wrapperClassName="flex-row items-center gap-4"
    />
  );
};

export default AnimationTextInput;
