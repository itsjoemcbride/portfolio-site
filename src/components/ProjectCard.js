import React from "react";
import "../styles/ProjectCard.scss";

const ProjectCard = (props) => {
  return (
    <div className="project-card">
      <h2>{props.name}</h2>
      <img src={props.image} alt={props.name}></img>
      <p>{props.description}</p>
      <div className="spacer" />
      <div className="buttons">
        <a href={props.sourceLink}>Source</a>
        {getLiveLink(props)}
      </div>
    </div>
  );
};

function getLiveLink(params) {
  if (params.liveLink) {
    console.log(params.liveLink);
    return [<a href={params.liveLink}>Live</a>];
  }
}

export default ProjectCard;
