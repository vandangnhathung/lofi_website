import React from "react";
import styled from "styled-components";
const ControlFieldStyles = styled.div`
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  left: calc(99% - ${(props) => props.controlBoardWidth}px);
  display: inline-block;
  border-radius: 12px;
  background-color: #070707;
  z-index: 999;
`;
const ControlField = ({ controlBoardWidth, children }) => {
  return (
    <ControlFieldStyles controlBoardWidth={controlBoardWidth}>
      {children}
    </ControlFieldStyles>
  );
};

export default ControlField;
