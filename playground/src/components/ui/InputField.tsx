import {
  StyleSheet,
  Text,
  TextInput,
  type TextInputProps,
  View,
} from "react-native";

interface InputFieldProps extends TextInputProps {
  label?: string;
  value?: string;
  wrapperClassName?: string;
}
const InputField = ({
  label,
  value,
  onChangeText,
  wrapperClassName,
  ...rest
}: InputFieldProps) => {
  return (
    <View className={wrapperClassName}>
      {label && <Text className="font-hanken-bold">{label}</Text>}
      <View className="bg-field px-3 py-2 rounded-lg">
        <TextInput
          value={value}
          onChangeText={onChangeText}
          style={styles.input}
          {...rest}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    paddingHorizontal: 12,
  },
});

export default InputField;
