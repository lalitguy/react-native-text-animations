"use dom";

import type { InputHTMLAttributes } from "react";
import { View } from "react-native";
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
  wrapperClassName,
  className,
  subtext,
  ...rest
}: InputFieldProps) => {
  return (
    <View className={wrapperClassName}>
      {label && <BaseText className="font-hanken-semibold ">{label}</BaseText>}
      <View className="bg-field px-3 py-2 rounded-lg flex-row gap-2 items-end">
        <input
          type="text"
          value={value}
          className={`${className} font-hanken text-base focus-within:outline-none focus-visible:border-none px-0! py-0!`}
          onChange={(e) => onChangeText?.(e.target.value)}
          {...rest}
        />
        {subtext && (
          <BaseText className="font-hanken-italic text-sm opacity-70">
            {subtext}
          </BaseText>
        )}
      </View>
    </View>
  );
};

export default InputField;
