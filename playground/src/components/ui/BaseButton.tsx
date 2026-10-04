"use dom";

import React, { memo, useCallback } from "react";
import BaseText from "./BaseText";

interface Props {
  className?: string;
  text: string;
  onClick?: () => void;
}

const BaseButton = ({ text, className, onClick, ...rest }: Props) => {
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
      className={`cursor-pointer bg-button w-fit px-4 py-2 mb-4 rounded-lg border-border ${className}`}
      {...rest}
    >
      <BaseText className="text-action hanken-bold">{text}</BaseText>
    </button>
  );
};

export default memo(BaseButton);
