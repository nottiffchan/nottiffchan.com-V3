import React from "react";
import styled from "styled-components";
import useWindowSize from "../hooks/useWindowSize";

const Footer = () => {
  const width = useWindowSize().width;

  return (
    <FooterWrap
      style={{
        backgroundColor: width > 1200 ? "none" : "var(--brown)",
      }}
    >
      <StyledFooter>
        <div></div>
        <p className="boldtext">
          thanks for visiting!
          <br /> check out my
          <a
            className="link"
            href="https://read.cv/tiffchan"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            resume
          </a>{" "}
          <br />
          or say hi on{" "}
          <a
            className="link"
            href="https://www.linkedin.com/in/nottiffchan/"
            target="_blank"
            rel="noreferrer"
          >
            linkedin
          </a>{" "}
          or
          <a className="link" href="mailto:nottiffchan@gmail.com">
            {" "}
            email
          </a>
          !
        </p>
        <a
          href="https://github.com/nottiffchan/nottiffchan.com-V3"
          className="smalltext"
        >
          © Designed & developed with 🤍 by Tiffany Chan
        </a>
      </StyledFooter>
    </FooterWrap>
  );
};

export default Footer;

const FooterWrap = styled.section`
  width: 100%;
  height: 100vh;
  padding: 0;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
`;

const StyledFooter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  align-items: center;
  max-width: 1200px;
  padding: 0 40px;
  margin: auto;

  .boldtext {
    color: var(--bg-color);
    font-size: 70px;
    font-weight: 800;
    line-height: 180%;
    width: 90%;
  }
  .link {
    text-decoration: none;
    color: var(--brown);
    transition: var(--transition);
    text-shadow: -1px -1px 0 var(--bg-color), 1px -1px 0 var(--bg-color),
      -1px 1px 0 var(--bg-color), 1px 1px 0 var(--bg-color);
  }
  .link:hover {
    color: var(--bg-color);
    text-shadow: none;
  }
  .smalltext {
    color: var(--bg-color);
    opacity: 0.65;
    transition: var(--transition);
    font-size: 16px;
    text-decoration: none;
    padding-bottom: 20px;
  }
  .smalltext:hover {
    opacity: 1;
  }

  @media (max-width: 768px) {
    .boldtext {
      font-size: 60px;
    }
  }
  @media (max-width: 550px) {
    .boldtext {
      font-size: 50px;
    }
    .smalltext {
      font-size: 15px;
    }
  }
`;
