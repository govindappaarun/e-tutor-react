import { LinkButton as Link } from "src/components/Button/Button";
import { Wrapper } from "./Footer.styled";

export default function Footer() {
  return (
    <Wrapper as="footer" display="flex" justifyContent="space-between">
      <div className="footer-container">
        <ul className="footer-links">
          <li>
            <Link>EXPLORE OUR</Link>
          </li>
          <li>
            <Link>Labal</Link>
          </li>
          <li>
            <Link>Events</Link>
          </li>
          <li>
            <Link>News & Articles</Link>
          </li>
          <li>
            <Link>Sitemap</Link>
          </li>
        </ul>

        <ul className="footer-links">
          <li>
            <Link>Quick Links</Link>
          </li>
          <li>
            <Link>About</Link>
          </li>
          <li>
            <Link>Become Instructor</Link>
          </li>
          <li>
            <Link>Contact</Link>
          </li>
          <li>
            <Link>Career</Link>
          </li>
        </ul>

        <ul className="footer-links">
          <li>
            <Link>Support</Link>
          </li>
          <li>
            <Link>Help Center</Link>
          </li>
          <li>
            <Link>FAQs</Link>
          </li>
          <li>
            <Link>Terms & Condition</Link>
          </li>
          <li>
            <Link>Privacy Policy</Link>
          </li>
        </ul>
      </div>
    </Wrapper>
  );
}
