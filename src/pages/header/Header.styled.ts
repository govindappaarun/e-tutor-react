import Box from "src/components/Box";
import styled, { css } from "styled-components";
import { HeaderProps } from "./Header";
import { RiContrastFill } from "react-icons/ri";

export const Wrapper = styled(Box)<HeaderProps>`
  .brand-container {
    cursor: pointer;
    h2 {
      color: ${(p) => p.theme.black};
    }
  }

  .badge {
    padding: 2px 5px;
    box-sizing: border-box;
    line-height: 1rem;
    position: absolute;
    transform: translate(100%, -100%);
    right: 0;
    font-size: 0.8rem;
  }

  .icon-container {
    padding: 5px;
    margin: 10px 15px;
    cursor: pointer;
  }
`;

export const ThemeIcon = styled(RiContrastFill)`
  font-size: 2rem;
  transition: opacity 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  &.reverse {
    transform: rotate(-180deg);
  }
`;
