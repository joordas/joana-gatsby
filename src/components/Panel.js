import React, { Component } from "react";
import Link from "gatsby-link";
import styled from "styled-components";

import { colors } from "../variables";

const PanelWrapper = styled.div`
  width: 97vw;
  border-radius: 2px;
  background-color: white;
  margin: 0 auto 15px;
  box-shadow: 0 0 20px 1px rgba(0, 0, 0, 0.1), 0 1px 1px 0 rgba(0, 0, 0, 0.08);
  margin-top: 0px;
  padding: ${props => props.padding};
`;

const PanelTitle = styled.h2`
  text-align: center;
  a {
    color: ${colors.darkRed};
    text-decoration: none;
    font-family: "Lato";
    font-weight: 300;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const PanelContentContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
class Panel extends Component {
  render() {
    const panelTitle = this.props.title ? (
      <PanelTitle>
        <Link to={this.props.to}>{this.props.title}</Link>
      </PanelTitle>
    ) : null;
    return (
      <PanelWrapper padding={this.props.padding}>
        {panelTitle}
        <PanelContentContainer>{this.props.children}</PanelContentContainer>
      </PanelWrapper>
    );
  }
}

export default Panel;
