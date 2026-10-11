"use dom";

import BaseText from "./BaseText";

interface RangeInputProps {
  value: number;
  onValueChange: (value: number) => void;
  className?: string;
  label?: string;
  onValueUpdate?: (value: number) => void;
}

const RangeInput = ({
  value,
  onValueChange,
  className,
  label,
  onValueUpdate,
}: RangeInputProps) => {
  return (
    <>
      <input
        type="range"
        max={3000}
        step={100}
        min={0}
        value={value}
        onChange={(e) => onValueChange(e.currentTarget.valueAsNumber)}
        className={className}
        onMouseUp={(e) => onValueUpdate?.(e.currentTarget.valueAsNumber)}
        onTouchEnd={(e) => onValueUpdate?.(e.currentTarget.valueAsNumber)}
      />
      {label && (
        <BaseText className="font-hanken text-center">{label}</BaseText>
      )}
    </>
  );
};

export default RangeInput;
