import clsx from "clsx";
import React from "react";
import styled from "styled-components";
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

export const LinkButton = styled(Button)`
  background-color: transparent;
  border: 0;
  color: ${(p) => (p.color ? p.theme[p.color]["main"] : "white")};
  padding: 5px;
  &:hover {
    background-color: transparent;
    text-decoration: underline;
    box-shadow: none;
    transform: none;
  }
`;

export default Button;
