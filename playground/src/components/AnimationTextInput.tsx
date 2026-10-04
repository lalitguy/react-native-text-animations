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
      label="Text:"
      placeholder="Enter your text here"
    />
  );
};

export default AnimationTextInput;
