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
      innerWrapperClassName="w-full md:w-2/5 lg:w-1/2"
      label="Text:"
      placeholder="Enter your text here"
    />
  );
};

export default AnimationTextInput;
