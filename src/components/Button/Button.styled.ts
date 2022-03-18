import styled, { css } from "styled-components";
import { StyleType } from "../utils/style";
import { ButtonProps } from "./Button";

const Button = styled.button<ButtonProps>`
  border: none;
  outline: 0;
  display: inline-flex;
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: 0.1rem;
  padding: 0 2rem;
  text-align: center;
  text-decoration: none;
  line-height: 3.5rem;
  cursor: pointer;

  ${(props) =>
    props.disabled &&
    css`
      cursor: not-allowed;
      opacity: 0.5;
    `}

  &:hover {
    box-shadow: ${(props) => props.theme.boxShadow.bs1};
  }

  ${(p) => p.color && StyleType[p.color]};

  ${(p) =>
    p.color &&
    css`
      border: 1px solid ${(props) => p.color && props.theme[p.color]["main"]};
      &:hover {
        transform: translateY(-3px);
        background-color: ${(props) => p.color && props.theme[p.color]["dark"]};
      }
    `}

  ${(p) =>
    p.outline &&
    css`
      color: ${(props) => p.color && props.theme[p.color]["main"]};
      background-color: transparent;
      border-radius: 5px;
      &:hover {
        color: ${(p) => p.theme.white};
        background-color: ${(props) => p.color && props.theme[p.color]["main"]};
      }
    `}
`;

export default Button;
