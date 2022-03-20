import React from "react";
import { Wrapper } from "./Footer.styled";

export default function Footer() {
  return (
    <Wrapper as="footer" display="flex" justifyContent="space-between">
      <div className="footer-container">
        <ul className="footer-links">
          <li>
            <a>EXPLORE OUR</a>
          </li>
          <li>
            <a>Labal</a>
          </li>
          <li>
            <a>Events</a>
          </li>
          <li>
            <a>News & Articles</a>
          </li>
          <li>
            <a>Sitemap</a>
          </li>
        </ul>

        <ul className="footer-links">
          <li>
            <a>Quick Links</a>
          </li>
          <li>
            <a>About</a>
          </li>
          <li>
            <a>Become Instructor</a>
          </li>
          <li>
            <a>Contact</a>
          </li>
          <li>
            <a>Career</a>
          </li>
        </ul>

        <ul className="footer-links">
          <li>
            <a>Support</a>
          </li>
          <li>
            <a>Help Center</a>
          </li>
          <li>
            <a>FAQs</a>
          </li>
          <li>
            <a>Terms & Condition</a>
          </li>
          <li>
            <a>Privacy Policy</a>
          </li>
        </ul>
      </div>
    </Wrapper>
  );
}
