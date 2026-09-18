import { AnimateText } from 'react-native-text-animations';
import Container from './components/Container';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native';

const App = () => {
  return (
    <SafeAreaProvider>
      <Container>
        <AnimateText
          text="12345678"
          textStyle={style.text}
          transition={{
            type: 'spring',
            dampingRatio: 0.9,
          }}
          stagger={{
            by: 'character',
            gap: 120,
          }}
          loop={{
            count: -1,
            reverse: true,
          }}
          duration={2000}
          animation={{
            tracks: [
              {
                property: 'translateY',
                inputRange: [0, 0.5, 1],
                outputRange: [0, -5, -10],
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
    opacity: 1,
  },
});

export default App;
