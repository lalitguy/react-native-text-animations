import { AnimateText } from 'react-native-text-animations';
import Container from './components/Container';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native';

const App = () => {
  return (
    <SafeAreaProvider>
      <Container>
        <AnimateText
          text="Made-in-Heaves"
          textStyle={style.text}
          transition={{
            type: 'timing',
            easing: 'sinInOut',
            duration: 1500,
          }}
          stagger={{
            by: 'character',
          }}
          animation={{
            tracks: [
              {
                property: 'translateY',
                inputRange: [0, 0.5, 1],
                outputRange: [0, 10, 0],
              },
            ],
            repeat: -1,
          }}
        />
      </Container>
    </SafeAreaProvider>
  );
};

const style = StyleSheet.create({
  text: {
    fontSize: 40,
    fontWeight: '700',
    opacity: 1,
  },
});

export default App;
