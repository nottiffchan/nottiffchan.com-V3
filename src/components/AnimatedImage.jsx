import React, { useEffect, useState } from "react";
import hoverEffect from "hover-effect";
import overlay from "../assets/aboutpage/animationOverlay.jpeg";
import styled from "styled-components";
import PropTypes from "prop-types";

const AnimatedImage = React.forwardRef((props, ref) => {
  const [hoverDistort, setHoverDistort] = useState("");
  console.log("hoverDistort: ", hoverDistort);

  useEffect(() => {
    setHoverDistort(
      new hoverEffect({
        parent: ref.current,
        intensity: 0.3,
        speedIn: 2.1,
        speedOut: 2.1,
        image1: props.before,
        image2: props.after,
        displacementImage: overlay,
      })
    );
  }, [props.after, props.before, ref]);

  return (
    <StyledAnimatedImage
      ref={ref}
      className="hi"
      style={{
        width: props.width ? props.width : "100%",
        height: props.height ? props.height : "100%",
      }}
    ></StyledAnimatedImage>
  );
});

AnimatedImage.displayName = "AnimatedImage";

export default AnimatedImage;

AnimatedImage.propTypes = {
  props: PropTypes.node,
  before: PropTypes.node,
  after: PropTypes.node,
  width: PropTypes.node,
  height: PropTypes.node,
};

const StyledAnimatedImage = styled.div`
  canvas:nth-child(n + 2) {
    display: none;
  }
`;
