import React from "react";
import ProjectCard from "./ProjectCard";
import "../styles/Projects.scss";
import jackImg from "../images/UnityProjects/jackAttack.jpg";

const UnityProjects = () => {
  return (
    <div className="projects">
      <h1>Unity</h1>
      <div className="cards">
        <ProjectCard
          name={"Jack Attack"}
          image={jackImg}
          description={
            "A basic player controller, where enemy characters are instantiated using the InvokeRepeating function. Enemies are destroyed on contact with a pellet, that the player can instantiate with a mouse click."
          }
          sourceLink={"#"}
          liveLink={"https://play.unity.com/mg/other/0-21-6qsf"}
        />
      </div>
    </div>
  );
};

export default UnityProjects;
