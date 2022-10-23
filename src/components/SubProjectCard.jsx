import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import WaveLink from "./WaveLink";

const SubProjectCard = ({
  catalogImage,
  projectName,
  description,
  eyebrow,
  projectPathname,
}) => {
  return (
    <StyledSubProjectCard>
      <WaveLink to={"/projects/" + projectPathname}>
        <img className="image" src={catalogImage} alt="" />
      </WaveLink>
      <div className="text">
        <p className="eyebrow">{eyebrow}</p>
        <h3 className="projectName">{projectName}</h3>
        <p className="description">{description}</p>
      </div>
    </StyledSubProjectCard>
  );
};

export default SubProjectCard;

SubProjectCard.propTypes = {
  catalogImage: PropTypes.string,
  projectName: PropTypes.string,
  description: PropTypes.string,
  eyebrow: PropTypes.string,
  textCol: PropTypes.string,
  projectPathname: PropTypes.string,
};

const StyledSubProjectCard = styled.div`
  transition: transform 0.4s;

  .image {
    width: 100%;
    margin-bottom: 32px;
    transition: transform 0.4s;
  }

  :hover .image {
    transform: scale(0.965);
  }

  .text {
    transition: transform 0.4s;
  }

  :hover .text {
    transform: scale(0.955);
  }

  .eyebrow {
    color: #57696a;
    font-size: 14px;
    margin-bottom: 12px;
    margin-top: 0;
  }

  .projectName {
    transition: transform 0.4s;
    color: var(--black);
    display: block;
    max-width: 300px;
    position: relative;
    font-size: 24px;
    line-height: 1.2;
    font-weight: bold;
    margin-top: 0;
    margin-bottom: 12px;
  }

  .description {
    margin: 0;
    color: #57696a;
    line-height: 1.5;
  }

  @media (max-width: 500px) {
    padding: 20px;
    .description {
      font-size: 14px;
    }
  }
`;
