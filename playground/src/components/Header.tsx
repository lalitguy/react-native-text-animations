import { H1, A } from "@expo/html-elements";
import { Image, Pressable, View } from "react-native";
import { Uniwind } from "uniwind";

const Header = () => {
  return (
    <View className="w-full h-20 flex-row items-center justify-between">
      <H1 className="font-hanken-bold text-2xl! ">
        React Native Text Animations
      </H1>
      <View className="flex-row items-center gap-2">
        <Pressable onPress={() => Uniwind.setTheme("light")}>Light</Pressable>
        <Pressable onPress={() => Uniwind.setTheme("dark")}>Dark</Pressable>
        <A
          href="https://github.com/lalitguy/react-native-text-animations"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            source={require("../../assets/github.png")}
            className="h-7 w-7"
          />
        </A>
      </View>
    </View>
  );
};

export default Header;
