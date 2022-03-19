import React from "react";
import { StyledBox } from "./Box.styled";
import { Flex, JC, AI } from "./types";

export type BoxProps = {
  flex?: Flex;
  justifyContent?: JC;
  alignItems?: AI;
  children?: React.ReactNode;
};

export default function Box({ flex = "flex", children, ...rest }: BoxProps) {
  return (
    <StyledBox flex={flex} {...rest}>
      {children}
    </StyledBox>
  );
}
