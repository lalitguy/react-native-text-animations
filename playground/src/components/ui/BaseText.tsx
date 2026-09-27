import { Text, type TextProps } from "react-native";

interface BaseTextProps extends TextProps {
  className?: string;
}

const BaseText = ({ className, numberOfLines = 1, ...rest }: BaseTextProps) => {
  return (
    <Text
      numberOfLines={numberOfLines}
      className={`text-base font-hanken-regular tracking-wide select-none ${className}`}
      {...rest}
    />
  );
};

export default BaseText;
