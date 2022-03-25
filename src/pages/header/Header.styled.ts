import Box from "src/components/Box";
import styled from "styled-components";
import { HeaderProps } from "./Header";

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
