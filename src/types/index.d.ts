import type { useState } from 'react';
import type { useAnimatedStyle } from 'react-native-reanimated';

export {};

declare global {
  interface AnimatedTextProps {
    text: string;
    useAnimation: (props: any) => any;
    duration?: number;
    delay?: number;
    textStyle?: StyleProp<TextStyle>;
  }

  interface AnimatedLetterProps extends AnimatedTextProps {
    index: number;
  }
}
