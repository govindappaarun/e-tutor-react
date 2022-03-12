import styled, { css } from "styled-components";
import { StyleType, StyleFlex } from "../utils/style";

interface StyleProps {
  size?: string;
  color?: "primary" | "secondary" | "warning" | "error" | "success" | "info";
  className?: "string";
}

const Badge = styled.span<StyleProps>`
  ${StyleFlex.flexInline};
  ${(p) => p.color && StyleType[p.color]};

  /* text badge 
  padding: 0 5px;
  border-radius: 5px;
  line-height: 1.5rem;
*/
  /*  dot */
  border-radius: 50%;
  height: 1rem;
  width: 1rem;
  /*  */
`;

export default Badge;
