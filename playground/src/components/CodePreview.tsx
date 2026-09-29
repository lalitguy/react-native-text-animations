import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { usePlayground } from "../context/Playground";
import { getCodeBlock } from "../utils";

const CodePreview = () => {
  const [code, setCode] = useState("");
  const { state } = usePlayground();

  useEffect(() => {
    const format = async () => {
      const formattedCode = await getCodeBlock(state);
      setCode(formattedCode);
    };
    format();
  }, [state]);

  return (
    <View className="flex-1 justify-center items-center">
      <Text>{code}</Text>
    </View>
  );
};

export default CodePreview;
