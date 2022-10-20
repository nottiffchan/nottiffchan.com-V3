import React from "react";
import Hero from "./Hero";
import styled from "styled-components";
import { catalogText } from "../../data/personalData";
import ProjectCard from "./ProjectCard";
import { projectInfo } from "../../data/personalData";

const LandingPage = () => {
  return (
    <div style={{ paddingBottom: "100px" }}>
      <Hero />
      <StyledCatalogSection>
        <h3 dangerouslySetInnerHTML={{ __html: catalogText }} />
      </StyledCatalogSection>

      <StyledProjectContainer>
        <div className="grid">
          {projectInfo.map((project, i) => {
            console.log("project: ", project);

            return (
              <div className={"grid-col " + project.size} key={i}>
                <ProjectCard
                  catalogImage={project.catalogImage}
                  projectName={project.projectName}
                  title={project.title}
                  description={project.description}
                  textCol={project.textCol}
                />
              </div>
            );
          })}
        </div>
      </StyledProjectContainer>
    </div>
  );
};

const StyledProjectContainer = styled.div`
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

const StyledCatalogSection = styled.div`
  color: #c39dbd;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 200px;
  padding-bottom: 120px;
  text-align: center;

  h3 {
    max-width: 600px;
    line-height: 1.3;
  }

  @media (max-width: 480px) {
    h3 {
      max-width: 90%;
      text-align: start;
    }
  }

  .highlight {
    color: var(--purple);
  }

  @media (max-width: 500px) {
    margin-top: 0px;
  }
`;

export default LandingPage;
