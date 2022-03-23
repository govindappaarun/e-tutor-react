import React from "react";
import { StyledInput } from "./Input.styled";

export type InputProps = {
  type?: string;
  placeholder?: string;
  children?: React.ReactNode;
  className?: string;
  min?: number;
  max?: number;
};

export default function Input({
  type,
  placeholder,
  children,
  min,
  max,
  ...rest
}: InputProps) {
  return (
    <StyledInput type={type} {...rest}>
      {children}
      <input
        type={type || "text"}
        placeholder={placeholder}
        min={min}
        max={max}
      />
    </StyledInput>
  );
}
