import React from "react";
import Link from "gatsby-link";
import { colors } from "../variables";
import styled from "styled-components";

const Logo = styled.h1`
  margin: 0;
  a {
    color: ${colors.darkRed};
    text-decoration: none;
  }
`;

const HeaderWrapper = styled.div`
  background-color: transparent;
  margin-bottom: 1.45rem;
  padding: 20px 20px;
  display: flex;
`;

const HeaderList = styled.ul`
  list-style: none;
  display: flex;
  padding-top: 7px;
  align-items: center;
  justify-content: space-between;
`;

const Li = styled.li`
  margin-bottom: 0;
  padding: 0 10px;
  a {
    transition-duration: 0.3s;
    color: ${colors.red};
    text-decoration: none;
    font-size: 0.9em;
    padding: 10px 20px;
    background-color: #f8dede;
    border-radius: 4px;
  }
  &:hover a {
    background-color: #f3d1d1;
  }
  a.selected {
    background-color: #f3d1d1;
    color: ${colors.darkRed};
  }
`;

const Header = () => (
  <HeaderWrapper>
    <Logo>
      <Link to="/">W&A</Link>
    </Logo>
    <HeaderList>
      <Li>
        <Link activeClassName="selected" exact to="/">
          Home
        </Link>
      </Li>
      <Li>
        <Link activeClassName="selected" to="/page-2">
          Advogadas
        </Link>
      </Li>
      <Li>
        <Link to="/">Areas de atuação</Link>
      </Li>
      <Li>
        <Link to="/">Contato</Link>
      </Li>
    </HeaderList>
  </HeaderWrapper>
);

export default Header;
