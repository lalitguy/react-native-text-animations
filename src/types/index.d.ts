import type { TextStyle } from 'react-native';

export {};

declare global {
  interface AnimatedTextProps {
    text: string;
    useAnimation: (props: { index: number }) => TextStyle;
    duration?: number;
    delay?: number;
    textStyle?: StyleProp<TextStyle>;
  }

  interface AnimatedLetterProps extends AnimatedTextProps {
    index: number;
  }
}
