import { Picker } from "@expo/ui/community/picker";
import { StyleSheet, Text, View } from "react-native";

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
      {label && <Text className="font-hanken-bold">{label}</Text>}
      <View className="bg-field px-3 py-2 rounded-lg">
        <Picker
          style={styles.picker}
          selectedValue={selectedValue}
          onValueChange={onValueChange}
        >
          {options.map((option) => (
            <Picker.Item
              key={option.value}
              label={option.label}
              value={option.value}
            />
          ))}
        </Picker>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  picker: {
    paddingHorizontal: 12,
  },
});

export default Dropdown;
