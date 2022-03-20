import clsx from "clsx";
import React from "react";
import { ColorTypes, SizeTypes } from "../types/types";
import StyledButton from "./Button.styled";

export type ButtonProps = {
  size?: SizeTypes;
  color?: ColorTypes;
  disabled?: boolean;
  children?: React.ReactNode;
  onClick?: () => void;
  className?: string;
  outline?: boolean;
};

const Button = ({
  children,
  color = "info",
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

export default Button;
