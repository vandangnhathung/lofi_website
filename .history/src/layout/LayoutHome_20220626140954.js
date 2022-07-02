import React, { Children } from "react";
import styled from "styled-components";

const LayoutHome = (props) => {
  const { children } = props;
  return <div className="container">{children}</div>;
};

export default LayoutHome;
