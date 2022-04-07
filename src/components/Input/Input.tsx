import React from "react";
import { StyledInput } from "./Input.styled";

export type InputProps = {
  type?: string;
  placeholder?: string;
  children?: React.ReactNode;
  className?: string;
  min?: number;
  max?: number;
  name?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string | number;
};

export default function Input({
  type,
  placeholder,
  children,
  min,
  max,
  name,
  onChange,
  value,
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
        name={name}
        value={value}
        onChange={onChange}
      />
    </StyledInput>
  );
}
