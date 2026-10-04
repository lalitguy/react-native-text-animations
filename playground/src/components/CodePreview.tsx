"use dom";
import { Highlight, themes } from "prism-react-renderer";
import { useEffect, useState } from "react";
import { usePlayground } from "../context/Playground";
import { getCodeBlock } from "../utils";

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
    <div className="h-[250] p-4 bg-button overflow-auto rounded-2xl">
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
  );
};

export default CodePreview;
