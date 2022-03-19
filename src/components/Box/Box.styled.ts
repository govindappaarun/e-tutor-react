import styled from "styled-components";
import { BoxProps } from "./Box";

export const StyledBox = styled.div<BoxProps>`
  display: ${(p) => p.flex};
  direction: ${(p) => p.direction || "row"};

  justify-content: ${(p) => p.justifyContent || "start"};
  align-items: ${(p) => p.alignItems || "strech"};
  align-self: ${(p) => p.alignSelf || "auto"};

  flex-grow: ${(p) => p.grow || 0};
  flex-shrink: ${(p) => p.shrink || 0};
  order: ${(p) => p.order || 0};
`;
