import React from "react";
import styles from "../styles/ProjectCard.css";

const ProjectCard = (props) => {
  return (
    <div>
      <div className="card">
        <h2>{props.name}</h2>
        <img src={props.image} alt={props.name}></img>
        <p>{props.description}</p>
        <div className="buttons">
          <a href={props.sourceLink}>Source</a>
          <a href={props.liveLink}>Live</a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
