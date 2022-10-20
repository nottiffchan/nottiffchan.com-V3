import React from "react";
import herogif from "../../assets/herogif.gif";
import styled from "styled-components";
import { heroSentence } from "../../data/personalData";

const Hero = () => {
  var charArrHeroSentence = heroSentence.split("");

  return (
    <StyledHeroSection>
      <img className="hero-gif" src={herogif} alt="" />

      <StyledHeroText>
        <div className="hero-text">
          {charArrHeroSentence.map((char, index) => {
            return <span key={index}>{char}</span>;
          })}
        </div>
        <div className="subtext">
          Currently at{" "}
          <a href="https://www.grab.com/sg/" target="_blank" rel="noreferrer">
            Grab
          </a>
          .
        </div>
      </StyledHeroText>

      <p className="scroll-down">SCROLL DOWN</p>
    </StyledHeroSection>
  );
};

const StyledHeroSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: 100%;
  max-width: 1200px;
  padding: 0;

  .scroll-down {
    position: absolute;
    top: 92vh;
    left: 28px;
    font-size: 16px;
    color: var(--grey);
    display: block;
  }

  .hero-gif {
    width: 412px;
    pointer-events: none;
    user-select: none;
  }

  @media (max-width: 432px) {
    padding-bottom: 10vh;

    .hero-gif {
      width: 90%;
      padding-top: 24px;
      margin-left: auto;
      margin-right: auto;
    }

    .scroll-down {
      display: none;
    }
  }
`;

const StyledHeroText = styled.div`
  color: var(--purple);
  margin: 0;
  text-align: center;

  span {
    transition: color 2s;
    transition-delay: 1.5s;
  }

  span:nth-child(1n):hover {
    color: var(--pink);
  }

  span:nth-child(2n):hover {
    color: var(--gold);
  }

  span:nth-child(3n):hover {
    color: var(--pink-dark);
  }

  span:hover {
    transition: color 0s;
  }

  .hero-text {
    font-size: clamp(36px, 5.4vw, 62px);
    margin-top: 48px;
    display: block;
    max-width: 80%;
    margin-left: auto;
    margin-right: auto;
    font-weight: 800;
    line-height: 120%;
  }

  .subtext {
    font-size: 28px;
    margin-top: 40px;
    margin-left: auto;
    margin-right: auto;
  }

  @media (max-width: 600px) {
    width: 95%;
  }

  @media (max-width: 400px) {
    .hero-text {
      max-width: 90%;
      text-align: left;
    }

    .subtext {
      font-size: 20px;
      text-align: left;
      max-width: 90%;
    }
  }
`;

export default Hero;
