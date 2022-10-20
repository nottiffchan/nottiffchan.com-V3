import React, { useEffect, useRef, useState } from "react";
import logo from "../assets/logo.svg";
import styled, { keyframes, css } from "styled-components";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { navLinks } from "../data/personalData";
import useScrollDirection from "../hooks/useScrollDirection";
import Button from "./Button";
import WaveLink from "./WaveLink";
import PropTypes from "prop-types";

const Navbar = () => {
  const scrollDirection = useScrollDirection("down");
  const [scrolledToTop, setScrolledToTop] = useState(true);

  const pathname = window.location.pathname;
  const isHome = pathname === "/";
  const [isMounted, setIsMounted] = useState(!isHome);

  const timeout = 0;
  const fadeClass = isHome ? "fade" : "";
  const fadeDownClass = isHome ? "fadedown" : "";

  const resumeButtonRef = useRef(null);
  const logoRef = useRef(null);
  const numNavLinks = navLinks.length;

  const handleScroll = () => {
    setScrolledToTop(window.pageYOffset < 50);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsMounted(true);
    }, 100);

    window.addEventListener("scroll", handleScroll);
    return () => {
      clearTimeout(timeout);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function NavLinkListItem({ url, name, i }) {
    var nodeRef = useRef(null);
    return (
      <CSSTransition
        in={isMounted}
        timeout={500}
        classNames={fadeDownClass}
        nodeRef={nodeRef}
      >
        <div ref={nodeRef} style={{ transitionDelay: `${i * 100}ms` }}>
          <li className="link">
            <WaveLink to={url}>{name}</WaveLink>
          </li>
        </div>
      </CSSTransition>
    );
  }

  NavLinkListItem.propTypes = {
    url: PropTypes.string,
    name: PropTypes.string,
    i: PropTypes.number,
  };

  const ResumeButton = (
    <a href="https://read.cv/tiffchan" target="_blank" rel="noreferrer">
      <Button variant="secondary">view resume</Button>
    </a>
  );

  return (
    <StyledHeader
      scrollDirection={scrollDirection}
      scrolledToTop={scrolledToTop}
    >
      <TransitionGroup component={null}>
        {isMounted && (
          <CSSTransition
            in={isMounted}
            nodeRef={logoRef}
            classNames={fadeClass}
            timeout={timeout}
          >
            <div ref={logoRef}>
              <WaveLink to="/">
                <img className="logo" src={logo} alt="logo" />
              </WaveLink>
            </div>
          </CSSTransition>
        )}
      </TransitionGroup>

      <StyledLinks>
        <ol>
          <TransitionGroup component={null}>
            {isMounted &&
              navLinks &&
              navLinks.map(({ url, name }, i) => (
                <NavLinkListItem key={i} url={url} name={name} i={i} />
              ))}
          </TransitionGroup>
        </ol>

        <TransitionGroup component={null}>
          {isMounted && navLinks && (
            <CSSTransition
              classNames={fadeDownClass}
              timeout={timeout}
              nodeRef={resumeButtonRef}
            >
              <div
                ref={resumeButtonRef}
                style={{
                  transitionDelay: `${numNavLinks * 100}ms`,
                }}
              >
                {ResumeButton}
              </div>
            </CSSTransition>
          )}
        </TransitionGroup>
      </StyledLinks>
    </StyledHeader>
  );
};

export default Navbar;

const spin = keyframes`
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(359deg);
    }
`;

const StyledHeader = styled.nav`
  .fadedown-enter {
    opacity: 0.01;
    transform: translateY(-20px);
    transition: opacity 300ms var(--easing), transform 300ms var(--easing);
  }

  .fadedown-enter-active {
    opacity: 1;
    transform: translateY(0px);
    transition: opacity 300ms var(--easing), transform 300ms var(--easing);
  }

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
