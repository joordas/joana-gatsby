import React, { Component } from "react";
import Link from "gatsby-link";
import styled from "styled-components";

import { colors } from "../variables";

const PanelWrapper = styled.div`
  height: 500px;
  width: 97vw;
  border-radius: 3px;
  background-color: white;
  margin: 0 auto 15px;
  box-shadow: 0 0 20px 1px rgba(0, 0, 0, 0.1), 0 1px 1px 0 rgba(0, 0, 0, 0.08);
  margin-top: 0px;
  padding: 30px 20px;
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

const PanelContentContainer = styled.div``;

class Panel extends Component {
  render() {
    const panelTitle = this.props.title ? (
      <PanelTitle>
        <Link to={this.props.to}>{this.props.title}</Link>
      </PanelTitle>
    ) : null;
    return (
      <PanelWrapper>
        {panelTitle}
        <PanelContentContainer>{this.props.children}</PanelContentContainer>
      </PanelWrapper>
    );
  }
}

export default Panel;