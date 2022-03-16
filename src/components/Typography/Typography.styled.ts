import { Props } from "react";
import styled from "styled-components";
import { TypographyProps } from "./Typography";

const StyledTypography = styled.div<TypographyProps>`
  color: ${(p) => p.color};
`;

export default StyledTypography;
