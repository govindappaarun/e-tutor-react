import React from "react";
import { ColorTypes } from "../utils/types";
import StyledButton from "./Button.styled";

export type ButtonProps = {
  size?: string;
  color?: ColorTypes;
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
