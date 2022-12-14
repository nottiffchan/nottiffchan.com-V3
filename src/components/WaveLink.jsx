import React from "react";
import { WavyLink } from "react-wavy-transitions";
import PropTypes from "prop-types";

const WaveLink = ({ color, children, ...props }) => {
  var colorsArr = ["var(--purple)", "var(--pink)", "var(--gold)"];
  var randomColor = colorsArr[Math.floor(Math.random() * colorsArr.length)];

  var directionArr = ["up", "down"];
  var randomDirection =
    directionArr[Math.floor(Math.random() * directionArr.length)];

  return (
    <WavyLink
      color={color ? color : randomColor}
      direction={randomDirection}
      {...props}
    >
      {children}
    </WavyLink>
  );
};

export default WaveLink;

WaveLink.propTypes = {
  random: PropTypes.bool,
  color: PropTypes.string,
  children: PropTypes.node,
};
