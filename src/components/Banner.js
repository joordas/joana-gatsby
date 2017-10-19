import React from "react";
import { colors, rulers } from "../variables";
import Button from "./Button";
import styled from "styled-components";

const BannerWrapper = styled.div`
  max-width: 50vw;
  margin-bottom: 40px;
`;

const Banner = () => (
  <BannerWrapper className="index--header" style={rulers}>
    <h1
      style={{
        fontWeight: "400",
        fontSize: "3em",
        color: colors.darkRed,
        maxWidth: "40vw",
        lineHeight: 1.5
      }}
    >
      Wada & Araujo Advogadas
    </h1>
    <Button to="/" buttonText="Entre em contato" uppercase />
  </BannerWrapper>
);

export default Banner;
