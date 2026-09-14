import { AnimateText } from 'react-native-text-animations';
import Container from './components/Container';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native';

const App = () => {
  return (
    <SafeAreaProvider>
      <Container>
        <AnimateText
          text="MADE-IN-HEVEN"
          textStyle={style.text}
          transition={{
            type: 'spring',
            dampingRatio: 0.9,
          }}
          stagger={{
            by: 'character',
            gap: 120,
            from: 'end',
          }}
          duration={1200}
          animation={{
            tracks: [
              {
                property: 'translateY',
                inputRange: [0, 0.3, 0.66, 1],
                outputRange: [0, -5, 5, 0],
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
