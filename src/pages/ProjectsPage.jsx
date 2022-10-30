import React from "react";
import styled from "styled-components";
import ProjectCard from "../components/ProjectCard";
import SubProjectCard from "../components/SubProjectCard";
import { mainProjects, subProjects } from "../data/personalData";

const ProjectsPage = () => {
  return (
    <>
      <StyledMainProjectContainer>
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
      </StyledMainProjectContainer>
      <h3
        style={{
          textAlign: "center",
          marginTop: "200px",
          color: "var(--purple)",
        }}
      >
        other projects
      </h3>
      <StyledSubProjectContainer>
        {subProjects.map((project, i) => {
          return (
            <div key={i} className="col">
              <SubProjectCard
                catalogImage={project.catalogImage}
                projectName={project.projectName}
                description={project.description}
                eyebrow={project.eyebrow}
                projectPathname={project.projectPathname}
              />
            </div>
          );
        })}
      </StyledSubProjectContainer>
    </>
  );
};

export default ProjectsPage;

const StyledMainProjectContainer = styled.div`
  padding: 0 12px;

  button {
    height: 100%;
    width: 100%;
  }

  padding-top: 100px !important;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;

  .grid-col {
    margin-bottom: 30px;
  }

  @media (min-width: 1024px) {
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
`;

const StyledSubProjectContainer = styled.div`
  button {
    height: 100%;
    width: 100%;
  }

  padding-bottom: 200px !important;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-wrap: wrap;

  .col {
    width: 100%;
  }

  @media (min-width: 500px) {
    padding: 0 30px;

    .col {
      width: calc(33.3% - 24px);
      margin: 0 12px;
    }
  }
`;
