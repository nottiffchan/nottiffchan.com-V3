import React from "react";
import styled from "styled-components";
import Lottie from "lottie-react";
import bouncingShapesLoader from "../assets/bouncingShapesLoader.json";

const LoadingPage = () => {
  return (
    <StyledLoadingPage>
      <Lottie className="lottie" animationData={bouncingShapesLoader} />
    </StyledLoadingPage>
  );
};

export default LoadingPage;

const StyledLoadingPage = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: var(--bg-color);
  display: flex;
  align-items: center;
  justify-content: center;

  .lottie {
    width: 15%;
    height: auto;
    max-width: 220px;
  }

  @media (max-width: 768px) {
    .lottie {
      width: 25%;
    }
  }
`;
