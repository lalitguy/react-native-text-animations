"use dom";
import type { HTMLAttributes, ReactNode } from "react";

interface BaseTextProps extends HTMLAttributes<HTMLParagraphElement> {
  children?: ReactNode;
}

const BaseText = ({ className, children, ...rest }: BaseTextProps) => {
  return (
    <p
      className={`text-base font-hanken-regular tracking-wide select-none ${className}`}
      {...rest}
    >
      {children}
    </p>
  );
};

export default BaseText;
