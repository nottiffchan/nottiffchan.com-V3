import React from "react";
import Hero from "./Hero";
import styled from "styled-components";
import { catalogText } from "../../data/personalData";
import AboutPage from "../AboutPage";
import ProjectsPage from "../ProjectsPage";

const LandingPage = () => {
  return (
    <div style={{ paddingBottom: "100px" }}>
      <Hero />
      <StyledCatalogSection>
        <h3 dangerouslySetInnerHTML={{ __html: catalogText }} />
      </StyledCatalogSection>
      <ProjectsPage />
      <AboutPage />
    </div>
  );
};

export default LandingPage;

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
