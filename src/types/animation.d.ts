import type { StyleProp, TextStyle } from 'react-native';

export {};

declare global {
  interface FadeTextProps extends Omit<AnimatedTextProps, 'useAnimation'> {
    fadeOut?: boolean;
  }
}
