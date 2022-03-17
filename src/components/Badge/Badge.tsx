import React from "react";
import { ColorTypes } from "../types/types";
import StyledBadge from "./Badge.styled";

export type BadgeProps = {
  size?: string;
  color?: ColorTypes;
  children?: React.ReactNode;
};

export default function Badge({
  size,
  color = "primary",
  children,
}: BadgeProps) {
  return (
    <StyledBadge size={size} color={color}>
      {children}
    </StyledBadge>
  );
}
