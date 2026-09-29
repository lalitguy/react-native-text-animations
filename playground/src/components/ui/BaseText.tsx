import { StyleSheet, Text, type TextProps } from "react-native";

interface BaseTextProps extends TextProps {
  className?: string;
}

const BaseText = ({ className, numberOfLines = 1, ...rest }: BaseTextProps) => {
  return (
    <Text
      numberOfLines={numberOfLines}
      selectable={false}
      style={styles.text}
      className={`text-base font-hanken-regular tracking-wide select-none ${className}`}
      {...rest}
    />
  );
};

const styles = StyleSheet.create({
  text: {
    userSelect: "none",
    includeFontPadding: false,
  },
});

export default BaseText;
