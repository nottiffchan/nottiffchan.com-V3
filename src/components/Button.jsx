import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Button = ({ children, variant = "primary", onClick, ...props }) => {
  return (
    <StyledButton className={`${variant}`} onClick={onClick} {...props}>
      {children}
    </StyledButton>
  );
};

export default Button;

Button.propTypes = {
  variant: PropTypes.string,
  children: PropTypes.node,
  onClick: PropTypes.func,
};

const StyledButton = styled.button`
  font-weight: bold;
  border-radius: 54px;
  padding: 0 22px;
  transition: var(--transition);
  border: none;
  font-size: var(--text-xs);
  min-height: 54px;

  &.primary {
    background-color: var(--purple);
    color: white;
    box-shadow: 2px 3px #896c8b;
  }

  &.primary:hover {
    background-color: #896c8b;
    box-shadow: none;
  }

  &.secondary {
    color: var(--purple);
    background-color: #eedfeb;
  }
  &.secondary:hover {
    background-color: var(--purple);
    color: var(--bg-color);
  }
`;
