import React from "react";
import StyledButton from "./Button.styled";
import { ColorType } from "../types";

export interface Props {
  size?: string;
  color?: ColorType;
  disabled?: boolean;
  type?: string;
  children?: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const Button = ({ children, color, ...rest }: Props) => {
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
