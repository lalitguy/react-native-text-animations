import AnimatedText from 'react-native-text-animations';
import Container from './components/Container';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native';

const App = () => {
  return (
    <SafeAreaProvider>
      <Container>
        <AnimatedText
          text="1234567890"
          textStyle={style.text}
          transition={{
            type: 'spring',
            dampingRatio: 0.7,
          }}
          preset={'cascade'}
          stagger={{
            by: 'character',
            gap: 45,
          }}
          repeat={-1}
          reverse
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
