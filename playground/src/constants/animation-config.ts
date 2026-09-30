import type { AnimationProperty, ColorAnimationProperty } from "../types";

const animationOptions: {
  label: string;
  value: AnimationProperty | ColorAnimationProperty;
}[] = [
  { label: "Color", value: "color" },
  { label: "Opacity", value: "opacity" },
  { label: "Scale", value: "scale" },
  { label: "ScaleX", value: "scaleX" },
  { label: "ScaleY", value: "scaleY" },
  { label: "TranslateY", value: "translateY" },
  { label: "TranslateX", value: "translateX" },
  { label: "RotateX", value: "rotateX" },
  { label: "RotateY", value: "rotateY" },
  { label: "RotateZ", value: "rotateZ" },
];

export { animationOptions };
