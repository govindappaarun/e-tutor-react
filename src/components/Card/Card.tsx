import React, { Children } from "react";
import { BoxProps } from "../Box/Box";
import { StyledCard } from "./Card.styled";

export type CardProps = {
  children: React.ReactNode;
  className?: string;
};
export default function Card({ children, ...rest }: CardProps & BoxProps) {
  return <StyledCard {...rest}>{children}</StyledCard>;
}
