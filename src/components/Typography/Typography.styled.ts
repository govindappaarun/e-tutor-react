import styled, { css } from "styled-components";
import { StyleSize } from "../utils/style";
import { TypographyProps } from "./Typography";

const StyledTypography = styled.div<TypographyProps>`
  color: ${(p) => (p.color ? p.theme[p.color]["main"] : p.theme.neutral.main)};
  background-color: ${(p) =>
    p.background ? p.theme[p.background]["main"] : p.theme.white};
  text-align: ${(p) => p.align || "left"}};
 
  ${(p) => p.size && StyleSize["md"]}

  ${(p) =>
    p.uppercase &&
    css`
      text-transform: uppercase;
    `}
`;

export default StyledTypography;
