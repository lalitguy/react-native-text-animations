# react-native-text-animations

Animated text for React Native, powered by Reanimated. Animate text with a built-in preset or define your own animation tracks.

## Installation

```sh
npm install react-native-text-animations
```

`react-native-reanimated` and `react-native-worklets` are peer dependencies and must also be installed. The library requires React Native `>=0.80`, Reanimated `>=4.1.0 <5`, and Worklets `>=0.5.0 <1`. See the [Reanimated installation guide](https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/getting-started/) for setup.

## Quick start

```tsx
import AnimatedText from "react-native-text-animations";

export function Greeting() {
  return (
    <AnimatedText
      text="Hello, world!"
      preset="fade-up"
      textStyle={{ fontSize: 28, fontWeight: "bold" }}
    />
  );
}
```

## Presets

## Custom animation

Pass `animation` with one or more tracks. Each track maps animation progress in `inputRange` to values in `outputRange`, similar to Reanimated's [`interpolate`](https://docs.swmansion.com/react-native-reanimated/docs/utilities/interpolate/). Use `color` with string colors; other properties use numbers. Rotation values are in degrees.

```tsx
<AnimatedText
  text="Custom motion"
  animation={{
    tracks: [
      { property: "opacity", inputRange: [0, 1], outputRange: [0, 1] },
      { property: "translateY", inputRange: [0, 1], outputRange: [16, 0] },
      { property: "color", inputRange: [0, 1], outputRange: ["#888", "#222"] },
    ],
  }}
/>
```

For per-unit variations, `tracks` can be a function that receives the unit's zero-based index:

```tsx
<AnimatedText
  text="Alternating motion"
  animation={{
    tracks: (index) => [
      {
        property: "translateY",
        inputRange: [0, 1],
        outputRange: [index % 2 === 0 ? -16 : 16, 0],
      },
    ],
  }}
/>
```

Supported properties: `opacity`, `color`, `translateX`, `translateY`, `scale`, `scaleX`, `scaleY`, `rotateX`, `rotateY`, and `rotateZ`. `inputRange` and `outputRange` must have matching lengths.

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `text` | `string` | Required | Text to animate. |
| `preset` | `Preset` | `"float"` | Built-in animation to use. Mutually exclusive with `animation`. |
| `animation` | `{ tracks: Track[] }` | `-` | Custom tracks to animate. Mutually exclusive with `preset`. |
| `textStyle` | `StyleProp<TextStyle>` | `-` | Style applied to each animated text unit. |
| `wrapperStyle` | `StyleProp<ViewStyle>` | `-` | Style applied to the wrapping view. |
| `stagger` | `{ by?, gap?, from? }` | `{ by: "character", from: "start" }` | Split by `"character"`, `"word"`, or `"none"`; set `gap` in ms and `from` to `"start"`, `"center"`, or `"end"`. Gap defaults to `100` ms. |
| `duration` | `number` | `900` | Duration in ms for each unit. |
| `delay` | `number` | `0` | Additional delay in ms before each unit starts. |
| `repeat` | `number` | `1` | Number of repetitions; `0` or `-1` repeats indefinitely. |
| `reverse` | `boolean` | `false` | Reverse every other iteration when repeating. |
| `transition` | `Transition` | `{ type: "timing", easing: "easeInOut" }` | Timing or spring transition; see below. |

## Transitions

Timing transitions accept `linear`, `easeIn`, `easeOut`, `easeInOut`, `bounceIn`, `bounceOut`, `bounceInOut`, `sinIn`, `sinOut`, or `sinInOut`. They can also use a cubic Bezier curve. Spring transitions take a `dampingRatio`.

```tsx
<AnimatedText
  text="Spring motion"
  preset="pop"
  transition={{ type: "spring", dampingRatio: 0.7 }}
/>
```
