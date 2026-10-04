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
    <View className="w-[280] h-[600] justify-center items-center border-2 border-marine rounded-4xl shrink-0 relative">
      <View className="w-12 h-5.5 rounded-2xl bg-black absolute top-1 right-[50%] translate-x-[50%]" />
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
