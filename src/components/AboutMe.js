import React from "react";
import profile from "../images/profile.jpg";
import "../styles/AboutMe.scss";

const AboutMe = () => {
  return (
    <div className="about-me">
      <div className="bio">
        <h2>Hello, it's</h2>
        <h1>Joe</h1>
        <h1>McBride</h1>
        <h2>
          A young developer with a passion for learning new tools to create more
          varied user experiences
        </h2>
        <h3>Find me on</h3>
        <div className="icons">
          <a href="https://www.linkedin.com/in/itsjoemcbride/">
            <i class="fa-brands fa-linkedin"></i>
          </a>
          <a href="https://github.com/itsjoemcbride">
            <i class="fa-brands fa-github"></i>
          </a>
          <a href="https://twitch.tv/madcoffeedragon">
            <i class="fa-brands fa-twitch"></i>
          </a>
        </div>
      </div>

      <img src={profile} alt="Joe McBride" />
    </div>
  );
};

export default AboutMe;
