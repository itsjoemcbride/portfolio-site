import React from "react";
import ProjectCard from "./ProjectCard";
import "../styles/ReactProjects.css";
import cocktailsImg from "../images/ReactProjects/CocktailRecipes.jpg";

const ReactProjects = () => {
  return (
    <>
      <h1>React</h1>
      <div className="cards">
        <ProjectCard
          name={"Cocktail Recipes"}
          image={cocktailsImg}
          description={
            "This project uses React Redux to store items from an API into a container, for possible speed benefits in the future, if the project was to be built upon. The user can search for cocktail recipes in the search bar and recieve live results. Clicking on an item will direct the user to a new page, using React Router, where they can see details of the recipe."
          }
          sourceLink={"https://github.com/itsjoemcbride/cocktails-app"}
          liveLink={"https://imaginative-macaron-91764f.netlify.app/"}
        />
      </div>
    </>
  );
};

export default ReactProjects;
