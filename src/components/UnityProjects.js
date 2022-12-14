import React from "react";
import ProjectCard from "./ProjectCard";
import "../styles/Projects.scss";
import jackImg from "../images/UnityProjects/jackAttack.jpg";
import clickNinjaImg from "../images/UnityProjects/clickNinja.jpg";

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
          sourceLink={"https://github.com/itsjoemcbride/unity-fps-jackattack"}
          liveLink={"https://play.unity.com/mg/other/0-21-6qsf"}
        />

        <ProjectCard
          name={"Click Ninja"}
          image={clickNinjaImg}
          description={
            "Created as part of the 'Create with Code' course on Unity Learn, to learn how to interact with UI elements, and how they can be used to set variables, and how they can be activated or deactivated when appropriate."
          }
          sourceLink={"https://github.com/itsjoemcbride/unity-clickninja"}
          liveLink={"https://play.unity.com/mg/other/v1-7q1fi6"}
        />
      </div>
    </div>
  );
};

export default UnityProjects;
