import { View, Text } from "react-native";
import * as prettier from "prettier/standalone";
import parserBabel from "prettier/plugins/babel";
import * as prettierPluginEstree from "prettier/plugins/estree";
import { useEffect, useState } from "react";

async function formatCode(rawCode: string) {
  return await prettier.format(rawCode, {
    parser: "babel",
    plugins: [parserBabel, prettierPluginEstree],
    semi: true,
    singleQuote: true,
    printWidth: 80,
  });
}
const raw = `
const anim = new TextAnimator({target:"#hero",   effect:  "fade",
duration:1200,   delay:  ${100},easing:"ease-out"});anim.play()
`;

const CodePreview = () => {
  const [code, setCode] = useState("");
  useEffect(() => {
    const format = async () => {
      const pretty = await formatCode(raw);
      setCode(pretty);
    };
    format();
  }, []);

  return (
    <View className="flex-1 justify-center items-center">
      <Text>{code}</Text>
    </View>
  );
};

export default CodePreview;
