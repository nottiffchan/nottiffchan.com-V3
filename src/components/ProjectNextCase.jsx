import React from "react";
import styled from "styled-components";
import { mainProjects } from "../data/personalData";
import WaveLink from "./WaveLink";
import PropTypes from "prop-types";

export default function ProjectNextCase({ currProjectPathname }) {
  return (
    <NextCaseWrap>
      <WaveLink to="/projects">
        <h3>All</h3>
      </WaveLink>
      {mainProjects.map((project) => {
        return (
          <WaveLink
            key={project.projectName}
            to={"/projects/" + project.projectPathname}
          >
            <h3
              className={
                currProjectPathname === project.projectPathname ? "active" : ""
              }
            >
              {project.projectName}
            </h3>
          </WaveLink>
        );
      })}
    </NextCaseWrap>
  );
}

ProjectNextCase.propTypes = {
  currProjectPathname: PropTypes.string,
};

const NextCaseWrap = styled.div`
  width: 100%;
  padding: 200px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  h3 {
    color: var(--grey);
    margin: 12px 0;
    padding-left: 24px;
    opacity: 0.4;
    transition: 0.4s ease;
  }

  h3:hover {
    opacity: 1;
  }

  .active {
    color: var(--purple);
    opacity: 1;
  }

  @media (max-width: 768px) {
    padding: 100px 0;
  }
`;
