import React from "react";
import styled from "styled-components";
import ProjectCard from "./ProjectCard";
import { mainProjects } from "../data/personalData";

const ProjectsPage = () => {
  return (
    <StyledProjectContainer>
      <div className="grid">
        {mainProjects.map((project, i) => {
          return (
            <div className={"grid-col " + project.size} key={i}>
              <ProjectCard
                catalogImage={project.catalogImage}
                projectName={project.projectName}
                description={project.description}
                eyebrow={project.eyebrow}
                textCol={project.textCol}
                transitionCol={project.transitionCol}
                projectPathname={project.projectPathname}
              />
            </div>
          );
        })}
      </div>
    </StyledProjectContainer>
  );
};

export default ProjectsPage;

const StyledProjectContainer = styled.div`
  padding-top: 100px !important;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 30px;

  .grid-col {
    margin-bottom: 30px;
  }

  @media (min-width: 1024px) {
    padding: 0 60px;

    .grid {
      display: flex;
      flex-wrap: wrap;
      margin: 0 -20px;
    }

    .grid-col {
      padding: 0 20px;
      margin-bottom: 40px;
    }

    .lg {
      width: 100%;
    }
    .sm {
      width: calc(50% - 40px);
    }
  }

  @media (min-width: 1200px) {
    padding: 0 90px;

    .lg img {
      width: 100%;
    }
  }
`;
