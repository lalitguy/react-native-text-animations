import z from "zod";
import type { AnimationProperty, ColorAnimationProperty } from "../types";

const animationOptions: {
  label: string;
  value: AnimationProperty | ColorAnimationProperty;
  schema: z.ZodType<number> | z.ZodType<string>;
  defaultOutput: number[] | string[];
}[] = [
  {
    label: "Color",
    value: "color",
    schema: z.string("Enter a valid hex color"),
    defaultOutput: ["#000000", "#00ff00"],
  },
  {
    label: "Opacity",
    value: "opacity",
    schema: z.number().min(0, "Min 0").max(1, "Max 1"),
    defaultOutput: [0, 1],
  },
  {
    label: "Scale",
    value: "scale",
    schema: z.number().min(0, "Min 0"),
    defaultOutput: [0, 1],
  },
  {
    label: "ScaleX",
    value: "scaleX",
    schema: z.number().min(0, "Min 0"),
    defaultOutput: [0, 1],
  },
  {
    label: "ScaleY",
    value: "scaleY",
    schema: z.number().min(0, "Min 0"),
    defaultOutput: [0, 1],
  },
  {
    label: "TranslateY",
    value: "translateY",
    schema: z.number("Enter a valid number"),
    defaultOutput: [-40, 0],
  },
  {
    label: "TranslateX",
    value: "translateX",
    schema: z.number("Enter a valid number"),
    defaultOutput: [-40, 0],
  },
  {
    label: "RotateX",
    value: "rotateX",
    schema: z.number("Enter a valid number"),
    defaultOutput: [-90, 0],
  },
  {
    label: "RotateY",
    value: "rotateY",
    schema: z.number("Enter a valid number"),
    defaultOutput: [-90, 0],
  },
  {
    label: "RotateZ",
    value: "rotateZ",
    schema: z.number("Enter a valid number"),
    defaultOutput: [-90, 0],
  },
];

const repeatConfig = [
  { label: "1 x", value: 1 },
  { label: "2 x", value: 2 },
  { label: "3 x", value: 3 },
  { label: "Infinite", value: -1 },
];

export { animationOptions, repeatConfig };
