import clsx from "clsx";
import React from "react";
import { ColorTypes } from "../types/types";
import StyledButton from "./Button.styled";

export type ButtonProps = {
  size?: string;
  color?: ColorTypes;
  disabled?: boolean;
  children?: React.ReactNode;
  onClick?: () => void;
  className?: string;
  outline?: boolean;
};

const Button = ({
  children,
  color = "primary",
  className,
  ...rest
}: ButtonProps) => {
  const classNames = clsx(className, color);
  return (
    <StyledButton className={classNames} color={color} {...rest}>
      {children}
    </StyledButton>
  );
};

/* 
 add default props
 add prop types
*/

export default Button;
