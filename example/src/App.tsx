import { AnimateText } from 'react-native-text-animations';
import Container from './components/Container';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native';

const App = () => {
  return (
    <SafeAreaProvider>
      <Container>
        <AnimateText
          duration={2000}
          text="Made in Heaven"
          textStyle={style.text}
          animation={{
            tracks: [
              {
                property: 'opacity',
                inputRange: [0, 0.5, 1],
                outputRange: [0.2, 0.6, 1],
              },
              {
                property: 'translateX',
                inputRange: [0, 1],
                outputRange: [-50, 0],
              },
              {
                property: 'translateY',
                inputRange: [0, 1],
                outputRange: [-50, 0],
              },
              {
                property: 'rotateZ',
                inputRange: [0, 1],
                outputRange: [360, 0],
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
    fontWeight: '700',
  },
});

export default App;
