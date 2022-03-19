import React from "react";
import { Space } from "../types/types";
import { StyledBox } from "./Box.styled";
import { Flex, JC, AI, Wrap, AS, Direction } from "./types";

export type BoxProps = {
  flex?: Flex;
  justifyContent?: JC;
  alignItems?: AI;
  alignSelf?: AS;
  gap?: Space;
  children?: React.ReactNode;
  wrap?: Wrap;
  direction?: Direction;
  shrink?: 0 | 1;
  grow?: 0 | 1;
  order?: number;
};

export default function Box({ flex = "flex", children, ...rest }: BoxProps) {
  return (
    <StyledBox flex={flex} {...rest}>
      {children}
    </StyledBox>
  );
}
