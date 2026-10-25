import Container from "@/example/components/Container";
import { StyleSheet } from "react-native";
import AnimatedText from "react-native-text-animations";

const HeartBeat = () => {
  return (
    <Container>
      <AnimatedText
        wrapperStyle={styles.wrapper}
        text="Heart Beat"
        animation={{
          tracks: [
            {
              property: "scale",
              inputRange: [0, 0.5, 1],
              outputRange: [0.9, 1.1, 1],
            },
          ],
        }}
        repeat={-1}
        delay={200}
        reverse
        stagger={{ by: "word", gap: 0 }}
      />
    </Container>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "column",
  },
});

export default HeartBeat;
