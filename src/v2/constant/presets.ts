import type { AnimationConfig, Preset } from '../types';

const PRESETS = {
  'fade': {
    tracks: [{ property: 'opacity', inputRange: [0, 1], outputRange: [0, 1] }],
  },
  'fade-up': {
    tracks: [
      { property: 'opacity', inputRange: [0, 1], outputRange: [0, 1] },
      { property: 'translateY', inputRange: [0, 1], outputRange: [20, 0] },
    ],
  },
  'fade-down': {
    tracks: [
      { property: 'opacity', inputRange: [0, 1], outputRange: [0, 1] },
      { property: 'translateY', inputRange: [0, 1], outputRange: [-20, 0] },
    ],
  },
  'fade-left': {
    tracks: [
      { property: 'opacity', inputRange: [0, 1], outputRange: [0, 1] },
      { property: 'translateX', inputRange: [0, 1], outputRange: [-20, 0] },
    ],
  },
  'fade-right': {
    tracks: [
      { property: 'opacity', inputRange: [0, 1], outputRange: [0, 1] },
      { property: 'translateX', inputRange: [0, 1], outputRange: [20, 0] },
    ],
  },
  'pop': {
    tracks: [
      { property: 'opacity', inputRange: [0, 0.2, 1], outputRange: [0, 1, 1] },
      {
        property: 'scale',
        inputRange: [0, 0.7, 1],
        outputRange: [0.7, 1.1, 1],
      },
    ],
  },
  'bounce': {
    tracks: [
      {
        property: 'translateY',
        inputRange: [0, 0.45, 0.7, 0.85, 1],
        outputRange: [-24, 0, -10, 0, -3],
      },
      { property: 'opacity', inputRange: [0, 0.2, 1], outputRange: [0, 1, 1] },
    ],
  },
  'wave': {
    tracks: [
      {
        property: 'translateY',
        inputRange: [0, 0.5, 1],
        outputRange: [0, -10, 0],
      },
    ],
  },
  'cascade': {
    tracks: [
      { property: 'opacity', inputRange: [0, 1], outputRange: [0, 1] },
      { property: 'translateY', inputRange: [0, 1], outputRange: [16, 0] },
    ],
  },
  'reveal': {
    tracks: [
      { property: 'opacity', inputRange: [0, 1], outputRange: [0, 1] },
      { property: 'translateY', inputRange: [0, 1], outputRange: [8, 0] },
    ],
  },
  'flip': {
    tracks: [
      { property: 'opacity', inputRange: [0, 1], outputRange: [0, 1] },
      { property: 'rotateX', inputRange: [0, 1], outputRange: [-90, 0] },
    ],
  },
  'swing': {
    tracks: [
      {
        property: 'rotateZ',
        inputRange: [0, 0.25, 0.5, 0.75, 1],
        outputRange: [-30, 15, -10, 5, 0],
      },
    ],
  },
  'jelly': {
    tracks: [
      {
        property: 'scale',
        inputRange: [0, 0.3, 0.55, 0.75, 1],
        outputRange: [0.7, 1.2, 0.9, 1.05, 1],
      },
    ],
  },
  'shake': {
    tracks: [
      {
        property: 'translateX',
        inputRange: [0, 0.15, 0.3, 0.45, 0.6, 0.75, 0.9, 1],
        outputRange: [0, -10, 10, -8, 8, -4, 4, 0],
      },
    ],
  },
  'float': {
    tracks: [
      {
        property: 'translateY',
        inputRange: [0, 0.5, 1],
        outputRange: [0, -8, 0],
      },
    ],
  },
  'glitter': {
    tracks: [
      {
        property: 'color',
        inputRange: [0, 0.25, 0.5, 0.75, 1],
        outputRange: ['#999aaa', '#ccc', '#000', '#ccc', '#999aaa'],
      },
    ],
  },
  'glow': {
    tracks: [
      {
        property: 'color',
        inputRange: [0, 0.5, 1],
        outputRange: ['#ffffff', '#a5f3fc', '#ffffff'],
      },
    ],
  },
} satisfies Record<Preset, AnimationConfig>;

export { PRESETS };
