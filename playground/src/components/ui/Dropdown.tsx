"use dom";

import { View } from "react-native";
import BaseText from "./BaseText";

type DropdownProps<T extends string> = {
  options: readonly { label: string; value: T }[];
  label?: string;
  selectedValue?: T;
  onValueChange: (value: T) => void;
  className?: string;
};

const Dropdown = <T extends string>({
  options,
  label,
  selectedValue,
  onValueChange,
  className,
}: DropdownProps<T>) => {
  return (
    <View className={className}>
      {label && <BaseText className="font-hanken-semibold ">{label}</BaseText>}
      <View className="bg-field px-3 py-2 rounded-lg">
        <select
          value={selectedValue}
          onChange={(e) => onValueChange(e.target.value as T)}
          className="font-hanken text-base focus-within:outline-none focus-visible:border-none px-0! py-0!"
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </View>
    </View>
  );
};

export default Dropdown;
