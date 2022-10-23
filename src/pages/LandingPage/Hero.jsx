import React, { useState, useEffect } from "react";
import herogif from "../../assets/herogif.gif";
import styled from "styled-components";
import { heroSentence } from "../../data/personalData";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const Hero = () => {
  var charArrHeroSentence = heroSentence.split("");
  const navDelay = 1000;
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), navDelay);
    return () => clearTimeout(timeout);
  }, []);

  const one = <img className="hero-gif" src={herogif} alt="" />;
  const two = (
    <div className="hero-text">
      {charArrHeroSentence.map((char, index) => {
        return <span key={index}>{char}</span>;
      })}
    </div>
  );

  const three = (
    <div className="subtext">
      Currently at{" "}
      <a href="https://www.grab.com/sg/" target="_blank" rel="noreferrer">
        Grab.
      </a>
    </div>
  );

  const items = [one, two, three];

  return (
    <StyledHeroSection>
      <TransitionGroup component={null}>
        {isMounted &&
          items.map((item, i) => (
            <CSSTransition key={i} classNames="fadeup" timeout={2000}>
              <div style={{ transitionDelay: `${(i + 1) * 200 + 400}ms` }}>
                {item}
              </div>
            </CSSTransition>
          ))}
      </TransitionGroup>
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

  .subtext {
    font-size: 28px;
    margin-top: 40px;
    margin-left: auto;
    margin-right: auto;
  }

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
    color: var(--purple);
    text-align: center;
    font-size: clamp(36px, 5.4vw, 62px);
    margin-top: 48px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 0;

    display: block;
    max-width: 80%;
    font-weight: 800;
    line-height: 120%;
    letter-spacing: -2px;
  }

  @media (max-width: 600px) {
    .hero-text {
      width: 95%;
    }
  }

  @media (max-width: 432px) {
    padding-bottom: 10vh;

    .hero-text {
      max-width: 90%;
      text-align: left;
    }

    .hero-gif {
      width: 90%;
      padding-top: 24px;
      margin-left: auto;
      margin-right: auto;
    }

    .scroll-down {
      display: none;
    }

    .subtext {
      font-size: 20px;
      text-align: left;
      width: 90%;
    }
  }
`;

export default Hero;
