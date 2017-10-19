import React from "react";
import Link from "gatsby-link";
import styled from "styled-components";
import { colors } from "../variables";

const ButtonContainer = styled.div`
  padding: 8px 12px;
  border-radius: 4px;
  transition-duration: 0.2s;
  color: ${props => props.color || "white"};
  background-color: ${props => props.backgroundColor || colors.red};
  display: inline-block;
  text-transform: ${props => (props.uppercase ? "uppercase" : "none")};
  letter-spacing: ${props => (props.uppercase ? "4px" : "inherit")};
  &:hover {
    transform: translateY(-2px);
    box-shadow: 1px 2px 8px rgba(0, 0, 0, 0.23);
  }
`;

const Button = props => (
  <Link to={props.to} className="no-decoration">
    <ButtonContainer
      backgroundColor={props.backgroundColor}
      color={props.color}
      uppercase={props.uppercase}
    >
      {props.buttonText}
    </ButtonContainer>
  </Link>
);

export default Button;
