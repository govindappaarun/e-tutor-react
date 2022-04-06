import { Wrapper, StyledAnchor } from "./Footer.styled";
import { BsTwitter, BsGithub } from "react-icons/bs";
import { Box } from "src/components";

export default function Footer() {
  return (
    <Wrapper as="footer" alignItems="center">
      <Box>All rights reserved</Box>
      <Box className="ml-auto">
        <StyledAnchor href="https://github.com/govindappaarun">
          <BsTwitter />
        </StyledAnchor>
        <StyledAnchor href="https://twitter.com/govindappaarun">
          <BsGithub />
        </StyledAnchor>
      </Box>
    </Wrapper>
  );
}
