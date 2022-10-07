import React from "react";
import ProjectCard from "./ProjectCard";
import "../styles/Projects.scss";
import giftWrapImg from "../images/PythonProjects/GiftWrap.jpg";

const PythonProjects = () => {
  return (
    <div className="projects alt-bg">
      <h1>Python</h1>
      <div className="cards">
        <ProjectCard
          name={"Gift Wrap Quote Generator"}
          image={giftWrapImg}
          description={
            "This project uses Tkinter to create a GUI which the user can interact with to get a quote based on a calculation for the amount of wrapping paper they would need to wrap a cuboid or cylinder. Shapes are drawn natively in Python."
          }
          sourceLink={"https://github.com/itsjoemcbride/py-gift-wrap"}
        />
      </div>
    </div>
  );
};

export default PythonProjects;
