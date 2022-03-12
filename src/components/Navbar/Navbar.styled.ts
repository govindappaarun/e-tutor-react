import styled from "styled-components";

const Navbar = styled.nav`
  align-items: center;
  display: flex;
  font-size: 1.2rem;
  min-height: 4rem;
  box-shadow: ${(props) => props.theme.boxShadow.bs1};
  padding: 0 1.8rem;
  z-index: 1000;
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.bg};
`;

export default Navbar;
