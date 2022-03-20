import styled from "styled-components";
import Box from "src/components/Box";

export const Wrapper = styled(Box)`
  padding: 2rem;
  background-color: ${(p) => p.theme.black};

  .footer-container {
    display: flex;
  }
  ul {
    flex-grow: 1;
  }

  .footer-links li {
    margin-bottom: 6px;
    list-style-type: none;
  }

  .footer-links li:first-child {
    margin-bottom: 20px;
    text-transform: uppercase;
  }

  .footer-links a {
    color: ${(p) => p.theme.neutral.main};
    text-decoration: none;
  }
`;
