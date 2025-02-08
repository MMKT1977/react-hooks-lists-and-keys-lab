import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">
      {projects.map((myproject) => (
          <ProjectItem 
            key={myproject.id} 
            name={myproject.name} 
            about={myproject.about} 
            technologies={myproject.technologies} 
          />
        ))}
        
        </div>
    </div>
  );
}

export default ProjectList;
