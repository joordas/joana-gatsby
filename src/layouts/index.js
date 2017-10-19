import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import Helmet from "react-helmet";
import { colors, rulers } from "../variables";
import Header from "../components/Header";

import "./index.css";
// import './body.css'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Wada & Araujo Advogadas"
      meta={[
        { name: "description", content: "Sample" },
        { name: "keywords", content: "sample, something" }
      ]}
    />
    <Header />
    {children()}
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
