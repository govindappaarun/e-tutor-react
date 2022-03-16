import React, { Children } from "react";
import StyledTypography from "./Typography.styled";
import { TextVariants } from "../utils/types";

export type TypographyProps = {
  variant: string;
  color?: string;
  children: React.ReactNode;
};

export default function Typography({
  variant,
  color,
  children,
  ...rest
}: TypographyProps) {
  const element = variant
    ? TextVariants[variant as keyof typeof TextVariants]
    : "p";

  return (
    <StyledTypography as={element} variant={variant} color={color} {...rest}>
      {children}
    </StyledTypography>
  );
}
