import "./global.css";
import { useFonts } from "expo-font";
import { Playgroud } from "./src/context/Playground";
import PlaygroundPage from "./src/pages/PlaygroundPage";

export default function App() {
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
