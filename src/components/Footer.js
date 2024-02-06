import React from "react";
import { socialLinks } from "../data";

const Footer = () => {
  return (
    <footer className="section footer">
      <ul className="footer-links">
        <li>
          <a href="#home" className="footer-link">
            home
          </a>
        </li>
        <li>
          <a href="#about" className="footer-link">
            about
          </a>
        </li>
        <li>
          <a href="#services" className="footer-link">
            services
          </a>
        </li>
        <li>
          <a href="#featured" className="footer-link">
            featured
          </a>
        </li>
      </ul>
      <ul className="footer-icons">
        {socialLinks.map((link) => {
          return (
            <li key={link.id}>
              <a
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="footer-icon"
              >
                <i className={link.icon}></i>
              </a>
            </li>
          );
        })}
      </ul>
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date">{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  );
};

export default Footer;
