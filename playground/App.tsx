import "./global.css";
import { useFonts } from "expo-font";
import { Playgroud } from "./src/context/Playground";
import PlaygroundPage from "./src/pages/PlaygroundPage";
import { useLayoutEffect } from "react";
import { Uniwind } from "uniwind";

export default function App() {
  useLayoutEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    Uniwind.setTheme(
      savedTheme === "light" || savedTheme === "dark"
        ? savedTheme
        : systemPrefersDark
          ? "dark"
          : "light"
    );
  }, []);

  const [fontsLoaded] = useFonts({
    "HankenGrotesk-Regular": require("./assets/fonts/HankenGrotesk-Regular.ttf"),
    "HankenGrotesk-Medium": require("./assets/fonts/HankenGrotesk-Medium.ttf"),
    "HankenGrotesk-Bold": require("./assets/fonts/HankenGrotesk-Bold.ttf"),
    "HankenGrotesk-Italic": require("./assets/fonts/HankenGrotesk-Italic.ttf"),
    "HankenGrotesk-SemiBold": require("./assets/fonts/HankenGrotesk-SemiBold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Playgroud>
      <PlaygroundPage />
    </Playgroud>
  );
}
