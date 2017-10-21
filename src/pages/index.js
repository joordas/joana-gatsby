import React from "react";
import Banner from "../components/Banner";
import Panel from "../components/Panel";
import styled from "styled-components";
import Map from "../components/Map";
import { colors } from "../variables";

const MapDiv = styled.div`
  flex: 0.6;
  border-radius: 10px;
`;
const MapInfoDiv = styled.div`
  flex: 0.4;
  height: 100%;
  min-height: 400px;
  padding: 30px;
  h2 {
    color: ${colors.darkGrey};
    text-transform: uppercase;
    letter-spacing: 5px;
    font-family: "Lato";
    font-weight: 700;
  }
  p {
    font-weight: 200;
    font-size: 1em;
    margin-bottom: 0.125rem;
    color: ${colors.grey};
    &.bigger {
      font-size: 1.2em;
    }
  }
`;

export default () => (
  <div>
    <Banner />
    <Panel>
      <MapInfoDiv>
        <h2>O Escritório</h2>
        <p className="bigger">Av. Treze de maio, n 13</p>
        <p> Sala 1916</p>
        <p>Centro, Rio de Janeiro, RJ </p>
        <p>CEP 20031-007</p>
        <p>
          <strong>(21)96919-6777</strong>
        </p>
      </MapInfoDiv>
      <MapDiv>
        <Map />
      </MapDiv>
    </Panel>
    <Panel to="/blog" title="Blog" padding="20px 30px" />
  </div>
);
