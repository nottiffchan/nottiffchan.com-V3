import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const ProjectCard = ({
  catalogImage,
  projectName,
  title,
  description,
  textCol,
}) => {
  return (
    <StyledProjectCard textCol={textCol}>
      <div className="project-image-wrap">
        <img src={catalogImage} alt="" />
      </div>
      <div className="text">
        <p>{projectName}</p>
        <h2 className="title">{title}</h2>
        <p>{description}</p>
      </div>
    </StyledProjectCard>
  );
};

ProjectCard.propTypes = {
  catalogImage: PropTypes.object,
  projectName: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  textCol: PropTypes.string,
};

export default ProjectCard;

const StyledProjectCard = styled.a`
  display: block;
  height: 355px;
  padding: 35px 30px;
  position: relative;
  transition: transform 0.4s;

  .text {
    position: relative;
    transition: transform 0.4s;
  }

  :hover {
    transform: scale(0.965);
  }

  :hover .text {
    transform: scale(0.955);
  }

  .title {
    transition: transform 0.4s;
    color: ${(props) => (props.textCol ? props.textCol : "var(--purple)")};
    display: block;
    max-width: 300px;
    margin-bottom: 16px;
    margin-top: 0px;
    position: relative;
    font-size: 26px;
    line-height: 1.2;
    font-weight: 600;
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
    transition: transform 0.3s, -webkit-transform 0.3s, -moz-transform 0.3s,
      -o-transform 0.3s;
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

    .title {
      font-size: 30px;
      margin-bottom: 24px;
    }
  }
  @media (min-width: 1024px) {
    padding: 60px;
    height: 460px;

    .title {
      font-size: 48px;
      max-width: 500px;
    }
  }
  @media (min-width: 1200px) {
    padding: 72px;
    height: 520px;

    .title {
      font-size: 50px;
      max-width: 570px;
      margin-bottom: 30px;
    }
  }
  @media (min-width: 1600px) {
    padding: 120px;
    height: 732px;

    .title {
      font-size: 60px;
      max-width: 620px;
      margin-bottom: 40px;
    }
  }
`;
