import React from "react";
import ProjectCard from "./ProjectCard";
import "../styles/Projects.scss";
import cocktailsImg from "../images/ReactProjects/CocktailRecipes.jpg";
import portfolioImg from "../images/ReactProjects/PortfolioSite.jpg";

const UnityProjects = () => {
  return (
    <div className="projects">
      <h1>Unity</h1>
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

        <ProjectCard
          name={"Portfolio Site"}
          image={portfolioImg}
          description={
            "This project was built with React to display links to projects that I have worked on."
          }
          sourceLink={"https://github.com/itsjoemcbride/portfolio-site"}
          liveLink={"https://itsjoemcbride.gq/"}
        />
      </div>
    </div>
  );
};

export default UnityProjects;
