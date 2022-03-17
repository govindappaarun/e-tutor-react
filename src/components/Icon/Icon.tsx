import React from "react";
import styled from "styled-components";
import { ReactComponent as Wish } from "../../assets/svg/heart.svg";
import { ReactComponent as Cart } from "../../assets/svg/shopping-cart.svg";
import { SizeTypes } from "../types/types";
import { StyleSvgProps } from "./Icon.styled";

export type IconProps = {
  color?: string;
  hoverColor?: string;
  size?: SizeTypes;
};

export const WishIcon = styled(Wish)<IconProps>`
  ${(props) => StyleSvgProps(props)}
`;

export const CartIcon = styled(Cart)<IconProps>`
  ${(props) => StyleSvgProps(props)}
`;
