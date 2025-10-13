export {};

declare global {
  interface FadeTextProps extends Omit<AnimatedTextProps, 'useAnimation'> {
    fadeOut?: boolean;
  }
}
