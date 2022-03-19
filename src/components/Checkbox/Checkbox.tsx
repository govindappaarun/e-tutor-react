import React, { Children } from "react";
import { StyledCheckbox } from "./Checkbox.styled";
import { ColorTypes, SizeTypes } from "../types/types";

export type CheckboxProps = {
  children?: React.ReactNode;
  className?: string;
  size?: SizeTypes;
  id?: string;
  label?: string;
  color?: ColorTypes;
};

export default function Checkbox({
  children,
  label,
  id,
  ...rest
}: CheckboxProps) {
  return (
    <StyledCheckbox {...rest}>
      <input id={id || "checkbox"} type="checkbox" />
      {label && <label htmlFor={id || "checkbox"}>{label}</label>}
    </StyledCheckbox>
  );
}
