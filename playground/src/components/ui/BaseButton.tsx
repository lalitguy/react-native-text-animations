"use dom";

import React, { memo, useCallback } from "react";
import BaseText from "./BaseText";

interface Props {
  className?: string;
  text: string;
  onClick?: () => void;
  textClassName?: string;
}

const BaseButton = ({ text, className, onClick, textClassName }: Props) => {
  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      onClick?.();
    },
    [onClick]
  );

  return (
    <button
      onClick={handleClick}
      type={"button"}
      className={`cursor-pointer bg-button w-fit px-4 py-2 rounded-lg border-border ${className}`}
    >
      <BaseText className={`text-action hanken-bold ${textClassName}`}>
        {text}
      </BaseText>
    </button>
  );
};

export default memo(BaseButton);
