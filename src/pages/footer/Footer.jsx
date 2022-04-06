import { LinkButton as Link } from "src/components/Button/Button";
import { Wrapper } from "./Footer.styled";
import { BsTwitter, BsGithub } from "react-icons/bs";

export default function Footer() {
  return (
    <Wrapper
      as="footer"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
    >
      <div className="footer-container">
        <div>All rights reserved</div>
        <div className="ml-auto">
          <BsTwitter />
          <BsGithub />
        </div>
      </div>
    </Wrapper>
  );
}
