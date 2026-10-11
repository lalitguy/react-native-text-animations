import {
  StyleSheet,
  useWindowDimensions,
  View,
  type StyleProp,
  type TextStyle,
} from "react-native";
import AnimatedText from "react-native-text-animations";

import { usePlayground } from "@/playground/context/Playground";
import { useCallback, useMemo, useState } from "react";
import { TABLET_MIN_WIDTH } from "../constants";
import PreviewControls from "./PreviewControls";

const Preview = () => {
  const {
    state: { textStyle, ...rest },
  } = usePlayground();
  const { width } = useWindowDimensions();
  const isMobile = width <= TABLET_MIN_WIDTH;
  const [counter, setCounter] = useState<number>(0);

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
    : "w-full border-none flex flex-1 pt-16 pb-0";

  const incrementor = useCallback(() => setCounter((prev) => prev + 1), []);

  return (
    <View className={`${wrapperClassName}`}>
      <View className="flex-1 justify-center items-center mb-16 md:mb-0">
        {!isMobile && (
          <View className="w-12 h-5.5 rounded-2xl bg-black absolute top-1 right-[50%] translate-x-[50%]" />
        )}
        <AnimatedText key={counter} {...rest} textStyle={resolvedStyles} />
      </View>
      <PreviewControls incrementor={incrementor} />
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
