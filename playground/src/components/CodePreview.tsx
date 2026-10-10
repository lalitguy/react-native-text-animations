"use dom";
import { Highlight, themes } from "prism-react-renderer";
import { useEffect, useState } from "react";
import { usePlayground } from "../context/Playground";
import { getCodeBlock } from "../utils";
import { Text } from "react-native";

const CodePreview = () => {
  const [code, setCode] = useState("");
  const { state } = usePlayground();

  useEffect(() => {
    const format = async () => {
      const formattedCode = await getCodeBlock(state);
      setCode(formattedCode);
    };
    format();
  }, [state]);

  return (
    <div className="h-[320] lg:h-[250] md:flex md:w-[45%] lg:w-full lg:block md:flex-col">
      <Text className="text-lg font-hanken-bold mb-1 py-2 lg:hidden">Code</Text>
      <div className="bg-button h-full p-4 rounded-lg md:rounded-xl lg:rounded-2xl overflow-auto">
        <Highlight code={code} language="javascript" theme={themes.vsDark}>
          {({ tokens, getLineProps, getTokenProps }) => (
            <pre>
              {tokens.map((line, i) => (
                <div key={i} {...getLineProps({ line })}>
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token })} />
                  ))}
                </div>
              ))}
            </pre>
          )}
        </Highlight>
      </div>
    </div>
  );
};

export default CodePreview;
