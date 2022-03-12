import React from "react";
import StyledBadge from "./Badge.styled";

interface Props {
  size?: string;
  color?: "primary" | "secondary" | "warning" | "error" | "success" | "info";
  children?: React.ReactNode;
}

export default function Badge({ size, color = "primary", children }: Props) {
  return (
    <StyledBadge size={size} color={color}>
      {children}
    </StyledBadge>
  );
}
