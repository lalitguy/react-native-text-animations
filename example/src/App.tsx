// import 'react-native-reanimated';
import { ScrollView, StyleSheet, Text } from 'react-native';

import AnimatedText, {
  FadeText,
  RotateText,
  WaveText,
  SpringText,
} from 'react-native-text-animations';
import Section from '../components/Section';
import React from 'react';

export default function App() {
  const [reanimate, setReanimate] = React.useState({
    fade: false,
    rotate: false,
    wave: false,
    animated: false,
    spring: false,
  });

  const handleReanimate = (type: keyof typeof reanimate) => {
    setReanimate((prev) => ({
      ...prev,
      [type]: !prev[type],
    }));
  };
  return (
    <ScrollView
      style={styles.containerWrapper}
      contentContainerStyle={styles.container}
    >
      <Text style={styles.heading}>React Native Animated Text ✨</Text>
      <Text style={styles.subheading}>
        Smooth, flexible, and interactive text animations for React Native.
      </Text>

      <Section title="Fade Animation" onPress={() => handleReanimate('fade')}>
        <FadeText
          text="Fade Animation is awesome!✨"
          textStyle={styles.whiteText}
          delay={0}
          reanimateOnTextChange={reanimate.fade}
        />
      </Section>

      <Section
        title="Rotate Animation"
        onPress={() => handleReanimate('rotate')}
      >
        <RotateText
          text="Rotate Animation is Awesome!✨"
          textStyle={styles.whiteText}
          delay={0}
          reanimateOnTextChange={reanimate.rotate}
        />
      </Section>

      <Section
        title="Spring Animation"
        onPress={() => handleReanimate('spring')}
      >
        <SpringText
          text="Spring Animation is Awesome!✨"
          textStyle={styles.whiteText}
          delay={0}
          reanimateOnTextChange={reanimate.spring}
        />
      </Section>

      <Section
        title="Custom AnimatedText"
        onPress={() => handleReanimate('animated')}
      >
        <AnimatedText
          text="Animated Text is Awesome!✨"
          config={{
            fromOpacity: 0.5,
            delay: 0,
            toOpacity: 1.2,
            duration: 300,
            offsetX: 0,
            offsetY: 0,
            staggerDelay: 50,
            scaleFrom: 0.8,
            scaleTo: 1,
            rotateTo: { y: 360 },
          }}
          textStyle={styles.whiteText}
          reanimateOnTextChange={reanimate.animated}
        />
      </Section>

      <Section title="Wave Animation">
        <WaveText
          text="Wave Animation is Awesome!✨"
          amplitude={4}
          duration={800}
          textStyle={styles.whiteText}
          infinite
          delay={0}
          reanimateOnTextChange={reanimate.wave}
        />
      </Section>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  containerWrapper: { flex: 1, backgroundColor: '#0d0d0d' },
  container: { paddingVertical: 40, paddingHorizontal: 20 },
  heading: {
    color: 'white',
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 12,
    textAlign: 'center',
  },
  subheading: {
    color: '#aaa',
    fontSize: 14,
    marginBottom: 30,
    textAlign: 'center',
  },
  whiteText: { color: '#fff' },
});
