import { SizeTypes, Size } from "../types/types";
import styled from "styled-components";
import { StyleType, StyleFlex } from "../utils/style";
import { BadgeProps } from "./Badge";

const Badge = styled.span<BadgeProps>`
  ${StyleFlex.flexInline};
  ${(p) => p.color && StyleType[p.color]};
  height: ${(p) => (p.size && Size[p.size]) || Size["md"]};
  /* width: ${(p) => (p.size && Size[p.size]) || Size["md"]}; */

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
