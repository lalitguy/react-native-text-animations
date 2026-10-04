"use dom";

import type { InputHTMLAttributes } from "react";
import BaseText from "./BaseText";

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  value?: string;
  wrapperClassName?: string;
  subtext?: string;
  onChangeText: (text: string) => void;
}
const InputField = ({
  label,
  value,
  onChangeText,
  wrapperClassName = "flex flex-row items-center gap-4",
  className,
  subtext,
  ...rest
}: InputFieldProps) => {
  return (
    <div className={wrapperClassName}>
      {label && (
        <BaseText className="font-hanken-semibold w-fit min-w-0">
          {label}
        </BaseText>
      )}
      <div className="bg-field px-3 py-2 rounded-lg">
        <div className="flex-row gap-2 items-end">
          <input
            type="text"
            value={value}
            className={`${className} font-hanken text-base focus-within:outline-none focus-visible:border-none px-0! py-0!`}
            onChange={(e) => onChangeText?.(e.currentTarget.value)}
            {...rest}
          />
          {subtext && (
            <span className="font-hanken-italic text-sm opacity-70 min-w-0">
              {subtext}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default InputField;
