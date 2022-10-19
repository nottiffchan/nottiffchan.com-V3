import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import styled, { keyframes, css } from "styled-components";
import gsap from "gsap";
import useScrollDirection from "../hooks/useScrollDirection";
import Button from "./Button";

const Navbar = () => {
  const scrollDirection = useScrollDirection("down");
  const [scrolledToTop, setScrolledToTop] = useState(true);

  let logoRef = useRef();
  let navLinkOne = useRef(null);
  let navLinkTwo = useRef(null);
  let navLinkThree = useRef(null);
  let navLinkFour = useRef(null);
  let navItemsRef = useRef();

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
      {/* <AniLink paintDrip hex="#5F3962" to="/"> */}
      <a href="/">
        <Logo ref={logoRef}>
          <img src={logo} alt="logo" />
        </Logo>
      </a>
      {/* </AniLink> */}
      <StyledLinks>
        <ol ref={navItemsRef}>
          <li>
            <Link ref={navLinkOne} key="home" className="link" to="/">
              home
            </Link>
          </li>
          <li>
            <Link ref={navLinkTwo} key="about" className="link" to="/about">
              about
            </Link>
          </li>
          <li>
            <Link
              ref={navLinkThree}
              key="projects"
              className="link"
              to="/projects"
            >
              projects
            </Link>
          </li>
        </ol>
        <Button
          ref={navLinkFour}
          onClick={() => {
            window.open("https://read.cv/tiffchan");
          }}
          variant="secondary"
        >
          view resume
        </Button>
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

    .link {
      display: inline-block;
      text-align: center;
      padding: 0 1rem;
      text-decoration: none;

      font-weight: 600;
      margin-right: 11px;
      color: var(--purple);
      transition: var(--transition);
      font-size: var(--text-xs);
      cursor: none;
    }

    .link:hover {
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

const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  height: 24px;
  margin-left: 8px;

  img {
    height: 24px;
  }

  &:hover {
    animation: ${spin} 300ms linear;
    background: var(--yellow);
  }
`;
