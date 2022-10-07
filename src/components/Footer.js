import React from "react";
import "../styles/Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="social-links">
        <a href="https://github.com/itsjoemcbride">Github</a>
        <a href="https://www.linkedin.com/in/itsjoemcbride/">LinkedIn</a>
        <a href="https://twitch.tv/madcoffeedragon">Twitch</a>
      </div>
      <div className="contact">
        <li>07492 728927</li>
        <li>itsjoemcbride@gmail.com</li>
      </div>
      <li>© Joe McBride 2022</li>
    </div>
  );
};

export default Footer;
