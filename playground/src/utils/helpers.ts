import parserBabel from "prettier/plugins/babel";
import * as prettierPluginEstree from "prettier/plugins/estree";
import * as prettier from "prettier/standalone";
import type { PlaygroundAnimatedText } from "../types";

const addProps = <T extends keyof PlaygroundAnimatedText>(
  prop: T,
  value: PlaygroundAnimatedText[T] | string,
  handleJSX: boolean = false
) => {
  if (typeof value === "number" || handleJSX) {
    return `${prop}={${value}}\n`;
  }
  return `${prop}="${value}"\n`;
};

const getCodeString = (state: PlaygroundAnimatedText) => {
  let props = ``;

  if (state.text) {
    props += addProps("text", state.text);
  }

  if (state.delay) {
    props += addProps("delay", state.delay);
  }

  if (state.duration) {
    props += addProps("duration", state.duration);
  }

  if (state.preset) {
    props += addProps("preset", state.preset);
  }

  if (state.stagger) {
    props += addProps("stagger", JSON.stringify(state.stagger), true);
  }

  if (state.animation?.tracks.length) {
    const tracks = state.animation.tracks.map(({ id: _, ...rest }) => rest);
    props += addProps("animation", JSON.stringify({ tracks }), true);
  }

  if (state.reverse) {
    props += addProps("reverse", state.reverse);
  }

  if (state.repeat) {
    props += addProps("repeat", state.repeat);
  }

  if (state.textStyle) {
    props += addProps("textStyle", JSON.stringify(state.textStyle));
  }

  if (state.transition) {
    props += addProps("transition", JSON.stringify(state.transition));
  }

  if (state.wrapperStyle) {
    props += addProps("wrapperStyle", JSON.stringify(state.wrapperStyle));
  }

  return `
  import AnimatedText from 'react-native-text-animations';\n\n
  <AnimatedText ${props} />\n`;
};

async function formatCode(rawCode: string) {
  return await prettier.format(rawCode, {
    parser: "babel",
    plugins: [parserBabel, prettierPluginEstree],
    semi: true,
    tabWidth: 4,
  });
}

async function getCodeBlock(state: PlaygroundAnimatedText) {
  return await formatCode(getCodeString(state));
}

const generateUniqueId = (): string => {
  const timePart = Date.now().toString().slice(-8);
  const randomPart = Math.floor(Math.random() * 10_000)
    .toString()
    .padStart(4, "0");

  return timePart + randomPart;
};

export { getCodeBlock, getCodeString, generateUniqueId };
