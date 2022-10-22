import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import WaveLink from "../components/WaveLink";

const ProjectCard = ({
  catalogImage,
  projectName,
  description,
  eyebrow,
  textCol,
  projectPathname,
}) => {
  return (
    <StyledProjectCard textCol={textCol}>
      <div className="project-image-wrap">
        <WaveLink to={"/projects/" + projectPathname}>
          <img src={catalogImage} alt="" />
        </WaveLink>
      </div>
      <div className="text">
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="projectName">{projectName}</h2>
        <p className="description">{description}</p>
      </div>
    </StyledProjectCard>
  );
};

ProjectCard.propTypes = {
  catalogImage: PropTypes.string,
  projectName: PropTypes.string,
  description: PropTypes.string,
  eyebrow: PropTypes.string,
  textCol: PropTypes.string,
  projectPathname: PropTypes.string,
};

export default ProjectCard;

const StyledProjectCard = styled.div`
  display: block;
  height: 355px;
  padding: 35px 30px;
  position: relative;
  transition: transform 0.4s;

  :hover {
    transform: scale(0.965);
  }

  .text {
    position: relative;
    transition: transform 0.4s;
  }

  :hover .text {
    transform: scale(0.955);
  }

  .eyebrow {
    color: #57696a;
    font-size: 16px;
    margin-bottom: 12px;
    margin-top: 0;
  }

  .projectName {
    transition: transform 0.4s;
    color: ${(props) => (props.textCol ? props.textCol : "var(--purple)")};
    display: block;
    max-width: 300px;
    position: relative;
    font-size: 26px;
    line-height: 1.2;
    font-weight: 600;
    margin-top: 0;
    margin-bottom: 12px;
  }

  .description {
    margin: 0;
    color: var(--black);
  }

  .project-image-wrap {
    display: flex;
    align-items: center;
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    perspective: 100px;
    overflow: hidden;
    will-change: transform;
    transition: transform 0.3s;
  }

  .project-image-wrap img {
    object-fit: cover;
    object-position: center;
    will-change: transform;
    transition: transform 0.4s;
    vertical-align: middle;
    border-style: none;
    width: 100%;
    height: 100%;
  }

  @media (min-width: 375px) {
    padding: 51px 40px;

    .projectName {
      font-size: 30px;
    }
  }
  @media (min-width: 1024px) {
    padding: 60px;
    height: 450px;

    .projectName {
      font-size: 40px;
      max-width: 500px;
    }
  }
`;
