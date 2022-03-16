import React from "react";
import StyledButton from "./Button.styled";
import { ColorType } from "../types";

export type ButtonProps = {
  size?: string;
  color?: ColorType;
  disabled?: boolean;
  type?: string;
  children?: React.ReactNode;
  onClick?: () => void;
  className?: string;
};

const Button = ({ children, color, ...rest }: ButtonProps) => {
  return <StyledButton color={color}>{children}</StyledButton>;
};
/*
Button.defaultProps = {
  size: "md",
};

Button.propTypes = {
  size: Proptypes.oneOf(["xs", "md", "lg", "sm"]),
  variant: Proptypes.oneOf(["solid", "outline", "ghost", "link"]),
  leftIcon: "",
  rightIcon: "",
  isLoading: "",
};*/
export default Button;
