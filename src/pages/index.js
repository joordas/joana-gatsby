import React from "react";
import Banner from "../components/Banner";
import Panel from "../components/Panel";
import styled from "styled-components";
import MapContainer from "../components/MapContainer";

const MapDiv = styled.div`
  flex: 0.6;
  background-color: blue;
`;
const MapInfoDiv = styled.div`
  flex: 0.4;
  background-color: green;
`;

export default () => (
  <div>
    <Banner />
    <Panel>
      <MapInfoDiv>
        <p>hey</p>
      </MapInfoDiv>
      <MapDiv>{/* <MapContainer /> */}</MapDiv>
    </Panel>
    <Panel to="/blog" title="Blog" padding="20px 30px" />
  </div>
);
