import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import styled, { keyframes, css } from "styled-components";
import gsap from "gsap";
import useScrollDirection from "../hooks/useScrollDirection";
import Button from "./Button";
import WaveLink from "./WaveLink";

const Navbar = () => {
  const scrollDirection = useScrollDirection("down");
  const [scrolledToTop, setScrolledToTop] = useState(true);

  const handleScroll = () => {
    setScrolledToTop(window.pageYOffset < 50);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  //   useEffect(() => {
  //     const animation = gsap
  //       .timeline()
  //       .from(logoRef.current, {
  //         y: -50,
  //         delay: 0.3,
  //         duration: 0.3,
  //         opacity: 0,
  //         ease: "Power3.easeOut",
  //       })
  //       .from(navLinkOne.current, {
  //         y: -50,
  //         opacity: 0,
  //         duration: 0.1,
  //         ease: "Power3.easeOut",
  //       })
  //       .from(navLinkTwo.current, {
  //         y: -50,
  //         opacity: 0,
  //         duration: 0.1,
  //         ease: "Power3.easeOut",
  //       })
  //       .from(navLinkThree.current, {
  //         y: -50,
  //         opacity: 0,
  //         duration: 0.1,
  //         ease: "Power3.easeOut",
  //       })
  //       .from(navLinkFour.current, {
  //         y: -50,
  //         opacity: 0,
  //         duration: 0.1,
  //         ease: "Power3.easeOut",
  //       });

  //     return () => {
  //       animation.progress(0).kill();
  //     };
  //   }, []);

  return (
    <StyledHeader
      scrollDirection={scrollDirection}
      scrolledToTop={scrolledToTop}
    >
      <WaveLink to="/">
        <img className="logo" src={logo} alt="logo" />
      </WaveLink>
      <StyledLinks>
        <ol>
          <li className="link">
            <WaveLink key="home" to="/">
              home
            </WaveLink>
          </li>
          <li className="link">
            <WaveLink key="about" to="/about">
              about
            </WaveLink>
          </li>
          <li className="link">
            <WaveLink key="projects" to="/projects">
              projects
            </WaveLink>
          </li>
        </ol>
        <a href="https://read.cv/tiffchan" target="_blank" rel="noreferrer">
          <Button variant="secondary">view resume</Button>
        </a>
      </StyledLinks>
    </StyledHeader>
  );
};

export default Navbar;

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  top: 0;
  position: fixed;
  z-index: 11;
  padding: 0px 20px;
  width: calc(100% - 40px);
  height: 100px;
  filter: none !important;
  pointer-events: auto !important;
  user-select: auto !important;
  backdrop-filter: blur(1px);
  transition: var(--transition);
  color: var(--purple);
  background-color: var(--bg-color);

  ${(props) =>
    props.scrollDirection === "up" &&
    !props.scrolledToTop &&
    css`
      height: 70px;
      transform: translateY(0px);
    `};

  ${(props) =>
    props.scrollDirection === "down" &&
    !props.scrolledToTop &&
    css`
      height: 70px;
      transform: translateY(-70px);
    `};

  .logo {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 24px;
    margin-left: 8px;
  }

  .logo:hover {
    animation: ${spin} 300ms linear;
  }
`;

const StyledLinks = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }

  ol {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0;
    margin: 0;
    list-style: none;

    .link .react-wavy-transitions__wavy-link {
      display: inline-block;
      text-align: center;
      padding: 0 1rem;
      text-decoration: none;

      font-weight: 600;
      margin-right: 11px;
      color: var(--purple);
      transition: var(--transition);
      font-size: var(--text-xs);
    }

    .link .react-wavy-transitions__wavy-link:hover {
      color: var(--pink);
    }
  }
`;

const spin = keyframes`
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(359deg);
    }
`;
