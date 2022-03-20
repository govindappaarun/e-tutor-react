import React from "react";
import { StyledInput } from "./Input.styled";

export type InputProps = {
  type?: string;
  placeholder?: string;
  children?: React.ReactNode;
  className?: string;
};

export default function Input({
  type,
  placeholder,
  children,
  ...rest
}: InputProps) {
  return (
    <StyledInput {...rest}>
      {children}
      <input type={type || "text"} placeholder={placeholder} />
    </StyledInput>
  );
}
