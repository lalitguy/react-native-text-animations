import {
  StyleSheet,
  useWindowDimensions,
  View,
  type StyleProp,
  type TextStyle,
} from "react-native";
import AnimatedText from "react-native-text-animations";

import { usePlayground } from "@/playground/context/Playground";
import { useMemo } from "react";
import { TABLET_MAX_WIDTH } from "../constants";

const Preview = () => {
  const {
    state: { textStyle, ...rest },
  } = usePlayground();
  const { width } = useWindowDimensions();
  const isMobile = width <= TABLET_MAX_WIDTH;

  const resolvedStyles = useMemo(
    () =>
      StyleSheet.compose(
        styles.text as StyleProp<TextStyle>,
        textStyle
      ) as TextStyle,
    [textStyle]
  );

  const wrapperClassName = !isMobile
    ? "w-[280] h-[600] border-2 border-marine rounded-4xl shrink-0 relative"
    : "w-full border-none flex flex-1 py-16";

  return (
    <View className={`${wrapperClassName} justify-center items-center`}>
      {!isMobile && (
        <View className="w-12 h-5.5 rounded-2xl bg-black absolute top-1 right-[50%] translate-x-[50%]" />
      )}
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
