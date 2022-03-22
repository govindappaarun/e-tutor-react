import React from "react";
import { Wrapper } from "./Footer.styled";

export default function Footer() {
  return (
    <Wrapper as="footer" display="flex" justifyContent="space-between">
      <div className="footer-container">
        <ul className="footer-links">
          <li>
            <a href="#">EXPLORE OUR</a>
          </li>
          <li>
            <a href="#">Labal</a>
          </li>
          <li>
            <a href="#">Events</a>
          </li>
          <li>
            <a href="#">News & Articles</a>
          </li>
          <li>
            <a href="#">Sitemap</a>
          </li>
        </ul>

        <ul className="footer-links">
          <li>
            <a href="#">Quick Links</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Become Instructor</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#">Career</a>
          </li>
        </ul>

        <ul className="footer-links">
          <li>
            <a href="#">Support</a>
          </li>
          <li>
            <a href="#">Help Center</a>
          </li>
          <li>
            <a href="#">FAQs</a>
          </li>
          <li>
            <a href="#">Terms & Condition</a>
          </li>
          <li>
            <a href="#">Privacy Policy</a>
          </li>
        </ul>
      </div>
    </Wrapper>
  );
}
