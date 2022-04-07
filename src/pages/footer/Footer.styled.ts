import styled from "styled-components";
import Box from "src/components/Box";

export const Wrapper = styled(Box)`
  padding: 2rem;
  background-color: ${(p) => p.theme.black};
  color: ${(p) => p.theme.white};
  display: flex;
  bottom: 0;
  left: 0;
  position: fixed;
  width: 100%;
`;

export const StyledAnchor = styled.a`
  color: ${(p) => p.theme.white};
  margin: 0 0.5rem;
  font-size: 1.2rem;
`;
