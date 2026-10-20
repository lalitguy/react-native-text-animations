import { H1, A } from "@expo/html-elements";
import { Image, Pressable, View } from "react-native";
import { Uniwind } from "uniwind";
import { BaseText } from "./ui";
import { useCallback } from "react";

const Header = () => {
  const handleThemeToggle = useCallback((theme: "light" | "dark") => {
    localStorage.setItem("theme", theme);
    Uniwind.setTheme(theme);
  }, []);
  return (
    <View className="w-full h-20 flex-row items-center justify-between px-4">
      <H1 className="font-hanken-bold text-2xl! text-text">
        React Native Text Animations
      </H1>
      <View className="flex-row items-center gap-2">
        <Pressable
          className="px-3 py-1 light:bg-field rounded-lg"
          onPress={() => handleThemeToggle("light")}
        >
          <BaseText className="font-hanken-medium">Light</BaseText>
        </Pressable>
        <Pressable
          className="px-3 py-1 dark:bg-field rounded-lg"
          onPress={() => handleThemeToggle("dark")}
        >
          <BaseText>Dark</BaseText>
        </Pressable>
        <A
          href="https://github.com/lalitguy/react-native-text-animations"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            source={require("../../assets/github.png")}
            className="h-7 w-7 dark:invert"
          />
        </A>
      </View>
    </View>
  );
};

export default Header;
