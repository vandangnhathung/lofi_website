import React, { Children } from "react";
import styled from "styled-components";

const LayoutHomeStyles = styled.div``;
const LayoutHome = ({ children }) => {
  return (
    <LayoutHomeStyles>
      <div className="container">{children}</div>
    </LayoutHomeStyles>
  );
};

export default LayoutHome;
