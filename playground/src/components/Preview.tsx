import { StyleSheet, View, type StyleProp, type TextStyle } from "react-native";
import AnimatedText from "react-native-text-animations";

import { usePlayground } from "@/playground/context/Playground";
import { useMemo } from "react";

const Preview = () => {
  const {
    state: { textStyle, ...rest },
  } = usePlayground();

  const resolvedStyles = useMemo(
    () =>
      StyleSheet.compose(
        styles.text as StyleProp<TextStyle>,
        textStyle
      ) as TextStyle,
    [textStyle]
  );

  return (
    <View className="flex-1 justify-center items-center">
      <AnimatedText {...rest} textStyle={resolvedStyles} />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default Preview;
