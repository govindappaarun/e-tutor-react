import styled from "styled-components";
import { BoxProps } from "./Box";

export const StyledBox = styled.div<BoxProps>`
  display: ${(p) => p.flex};
  justify-content: ${(p) => p.justifyContent || "start"};
  align-items: ${(p) => p.alignItems || "strech"};
`;
