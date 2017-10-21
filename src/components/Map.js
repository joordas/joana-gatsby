import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import styled from "styled-components";
import Marker from "react-icons/lib/md/location-on";
import { colors } from "../variables";

const MapContainer = styled.div`
  height: 100%;
  flex: 1;
  border-radius: 10px;
`;

class Map extends Component {
  static defaultProps = {
    center: { lat: -22.9094569, lng: -43.17707059999998 },
    zoom: 16
  };
  render() {
    return (
      <MapContainer>
        <GoogleMapReact
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <Marker
            size={40}
            lat={this.props.center.lat}
            lng={this.props.center.lng}
            color={colors.red}
          />
        </GoogleMapReact>
      </MapContainer>
    );
  }
}

export default Map;
