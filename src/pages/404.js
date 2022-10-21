import React from "react";
import sadGirl from "../assets/sadgirl.png";
import WaveLink from "../components/WaveLink";
import Button from "../components/Button";

const mainStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  height: "100vh",
};

const PageNotFound = () => {
  return (
    <main style={mainStyle}>
      <img src={sadGirl} style={{ width: "180px" }} alt="A sad girl" />
      <h1 className="purple-font">Oops...</h1>
      <p>{"This page doesn't exist."}</p>
      <WaveLink to="/">
        <Button variant="secondary">Go back</Button>
      </WaveLink>
    </main>
  );
};

export default PageNotFound;
