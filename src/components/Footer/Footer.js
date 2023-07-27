import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <hr className="divider" />
      <span className="name">
        Made with ❤️ by{" "}
        <a href="https://www.linkedin.com/in/arsheel-sheikh-97137b1b3/" target="__blank">
          Arsheel Sheikh
        </a>
      </span>
      <div className="social-icons">
        <a href="https://www.linkedin.com/in/arsheel-sheikh-97137b1b3/" target="__blank">
          <i className="fab fa-linkedin fa-lg"></i>
        </a>
        <a href="https://github.com/arsheelsheikh" target="__blank">
          <i className="fab fa-github fa-lg"></i>
        </a>
      </div>
    </div>
  );
};

export default Footer;
