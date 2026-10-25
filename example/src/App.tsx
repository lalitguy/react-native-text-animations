import AnimatedText from "react-native-text-animations";
import Container from "./components/Container";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";

const App = () => {
  return (
    <SafeAreaProvider>
      <Container>
        <AnimatedText
          text="12345"
          textStyle={style.text}
          transition={{
            type: "spring",
            dampingRatio: 0.7,
          }}
          stagger={{
            by: "character",
            gap: 100,
          }}
          animation={{
            tracks: (index) =>
              index % 2 === 0
                ? [
                    {
                      property: "translateY",
                      inputRange: [0, 1],
                      outputRange: [-40, 0],
                    },
                    {
                      property: "rotateZ",
                      inputRange: [0, 1],
                      outputRange: [-5, 5],
                    },
                  ]
                : [
                    {
                      property: "translateY",
                      inputRange: [0, 1],
                      outputRange: [5, 0],
                    },
                    {
                      property: "rotateZ",
                      inputRange: [0, 1],
                      outputRange: [5, -5],
                    },
                  ],
          }}
        />
      </Container>
    </SafeAreaProvider>
  );
};

const style = StyleSheet.create({
  text: {
    fontSize: 40,
    fontWeight: "700",
    opacity: 1,
  },
});

export default App;
