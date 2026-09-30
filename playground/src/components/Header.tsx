import { H1, A } from "@expo/html-elements";
import { Image, View } from "react-native";

const Header = () => {
  return (
    <View className="w-full h-20 flex-row items-center justify-between">
      <H1 className="font-hanken-bold text-2xl! ">
        React Native Text Animations
      </H1>
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
  );
};

export default Header;
