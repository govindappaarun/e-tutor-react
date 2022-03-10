import React from "react";
import { ColorTypes, SizeTypes } from "../types/types";
import StyledBadge from "./Badge.styled";

export type BadgeProps = {
  size?: SizeTypes;
  color?: ColorTypes;
  children?: React.ReactNode;
};

export default function Badge({
  size = "md",
  color = "primary",
  children,
}: BadgeProps) {
  return (
    <StyledBadge size={size} color={color}>
      {children}
    </StyledBadge>
  );
}
