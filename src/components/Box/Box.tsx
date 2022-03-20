import React from "react";
import { SizeTypes } from "../types/types";
import { StyledBox } from "./Box.styled";
import { Flex, JC, AI, Wrap, AS, Direction } from "./types";

export type BoxProps = {
  display?: Flex;
  justifyContent?: JC;
  alignItems?: AI;
  alignSelf?: AS;
  gap?: SizeTypes;
  children?: React.ReactNode;
  wrap?: Wrap;
  direction?: Direction;
  shrink?: 0 | 1;
  grow?: 0 | 1;
  order?: number;
  className?: string;
  onClick?: () => void;
};

export default function Box({ display, children, ...rest }: BoxProps) {
  return (
    <StyledBox display={display} {...rest}>
      {children}
    </StyledBox>
  );
}
