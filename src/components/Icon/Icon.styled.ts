import styled, { css } from "styled-components";
import { Size } from "../types/types";
import { IconProps } from "./Icon";

export const StyleSvgProps = ({ size, color, hoverColor }: IconProps) => {
  return css`
    height: ${(size && Size[size]) || "1.625rem"};
    color: ${color};
    &:hover {
      color: ${hoverColor};
      fill: ${hoverColor};
    }
  `;
};
