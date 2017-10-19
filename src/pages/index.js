import React from "react";
import Banner from "../components/Banner";
import Button from "../components/Button";
import Panel from "../components/Panel";

export default () => (
  <div>
    <Banner />
    <Panel to="/blog" title="Blog" />
    <Panel />
  </div>
);
